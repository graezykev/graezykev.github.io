var s = document.createElement('script')
s.onload = function () {
  //document.addEventListener("DOMContentLoaded", function () {
  mermaid.initialize({
    startOnLoad: true,
    theme: "default",
  });
  window.mermaid.init(undefined, document.querySelectorAll('.language-mermaid'));
  //}, false);
}
s.src = 'https://unpkg.com/mermaid@latest/dist/mermaid.min.js'
document.body.appendChild(s)
