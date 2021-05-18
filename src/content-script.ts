document.addEventListener("dblclick", (event) => {
  const target = event.target as Element;
  const codeElement = target.closest("code") || target.closest("pre");
  if (codeElement) {
    navigator.clipboard.writeText(codeElement.innerText);
  }
});
