$(document).ready(function () {
  chrome.storage.sync.get("limit", (budget) => {
    $("#limit").val(budget.limit);
  });

  $("#limitbtn").click(function (e) {
    e.preventDefault();
    let limitValue = $("#limit").val();
    if (limitValue) {
      chrome.storage.sync.set({ limit: limitValue }, () => {
        close();
      });
    }
  });

  $("#resetbtn").click(function (e) {
    e.preventDefault();
    chrome.storage.sync.set({ total: 0 }, () => {
      notifOptions = {
        type: "basic",
        iconUrl: "icon48.png",
        title: "Total reset!",
        message: "Total has been reset to 0",
      };
      chrome.notifications.create("resetNotif", notifOptions);
    });
  });
});
