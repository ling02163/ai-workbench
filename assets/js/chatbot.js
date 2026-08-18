/* 玲姐知识库 AI 客服机器人 — 零依赖，自动挂载
   能力：在前端对站内 26 篇 KB 做中文检索，把最相关内容以对话气泡返回；
        支持语音输入（Web Speech API）与答案语音播报。无需任何 API / 后端。 */
(function () {
  "use strict";

  var KB_URL = "assets/js/kb-index.json";

  // 同义词扩展，提升中文召回
  var SYN = {
    "汇报": ["周报", "月报", "述职", "日报", "总结", "复盘"],
    "工具": ["AI", "软件", "自动化", "脚本", "飞书", "表格", "应用"],
    "效率": ["时间", "待办", "节奏", "模板", "流程", "习惯"],
    "客服": ["售后", "话术", "沟通", "应答", "客户", "服务"],
    "数据": ["分析", "报表", "图表", "指标", "看板", "统计"],
    "团队": ["管理", "带人", "激励", "绩效", "下属", "带教"],
    "财务": ["报销", "发票", "对账", "凭证", "会计"],
    "提示词": ["prompt", "话术", "指令"],
    "文案": ["写作", "标题", "朋友圈", "宣传", "销售"]
  };

  var data = [];
  var kbReady = false;
  var recog = null, recogOn = false;
  var synth = window.speechSynthesis || null;

  function el(t, c, h) { var e = document.createElement(t); if (c) e.className = c; if (h != null) e.innerHTML = h; return e; }

  // ---------- 检索 ----------
  function tokenize(q) {
    q = (q || "").toLowerCase();
    var out = [];
    q.replace(/[a-z0-9]+/g, function (m) { out.push(m); return m; });
    var cn = q.replace(/[^一-龥]/g, "");
    if (cn.length <= 1) { if (cn) out.push(cn); }
    else { for (var i = 0; i < cn.length - 1; i++) out.push(cn.substr(i, 2)); }
    return out;
  }

  function expand(toks) {
    var out = toks.slice();
    toks.forEach(function (t) {
      for (var k in SYN) {
        if (k.indexOf(t) >= 0 || t.indexOf(k) >= 0) {
          SYN[k].forEach(function (s) { if (out.indexOf(s) < 0) out.push(s); });
        }
      }
    });
    return out;
  }

  function score(a, toks) {
    var s = 0;
    var title = (a.title || "").toLowerCase();
    var cat = (a.category || "").toLowerCase();
    var tag = (a.tag || "").toLowerCase();
    var sum = (a.summary || "").toLowerCase();
    var text = (a.text || "").toLowerCase();
    toks.forEach(function (t) {
      if (title.indexOf(t) >= 0) s += 6;
      if (cat.indexOf(t) >= 0) s += 4;
      if (tag.indexOf(t) >= 0) s += 4;
      if (sum.indexOf(t) >= 0) s += 2;
      var i = 0, c = 0;
      while ((i = text.indexOf(t, i)) >= 0) { c++; i += t.length; }
      s += Math.min(c, 5);
    });
    return s;
  }

  function search(q) {
    var toks = expand(tokenize(q));
    if (!toks.length) return [];
    return data.map(function (a) { return { a: a, s: score(a, toks) }; })
      .filter(function (x) { return x.s > 0; })
      .sort(function (x, y) { return y.s - x.s; })
      .slice(0, 3)
      .map(function (x) { return x.a; });
  }

  // ---------- DOM ----------
  var fab, panel, msgs, input, micBtn, sendBtn, panelOpen = false;

  function bubble(who, html) {
    var m = el("div", "cb-msg " + who);
    if (who === "bot") m.appendChild(el("div", "cb-ava-sm", "玲"));
    m.appendChild(el("div", "cb-bubble", html));
    msgs.appendChild(m);
    msgs.scrollTop = msgs.scrollHeight;
    return m;
  }

  function resultCard(a) {
    var card = el("a", "cb-res");
    card.href = "kb.html?id=" + encodeURIComponent(a.slug);
    card.innerHTML =
      '<div class="cb-res-cat">' + a.category + "</div>" +
      '<div class="cb-res-t">' + a.title + "</div>" +
      '<div class="cb-res-s">' + (a.summary || "").slice(0, 52) + ((a.summary && a.summary.length > 52) ? "…" : "") + "</div>" +
      '<div class="cb-res-go">查看全文 →</div>';
    return card;
  }

  function speak(txt) {
    if (!synth) return;
    try {
      var u = new SpeechSynthesisUtterance(txt);
      u.lang = "zh-CN"; u.rate = 0.95;
      synth.cancel(); synth.speak(u);
    } catch (e) { /* ignore */ }
  }

  function botReply(q) {
    if (!kbReady) {
      bubble("bot", "知识库加载中，稍等一下下…");
      setTimeout(function () { msgs.innerHTML = ""; welcome(); botReply(q); }, 700);
      return;
    }
    var typing = el("div", "cb-msg bot");
    typing.appendChild(el("div", "cb-ava-sm", "玲"));
    typing.appendChild(el("div", "cb-bubble", '<span class="cb-typing"><i></i><i></i><i></i></span>'));
    msgs.appendChild(typing);
    msgs.scrollTop = msgs.scrollHeight;

    setTimeout(function () {
      if (typing.parentNode) msgs.removeChild(typing);
      var res = search(q);
      if (!res.length) {
        bubble("bot", "没在知识库里找到完全匹配的内容 😶‍🌫️<br>你可以换个说法，或去 <a href='kb.html' style='color:var(--purple);font-weight:700;'>知识库</a> 浏览全部 26 篇。");
        return;
      }
      var head = bubble("bot", "为你找到 <b>" + res.length + "</b> 篇相关内容 👇");
      res.forEach(function (a) { head.parentNode.appendChild(resultCard(a)); });
      speak("为你找到" + res.length + "篇相关内容：" + res.map(function (x) { return x.title; }).join("、"));
    }, 480);
  }

  function send() {
    var q = input.value.trim();
    if (!q) return;
    bubble("user", q.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
    input.value = ""; input.style.height = "auto";
    botReply(q);
  }

  function welcome() {
    bubble("bot", "嗨，我是玲姐的知识库助手 🤖<br>你可以问我任何关于 <b>AI 工具 / 沟通汇报 / 效率体系 / 技术实操</b> 的问题，我会直接从站内的 26 篇实战笔记里帮你找到答案。");
  }

  function toggle() {
    panelOpen = !panelOpen;
    panel.classList.toggle("open", panelOpen);
    fab.style.display = panelOpen ? "none" : "flex";
    if (panelOpen) setTimeout(function () { input.focus(); }, 120);
  }

  function toggleMic() {
    var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { alert("当前浏览器不支持语音输入，请用 Chrome 或 Edge 打开～"); return; }
    if (!recog) {
      recog = new SR();
      recog.lang = "zh-CN"; recog.interimResults = false; recog.maxAlternatives = 1;
      recog.onresult = function (e) { var t = e.results[0][0].transcript; input.value = t; send(); };
      recog.onend = function () { recogOn = false; micBtn.classList.remove("on"); };
      recog.onerror = function () { recogOn = false; micBtn.classList.remove("on"); };
    }
    if (recogOn) { try { recog.stop(); } catch (e) {} recogOn = false; micBtn.classList.remove("on"); }
    else { try { recog.start(); recogOn = true; micBtn.classList.add("on"); } catch (e) {} }
  }

  function build() {
    fab = el("button", "cb-fab");
    fab.setAttribute("aria-label", "打开 AI 助手");
    fab.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.6-.8L3 21l1.9-5.6A8.38 8.38 0 0 1 4 11.5 8.5 8.5 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5z"/></svg><span class="cb-dot"></span>';
    document.body.appendChild(fab);

    panel = el("div", "cb-panel");
    panel.innerHTML =
      '<div class="cb-head">' +
        '<div class="cb-ava">玲</div>' +
        '<div class="cb-t"><b>玲姐的知识库助手</b><br><span>问 AI 工具 / 汇报 / 效率，直接调取站内内容</span></div>' +
        '<div class="cb-acts"><button class="cb-clear" title="清空对话">🗑</button><button class="cb-close" title="收起">✕</button></div>' +
      "</div>" +
      '<div class="cb-msgs"></div>' +
      '<div class="cb-hint">⌨️ 回车发送 · 🎤 语音输入（Chrome / Edge 支持）</div>' +
      '<div class="cb-input">' +
        '<textarea rows="1" placeholder="想查点什么？例如：怎么写周报"></textarea>' +
        '<button class="cb-mic" title="语音输入" aria-label="语音输入">🎤</button>' +
        '<button class="cb-send" title="发送" aria-label="发送">➤</button>' +
      "</div>";
    document.body.appendChild(panel);

    msgs = panel.querySelector(".cb-msgs");
    input = panel.querySelector("textarea");
    micBtn = panel.querySelector(".cb-mic");
    sendBtn = panel.querySelector(".cb-send");

    fab.addEventListener("click", toggle);
    panel.querySelector(".cb-close").addEventListener("click", toggle);
    panel.querySelector(".cb-clear").addEventListener("click", function () { msgs.innerHTML = ""; welcome(); });
    sendBtn.addEventListener("click", send);
    input.addEventListener("keydown", function (e) { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } });
    input.addEventListener("input", function () { input.style.height = "auto"; input.style.height = Math.min(input.scrollHeight, 96) + "px"; });
    micBtn.addEventListener("click", toggleMic);

    welcome();
    loadKB();
  }

  function loadKB() {
    fetch(KB_URL).then(function (r) { return r.json(); }).then(function (j) {
      data = j; kbReady = true;
    }).catch(function () { kbReady = true; /* 失败也允许交互 */ });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build);
  else build();
})();
