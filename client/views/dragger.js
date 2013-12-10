Template.dragger.rendered = function(e) {
  console.log("rendered dragger!");
  $('.draggable').draggable({
    revert: "invalid",
    snap: ".draggableContainer",
    stack: ".draggable"
  });
  $('.draggableContainer').droppable({
    drop: function(e) {
      console.log("Dropped!", e);
    }
  });
};
