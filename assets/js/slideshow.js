const row1 = document.getElementById("row1");
const prev1 = document.getElementById("prev1");
const next1 = document.getElementById("next1");

const row2 = document.getElementById("row2");
const prev2 = document.getElementById("prev2");
const next2 = document.getElementById("next2");

const row3 = document.getElementById("row3");
const prev3 = document.getElementById("prev3");
const next3 = document.getElementById("next3");

//arive at row1
next3.addEventListener("click", function() {
  search("row1");
});
prev2.addEventListener("click", function() {
  search("row1");
});

// arrive at row2
next1.addEventListener("click", function() {
  console.log('s');
  search("row2");
});
prev3.addEventListener("click", function() {
  search("row2");
});

//arrive at row3
next2.addEventListener("click", function() {
  search("row3");
});
prev1.addEventListener("click", function() {
  search("row3");
});

function search(row) {
  switch (row) {
    case "row1":
      row1.style.display = "flex";
      row2.style.display = "none";
      row3.style.display = "none";
      break;
    case "row2":
    row1.style.display = "none";
    row2.style.display = "flex";
    row3.style.display = "none";
      break;
    case "row3":
    row1.style.display = "none";
    row2.style.display = "none";
    row3.style.display = "flex";
      break;
    default:
      console.log("no work");
  }
};
