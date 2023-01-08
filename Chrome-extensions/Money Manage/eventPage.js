let contextMenuItem = {
  id: "spendMoney",
  title: "Spend Money", //Title when user right clicks on the screen
  contexts: ["selection"],
};

chrome.contextMenus.create(contextMenuItem);

function isInt(value) {
  return (
    !isNaN(value) &&
    parseInt(Number(value)) == value &&
    !isNaN(parseInt(value, 10))
  );
}

//user clicked on context menu after selection
chrome.contextMenus.onClicked.addListener((clickData) => {
  if (clickData.menuItemId == "spendMoney" && clickData.selectionText) {
    if (isInt(clickData.selectionText)) {
      chrome.storage.sync.get(["total", "limit"], (budget) => {
        var newTotal = 0;
        if (budget.total) {
          newTotal += parseInt(budget.total);
        }
        newTotal += parseInt(clickData.selectionText);

        chrome.storage.sync.set({ total: newTotal }, () => {
          if (newTotal >= budget.limit) {
            notifOptions = {
              type: "basic",
              iconUrl: "icon48.png",
              title: "Limit reached",
              message: "ohhh !... looks like you reached your limit",
            };
            chrome.notifications.create("limitNotif", notifOptions);
          }
        });
      });
    }
  }
});

chrome.storage.onChanged.addListener((changes, storageName) => {
  chrome.browserAction.setBadgeText({
    text: changes.total.newValue.toString(),
  });
});
