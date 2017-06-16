/**
 * Created by alaaj on 6/14/17.
 */

var timer_text = $('#timer');
var seconds = 0;
var minutes = 0;
var hours = 0;
var t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    timer_text.text((hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds));
    timer();
    console.log("i am here");
}
function timer() {
    t = setTimeout(add, 1000);
}
$('#start-btn').on('click', function(){
    //set a timer once clicked and show the user the time spent playing while playing
    $('#start-btn').addClass("hidden");
    timer_text.removeClass("hidden");
    timer_text.text("00:00:00");
    timer();
    fillColors(); //method that would set each disk to a certian color that can be flipped to be reaveled

});
$('#level-btn-easy').on('click',function(){
    $(".difficulties a").removeClass("clicked");
    $('#level-btn-easy').addClass("clicked");
});
$('#level-btn-hard').on('click',function(){
    $(".difficulties a").removeClass("clicked");
    $('#level-btn-hard').addClass("clicked");
});
$('#level-btn-medium').on('click',function(){
    $(".difficulties a").removeClass("clicked");
    $('#level-btn-medium').addClass("clicked");
});



