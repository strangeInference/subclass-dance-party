// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<img class="dancer" src = "media/tw01.gif" style="width:200px;height:200px;">');
  this.$node.css({
    top: top,
    left: left
  });
  this.step();

  //var dancer = {};

  // use jQuery to create an HTML <span> tag
 }; 

//makeDancer.prototype.$node = $('<span class="dancer"></span>');

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  //doSomethin
  var myThis = this;
  setTimeout(function(){myThis.step()}, this.timeBetweenSteps);
};


makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function(left) {
  this.setPosition(500, left);
}

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  //dancer.setPosition(top, left);

