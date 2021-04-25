const btn = document.querySelector(".button")
const user = document.querySelector(".email")
btn.addEventListener("click", () => {
    var userName = user.value;
    if (userName !== "undefined") {
        localStorage.setItem("user", userName);
        window.location.replace("customerhome.html");
    }
});