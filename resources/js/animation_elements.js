var letShowIcicles = false;

$(document).ready(function() {

   //  button_playIntro ===================
   $('.button_play.showPlayer').mouseenter(function(){
      $(this).find('.circle_play:not(.velocity-animating)').velocity({
            rotateZ: ['630deg', '90deg']
         }, {
            duration: 700,
            easing: [0.445, 0.05, 0.55, 0.95]
      });

      $(this).find('.circleDisband:not(.velocity-animating)').velocity({
            "stroke-dashoffset": "-=180"
         }, {
            duration: 350,
            easing: [0.39, 0.575, 0.565, 1],
            loop: 1
      });

      $(this).find('.circleDisk').velocity({ "fill-opacity": 0.5 }, 300 );
   })
   .mouseleave(function(){
      $(this).find('.circleDisk').velocity({ "fill-opacity": 0.2 }, 300 );
   });
   // END  button_playIntro ===================


   //  button_contactUs ===================
   $('#button_contactUs').mouseenter(function(){
      $(this).find('.img_contactUsHovering')
         .velocity("finish")
         .velocity({ 
            rotateZ: ['0deg', '35deg'],
            'margin-top': ['-17px', '16px']
         }, {
            duration: 450,
            easing: [0.215, 0.61, 0.355, 1],
            begin: function() { $(this).css('opacity', 1 ); }
         });
   })
   .mouseleave(function(){
      $(this).find('.img_contactUsHovering')
         .velocity("finish")
         .velocity({ opacity: 0 }, 300 );
   });
   // END  button_contactUs ===================
});


var totalNumbIcicles = 0;
$(document).ready(function() {
   totalNumbIcicles = $('svg#icicles g#layer1 ellipse').length;

   var windowW = $(window).width();
   console.log('width: ' + windowW);
   if(windowW < 1264){
       $('.wrap_process').css('margin', '0 -' + (1264 - windowW)/2 + 'px');
      console.log('mar: ' + (1264 - windowW)/2);
   }

   $( window ).resize(function() {
      windowW = $(window).widht;
      if(windowW < 1264){
         $('.wrap_process').css('margin', '0 -' + (1264 - windowW)/2 + 'px');
      }
   });
});


function stopIcicles(){
   letShowIcicles = false;
};

// icicles =========================================
function startIcicles(){
// startIcicle("svg#icicles g#layer1 ellipse:eq(0)");
// startIcicle("svg#icicles g#layer1 ellipse:eq(62)");

   letShowIcicles = true;

   setTimeout(function(){ startIcicle("svg#icicles g#layer1 ellipse:eq(0)"); }, 100);
   setTimeout(function(){ startIcicle("svg#icicles g#layer1 ellipse:eq(8)"); }, 600);
   setTimeout(function(){ startIcicle("svg#icicles g#layer1 ellipse:eq(9)"); }, 1000);
   setTimeout(function(){ startIcicle("svg#icicles g#layer1 ellipse:eq(14)"); }, 1400);
   setTimeout(function(){ startIcicle("svg#icicles g#layer1 ellipse:eq(20)"); }, 1800);
   // setTimeout(function(){ startIcicle("svg#icicles g#layer1 ellipse:eq(34)"); }, 1900);
   // setTimeout(function(){ startIcicle("svg#icicles g#layer1 ellipse:eq(40)"); }, 2100);
   // setTimeout(function(){ startIcicle("svg#icicles g#layer1 ellipse:eq(45)"); }, 2500);
   // setTimeout(function(){ startIcicle("svg#icicles g#layer1 ellipse:eq(59)"); }, 2800);
   // setTimeout(function(){ startIcicle("svg#icicles g#layer1 ellipse:eq(62)"); }, 3000);
}


function startIcicle(icicle) {
   var duration = Math.floor(Math.random() * (2000 - 1 + 1000)) + 1000;

   $(icicle).attr('cy', '1455');

   $(icicle).velocity({ 
      cy: $(icicle).attr('maxCy')
   }, {
      duration: duration,
      progress: function(elements, c, r, s, t) {
         // setTimeout(function() {
         //    // setTimeout(arguments.callee, 1000);
         // }, 1000);
         // sleep(3000);
      },
      complete: function(elements) {
         var nextIcicle = 'svg#icicles g#layer1 ellipse:eq(' + (Math.floor(Math.random() * (totalNumbIcicles - 1 + 1)) + 1) + ')';//+ ':not(.velocity-animating)';

         if(letShowIcicles) {
            if( $('svg#icicles g#layer1 ellipse.velocity-animating').length <= maxIcicles) {
               startIcicle(nextIcicle);
            }
            if( $('svg#icicles g#layer1 ellipse.velocity-animating').length <= maxIcicles) {
               startIcicle(nextIcicle);
            }
         }
      }
   });

   // var i=0;

   // var r = function() {
   //    if(i < $(icicle).attr('maxCy')) {
   //       var valCy = +$(icicle).attr('cy');
   //       $(icicle).attr('cy', valCy+3);
   //       i+=3;  
   //    } else {
   //       clearInterval(timer);
   //       var nextIcicle = 'svg#icicles g#layer1 ellipse:eq(' + (Math.floor(Math.random() * (totalNumbIcicles - 1 + 1)) + 1) + ')';//+ ':not(.velocity-animating)';
   //       startIcicle(nextIcicle);
   //    }
   // };

   // var delay = 10;//$(icicle).attr('maxCy')/10;


   // var timer = setInterval(r, delay);
}
// velocity-animating
