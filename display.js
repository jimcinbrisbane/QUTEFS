/* This beautiful code brought to you by Jack Beringen*/

/*let current = 'home';
let switching = false;

//This just waits until the page has loaded before running the code
$(() => {

    //Trigger when any <a> element within the #topnav div is clicked
    $('#topnav a').click(ev => {

        //If you check out the <a> elements in the #topnav div, they'll have a data-to attribute.
        //The below line gets this attribute
        let newPage = $(ev.target).data('to');

        //This checks whether the 'to' attribute actually has a value, whether
        //we're already performing a page transition and whether we're already
        //on the page we're trying to transitioning to.
        if (newPage && !switching && newPage !== current) {

            //Set switching to true so we can't switch to any other page until the
            //animation is done
            switching = true;

            //Do some wacky CSS animating move the page content down (by setting the margin CSS property)
            //and fading it out by setting the opacity to zero. The '300' arugment is the amount of time
            //it should take the animation to complete in miliseconds.
            $(`#${current}`).animate({ opacity: 0, marginTop: '18px' }, 300, () => {

                //One the animation has completed, hide the current page.
                $(`#${current}`).hide();

                //Update the 'current' variable so that the function now knows what page we're on
                current = newPage;

                //Fade in the new page by again using wacky CSS animation through jQuery
                $(`#${newPage}`).css({ opacity: 0, marginTop: '18px' }).show().animate({ opacity: 1, marginTop: '0px' }, 300, () => {

                    //Set switching to false so that we can change the page again (remember that this
                    //is checked in the if statement above)
                    switching = false;
                });
            });
        }
    })
});*/

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
