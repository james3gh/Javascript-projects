$(document).ready(function () {
  $("#countBtn").click(function (e) {
    e.preventDefault();
    let word = $("#word").val();
    if (word) {
      chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, word, (response) => {
          $("#counter")
            .css({
              border: "1px solid red",
              padding: "3px",
              marginTop: "5px",
            })
            .text(response.count);
        });
      });
    }
  });
});
