var bellyTwi = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer bellytwi" src = "media/tw07.gif" style="width:200px;height:100px;">');
  this.$node.css({
    top: top,
    left: left
  });

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

//  this.oldStep = makeDancer.prototype.step.bind(this);
  //this.step();
};
bellyTwi.prototype = Object.create(makeDancer.prototype);
bellyTwi.prototype.constructor = bellyTwi;
bellyTwi.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    //this.$node.toggle();
    // this.oldStep();
    var closest = Infinity;
    for (var i = 0; i < window.dancers.length; i++){
      var distance = Math.sqrt(Math.pow(this.top - window.dancers[i].top, 2) + 
        Math.pow(this.left - window.dancers[i].left, 2));
      if (distance < closest && distance > 0){
        closest = distance;
      }
    }
    if (closest < 200){
      this.top = $("body").height() * Math.random();
      this.left = $("body").width() * Math.random();
      this.setPosition(this.top, this.left);
    }
    makeDancer.prototype.step.apply(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    /*var myThis = this;
    setTimeout(function(){
      myThis.step();
    }, this.timeBetweenSteps);*/

  };