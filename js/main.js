const allButton = document.querySelector("#all");
const gisButton = document.querySelector("#gis");
const bioResearchButton = document.querySelector("#biologyresearch");
const jsButton = document.querySelector("#javascript");
const rButton = document.querySelector("#rscript");
const pyButton = document.querySelector("#python");
const bashButton = document.querySelector("#bash");
const leafletButton = document.querySelector("#leaflet");
const mapboxButton = document.querySelector("#mapbox");
const rshinyButton = document.querySelector("#rshiny");

const allProjects = document.querySelectorAll(".column");

// Shows all by default. Filtering adds a .hide class to
// projects NOT meant to be shown, keeping the others visible.
function filterProjects(projectClass) {
  console.log(projectClass);
  allProjects.forEach((project) => {
    if (projectClass === "all") {
      project.classList.remove("hide");
    } else if (project.classList.contains(projectClass)) {
      project.classList.remove("hide");
    } else {
      project.classList.add("hide");
    }
  });
}

allButton.addEventListener("click", () => {
  filterProjects("all");
});
gisButton.addEventListener("click", () => {
  filterProjects("gis");
});
bioResearchButton.addEventListener("click", () => {
  filterProjects("biologyresearch");
});
jsButton.addEventListener("click", () => {
  filterProjects("javascript");
});
rButton.addEventListener("click", () => {
  filterProjects("rscript");
});
pyButton.addEventListener("click", () => {
  filterProjects("python");
});
bashButton.addEventListener("click", () => {
  filterProjects("bash");
});
leafletButton.addEventListener("click", () => {
  filterProjects("leaflet");
});
mapboxButton.addEventListener("click", () => {
  filterProjects("mapbox");
});
rshinyButton.addEventListener("click", () => {
  filterProjects("rshiny");
});

// From https://www.w3schools.com/howto/howto_js_portfolio_filter.asp
filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
