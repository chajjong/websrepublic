var ww = $(window).width()
if (ww>950) {
    $('html').addClass('pc')
} else {
    $('html').addClass('mobile')
}

$('.navopen').click(function(){
    $(this).toggleClass('on'),
    $('.hbox').toggleClass('on')
    return false
})
$('.depth1').click(function(){
    $(this).toggleClass('open')
    return false
})