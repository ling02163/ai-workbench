// Contact form -> WeCom group robot webhook.
// Sends a markdown message to the group when a visitor submits the form.
(function () {
  var form = document.getElementById('contactForm');
  if (!form) return;
  var status = document.getElementById('cf-status');
  var btn = document.getElementById('cf-submit');

  function setStatus(msg, kind) {
    status.textContent = msg;
    status.className = 'form-status ' + (kind || '');
  }

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    // Honeypot: bots fill the hidden field; pretend success, do nothing.
    var hp = form.querySelector('input[name="company"]');
    if (hp && hp.value) {
      form.reset();
      setStatus('已收到，谢谢！', 'ok');
      return;
    }

    var name = form.name.value.trim();
    var contact = form.contact.value.trim();
    var message = form.message.value.trim();
    if (!name || !contact || !message) {
      setStatus('请把带 * 的都填一下～', 'err');
      return;
    }

    var webhook = window.WECOM_WEBHOOK;
    if (!webhook) {
      setStatus('留言通道还没配置好，麻烦直接企业微信联系我～', 'err');
      return;
    }

    btn.disabled = true;
    btn.textContent = '发送中…';
    var content = [
      '**【网站新留言】**',
      '> 称呼：' + name,
      '> 联系方式：' + contact,
      '> 留言：' + message,
      '> 时间：' + new Date().toLocaleString('zh-CN')
    ].join('\n');

    try {
      var resp = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ msgtype: 'markdown', markdown: { content: content } })
      });
      var data = await resp.json().catch(function () { return {}; });
      if (data && data.errcode === 0) {
        setStatus('已收到，我会尽快通过企业微信回复你 ✅', 'ok');
        form.reset();
      } else {
        throw new Error((data && data.errmsg) || 'unknown');
      }
    } catch (err) {
      setStatus('发送失败了，麻烦直接企业微信联系我～', 'err');
    } finally {
      btn.disabled = false;
      btn.textContent = '发送留言';
    }
  });
})();
