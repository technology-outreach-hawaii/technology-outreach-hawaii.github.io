var basic = document.getElementById("basic");
var intermediate = document.getElementById("intermediate");
var hard = document.getElementById("hard");

var lbasic = document.getElementById("link-basic");
var lintermediate = document.getElementById("link-intermediate");
var lhard = document.getElementById("link-hard");

lbasic.addEventListener("click", function(){
  display(1);
});
lintermediate.addEventListener("click", function(){
  display(2);
});
lhard.addEventListener("click", function(){
  display(3);
});

function display(num) {
  if (num == 1) {
    basic.style.display = "inline";
    intermediate.style.display = "none";
    hard.style.display = "none";
  } else if (num == 2) {
    basic.style.display = "none";
    intermediate.style.display = "inline";
    hard.style.display = "none";
  } else if (num == 3) {
    basic.style.display = "none";
    intermediate.style.display = "none";
    hard.style.display = "inline";
  }
}
