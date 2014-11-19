(function() {
  window.addEventListener('deviceorientation', function(eventData) {
    // Retrieving the front/back tilting of the device and moves the
    // background in the opposite way of the tilt

    var yTilt = Math.round((-eventData.beta + 90) * (40/180) - 40);

    // Retrieve the side to side tilting of the device and move the
    // background the opposite direction.

    var xTilt = Math.round(-eventData.gamma * (20/180) - 20);

    // Thi 'if' statement checks if the phone is upside down and corrects
    // the value that is returned.
    if (xTilt > 0) {
      xTilt = -xTilt;
    } else if (xTilt < -40) {
      xTilt = -(xTilt + 80);
    }

    var backgroundPositionValue = yTilt + 'px ' + xTilt + "px";
    //console.log(backgroundPositionValue);
    //background.style.backgroundPosition = backgroundPositionValue;

    document.body.style.backgroundPosition=backgroundPositionValue;
  }, false);    
})();