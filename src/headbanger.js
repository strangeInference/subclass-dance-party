var headBangerTwi = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer headtwi" src = "media/tw04.gif" style="width:200px;height:200px;">');
  this.$node.css({
    top: top,
    left: left
  });
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

//  this.oldStep = makeDancer.prototype.step.bind(this);
  //this.step();
};
headBangerTwi.prototype = Object.create(makeDancer.prototype);
headBangerTwi.prototype.constructor = headBangerTwi;
headBangerTwi.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    //this.$node.toggle();
    // this.oldStep();
    makeDancer.prototype.step.apply(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    /*var myThis = this;
    setTimeout(function(){
      myThis.step();
    }, this.timeBetweenSteps);*/

  };