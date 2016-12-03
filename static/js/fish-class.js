/**
 * Created by ststa on 12/3/2016.
 */
function Fish(data) {

    //this.player = data.handle;
    //this.position = data.message;
    //
    //console.log(data);
    //this.getInfo = function () {
    //    return this.color + ' ' + this.type + ' apple';
    //};

    // Position Variables
    var x = 0;
    var y = 0;

    // Speed - Velocity
    var vx = 0;
    var vy = 0;

    // Acceleration
    var ax = 0;
    var ay = 0;

    var delay = 10;
    var vMultiplier = 0.01;

//TODO make ax and ayget the value from position(data.message)
//var streetaddress= addy.substr(0, addy.indexOf(','));
//    window.ondevicemotion = function (event) {
        ax = this.position.substr(0, this.position.indexOf('y'));
        ay = this.position.substr(val.indexOf("y") + 1);
        //console.log("Accelerometer data - x: " + event.accelerationIncludingGravity.x + " y: " + event.accelerationIncludingGravity.y + " z: " + event.accelerationIncludingGravity.z);


        setInterval(function () {
            vy = vy + -(ay);
            vx = vx + ax;

            var ball = document.getElementById("ball");
            y = parseInt(y + vy * vMultiplier);
            x = parseInt(x + vx * vMultiplier);

            if (x < 0) {
                x = 0;
                vx = 0;
            }
            if (y < 0) {
                y = 0;
                vy = 0;
            }
            if (x > window.innerWidth - 20) {
                x = window.innerWidth - 20;
                vx = 0;
            }
            if (y > window.innerHeight - 20) {
                y = window.innerHeight - 20;
                vy = 0;
            }

            ball.style.top = y + "px";
            ball.style.left = x + "px";
        }, delay);
    //}
}