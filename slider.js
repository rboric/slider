$(function() {

    $(".right-button").click(slideRight);

    $(".left-button").click(slideLeft);

    // Top slider pictures

    focusPictureTopRight = $(".top-slider img:first");
    focusPictureTopRight.addClass("focusTopRight");
    focusPictureTopLeft = $(".top-slider img:last");
    focusPictureTopLeft.addClass("focusTopLeft");

    t_image_width = 0;
    t_image_number = 0;

    $(".top-slider img").each(function(){
        let t_iwidth = $(this).width();
        t_image_number += 1;
        t_image_width += t_iwidth;
        
    });

    // Bottom slider pictures

    focusPictureBottomRight = $(".bottom-slider img:first");
    focusPictureBottomRight.addClass("focusBottomRight");
    focusPictureBottomLeft = $(".bottom-slider img:last");
    focusPictureBottomLeft.addClass("focusBottomLeft");

    b_image_width = 0;
    b_image_number = 0;

    $(".bottom-slider img").each(function(){
        let b_iwidth = $(this).width();
        b_image_number += 1;
        b_image_width += b_iwidth;
        
    });
});

function slideRight(){
    focusPictureTopNextLeft = focusPictureTopRight.prev();
    focusPictureBottomNextLeft = focusPictureBottomRight.prev();
    focusPictureTopNextRight = focusPictureTopRight.next();
    focusPictureBottomNextRight = focusPictureBottomRight.next();
    pictureWidthTopRight = $(".focusTopRight").width();
    pictureWidthBottomRight = $(".focusBottomRight").width();
    $(".top-slider img").animate({"left": "+="+(pictureWidthTopRight+10)});
    $(".bottom-slider img").animate({"left": "+="+(pictureWidthBottomRight+10)});
    $(".focusTopRight").animate({opacity: 0}, 10);
    $(".focusBottomRight").animate({opacity: 0}, 10);
    $(".focusTopRight").animate({"left": "-="+(t_image_width+t_image_number*10)}, 0).addClass("focusTopLeft");
    $(".focusBottomRight").animate({"left": "-="+(b_image_width+b_image_number*10)}, 0).addClass("focusBottomLeft");
    $(".focusTopRight").animate({opacity: 1}, 500);
    $(".focusBottomRight").animate({opacity: 1}, 500);
    focusPictureTopRight.removeClass("focusTopRight");
    focusPictureBottomRight.removeClass("focusBottomRight");

    // Removing Top and Bottom Left focus

    focusPictureTopLeft.removeClass("focusTopLeft");
    focusPictureBottomLeft.removeClass("focusBottomLeft");
    focusPictureTopLeft = $(".focusTopLeft");
    focusPictureBottomLeft = $(".focusBottomLeft");

    // Right focus

    if(focusPictureTopNextRight.length == 0){
        focusPictureTopRight = $(".top-slider img:first");
        focusPictureTopRight.addClass("focusTopRight");
    } else {
        focusPictureTopNextRight.addClass("focusTopRight");
        focusPictureTopRight = focusPictureTopNextRight;
    }
    if(focusPictureBottomNextRight.length == 0){
        focusPictureBottomRight = $(".bottom-slider img:first");
        focusPictureBottomRight.addClass("focusBottomRight");
    } else {
        focusPictureBottomNextRight.addClass("focusBottomRight")
        focusPictureBottomRight = focusPictureBottomNextRight;
    }

};

function slideLeft(){
    focusPictureTopNextLeft = focusPictureTopLeft.prev();
    focusPictureBottomNextLeft = focusPictureBottomLeft.prev();
    pictureWidthTopLeft = $(".focusTopLeft").width();
    pictureWidthBottomLeft = $(".focusBottomLeft").width();
    $(".top-slider img").animate({"left": "-="+(pictureWidthTopLeft+10)});
    $(".bottom-slider img").animate({"left": "-="+(pictureWidthBottomLeft+10)});
    $(".focusTopLeft").animate({opacity: 0}, 10);
    $(".focusBottomLeft").animate({opacity: 0}, 10);
    $(".focusTopLeft").animate({"left": "+="+(t_image_width+t_image_number*10)}, 0).addClass("focusTopRight");
    $(".focusBottomLeft").animate({"left": "+="+(b_image_width+b_image_number*10)}, 0).addClass("focusBottomRight");
    $(".focusTopLeft").animate({opacity: 1}, 250);
    $(".focusBottomLeft").animate({opacity: 1}, 250);
    focusPictureTopLeft.removeClass("focusTopLeft");
    focusPictureBottomLeft.removeClass("focusBottomLeft");

    // Removing Top and Bottom Right focus

    focusPictureTopRight.removeClass("focusTopRight");
    focusPictureBottomRight.removeClass("focusBottomRight");
    focusPictureTopRight = $(".focusTopRight");
    focusPictureBottomRight = $(".focusBottomRight");


    // Left focus

    if(focusPictureTopNextLeft.length == 0){
        focusPictureTopLeft = $(".top-slider img:last");
        focusPictureTopLeft.addClass("focusTopLeft");
    } else {
        focusPictureTopNextLeft.addClass("focusTopLeft");
        focusPictureTopLeft = focusPictureTopNextLeft;

    }
    if(focusPictureBottomNextLeft.length == 0){
        focusPictureBottomLeft = $(".bottom-slider img:last");
        focusPictureBottomLeft.addClass("focusBottomLeft");
    } else {
        focusPictureBottomNextLeft.addClass("focusBottomLeft")
        focusPictureBottomLeft = focusPictureBottomNextLeft;
    }
};