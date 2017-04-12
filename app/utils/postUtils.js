export function getSnippet(content, count) {
  const elements = $.parseHTML(content);
  let snippet = "";
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (snippet.length >= count) {
      break;
    }
    const NodeName = `${element.nodeName}`;
    switch(NodeName) {
      case "#text":
        break;
      default:
      const innerText = element.innerText.trim();
        const currentCount = snippet.length;
        const textCount = innerText.length;
        if (currentCount + textCount > count) {
          if (currentCount === 0) {
            return innerText.substring(0, count + 1).concat('...');
          }
          return snippet;
          break;
        } else {
          snippet = snippet.concat(innerText);
        }
    }
  }
  return snippet;
}
