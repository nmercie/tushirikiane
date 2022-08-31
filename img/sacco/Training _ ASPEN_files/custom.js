
        //my jquery code for input text-control
        // Adding (or) Removing animation on page load(use this only no nedd to change anything else)
$(document).ready(function () {
    $('.layered-box .text-control').each(function () {
        if ($(this).val() == "") {
            $(this).closest('.layered-box').removeClass('input-focused');
            $(this).find('.text-control').blur();
        }//End of if statement
        else {
            $(this).closest('.layered-box').addClass('input-focused');
            $(this).find('.text-control').blur();
        }//End of else statement
    });//End of outer for-each loop
    $(".test-1").focus();//Assigning auto focus to element
        $(".test-1").closest('.layered-box').addClass('input-focused');//Add These lines for focus animation (Change HTML id accordingly)
});
//Autofill onload animation(Newly Added Code)
$('body').on('change', '.text-control', function () {
    $('.layered-box .text-control').each(function () {
        if ($(this).val() == "") {
            $(this).closest('.layered-box').removeClass('input-focused');
            $(this).find('.text-control').blur();
        }//End of if statement
        else {
            $(this).closest('.layered-box').addClass('input-focused');
            $(this).find('.text-control').blur();
        }//End of else statement
    });//End of outer for-each loop
});
// Adding animation
$('body').on('keyup', '.layered-box', function (e) {
    if (e.keyCode == 9) {
        $('.layered-box .text-control').each(function () {
            if ($(this).val() == "") {
                $(this).closest('.layered-box').removeClass('input-focused');
                $(this).find('.text-control').blur();
            }//End of if statement
        });//End of outer for-each loop
        $(this).addClass('input-focused');
        $(this).find('.text-control').focus();
    }
    e.stopPropagation();
});
$('body').on('click', ".layered-box", function (e) {
    $('.layered-box .text-control').each(function () {
            if ($(this).val() == "") {
                $(this).closest('.layered-box').removeClass('input-focused');
                $(this).find('.text-control').blur();
            }//End of if statement
        });//End of outer for-each loop
    $(this).addClass('input-focused');
    $(this).find('.text-control').focus();
    e.stopPropagation();
});

// Removing animation
$(document).on('click', 'body', function () {
    $('.layered-box .text-control').each(function () {
        if ($(this).val() == "") {
            $(this).closest('.layered-box').removeClass('input-focused');
            $(this).find('.text-control').blur();
        }//End of if statement
        else {
            $(this).closest('.layered-box').addClass('input-focused');
            $(this).find('.text-control').blur();
        }//End of else statement
    });//End of outer for-each loop
});


        //my jquery code for input text-control-border
        // Adding (or) Removing animation on page load(use this only no nedd to change anything else)
$(document).ready(function () {
    $('.layered-box .text-control-border').each(function () {
        if ($(this).val() == "") {
            $(this).closest('.layered-box').removeClass('input-focused');
            $(this).find('.text-control-border').blur();
        }//End of if statement
        else {
            $(this).closest('.layered-box').addClass('input-focused');
            $(this).find('.text-control-border').blur();
        }//End of else statement
    });//End of outer for-each loop
    $(".test-1").focus();//Assigning auto focus to element
        $(".test-1").closest('.layered-box').addClass('input-focused');//Add These lines for focus animation (Change HTML id accordingly)
});
//Autofill onload animation(Newly Added Code)
$('body').on('change', '.text-control-border', function () {
    $('.layered-box .text-control-border').each(function () {
        if ($(this).val() == "") {
            $(this).closest('.layered-box').removeClass('input-focused');
            $(this).find('.text-control-border').blur();
        }//End of if statement
        else {
            $(this).closest('.layered-box').addClass('input-focused');
            $(this).find('.text-control-border').blur();
        }//End of else statement
    });//End of outer for-each loop
});
// Adding animation
$('body').on('keyup', '.layered-box', function (e) {
    if (e.keyCode == 9) {
        $('.layered-box .text-control-border').each(function () {
            if ($(this).val() == "") {
                $(this).closest('.layered-box').removeClass('input-focused');
                $(this).find('.text-control-border').blur();
            }//End of if statement
        });//End of outer for-each loop
        $(this).addClass('input-focused');
        $(this).find('.text-control-border').focus();
    }
    e.stopPropagation();
});
$('body').on('click', ".layered-box", function (e) {
    $('.layered-box .text-control-border').each(function () {
            if ($(this).val() == "") {
                $(this).closest('.layered-box').removeClass('input-focused');
                $(this).find('.text-control-border').blur();
            }//End of if statement
        });//End of outer for-each loop
    $(this).addClass('input-focused');
    $(this).find('.text-control-border').focus();
    e.stopPropagation();
});

// Removing animation
$(document).on('click', 'body', function () {
    $('.layered-box .text-control-border').each(function () {
        if ($(this).val() == "") {
            $(this).closest('.layered-box').removeClass('input-focused');
            $(this).find('.text-control-border').blur();
        }//End of if statement
        else {
            $(this).closest('.layered-box').addClass('input-focused');
            $(this).find('.text-control-border').blur();
        }//End of else statement
    });//End of outer for-each loop
});
/*--footer design--*/
         $(window).bind("load", function() { 
       $footer = $("#footer");
       var offset = 5;
       positionFooter();
       
       function positionFooter() {
               if ( ($(document.body).height() + offset) < $(window).height()) {
                   //must stick to bottom
                   $footer.css({
                        position: "fixed",
                        bottom: 0,
                        left:0,
                        right:0
                   })
               } else {
                   $footer.attr("style", "");
               }
               
       }

       $(window).resize(positionFooter);
});