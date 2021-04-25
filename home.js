var userName = localStorage.getItem("user");
if (userName !== "undefined") {
  document.querySelector(".userInfo").innerHTML = userName;
}