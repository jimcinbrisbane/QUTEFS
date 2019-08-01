function review() {
    var review = document.getElementById("review");
    var take = document.getElementById("take");
    var guide = document.getElementById("guide");
    review.style.display = "block";
    take.style.display = "none";
    guide.style.display = "none";


  } 

  function guide() {
    var review = document.getElementById("review");
    var take = document.getElementById("take");
    var guide = document.getElementById("guide");      
    guide.style.display = "block";
    review.style.display = "none";
    take.style.display = "none";


  } 

  function take() {
    var review = document.getElementById("review");
    var take = document.getElementById("take");
    var guide = document.getElementById("guide");      
    take.style.display = "block";
    review.style.display = "none";
    guide.style.display = "none";}

