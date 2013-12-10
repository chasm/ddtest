Template.dropper.rendered = function(e) {
  console.log("rendered dropper!");
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
