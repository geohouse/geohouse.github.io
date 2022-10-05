// Provides the collapse/expand functionality

// List of the nodes that are the overviews that will expand when
// clicked
const collapseList = document.querySelectorAll(".collapse-button");
const detailsList = document.querySelectorAll(".details");

collapseList.forEach((collapseItem, collapseItemIndex) => {
  collapseItem.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("active");
    // Find the corresponding content for the collapse button through
    // the index value that can be used to link the elements in the
    // 2 NodeLists
    let collapseContent = detailsList[collapseItemIndex];
    if (collapseContent.style?.maxHeight) {
      collapseContent.style.maxHeight = null;
    } else {
      collapseContent.style.maxHeight = `${collapseContent.scrollHeight}px`;
    }
  });
});

// Provides the expand all and the collapse all functionality

function updateCollapseState(action) {
  if (action === "expand") {
    collapseList.forEach((collapseItem, collapseItemIndex) => {
      collapseItem.classList.add("active");
      let collapseContent = detailsList[collapseItemIndex];
      collapseContent.style.maxHeight = `${collapseContent.scrollHeight}px`;
    });
  } else {
    collapseList.forEach((collapseItem, collapseItemIndex) => {
      collapseItem.classList.remove("active");
      let collapseContent = detailsList[collapseItemIndex];
      collapseContent.style.maxHeight = null;
    });
  }
}

let expandAll = document.querySelectorAll(".expand-all");
expandAll.forEach((expandButton) => {
  expandButton.addEventListener("click", () => updateCollapseState("expand"));
});

let collapseAll = document.querySelectorAll(".collapse-all");
collapseAll.forEach((collapseButton) => {
  collapseButton.addEventListener("click", () =>
    updateCollapseState("collapse")
  );
});
