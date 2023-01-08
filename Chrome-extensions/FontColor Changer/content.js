chrome.runtime.sendMessage({ todo: "showPageAction" });

chrome.runtime.onMessage.addListener((req, sender, res) => {
  if (req.todo == "changeColor") {
    let finalColor = req.clickedColor;
    $("#newColor").val(finalColor);
    $(".type--h2").css("background-color", finalColor);
  }
});
