$(document).ready(function(){
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const close = document.querySelector('.menu__close');

    hamburger.addEventListener('click', () => {
        menu.classList.add('menu_active');
    });

    close.addEventListener('click', () => {
        menu.classList.remove('menu_active');
    });

    const counter = document.querySelectorAll('.skills__progress-counter');
    const line = document.querySelectorAll('.skills__progress-bar span');

    counter.forEach( (item, i) => {
        line[i].style.width = item.innerHTML;
    });



    $('form').submit(function (e) {
        e.preventDefault();

        // if (!$(this).valid()) {
        //     return;
        // }
        // console.log($(this).serialize())
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('.overlay').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1500) {
            $('.scrollUp').fadeIn();
        } else {
            $('.scrollUp').fadeOut();
        }
    });

    $("a[href^='#']").click(function (e) {
        e.preventDefault();
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });


    $(".modal .button").click(function () {
        $(".overlay").fadeOut('slow');
    });
        console.log(123)
});