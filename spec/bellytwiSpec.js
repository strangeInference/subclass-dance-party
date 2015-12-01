describe("bellyTwi", function() {

  var belly;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    belly = new bellyTwi(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function() {
    expect(belly.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(belly.$node, 'toggle');
    belly.step();
    expect(belly.$node.toggle.called).to.be.true;
  });

  describe("dance", function() {
    it("should call step at least once per second", function() {
      sinon.spy(belly, "step");
      expect(belly.step.callCount).to.be.equal(0);
    //blinkyDancer = makeBlinkyDancer(10, 20, timeBetweenSteps);
      clock.tick(timeBetweenSteps);

      expect(belly.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(belly.step.callCount).to.be.equal(2);
    });
  });
});
