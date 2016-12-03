$(function () {
    // When we're using HTTPS, use WSS too.
    var ws_scheme = window.location.protocol == "https:" ? "wss" : "ws";
    var chatsock = new ReconnectingWebSocket(ws_scheme + '://' + window.location.host + "/chat" + window.location.pathname);

    chatsock.onmessage = function (message) {
        var data = JSON.parse(message.data);
        var chat = $("#e-scrolling-data-container");
        var ele = $('#e-scrolling-data-container');

        Fish(data);

        ele.prepend(
            $("<span></span>").text(data.handle)
        );
        ele.prepend(
            $("<span></span>").text(data.message)
        );
        ele.prepend(
            $("<br>")
        );

        chat.append(ele)
    };

    $("#chatform").on("submit", function (event) {
        var message = {
            handle: $('#handle').val(),
            message: $('#message').val(),
        }
        chatsock.send(JSON.stringify(message));
        $("#message").val('').focus();
        return false;
    });

    // Send data to WSS every time deviceorientation is changed
    setTimeout(function () {
        window.addEventListener('devicemotion', $.throttle(250, handleOrientation));
        window.addEventListener('resize', $.throttle(250, handleOrientation));
    }, 3000);


    function handleOrientation(event) {

        var x = event.accelerationIncludingGravity.x;  // In degree in the range [-180,180]
        var y = event.accelerationIncludingGravity.y; // In degree in the range [-90,90]
        //x = ('' + x)[0];
        //y = ('' + y)[0];

        console.log("Fire");

        var message = {
            handle: "Stoyan",
            message: x + "y" + y
        };

        chatsock.send(JSON.stringify(message));
        //$("#message").val('').focus();
        return false;
    }

    $(".e-burger-menu").bind('tap click', function(){
        //console.log()
        $(".c-menu").toggleClass("hidden");
    });
});