/**
 * Created by alaaj on 6/14/17.
 */
$('#start-btn').on('click', function(){
    //set a timer once clicked and show the user the time spent playing while playing
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