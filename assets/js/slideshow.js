const row1 = document.getElementById("row1");
const prev1 = document.getElementById("prev1");
const next1 = document.getElementById("next1");

const row2 = document.getElementById("row2");
const prev2 = document.getElementById("prev2");
const next2 = document.getElementById("next2");

const row3 = document.getElementById("row3");
const prev3 = document.getElementById("prev3");
const next3 = document.getElementById("next3");

const row4 = document.getElementById("row4");
const prev4 = document.getElementById("prev4");
const next4 = document.getElementById("next4");

const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");
const dot3 = document.getElementById("dot3");
const dot4 = document.getElementById("dot4");

//arive at row1
next4.addEventListener("click", function() {
  search("row1");
});
prev2.addEventListener("click", function() {
  search("row1");
});

// arrive at row2
next1.addEventListener("click", function() {
  search("row2");
});
prev3.addEventListener("click", function() {
  search("row2");
});

//arrive at row3
next2.addEventListener("click", function() {
  search("row3");
});
prev4.addEventListener("click", function() {
  search("row3");
});

//arrive at row4
next3.addEventListener("click", function() {
  search("row4");
});
prev1.addEventListener("click", function() {
  search("row4");
});

function search(row) {
  switch (row) {
    case "row1":
      row1.style.display = "flex";
      row2.style.display = "none";
      row3.style.display = "none";
      row4.style.display = "none";
      dot1.style.opacity = "100%";
      dot2.style.opacity = "50%";
      dot3.style.opacity = "50%";
      dot4.style.opacity = "50%";
      break;
    case "row2":
    row1.style.display = "none";
    row2.style.display = "flex";
    row3.style.display = "none";
    row4.style.display = "none";
    dot1.style.opacity = "50%";
    dot2.style.opacity = "100%";
    dot3.style.opacity = "50%";
    dot4.style.opacity = "50%";
      break;
    case "row3":
    row1.style.display = "none";
    row2.style.display = "none";
    row3.style.display = "flex";
    row4.style.display = "none";
    dot1.style.opacity = "50%";
    dot2.style.opacity = "50%";
    dot3.style.opacity = "100%";
    dot4.style.opacity = "50%";
      break;
   case "row4":
  row1.style.display = "none";
  row2.style.display = "none";
  row3.style.display = "none";
  row4.style.display = "flex";
  dot1.style.opacity = "50%";
  dot2.style.opacity = "50%";
  dot3.style.opacity = "50%";
  dot4.style.opacity = "100%";
      break;
    default:
      console.log("no work");
  }
};

search("row1");
