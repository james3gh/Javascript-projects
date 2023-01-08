$(document).ready(function () {
  let color = $("#fontColor").val();
  $("#fontColor").on("change keyup paste", () => {
    color = $("#fontColor").val();
    $("#newColor").val(color);
  });
  $("#btn").click(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {
        todo: "changeColor",
        clickedColor: color,
      });
    });
  });
});
