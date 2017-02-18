/**
 * Created by Stoyan on 1/10/2017.
 */

function StartCountdown() {

    var startNum;
    var currentNum;
    var refreshIntervalId;

    function addClassDelayed(jqObj, c, to) {
        setTimeout(function () {
            jqObj.addClass(c);
        }, to);
    }

    function anim() {
        addClassDelayed($("#countdown"), "puffer", 600);
        if (currentNum == 0) {
            clearInterval(refreshIntervalId);

            $("#ball").addClass('invisible');
            $("#countdown").removeClass('invisible');
            $(".c-score-overlay").addClass("show");
        } else {currentNum--;}
        $('#countdown').html(currentNum + 1);
        $('#countdown').removeClass("puffer");
    }

    $(function () {
        startNum = 25;
        currentNum = startNum;
        $("#countdown").html(currentNum); // init first time based on n
        refreshIntervalId = self.setInterval(function () {
            anim()
        }, 1325);
    });
}