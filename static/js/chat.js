$(function() {
    // When we're using HTTPS, use WSS too.
    var ws_scheme = window.location.protocol == "https:" ? "wss" : "ws";
    var chatsock = new ReconnectingWebSocket(ws_scheme + '://' + window.location.host + "/chat" + window.location.pathname);
    
    chatsock.onmessage = function(message) {
        var data = JSON.parse(message.data);
        var chat = $("#chat")
        var ele = $('<tr></tr>')

        ele.append(
            $("<td></td>").text(data.timestamp)
        )
        ele.append(
            $("<td></td>").text(data.handle)
        )
        ele.append(
            $("<td></td>").text(data.message)
        )
        
        chat.append(ele)
    };

    //$("#chatform").on("submit", function(event) {
    //    var message = {
    //        handle: $('#handle').val(),
    //        message: $('#message').val(),
    //    }
    //    chatsock.send(JSON.stringify(message));
    //    $("#message").val('').focus();
    //    return false;
    //});

    // Send data to WSS every time deviceorientation is changed
    setTimeout(function() {
        window.addEventListener('deviceorientation', handleOrientation);
    }, 3000);


    function handleOrientation(event) {

        var x = event.beta;  // In degree in the range [-180,180]
        var y = event.gamma; // In degree in the range [-90,90]

        console.log("Fire");

        var message = {
            handle: "Someone",
            message: "X:" + x + "Y:" + y,
        }
        chatsock.send(JSON.stringify(message));
        $("#message").val('').focus();
        return false;
    }
});