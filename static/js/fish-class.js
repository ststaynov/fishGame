/**
 * Created by ststa on 12/3/2016.
 */

function init() {

    // Position Variables
    var x = 0;
    var y = 0;

    // Speed - Velocity
    var vx = 0;
    var vy = 0;

    // Acceleration
    this.ax = 0;
    this.ay = 0;

    var delay = 15;
    var vMultiplier = 0.01;

//TODO Figure out why ball moving on the x-axis is not working
    var windowWidth = window.innerWidth,
        windowHeight = window.innerHeight;

     var ball = document.getElementById("ball");

    setTimeout (function () {
       $(".c-score-overlay").addClass("show");
    }, 10000)

    setInterval(function () {
        if (!isNaN(init.ay) && !isNaN(init.ax)) {
            vy = vy + -(init.ay);
            vx = vx + -init.ax;

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
            if (x > windowWidth - 128) {
                x = windowWidth - 128;
                vx = 0;
            }
            if (y > windowHeight - 64) {
                y = windowHeight - 64;
                vy = 0;
            }

            ball.style.transform = "translate(" + x + "px," + y + "px)";
        }
    }, delay);
}


function moveFish(data) {
    this.position = data.message;

    init.ax = this.position.substr(0, this.position.indexOf('y'));
    init.ay = this.position.substr(this.position.indexOf("y") + 1);
}

init();