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
    lbasic.style.color = "#E4FCFF";
    lintermediate.style.color = "#F8CF1E";
    lhard.style.color = "#F8CF1E";
    basic.style.display = "inline";
    intermediate.style.display = "none";
    hard.style.display = "none";
  } else if (num == 2) {
    lbasic.style.color = "#F8CF1E";
    lintermediate.style.color = "#E4FCFF";
    lhard.style.color = "#F8CF1E";
    basic.style.display = "none";
    intermediate.style.display = "inline";
    hard.style.display = "none";
  } else if (num == 3) {
    lbasic.style.color = "#F8CF1E";
    lintermediate.style.color = "#F8CF1E";
    lhard.style.color = "#E4FCFF";
    basic.style.display = "none";
    intermediate.style.display = "none";
    hard.style.display = "inline";
  }
}
