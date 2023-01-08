chrome.runtime.onMessage.addListener((req, sender, res) => {
  const re = new RegExp(req, "gi");
  matches = document.documentElement.innerHTML.match(re);
  res({ count: matches.length });
});
