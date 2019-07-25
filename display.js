function start() {
    document.getElementById("public").style.display = "none";
    document.getElementById("home").style.display = "block";
    document.getElementById("about").style.display = "none";
    document.getElementById("partners").style.display = "none";

}

function about() {
    document.getElementById("public").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "block";
    document.getElementById("partners").style.display = "none";

}

function public() {
    document.getElementById("public").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("partners").style.display = "none";

}

function partner() {
    document.getElementById("partners").style.display = "block";
    document.getElementById("public").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";


}


/*
    document.getElementById("partners").style.display = "block";
    document.getElementById("public").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";


*/