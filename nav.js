//mobile
function navbar() {
    var x = document.getElementById("topnav").onclick = () => {
        if (x.className === "nav") {
            x.className += " responsive";
        } else {
            x.className = "nav";
        }

    }
}
