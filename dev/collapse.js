// Loop through the collapsible headers and then
// use .nextElementSibling to get the .collapseDetails div
// associated with it

const collapseList = document.querySelectorAll(".collapse-header");

collapseList.forEach((collapseItem) => {
  collapseItem.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("active");
    let collapseContent = event.currentTarget.nextElementSibling;
    if (collapseContent.style.maxHeight) {
      // This removes the max-height style attribute
      collapseContent.style.maxHeight = null;
    } else {
      collapseContent.style.maxHeight = `${collapseContent.scrollHeight}px`;
    }
  });
});

function updateCollapseState(action) {
  if (action === "expand") {
    collapseList.forEach((collapseItem) => {
      collapseItem.classList.add("active");
      let collapseContent = collapseItem.nextElementSibling;
      collapseContent.style.maxHeight = `${collapseContent.scrollHeight}px`;
    });
  }
  if (action === "collapse") {
    collapseList.forEach((collapseItem) => {
      collapseItem.classList.remove("active");
      let collapseContent = collapseItem.nextElementSibling;
      collapseContent.style.maxHeight = null;
    });
  }
}

let expandAll = document.querySelector("#expand-all");
expandAll.addEventListener("click", () => updateCollapseState("expand"));

let collapseAll = document.querySelector("#collapse-all");
collapseAll.addEventListener("click", () => updateCollapseState("collapse"));
