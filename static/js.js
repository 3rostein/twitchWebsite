$(document).ready(function(){

    $("#menuIcon").click(function(){
        $(this).toggleClass("active");
        $("#navigation").toggleClass("active");
    });

    $(".menuItem").click(function(){
        $("#navigation").removeClass("active");
        $("#menuIcon").removeClass("active");

        if($(this).attr("id") === "streamItem") {

            $('#mainBody').animate({
                scrollTop: $('#Stream').offset().top

            },300)
        } else if($(this).attr("id") === "newsletterItem") {

            $('#mainBody').animate({
                scrollTop: $('#Newsletter').offset().top

            },300)
        } else if($(this).attr("id") === "aboutItem") {

            $('#mainBody').animate({
                scrollTop: $('#About').offset().top
            },300)

        } else if($(this).attr("id") === "featuresItem") {

            $('#mainBody').animate({
                scrollTop: $('#Features').offset().top
            },300)

        }
    });

    $("#chatSlider").click(function(){
        $(this).parent().toggleClass("active");
        $(this).toggleClass("active");
    })

});