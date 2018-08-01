new WOW().init();
var clock;
clock = $('#clock').FlipClock({
    clockFace : 'DailyCounter',
    autoStart : false,
    showSeconds: false,
    callbacks : {
        stop : function () {
            $('#message').html('Time out');
        }
    }
});

var target = "2018-08-05T00:00:00";
var targetDate = new Date(target);
var nowDate = Date.now();
var time = (targetDate - nowDate) / 1000;

clock.setTime(time);
clock.setCountdown(true);
clock.start();

