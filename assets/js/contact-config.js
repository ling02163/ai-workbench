// WeCom 群机器人 Webhook 地址。
// 安全说明：纯静态站无法在服务端保密，此值会随 JS 下发到浏览器。
// 已加 honeypot 基础防刷；如需更强保密，可后续加一层无服务器函数代理。
// 部署前请把真实 Webhook 填入此处（由本地密钥文件注入，不进 git）。
window.WECOM_WEBHOOK = "";
