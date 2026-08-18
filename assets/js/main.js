/* 玲姐 · AI 工作台 — 通用交互
   - 共享页头/页脚注入
   - 移动端导航
   - 滚动揭示动画
   零依赖，纯原生 JS */

(function () {
  "use strict";

  var NAV = [
    { href: "index.html", label: "首页" },
    { href: "kb.html", label: "知识库" },
    { href: "now.html", label: "最近在忙" },
    { href: "uses.html", label: "我的工具" },
    { href: "downloads.html", label: "资源下载" },
    { href: "about.html", label: "关于玲姐" },
    { href: "contact.html", label: "联系" }
  ];

  var path = location.pathname.split("/").pop() || "index.html";

  function navLinks(activeOnly) {
    return NAV.map(function (n) {
      var cls = n.href === path ? "active" : "";
      return '<a href="' + n.href + '" class="' + cls + '">' + n.label + "</a>";
    }).join("");
  }

  var headerHTML =
    '<header class="nav"><div class="container">' +
    '<a class="brand" href="index.html">' +
    '<span class="logo">玲</span>' +
    '<span>玲姐 · AI 工作台<small>售后 AI 实战经验沉淀</small></span>' +
    "</a>" +
    '<nav class="nav-links" id="navLinks">' +
    navLinks() +
    '<a class="btn btn-primary nav-cta" href="kb.html">进入知识库 →</a>' +
    "</nav>" +
    '<button class="nav-toggle" id="navToggle" aria-label="菜单"><span></span><span></span><span></span></button>' +
    "</div></header>";

  var footerHTML =
    '<footer class="footer"><div class="container">' +
    "<div><h4>玲姐 · AI 工作台</h4><p style=\"color:var(--ink-soft);font-size:14px;max-width:280px;\">把用 AI 的实战经验，变成同事今天就能上手的方法。</p></div>" +
    "<div><h4>导航</h4>" +
    '<a href="index.html">首页</a><a href="kb.html">知识库</a><a href="now.html">最近在忙</a><a href="uses.html">我的工具</a><a href="downloads.html">资源下载</a><a href="about.html">关于玲姐</a><a href="contact.html">联系</a>' +
    "</div>" +
    "<div><h4>知识库精选</h4>" +
    '<a href="kb.html?id=choose-tools">新手第一步 · 选对工具</a>' +
    '<a href="kb.html?id=repeat-to-tool">把重复工作变成工具</a>' +
    '<a href="kb.html?id=copy-formulas">25 个文案公式速查表</a>' +
    '<a href="kb.html?id=ai-data-analysis">数据分析四场景心法</a>' +
    "</div>" +
    '<div class="copy">© 2026 玲姐 · 售后 AI 实战经验沉淀 ｜ 内容来自内部实践经验沉淀，可自由参考使用。</div>' +
    "</div></footer>";

  function inject(id, html) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }
  inject("site-header", headerHTML);
  inject("site-footer", footerHTML);

  // 移动端菜单
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }

  // 滚动揭示
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("is-visible");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el, i) {
      el.style.transitionDelay = (i % 6) * 60 + "ms";
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // 阅读进度条（仅知识库详情页显示）
  var rbar = document.createElement("div");
  rbar.className = "reading-bar";
  document.body.appendChild(rbar);
  function updRead() {
    var body = document.querySelector(".kb-body");
    if (!body || body.style.display === "none" || body.offsetHeight === 0) { rbar.style.width = "0"; return; }
    var rect = body.getBoundingClientRect();
    var total = body.offsetHeight - window.innerHeight;
    var sc = Math.min(Math.max(-rect.top, 0), total);
    rbar.style.width = (total > 0 ? (sc / total) * 100 : 0) + "%";
  }
  window.addEventListener("scroll", updRead, { passive: true });
  window.addEventListener("resize", updRead);
  updRead();
})();
