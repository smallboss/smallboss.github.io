$(window).ready(function(){
    // MENU
    $( ".menu-btn" ).click(function() {
        setTimeout(function() {
            $( ".head-list" ).toggleClass('hide-menu show-menu');
        }, 50);
      $("#nav-toggle").toggleClass('active');
    });

    // TO TOP
    $("#toTop").on("click", function (event) {
        event.preventDefault();
        
        $('html,body').animate({scrollTop: 0}, 800);
    });

    var waypoint = new Waypoint({
        element: document.getElementById('waypointTop'),
        handler: function(direction) {
            $('#toTop').stop();

            if(direction === 'down') {
                $('#toTop').css('display', 'block');
                $('#toTop').animate({
                    'opacity': '0.6'
                }, 1000);
            }

            if(direction === 'up') {
                $('#toTop').animate({
                    'opacity': '0'
                }, {
                    duration: 1000,
                    complete: function() {
                        $(this).css('display', 'none');
                    }
                });
            }
        },
        offset: -300 
    })


    $('.carousel-main').slick({
        prevArrow: $('.banner .prev'),
        nextArrow: $('.banner .next'),
        autoplay: false,
        dots: true,
        autoplaySpeed:3000
    });



    const waterwheel = $('#waterwheel');
    var separ = parseInt($(window).width())  / 4.4;

    waterwheel.waterwheelCarousel({ 
        separation: separ
    });

    $('.waterwheel-nav .prev').on('click', () => waterwheel.prev());
    $('.waterwheel-nav .next').on('click', () => waterwheel.next());

    $(window).on('resize', function() {
        separ = parseInt($(window).width())  / 4.4;
        waterwheel.reload( { separation: separ });
    });



    $('.carousel-top-sale').slick({
        prevArrow: $('.top-sale-wrap .prev'),
        nextArrow: $('.top-sale-wrap .next'),
        autoplay: false,
        speed: 300,
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

