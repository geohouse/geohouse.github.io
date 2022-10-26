// Provides the collapse/expand functionality

// List of the nodes that are the overviews that will expand when
// clicked
const collapseList = document.querySelectorAll(".collapse-button");
const detailsList = document.querySelectorAll(".details");

// Provides the expand all and the collapse all functionality

function updateCollapseState(action) {
  if (action === "expand") {
    let collapseContent = [];
    collapseList.forEach((collapseItem, collapseItemIndex) => {
      collapseItem.classList.add("active");
      // If this is the first or second buttons (the ones used as a demo
      // nav example at the top of the screen), then make their
      // target the first paragraph (so page visitors can see how
      // it works)
      if (collapseItemIndex === 0 || collapseItemIndex === 1) {
        collapseContent = detailsList[0];
      } else {
        // Need to offset by 2 to accommodate for the example buttons at the top of the screen.
        collapseContent = detailsList[collapseItemIndex - 2];
      }
      collapseContent.style.maxHeight = `${collapseContent.scrollHeight}px`;
      collapseItem.innerText = "-";
    });
  } else {
    collapseList.forEach((collapseItem, collapseItemIndex) => {
      collapseItem.classList.remove("active");
      let collapseContent = detailsList[collapseItemIndex];
      collapseContent.style.maxHeight = null;
      collapseItem.innerText = "+";
    });
  }
}

collapseList.forEach((collapseItem, collapseItemIndex) => {
  collapseItem.addEventListener("click", (event) => {
    let collapseContent = [];
    event.currentTarget.classList.toggle("active");
    if (event.currentTarget.classList.contains("active")) {
      event.currentTarget.innerText = "-";
    } else {
      event.currentTarget.innerText = "+";
    }
    // Find the corresponding content for the collapse button through
    // the index value that can be used to link the elements in the
    // 2 NodeLists
    // If this is the first or second buttons (the ones used as a demo
    // nav example at the top of the screen), then make their
    // target the first paragraph (so page visitors can see how
    // it works)
    if (collapseItemIndex === 0 || collapseItemIndex === 1) {
      collapseContent = detailsList[0];
      collapseList[2].classList.toggle("active");
      if (collapseList[2].classList.contains("active")) {
        collapseList[2].innerText = "-";
      } else {
        collapseList[2].innerText = "+";
      }
    } else {
      // Need to offset by 2 to accomodate for the example buttons at the top of the screen.
      collapseContent = detailsList[collapseItemIndex - 2];
    }
    if (collapseContent.style?.maxHeight) {
      collapseContent.style.maxHeight = null;
    } else {
      collapseContent.style.maxHeight = `${collapseContent.scrollHeight}px`;
    }
  });
  collapseItem.addEventListener("dblclick", (event) => {
    console.log("double click");
    if (event.currentTarget.classList.contains("active")) {
      updateCollapseState("collapse");
    } else {
      updateCollapseState("expand");
    }
  });
});

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
