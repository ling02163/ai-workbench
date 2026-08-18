/* 知识库列表 + 详情渲染
   依赖：kb-data.js (KNOWLEDGE_BASE)、main.js（页头页脚已注入）
   通过 ?id=slug 切换详情视图；支持分类筛选、搜索、TOC、阅读时长、相关文章 */
(function () {
  "use strict";

  var listEl = document.getElementById("kbList");
  var detailEl = document.getElementById("kbDetail");
  var featuredEl = document.getElementById("kbFeatured");
  var filtersEl = document.getElementById("kbFilters");
  var searchEl = document.getElementById("kbSearch");
  var params = new URLSearchParams(location.search);
  var id = params.get("id");
  var currentCat = "全部";

  var CATS = ["全部"];
  KNOWLEDGE_BASE.forEach(function (it) {
    if (CATS.indexOf(it.category) === -1) CATS.push(it.category);
  });

  function catColor(cat) {
    var map = {
      "售后AI工作台": "var(--cat-purple)",
      "沟通汇报": "var(--cat-peach)",
      "品牌定位": "var(--cat-teal)",
      "效率体系": "var(--cat-violet)",
      "技术实操": "var(--cat-amber)",
      "团队管理": "var(--cat-emerald)"
    };
    return map[cat] || "var(--cat-purple)";
  }

  function cardHTML(item, isFeature) {
    var cls = isFeature ? "card feature-card" : "card kb-card";
    var noHtml = isFeature ? "" : '<span class="no">' + item.no + "</span>";
    var catHtml =
      '<span class="cat-badge" style="color:' + catColor(item.category) + ';border-color:' + catColor(item.category) + '33;">' + item.category + "</span>";
    return (
      '<a class="' + cls + ' is-visible" style="--accent:' + catColor(item.category) + '" href="kb.html?id=' + item.slug + '">' +
      noHtml +
      catHtml +
      '<span class="chip">' + item.tag + "</span>" +
      "<h3>" + item.title + "</h3>" +
      "<p>" + item.summary + "</p>" +
      '<span class="more">阅读 →</span></a>'
    );
  }

  function renderFilters() {
    var counts = {};
    KNOWLEDGE_BASE.forEach(function (it) { counts[it.category] = (counts[it.category] || 0) + 1; });
    var total = KNOWLEDGE_BASE.length;
    filtersEl.innerHTML = CATS.map(function (c) {
      var active = c === currentCat ? " active" : "";
      var n = c === "全部" ? total : (counts[c] || 0);
      return '<button class="kb-filter-btn' + active + '" data-cat="' + c + '">' + c + ' <span class="cat-count">' + n + "</span></button>";
    }).join("");
    filtersEl.querySelectorAll(".kb-filter-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        currentCat = btn.getAttribute("data-cat");
        renderFilters();
        if (!id) renderList();
      });
    });
  }

  function renderFeatured() {
    if (id) { featuredEl.style.display = "none"; return; }
    var feats = KNOWLEDGE_BASE.filter(function (it) { return it.featured; }).slice(0, 3);
    if (!feats.length) { featuredEl.style.display = "none"; return; }
    featuredEl.style.display = "grid";
    featuredEl.innerHTML =
      '<div class="feat-head"><span class="eyebrow">精选</span><h2 class="section-title" style="font-size:22px;">先从这几篇看起</h2></div>' +
      feats.map(function (it) { return cardHTML(it, true); }).join("");
  }

  function renderList() {
    if (id) return;
    var f = (searchEl ? searchEl.value : "").toLowerCase();
    var items = KNOWLEDGE_BASE.filter(function (it) {
      if (currentCat !== "全部" && it.category !== currentCat) return false;
      if (!f) return true;
      return (it.title + it.summary + it.tag + it.no + it.category).toLowerCase().indexOf(f) > -1;
    });
    listEl.innerHTML =
      items.map(function (it) { return cardHTML(it, false); }).join("") ||
      '<p style="color:var(--ink-soft)">没有匹配的内容，换个关键词或分类试试。</p>';
  }

  function bindCopy(root) {
    root.querySelectorAll(".prompt-box .copy, .script-box .copy").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var txt = btn.parentElement.textContent.replace("复制", "").trim();
        if (navigator.clipboard) {
          navigator.clipboard.writeText(txt).then(function () {
            btn.textContent = "已复制";
            setTimeout(function () { btn.textContent = "复制"; }, 1500);
          });
        }
      });
    });
  }

  function readingMins(htmlStr) {
    var text = htmlStr.replace(/<[^>]+>/g, "").replace(/&[a-z]+;/g, " ");
    return Math.max(1, Math.round(text.length / 350));
  }

  function renderDetail(slug) {
    var item = KNOWLEDGE_BASE.filter(function (it) { return it.slug === slug; })[0];
    if (!item) { location.href = "kb.html"; return; }
    var idx = KNOWLEDGE_BASE.indexOf(item);
    var prev = KNOWLEDGE_BASE[idx - 1];
    var next = KNOWLEDGE_BASE[idx + 1];
    var mins = readingMins(item.html);

    document.title = item.title + " ｜ 玲姐 · AI 工作台";
    listEl.style.display = "none";
    if (featuredEl) featuredEl.style.display = "none";
    if (searchEl) searchEl.parentElement.style.display = "none";
    if (filtersEl) filtersEl.style.display = "none";
    var sub = document.querySelector(".kb-hero .section-sub");
    if (sub) sub.textContent = item.subtitle;
    detailEl.style.display = "block";
    detailEl.innerHTML =
      '<div class="kb-layout"><div class="kb-main">' +
      '<div class="breadcrumb"><a href="kb.html">知识库</a> / <span>' + item.category + " / " + item.title + "</span></div>" +
      '<div class="kb-meta"><span class="chip">' + item.tag + '</span><span class="cat-badge" style="color:' + catColor(item.category) + ';border-color:' + catColor(item.category) + '33;">' + item.category + '</span><span style="color:var(--ink-faint);font-size:14px;">第 ' + item.no + " 篇 · 约 " + mins + " 分钟读完</span></div>" +
      '<h1 class="section-title" style="font-size:clamp(28px,4vw,40px);">' + item.title + "</h1>" +
      '<p style="color:var(--ink-soft);font-size:18px;margin-top:12px;">' + item.summary + "</p>" +
      '<hr style="border:0;border-top:1px solid var(--border);margin:28px 0;">' +
      item.html +
      relatedHTML(item) +
      '<div style="text-align:center;margin:36px 0 4px;"><a class="btn btn-ghost" href="kb.html">← 返回知识库全部</a></div>' +
      '<div class="kb-nav">' +
      (prev ? '<a class="prev" href="kb.html?id=' + prev.slug + '"><div class="lbl">← 上一篇</div><div class="ttl">' + prev.title + "</div></a>" : "<span></span>") +
      (next ? '<a class="next" href="kb.html?id=' + next.slug + '"><div class="lbl">下一篇 →</div><div class="ttl">' + next.title + "</div></a>" : "<span></span>") +
      '</div></div>' +
      '<aside class="kb-aside"><nav class="kb-toc" id="tocSlot"><div class="toc-title">本文目录</div></nav></aside>' +
      '</div>';

    // 给 h2 加锚点 id 并生成 TOC
    var hs = detailEl.querySelectorAll("h2");
    if (hs.length >= 2) {
      var toc = '<nav class="kb-toc"><div class="toc-title">本文目录</div>';
      hs.forEach(function (h, i) {
        h.id = "h2-" + i;
        toc += '<a href="#h2-' + i + '">' + h.textContent + "</a>";
      });
      toc += "</nav>";
      var slot = document.getElementById("tocSlot");
      if (slot) slot.innerHTML = toc;
    }

    window.scrollTo(0, 0);
    bindCopy(detailEl);
    setTimeout(function () { window.dispatchEvent(new Event("scroll")); }, 30);
  }

  function relatedHTML(item) {
    var rel = KNOWLEDGE_BASE.filter(function (x) {
      return x.category === item.category && x.slug !== item.slug;
    }).slice(0, 3);
    if (!rel.length) return "";
    return (
      '<div class="related"><div class="related-title">相关阅读 · ' + item.category + "</div>" +
      '<div class="grid grid-3">' + rel.map(function (it) { return cardHTML(it, false); }).join("") + "</div></div>"
    );
  }

  if (id) {
    renderDetail(id);
  } else {
    renderFilters();
    renderFeatured();
    renderList();
    var heroSub = document.querySelector(".kb-hero .section-sub");
    if (heroSub) heroSub.textContent = "共 " + KNOWLEDGE_BASE.length + " 篇实战笔记，把用 AI 的经验拆成能直接抄的方法。按板块挑，或搜关键词。";
    if (searchEl) {
      searchEl.addEventListener("input", renderList);
    }
  }
})();
