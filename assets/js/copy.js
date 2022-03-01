function mail() {
  var copyText = document.getElementById("mail");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}
function pass() {
  var copyText = document.getElementById("pass");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}
