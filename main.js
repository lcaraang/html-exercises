$(document).ready(function () {
  $("#ie-button").click(function () {
    $("#ie-info").toggle();
    $("#firefox-info").hide();
    $("#chrome-info").hide();
  });
  $("#firefox-button").click(function () {
    $("#firefox-info").toggle();
    $("#ie-info").hide();
    $("#chrome-info").hide();
  });
  $("#chrome-button").click(function () {
    $("#chrome-info").toggle();
    $("#firefox-info").hide();
    $("#ie-info").hide();
  });
});
