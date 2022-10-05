// Provides the collapse/expand functionality

// List of the nodes that are the overviews that will expand when
// clicked
const collapseList = document.querySelectorAll(".collapse-button");
const detailsList = document.querySelectorAll(".details");

collapseList.forEach((collapseItem, collapseItemIndex) => {
  collapseItem.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("active");
    let collapseContent = detailsList[collapseItemIndex];
    if (collapseContent.style?.maxHeight) {
      collapseContent.style.maxHeight = null;
    } else {
      collapseContent.style.maxHeight = `${collapseContent.scrollHeight}px`;
    }
  });
});
