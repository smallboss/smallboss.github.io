$(window).ready(function(){
    // MENU
    $( ".menu-btn" ).on('click', function() {
        $('.main-menu').toggleClass('hide-menu show-menu');

        $("#nav-toggle").toggleClass('active');
    });



    var minHeight = $('#main-text').height();
    $('#main-text').css('height', 'auto');
    var autoHeight = $('#main-text').height();
    $('#main-text').css('height', minHeight);

    $( window ).resize(function() {
        var minHeight = $('#main-text').height();
        $('#main-text').css('height', 'auto');
        var autoHeight = $('#main-text').height();
        $('#main-text').css('height', minHeight);
    });


    $('.learn-more').on('click', function() {
        var el = $('#main-text.hide-mt');

        if(el.length) {
            el.animate({height: autoHeight}, 1000);
        } else {
            var el = $('#main-text.show-mt');
            el.animate({height: minHeight}, 1000);
        }

        el.toggleClass('show-mt hide-mt');
    });


    $( "#pull-feedback" ).on('click', function() {
        $('#feedback-wrap').toggleClass('hide-fb show-fb');
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
        offset: -200 
    })

    $('.carousel').carousel({
        interval :500000
    });
});