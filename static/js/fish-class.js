/**
 * Created by ststa on 12/3/2016.
 */

function init() {


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
    this.ax = 0;
    this.ay = 0;

    var delay = 10;
    var vMultiplier = 0.01;

//TODO Figure out why ball moving on the x-axis is not working


    setInterval(function () {
        if (!isNaN(init.ay) && !isNaN(init.ax)) {
            vy = vy + -(init.ay);
            vx = vx + init.ax;
            console.log("ay" + init.ay + "ax" + init.ax);

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
        }
    }, delay);
}


function moveFish(data) {
    this.position = data.message;

    init.ax = this.position.substr(0, this.position.indexOf('y'));
    init.ay = this.position.substr(this.position.indexOf("y") + 1);
}

init();