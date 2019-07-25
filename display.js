let current = 'home';
let switching = false;

function switchTo(newPage){
    console.log(`Transitioning from ${current} to ${newPage}`);

    if(!switching){
        switching = true;
        $(`#${current}`).fadeOut('fast', ()=>{
            current = newPage;
            $(`#${newPage}`).fadeIn('fast', ()=>{ switching = false });
        });
    }
}

/*
    document.getElementById("partners").style.display = "block";
    document.getElementById("public").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";


*/