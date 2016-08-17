$(document).ready(function() {
   var startCircleStick = false;
   var startCircleNote = false;

   initIdSvg();
   setStartsValues();
   modernTooltip();
});

function modifyFPNav() {
   var obj = {
      prop1: 'p1',
      prop1: function(param) {
         return param + ' prop2 ' + arguments.length + " > " + arguments[3];
      }
   };

   $("#fp-nav").append("<svg viewBox='0 0 28 107'>");


   $("#fp-nav svg").append(makeSVG("circle" , {class: 'circleNav', cy: '14', cx: '14', r: '0'}));
   $("#fp-nav svg .circleNav:first-child")
      .attr('r', 5)
      .css('stroke', "#e44036")
      .addClass("current");


   $("#fp-nav ul li").each(function() {
      $("#fp-nav svg").append(makeSVG("g", {id: '' + $(this).index()}));
      $("#fp-nav svg").find("g[id=" + $(this).index() + "]").append(makeSVG("circle" , {class: 'circleNav', cy: '14', cx: '14', r: '0'}));
      $("#fp-nav svg").find("g[id=" + $(this).index() + "]").append(makeSVG("circle" , {class: 'circleInner', cy: '14', cx: '14', r: '2.6'}));
      $("#fp-nav svg").find("g[id=" + $(this).index() + "]").append(makeSVG("circle" , {class: 'strokeInner', cy: '14', cx: '14', r: '3'}));
      valCy+=20;
   });
}

function initIdSvg() {
   $("line[y2='47']").attr("id","line_top_tree");
   $("line[y2='172']").attr("id","line_under_text");
   $("line[y2='518']").attr("id","line_under_lamp");
   $("line[y2='1011']").attr("id","line_under_stick");
   $("line[y2='1406']").attr("id","line_under_note");

   $("path[d='M382.33,83.54h-1.87V75.91h-8.88v7.63H369.7V67.7h1.87v6.53h8.88V67.7h1.87V83.54Z']").closest("g").attr("id", "head_text");

   // $("path[d='M480.5,433V405c0-22.66-13-37.49-35.5-37.49H357.67c-21.33,0-37.17-15.17-37.17-41.83V305']")
   //    .attr("id","branch_inspiration");
   // $("path[d='M480.5,334.5c0-20.88,13-36,36.5-36h14']")
   //    .attr("id","branch_script");
   // $("path[d='M480.5,485c0-20.67,14.5-34.5,35.5-34.5h57c21.67,0,36.5-15.8,36.5-37.14V404']")
   //    .attr("id","branch_storyboard");
   // $("path[d='M480.5,660.5c0-20.88-13-36-36.5-36H391']")
   //    .attr("id","branch_animation");
   // $("path[d='M480.5,769.32c0-21,14.5-33.82,35.5-33.82h41c19.67,0,36.5-13.9,36.5-35.57V688']")
   //    .attr("id","branch_drawing");
   // $("path[d='M480.5,900.5c0-21.66-14.5-35-35.5-35H404.33c-20.33,0-35.83-14.83-35.83-35.83V798']")
   //    .attr("id","branch_3dgraphics");
   $("line[y2='865.5']")
      .attr("id","branch_vfx");
   // $("path[d='M480.5,971.66c0-20.35,15.83-35.16,36.5-35.16h82']")
   //    .attr("id","branch_compositing");
   // $("path[d='M480.5,1214.45c0-21.66-14.56-35.14-35.56-35.1l-55.46,0c-20.33,0-35.86-14.77-35.9-35.77l0-13.67']")
   //    .attr("id","branch_music");
   // $("path[d='M480.44,1275.49c0-21.66,14.62-35,35.62-35H599']")
   //    .attr("id","branch_voiceover");
   // $("path[d='M480.5,1344.66c0-20.35-15.83-35.16-36.5-35.16H411']")
   //    .attr("id","branch_sfx");   

   $("#svg_tree circle[cy='208.25']").remove();
   $("#svg_tree circle[cy='554.39']").remove();
   $("#svg_tree circle[cy='1047.4']").remove();
   $("#svg_tree path[d='M488.55,210.25c1.3-2.41,2.7-5.16,2.7-8.37a10.6,10.6,0,0,0-10.6-10.6,10.75,10.75,0,0,0-10.77,10.6c0,6,4.62,10.4,4.62,14v1.7l11.66-1.64c0-1.67,1.25-3.53,2.39-5.65']").closest("g").remove();
   $("#svg_tree line[y2='568.56']").closest("g").remove();
   $("#svg_tree circle[cy='1056.92']").closest("g").remove();

   // $("#svg_tree").append(makeSVG('image', {id: 'lamp' , class: 'cls-12', href: 'resources/images/svg/circle_lamp.svg',  x:'480.5', y:'208' , height:'0', width:'0'}));
   // $("#svg_tree").append(makeSVG('image', {id: 'stick', class: 'cls-12', href: 'resources/images/svg/circle_stick.svg', x:'480.5', y:'554' , height:'0', width:'0'}));
   // $("#svg_tree").append(makeSVG('image', {id: 'note' , class: 'cls-12', href: 'resources/images/svg/circle_note.svg',  x:'480.5', y:'1046', height:'0', width:'0'}));

   // $("#tree_play").find(':not(image)').remove();
   $("polygon[points='478.13 1449.59 500 1420.59 501.21 1421.29 478.48 1457.58 462.51 1440.42 466.94 1436.03 478.13 1449.59']").remove();

   // $("#tree_play").append(makeSVG('rect', {'id': 'rect_play', 'class': 'cls-10', 'width': '0', 'height': '0', 'x': '480px', 'y': '1435.3px', 'ry': '40'}));
   // $("#tree_play").append(makeSVG('rect', {'id': 'tree_circle', 'class': 'cls-11', 'x': '480.48px', 'y': '1438.68px', 'height': '0', 'width': '0', 'ry': '50'}));
   // $("#tree_play").append(makeSVG('image', {'id': 'play_polygon', 'class': 'cls-12', 'xlink:href': 'resources/images/svg/check.svg', 'x': '481.5', 'y': '1436', 'height': '0', 'width': '0'}));

   // $("#tree_play").append(makeSVG('image', {'id': 'play_text', 'href': 'resources/images/svg/lets_show_it.svg', 'x': '481.5', 'y': '1420', 'height': '40', 'width': '0'}));


   // DEL BG wrap_process
   $('#section_process .wrap_process').css('background', '');



   $('#tooltip_inspiration text').attr({'transform': "translate(230 263.4)",'side': 'left'});
   $('#tooltip_animation text').attr({'transform': "translate(230 611.4)",'side': 'left'});
   $('#tooltip_3dgraphics text').attr({'transform': "translate(274 757.4)",'side': 'left'});
   $('#tooltip_vfx text').attr({'transform': "translate(285 924.25)",'side': 'left'});
   $('#tooltip_music text').attr({'transform': "translate(293 1088.4)",'side': 'left'});
   $('#tooltip_sfx text').attr({'transform': "translate(332 1296.4)",'side': 'left'});


   $('#tooltip_script text').attr({'transform': "translate(649 284.4)", 'side': 'right'});
   $('#tooltip_storyboard text').attr({'transform': "translate(702.6 362.4)", 'side': 'right'});
   $('#tooltip_drawing text').attr({'transform': "translate(667.6 645.4)", 'side': 'right'});
   $('#tooltip_compositing text').attr({'transform': "translate(612 994.25)", 'side': 'right'});
   $('#tooltip_voiceover text').attr({'transform': "translate(612 1295.25)", 'side': 'right'});

   $('.wrap_tooltip .text_tooltip').attr('fill-opacity', '0');


   $('.wrap_tooltip').each(function(){ 
      $(this).attr('showing', '0'); 
      $(this).attr('s', 0); 
      $(this).attr('h', 0); 
   });

   $('.wrap_tooltip line').each(function(){
      $(this).attr('maxY1', parseInt($(this).attr('y1')));
      $(this).attr('maxY2', parseInt($(this).attr('y2')));
      $(this).attr('minY1', parseInt($(this).attr('y1'))+22);
      $(this).attr('minY2', parseInt($(this).attr('y2'))-22);
   });
}



function modernTooltip() {
   for(var i=0; i < $('.wrap_tooltip').length ;i++){
      var row_numb = $('.wrap_tooltip:eq('+ i +') text .text_tooltip').length;
      var indent = 0;
      var symbol = null;

      var y1 = parseInt($('.wrap_tooltip:eq('+ i +') line').attr('y1'));
      var y2 = parseInt($('.wrap_tooltip:eq('+ i +') line').attr('y2'));

      if(y1 != y2){
         $('.wrap_tooltip:eq('+ i +') line').attr({'y1': (y1+22), 'y2': (y2-22)});
      }
      else {
          if($('.wrap_tooltip:eq('+ i +')').attr('id') == "tooltip_vfx"){
            var x1 = parseInt($('.wrap_tooltip:eq('+ i +') line').attr('x1')) + 18.5;
            var x2 = parseInt($('.wrap_tooltip:eq('+ i +') line').attr('x2')) - 18.5;

            $('.wrap_tooltip:eq('+ i +') line').attr({'maxx1': parseInt($('.wrap_tooltip:eq('+ i +') line').attr('x1')),
                                                      'maxx2': parseInt($('.wrap_tooltip:eq('+ i +') line').attr('x2'))
                                                     });
            $('.wrap_tooltip:eq('+ i +') line').attr({'x1': x1, 'x2': x2, 'vect': 'h'});
            $('.wrap_tooltip:eq('+ i +') line').attr({'minx1': x1, 'minx2': x2});
         }

         if($('.wrap_tooltip:eq('+ i +')').attr('id') == "tooltip_compositing"){
            var x1 = parseInt($('.wrap_tooltip:eq('+ i +') line').attr('x1')) + 64.5;
            var x2 = parseInt($('.wrap_tooltip:eq('+ i +') line').attr('x2')) - 64.5;

            $('.wrap_tooltip:eq('+ i +') line').attr({'maxx1': parseInt($('.wrap_tooltip:eq('+ i +') line').attr('x1')),
                                                      'maxx2': parseInt($('.wrap_tooltip:eq('+ i +') line').attr('x2'))
                                                     });
            $('.wrap_tooltip:eq('+ i +') line').attr({'x1': x1, 'x2': x2, 'vect': 'h'});
            $('.wrap_tooltip:eq('+ i +') line').attr({'minx1': x1, 'minx2': x2});
         }

         if($('.wrap_tooltip:eq('+ i +')').attr('id') == "tooltip_voiceover"){
            var x1 = parseInt($('.wrap_tooltip:eq('+ i +') line').attr('x1')) + 54;
            var x2 = parseInt($('.wrap_tooltip:eq('+ i +') line').attr('x2')) - 54;

            $('.wrap_tooltip:eq('+ i +') line').attr({'maxx1': parseInt($('.wrap_tooltip:eq('+ i +') line').attr('x1')),
                                                      'maxx2': parseInt($('.wrap_tooltip:eq('+ i +') line').attr('x2'))
                                                     });
            $('.wrap_tooltip:eq('+ i +') line').attr({'x1': x1, 'x2': x2, 'vect': 'h'});
            $('.wrap_tooltip:eq('+ i +') line').attr({'minx1': x1, 'minx2': x2});
         }
      }
   }

}



function getIndent(symbol) {
   return 9;
}


function makeSVG(tag, attrs) {
   var el= document.createElementNS('http://www.w3.org/2000/svg', tag);
   for (var k in attrs)
       el.setAttribute(k, attrs[k]);
   return el;
}


var startVal = false;
function setStartsValues() {
      startCircleStick = false;
      startCircleNote = false;

      if($("line#line_top_tree").attr("y2") != 0) {
         $("line#line_top_tree").attr("y2", 0); //47
         $("line#line_under_text").attr("y2",$("line#line_under_text").attr("y1")); //172
         $("line#line_under_lamp").attr("y2",$("line#line_under_lamp").attr("y1")); //518
         $("line#line_under_stick").attr("y2",$("line#line_under_stick").attr("y1")); //1011
         $("line#line_under_note").attr("y2",$("line#line_under_note").attr("y1")); //1406


         $("#head_text")
            .attr("transform", "translate(0 -35)")
            .attr("opacity", "0")
            .attr("style", "");


         $("path#branch_inspiration")
            .attr("stroke-dasharray",  getBrachLength("path#branch_inspiration") + ' ' + getBrachLength("path#branch_inspiration")*2)
            .attr("stroke-dashoffset", getBrachLength("path#branch_inspiration"))
            .css("stroke-dashoffset", "");
            
         $("path#branch_script")
            .attr("stroke-dasharray",  getBrachLength("path#branch_script") + ' ' + getBrachLength("path#branch_script")*2)
            .attr("stroke-dashoffset", getBrachLength("path#branch_script"))
            .css("stroke-dashoffset", "");
         
         $("path#branch_storyboard")
            .attr("stroke-dasharray",  getBrachLength("#branch_storyboard") + ' ' + getBrachLength("path#branch_storyboard")*2)
            .attr("stroke-dashoffset", getBrachLength("#branch_storyboard"))
            .attr("style", "");
            
         $("path#branch_animation")
            .attr("stroke-dasharray",  getBrachLength("#branch_animation") + ' ' + getBrachLength("path#branch_animation")*2)
            .attr("stroke-dashoffset", getBrachLength("#branch_animation"))
            .attr("style", "");

         $("path#branch_drawing")
            .attr("stroke-dasharray",  getBrachLength("#branch_drawing") + ' ' + getBrachLength("path#branch_drawing")*2)
            .attr("stroke-dashoffset", getBrachLength("#branch_drawing"))
            .attr("style", "");

         $("path#branch_3dgraphics")
            .attr("stroke-dasharray",  getBrachLength("#branch_3dgraphics") + ' ' + getBrachLength("path#branch_3dgraphics")*2)
            .attr("stroke-dashoffset", getBrachLength("#branch_3dgraphics"))
            .attr("style", "");

         $("line#branch_vfx").attr("x1", 290)
                             .attr("x2", 290); //404

         $("path#branch_compositing")
            .attr("stroke-dasharray",  getBrachLength("#branch_compositing") + ' ' + getBrachLength("path#branch_compositing")*2)
            .attr("stroke-dashoffset", getBrachLength("#branch_compositing"))
            .attr("style", "");

         $("path#branch_music")
            .attr("stroke-dasharray",  getBrachLength("#branch_music") + ' ' + getBrachLength("path#branch_music")*2)
            .attr("stroke-dashoffset", getBrachLength("#branch_music"))
            .attr("style", "");
         $("path#branch_voiceover")
            .attr("stroke-dasharray",  getBrachLength("#branch_voiceover") + ' ' + getBrachLength("path#branch_voiceover")*2)
            .attr("stroke-dashoffset", getBrachLength("#branch_voiceover"))
            .attr("style", "");
         $("path#branch_sfx")
            .attr("stroke-dasharray",  getBrachLength("#branch_sfx") + ' ' + getBrachLength("path#branch_sfx")*2)
            .attr("stroke-dashoffset", getBrachLength("#branch_sfx"))
            .attr("style", "");

         hideLabel(".wrap_label"); //hide and transform all labels

         $("#lamp" ).attr({ x:'480.5', y:'208' , height:'0', width:'0' });
         $("#stick").attr({ x:'480.5', y:'554' , height:'0', width:'0' });
         $("#note" ).attr({ x:'480.5', y:'1046', height:'0', width:'0' });
      } 
}

function hideLabel(label) {
   $(label + " .group_label").attr("transform", "translate(-15 0)");
   $(label + " .group_label path").css("opacity", 0);

   //$(label + " .wrap_label").attr("transform", "translate(0 -40px)");
   $(label + " .wrap_bullet").css("opacity", 0);
}



function getBrachLength(brach) {
   var percentSVGZoom = (($("#svg_tree").width()-960) * 100) / window.innerWidth;//$("#svg_tree").width();
   var mult = (window.innerWidth / 960);

   if(mult < 1) mult = 1;

   var mathLength = document.querySelector(brach).getTotalLength();

   return mathLength * mult;//realLength;
}



    




    function loadFullpage (){
// PAGE  
   $('#fullpage').fullpage({
      anchors: ['intro', 'weare', 'showreel', 'clients', 'process'],
      navigation: true,
      navigationPosition: 'right',
      navigationTooltips: ['Intro', 'We are', 'Showreel', 'Our clients', 'How we do it'],
/*
      responsiveHeight: 600,
      responsiveWidth: 600,
      css3: true,
      easingcss3: "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
      touchSensitivity: 30,
      normalScrollElementTouchThreshold: 30,
*/
      scrollOverflow: true,
      scrollingSpeed: 700,
      keyboardScrolling: false,
      lockAnchors: true,
      recordHistory: false,
      afterRender: function(){
      },
      afterResize: function(){
         // Prevent showreel bacкground loop video from freezing
         var videoElement = document.getElementById('video_showreel');
            
         if (videoElement.paused) {
            videoElement.play();
         }
      },
      afterLoad: function(anchorLink, index){
         // console.dir( $('#fp-nav').offset().top + " +"); //OFFSET FP MENU
         
/*
         // 1. INTRO
         if(anchorLink == 'intro'){
         }
         
         // 2. WE ARE
         if(anchorLink == 'weare'){
            showWeare();
         }        

         // 3. SHOWREEL
         if(anchorLink == 'showreel'){
            showShowreel();
         }
         
         // 4. CLIENTS
         if(anchorLink == 'clients'){
            showClients();
         }
         
         // 5. PROCESS
         if(anchorLink == 'process'){
            showProcess();
            
         }
*/
      },
      onLeave: function(index, nextIndex, direction){
         var leavingSection = $(this);

         changeSlideNav(nextIndex-1);
                  
         if(nextIndex == 1){
            showIntro();
         }
         
         if(nextIndex == 2){
            showWeare();
         }
         
         if(nextIndex == 3){
            showShowreel();
         }
         
         if(nextIndex == 4){
            showClients();
         }
         
         if(nextIndex == 5){
            showProcess();
            setTimeout(showTree(), 700);
         }
                  
// Leaving 1. INTRO  =======================================
         if(index == 1 && direction =='down'){
            setTimeout(hideIntro, 700);


            if(nextIndex == 2){
               // window.requestAnimationFrame(function() {
                  $('.section.fp-section').eq(index-1)
                     .css('z-index', 1)
                     .velocity({ 
                           translateY: '-60vh'  
                        }, {
                           duration: 800,
                           complete: function() { $(this).css("transform", "translateY(-100vh)") }
                        });
                  // });
                  // window.requestAnimationFrame(function() {
                     $('.section.fp-section').eq(index)
                        .css('z-index', 2)
                        .velocity({ translateY: ['-100vh', '0vh'] }, {duration: 800});
                  // });
            }

            if(nextIndex == 3){
               showWeare();

               $('.section.fp-section').eq(index-1)
                  .css('z-index', 2)
                  .velocity({ 
                        translateY: '-100vh' 
                     }, {
                        duration: 800, 
                        easing: [0.645, 0.045, 0.355, 1],
                        complete: function() { $(this).css("transform", "translateY(-100vh)"); }
                     });

               $('.section.fp-section').eq(index)
                  .css('z-index', 1)
                  .velocity({ translateY: ['-200vh', '-50vh'] }, 1500); 

               $('.section.fp-section').eq(nextIndex-1)
                  .velocity({ 
                        translateY: ['-200vh', '-100vh']
                     }, {
                        duration: 800, 
                        delay: 400,
                        easing: [0.645, 0.045, 0.355, 1],
                        begin: function() { $(this).css('z-index', 3) },
                        complete: hideWeare
                  });   
            }

            if(nextIndex == 4){
               showWeare();

               var index3start = false;
               var index4start = false;

               $('.section.fp-section').eq(index-1)
                  .css('z-index', 1)
                  .velocity({ 
                        translateY: ['-100vh', '0']   
                     }, {
                        duration: 850,
                        easing: [0.55, 0.085, 0.68, 0.53]
                     });

               $('.section.fp-section').eq(index)
                  .css('z-index', 1)
                  .velocity({ 
                        translateY: ['-200vh', '0vh'] 
                     }, {
                        duration: 1150,
                        easing: [0.55, 0.085, 0.68, 0.53],
                        progress: function(elements, c, r, s, t) {
                           if(c > 0.45 && !index3start) {
                              index3start = true;
                              from1to3();
                           }
                        }
                     });


               $('.section.fp-section').eq(index+1)
                  .css('z-index', 0);

               $('.section.fp-section').eq(nextIndex-1)
                  .css('z-index', 0);


               function from1to3() {
                  $('.section.fp-section').eq(index+1)                  
                     .velocity({ 
                           translateY: ['-300vh', '-100vh'] 
                        },{
                           duration: 750,
                           // delay: 400,
                           easing: [0.55, 0.085, 0.68, 0.53],
                           progress: function(elements, c, r, s, t) {
                              if(c > 0.01 && !index4start) {
                                 index4start = true;
                                 $(this).css('z-index', 1)
                                 from1to4();
                              }
                           }
                        });   
               }

               function from1to4() {
                  $('.section.fp-section').eq(nextIndex-1).velocity({ 
                        translateY: ['-300vh', '-200vh']
                     }, {
                        duration: 700, 
                        // delay: 470,
                        easing: [0.55, 0.085, 0.68, 0.53],
                        progress: function(elements, c, r, s, t) {
                           if (c > 0.1)
                           $(this).css('z-index', 1)
                        },
                        complete: function() { hideWeare(); hideShowreel();}
                  });   
               }
            }

            if(nextIndex == 5){
               showWeare();

               var index3start = false;
               var index4start = false;
               var index5start = false;

               $('.section.fp-section').eq(index-1)
                  .css('z-index', 1)
                  .velocity({ 
                        translateY: ['-100vh', '0']   
                     }, {
                        duration: 850,
                        easing: [0.55, 0.085, 0.68, 0.53]
                     });

               $('.section.fp-section').eq(index)
                  .css('z-index', 1)
                  .velocity({ 
                        translateY: ['-200vh', '0vh'] 
                     }, {
                        duration: 1150,
                        easing: [0.55, 0.085, 0.68, 0.53],
                        progress: function(elements, c, r, s, t) {
                           if(c > 0.45 && !index3start) {
                              index3start = true;
                              from1to3();
                           }
                        }
                     });


               $('.section.fp-section').eq(index+1)
                  .css('z-index', 0);

               $('.section.fp-section').eq(nextIndex-2)
                  .css('z-index', 0);

               $('.section.fp-section').eq(nextIndex-1)
                  .css('z-index', 0);


               function from1to3() {
                  $('.section.fp-section').eq(index+1)                  
                     .velocity({ 
                           translateY: ['-300vh', '-100vh'] 
                        },{
                           duration: 800,
                           // delay: 400,
                           easing: [0.55, 0.085, 0.68, 0.53],
                           progress: function(elements, c, r, s, t) {
                              if(c > 0.25 && !index4start) {
                                 index4start = true;
                                 $(this).css('z-index', 1)
                                 from1to4();
                              }
                           }
                        });   
               }

               function from1to4() {
                  $('.section.fp-section').eq(nextIndex-2).velocity({ 
                        translateY: ['-400vh', '-200vh']
                     }, {
                        duration: 700, 
                        // delay: 470,
                        easing: [0.55, 0.085, 0.68, 0.53],
                        progress: function(elements, c, r, s, t) {
                           if (c > 0.01 && !index5start){
                              index5start = true;
                              $(this).css('z-index', 1);
                              from1to5();
                           }
                        },
                        complete: function() { hideWeare(); hideShowreel();}
                  });   
               }

               function from1to5() {
                  $('.section.fp-section').eq(nextIndex-1).velocity({ 
                        translateY: ['-400vh', '-300vh']
                     }, {
                        duration: 620, 
                        // delay: 470,
                        easing: [0.55, 0.085, 0.68, 0.53],
                        progress: function(elements, c, r, s, t) {
                           if (c > 0.1)
                           $(this).css('z-index', 1)
                        },
                        complete: function() { hideWeare(); hideShowreel();}
                  });   
               }
            }
         }
         
// Leaving 2. WE ARE =============================
         if(index == 2 && direction =='down'){
            setTimeout(hideWeare, 700);
            $('#section_weare .wrap_screen').velocity("stop");
            $('.box_outerRing.pulseCenter').removeClass('animatePulse');
            $('.box_outerRing.pulseSide').removeClass('animatePulse');

            if(nextIndex == 3){
               $('.section.fp-section').eq(index-1)
                  .css('z-index', 1)
                  .velocity({ translateY: ['-160vh', '-100vh'] }, 800);

               $('.section.fp-section').eq(index)
                  .css('z-index', 2)
                  .velocity({ translateY: ['-200vh', '-100vh'] }, 800);
            }


            if(nextIndex == 4){
               showShowreel();
               $('.section.fp-section').eq(index-1)
                  .css('z-index', 2)
                  .velocity({ 
                        translateY: '-200vh' 
                     }, {
                        duration: 800, 
                        easing: [0.645, 0.045, 0.355, 1],
                        complete: function() { $(this).css("transform", "translateY(-200vh)"); }
                     });

               $('.section.fp-section').eq(index)
                  .css('z-index', 1)
                  .velocity({ translateY: ['-260vh', '-160vh'] }, { 
                     duration: 1500,
                     complete: function() { 
                        $(this).css({
                           "transform": "translateY(-200vh)",
                           "z-index": 0
                        }); 
                     }
                  });   

               $('.section.fp-section').eq(nextIndex-1)
                  .velocity({ 
                        translateY: ['-300vh', '-200vh']
                     }, {
                        duration: 800, 
                        delay: 400,
                        easing: [0.645, 0.045, 0.355, 1],
                        begin: function() { $(this).css('z-index', 3) },
                        complete: function() { 
                           hideWeare(); 
                           hideShowreel();
                           $(this).css('z-index', 1)
                        }
                  });      
            }

            if(nextIndex == 5){
               showWeare();

               var index4start = false;
               var index5start = false;

               $('.section.fp-section').eq(index-1)
                  .css('z-index', 1)
                  .velocity({ 
                        translateY: ['-200vh', '-100vh'] 
                     }, {
                        duration: 850,
                        easing: [0.55, 0.085, 0.68, 0.53]
                     });

               $('.section.fp-section').eq(index)
                  .css('z-index', 1)
                  .velocity({ 
                        translateY: ['-300vh', '-100vh'] 
                     }, {
                        duration: 1150,
                        easing: [0.55, 0.085, 0.68, 0.53],
                        progress: function(elements, c, r, s, t) {
                           if(c > 0.45 && !index4start) {
                              index4start = true;
                              from2to4();
                           }
                        }
                     });


               $('.section.fp-section').eq(index+1)
                  .css('z-index', 0);

               $('.section.fp-section').eq(nextIndex-1)
                  .css('z-index', 0);


               function from2to4() {
                  $('.section.fp-section').eq(index+1)                  
                     .velocity({ 
                           translateY: ['-400vh', '-200vh'] 
                        },{
                           duration: 750,
                           // delay: 400,
                           easing: [0.55, 0.085, 0.68, 0.53],
                           progress: function(elements, c, r, s, t) {
                              if(c > 0.01 && !index5start) {
                                 index5start = true;
                                 $(this).css('z-index', 1);
                                 from2to5();
                              }
                           }
                        });   
               }

               function from2to5() {
                  $('.section.fp-section').eq(nextIndex-1).velocity({ 
                        translateY: ['-400vh', '-300vh']
                     }, {
                        duration: 700, 
                        // delay: 470,
                        easing: [0.55, 0.085, 0.68, 0.53],
                        progress: function(elements, c, r, s, t) {
                           if (c > 0.01)
                              $(this).css('z-index', 1)
                        },
                        complete: function() { hideWeare(); hideShowreel();}
                  });   
               }     
            }
         }

         else if(index == 2 && direction == 'up'){
            setTimeout(hideWeare, 700);
            $('#section_weare .wrap_screen').velocity("stop");
            $('.box_outerRing.pulseCenter').removeClass('animatePulse');
            $('.box_outerRing.pulseSide').removeClass('animatePulse');

            if(nextIndex == 1){
               $('.section.fp-section').eq(index-1)
                  .css('z-index', 1)
                  .velocity({ translateY: ['-60vh', '-100vh'] }, {
                     duration: 800,
                     complete: function() { 
                        $(this).css({
                           "transform": "translateY(-200vh)",
                           "z-index": "0"
                        })
                     }
                  });

               $('.section.fp-section').eq(index-2)
                  .css('z-index', 2)
                  .velocity({ translateY: ['0', '-100vh'] }, {
                     duration: 800,
                     complete: function() { $(this).css("z-index", "1")}
                  });
            }
         }
         
// Leaving 3. SHOWREEL ====================================
         if(index == 3 && direction =='down'){
            setTimeout(hideShowreel, 700);

            if(nextIndex == 4){
               $('.section.fp-section').eq(index-1)
                  .css('z-index', 1)
                  .velocity({ translateY: ['-260vh', '-200vh'] }, 800);

               $('.section.fp-section').eq(index)
                  .css('z-index', 2)
                  .velocity({ translateY: ['-300vh', '-200vh'] }, 800);
            }

            if(nextIndex == 5){
               showClients();

               $('.section.fp-section').eq(index-1)
                  .css('z-index', 2)
                  .velocity({ 
                        translateY: '-300vh' 
                     }, {
                        duration: 800, 
                        easing: [0.645, 0.045, 0.355, 1],
                        complete: function() { $(this).css("transform", "translateY(-400vh)"); }
                     });

               $('.section.fp-section').eq(index)
                  .css('z-index', 1)
                  .velocity({ translateY: ['-360vh', '-260vh'] }, 1500);   

               $('.section.fp-section').eq(nextIndex-1)
                  .velocity({ 
                        translateY: ['-400vh', '-300vh']
                     }, {
                        duration: 800, 
                        delay: 400,
                        easing: [0.645, 0.045, 0.355, 1],
                        begin: function() { $(this).css('z-index', 3) },
                        complete: function() {
                           hideWeare();
                           hideClients();
                        }
                  });   
            }
         }

         else if(index == 3 && direction == 'up'){
            setTimeout(hideShowreel, 700);

            if(nextIndex == 2){
               $('.section.fp-section').eq(index-1)
                  .css('z-index', 1)
                  .velocity({ translateY: ['-160vh', '-200vh'] }, {
                     duration: 800,
                     complete: function() { $(this).css("transform", "translateY(-300vh)"); }
                  });

               $('.section.fp-section').eq(index-2)
                  .css('z-index', 2)
                  .velocity({ translateY: ['-100vh', '-200vh'] }, 800);
            }


            if(nextIndex == 1){
               showWeare();

               $('.section.fp-section').eq(index-1)
                  .css('z-index', 2)
                  .velocity({ 
                        translateY: '-100vh' 
                     }, {
                        duration: 800, 
                        easing: [0.645, 0.045, 0.355, 1],
                        complete: function() { 
                           $(this)
                              .css({
                                 "transform": "translateY(-300vh)",
                                 "z-index": 1
                              });
                        }
                     });

               $('.section.fp-section').eq(index-2)
                  .css('z-index', 1)
                  .velocity({ 
                     translateY: ['-40vh', '-140vh'] 
                  },{
                     duration: 1500,
                     complete: function() { $(this).css("transform", "translateY(-100vh)"); }
                  });   

               $('.section.fp-section').eq(nextIndex-1)
                  .velocity({ 
                        translateY: ['0vh', '-100vh']
                     }, {
                        duration: 800, 
                        delay: 400,
                        easing: [0.645, 0.045, 0.355, 1],
                        begin: function() {$(this).css('z-index', 2)},
                        complete: hideWeare
                  });   
            }
         }
         
// Leaving 4. CLIENTS =================================
         if(index == 4 && direction =='down'){
            setTimeout(hideClients, 700);
            $('.wrap_clients').velocity("stop");

            $('.section.fp-section').eq(index-1)
               .css('z-index', 1)
               .velocity({ translateY: ['-360vh', '-300vh'] }, 800);

            $('.section.fp-section').eq(index)
               .css('z-index', 2)
               .velocity({ translateY: ['-400vh', '-300vh'] }, 800);
         }

         else if(index == 4 && direction == 'up'){
            setTimeout(hideClients, 700);
            $('.wrap_clients').velocity("stop");


            if(nextIndex == 1){
               showWeare();
               
               var index1start = false;
               var index2start = false;

               $('.section.fp-section').eq(index-1)
                  .css('z-index', 1)
                  .velocity({ 
                        translateY: ['-200vh', '-300vh'] 
                     }, {
                        duration: 850,
                        easing: [0.55, 0.085, 0.68, 0.53]
                     });

               $('.section.fp-section').eq(index-2)
                  .css('z-index', 2)
                  .velocity({ 
                        translateY: ['-100vh', '-300vh'] 
                     }, {
                        duration: 1150,
                        easing: [0.55, 0.085, 0.68, 0.53],
                        progress: function(elements, c, r, s, t) {
                           if(c > 0.45 && !index4start) {
                              index4start = true;
                              from4to2();
                           }
                        }
                     });


               $('.section.fp-section').eq(index-3)
                  .css('z-index', 0);

               $('.section.fp-section').eq(nextIndex-1)
                  .css('z-index', 0);


               function from4to2() {
                  $('.section.fp-section').eq(index-3)                  
                     .velocity({ 
                           translateY: ['0vh', '-200vh'] 
                        },{
                           duration: 750,
                           // delay: 400,
                           easing: [0.55, 0.085, 0.68, 0.53],
                           progress: function(elements, c, r, s, t) {
                              if(c > 0.01 && !index5start) {
                                 index5start = true;
                                 $(this).css('z-index', 3);
                                 from4to1();
                              }
                           }
                        });   
               }

               function from4to1() {
                  $('.section.fp-section').eq(nextIndex-1).velocity({ 
                        translateY: ['0vh', '-100vh']
                     }, {
                        duration: 700, 
                        // delay: 470,
                        easing: [0.55, 0.085, 0.68, 0.53],
                        progress: function(elements, c, r, s, t) {
                           if (c > 0.01)
                              $(this).css('z-index', 4)
                        },
                        complete: function() { hideWeare(); hideShowreel();}
                  });   
               }     
            }


            if(nextIndex == 2){
               showWeare();
               showShowreel();

               $('.section.fp-section').eq(index-1)
                  .css('z-index', 2)
                  .velocity({ 
                        translateY: '-200vh' 
                     }, {
                        duration: 800, 
                        easing: [0.645, 0.045, 0.355, 1],
                        complete: function() { 
                           hideWeare();
                           $(this)
                              .css("transform", "translateY(-400vh)")
                              .css("z-index", 1);
                        }
                     });

               $('.section.fp-section').eq(index-2)
                  .css('z-index', 1)
                  .velocity({ 
                     translateY: ['-100vh', '-240vh'] 
                  },{
                     duration: 1500,
                     complete: function() { 
                        $(this)
                           .css("transform", "translateY(-200vh)")
                           .css("z-index", 0); 
                     }
                  });   

               $('.section.fp-section').eq(nextIndex-1)
                  .velocity({ 
                        translateY: ['-100vh', '-200vh']
                     }, {
                        duration: 800, 
                        delay: 300,
                        easing: [0.645, 0.045, 0.355, 1],
                        begin: function() {$(this).css('z-index', 2)},
                        complete: hideShowreel
                  });      
            }


            if(nextIndex == 3){
               $('.section.fp-section').eq(index-1)
                  .css('z-index', 1)
                  .velocity({ translateY: ['-260vh', '-300vh'] }, {
                     duration: 800,
                     complete: function() { $(this).css("transform", "translateY(-400vh)"); }
                  });

               $('.section.fp-section').eq(index-2)
                  .css('z-index', 2)
                  .velocity({ translateY: ['-200vh', '-300vh'] }, 800);
            }
         }
         
// Leaving 5. PROCESS ==================================
         if(index == 5 && direction =='up'){
            setTimeout(hideProcess, 700);
            stopIcicles();
            // Reset scroll position on slide leave
            var myScroll = new IScroll('#section_process .fp-scrollable');
            myScroll.scrollTo(0, 0, 0);
            disableParticles(0);
            disableParticles(1);
            disableParticles(2);
            disableParticles(3);


            if(nextIndex == 1){
               showWeare();
               
               var index1start = false;
               var index2start = false;
               var index3start = false;

               $('.section.fp-section').eq(index-1)
                  .css('z-index', 1)
                  .velocity({ 
                        translateY: ['-300vh', '-400vh'] 
                     }, {
                        duration: 850,
                        easing: [0.55, 0.085, 0.68, 0.53]
                     });

               $('.section.fp-section').eq(index-2)
                  .css('z-index', 2)
                  .velocity({ 
                        translateY: ['-200vh', '-400vh'] 
                     }, {
                        duration: 1150,
                        easing: [0.55, 0.085, 0.68, 0.53],
                        progress: function(elements, c, r, s, t) {
                           if(c > 0.45 && !index3start) {
                              index3start = true;
                              from5to3();
                           }
                        }
                     });


               $('.section.fp-section').eq(index-3)
                  .css('z-index', 0);

               $('.section.fp-section').eq(nextIndex-1)
                  .css('z-index', 0);


               function from5to3() {
                  $('.section.fp-section').eq(index-3)                  
                     .velocity({ 
                           translateY: ['-100vh', '-300vh'] 
                        },{
                           duration: 750,
                           // delay: 400,
                           easing: [0.55, 0.085, 0.68, 0.53],
                           progress: function(elements, c, r, s, t) {
                              if(c > 0.01 && !index2start) {
                                 index2start = true;
                                 $(this).css('z-index', 3);
                                 from5to2();
                              }
                           }
                        });   
               }

               function from5to2() {
                  $('.section.fp-section').eq(nextIndex-1).velocity({ 
                        translateY: ['-100vh', '-200vh']
                     }, {
                        duration: 700, 
                        // delay: 470,
                        easing: [0.55, 0.085, 0.68, 0.53],
                        progress: function(elements, c, r, s, t) {
                           if (c > 0.01)
                              $(this).css('z-index', 4)
                        },
                        complete: function() { hideWeare(); hideShowreel();}
                  });   
               }  
            }



            if(nextIndex == 2){
               showWeare();
               
               var index2start = false;
               var index3start = false;

               $('.section.fp-section').eq(index-1)
                  .css('z-index', 1)
                  .velocity({ 
                        translateY: ['-300vh', '-400vh'] 
                     }, {
                        duration: 850,
                        easing: [0.55, 0.085, 0.68, 0.53]
                     });

               $('.section.fp-section').eq(index-2)
                  .css('z-index', 2)
                  .velocity({ 
                        translateY: ['-200vh', '-400vh'] 
                     }, {
                        duration: 1150,
                        easing: [0.55, 0.085, 0.68, 0.53],
                        progress: function(elements, c, r, s, t) {
                           if(c > 0.45 && !index3start) {
                              index3start = true;
                              from5to3();
                           }
                        }
                     });


               $('.section.fp-section').eq(index-3)
                  .css('z-index', 0);

               $('.section.fp-section').eq(nextIndex-1)
                  .css('z-index', 0);


               function from5to3() {
                  $('.section.fp-section').eq(index-3)                  
                     .velocity({ 
                           translateY: ['-100vh', '-300vh'] 
                        },{
                           duration: 750,
                           // delay: 400,
                           easing: [0.55, 0.085, 0.68, 0.53],
                           progress: function(elements, c, r, s, t) {
                              if(c > 0.01 && !index2start) {
                                 index2start = true;
                                 $(this).css('z-index', 3);
                                 from5to2();
                              }
                           }
                        });   
               }

               function from5to2() {
                  $('.section.fp-section').eq(nextIndex-1).velocity({ 
                        translateY: ['-100vh', '-200vh']
                     }, {
                        duration: 700, 
                        // delay: 470,
                        easing: [0.55, 0.085, 0.68, 0.53],
                        progress: function(elements, c, r, s, t) {
                           if (c > 0.01)
                              $(this).css('z-index', 4)
                        },
                        complete: function() { hideWeare(); hideShowreel();}
                  });   
               }  
            }


            if(nextIndex == 3){
               showClients();

               $('.section.fp-section').eq(index-1)
                  .css('z-index', 2)
                  .velocity({ 
                        translateY: '-300vh' 
                     }, {
                        duration: 800, 
                        easing: [0.645, 0.045, 0.355, 1],
                        complete: function() { 
                           hideWeare();
                           $(this)
                              .css("transform", "translateY(-500vh)")
                              .css("z-index", 1);
                        }
                     });

               $('.section.fp-section').eq(index-2)
                  .css('z-index', 1)
                  .velocity({ 
                     translateY: ['-200vh', '-340vh'] 
                  },{
                     duration: 1500,
                     complete: function() { 
                        $(this)
                           .css("transform", "translateY(-300vh)")
                           .css("z-index", 0); 
                     }
                  });   

               $('.section.fp-section').eq(nextIndex-1)
                  .velocity({ 
                        translateY: ['-200vh', '-300vh']
                     }, {
                        duration: 800, 
                        delay: 300,
                        easing: [0.645, 0.045, 0.355, 1],
                        begin: function() {$(this).css('z-index', 2)},
                        complete: hideClients
                  });
            }

            if(nextIndex == 4){
               $('.section.fp-section').eq(index-1)
                  .css('z-index', 1)
                  .velocity({ 
                     translateY: ['-360vh', '-400vh'] 
                  }, {
                     duration: 800,
                     complete: function() { $(this).css("transform", "translateY(-500vh)"); }
                  });

               $('.section.fp-section').eq(index-2)
                  .css('z-index', 2)
                  .velocity({ translateY: ['-300vh', '-400vh'] }, 800);
            }
         }
         
      }
   });
      
   // INTRO
   /* Scroll down on Scroll me button click */
   $('#button_scroll').click(function(e){
      e.preventDefault();
      $.fn.fullpage.moveSectionDown();
   });   
   
   // CLIENTS SLIDER
   var currentIndex = 1;
   var ePanes = $('#slider_feedback .item_feedback'),
      time  = 0,
      bar = new ProgressBar.Circle('#slider_feedbackProgress', {
      strokeWidth: 10,
      easing: 'linear',
      duration: 5000, // Set slide duration, ms
      color: 'rgba(31,50,53,1)',
      trailColor: 'rgba(31,50,53,0.2)',
      trailWidth: 10,
      svgStyle: null
   });
   
   function showPane(index){
       // hide current pane
       ePanes.eq(currentIndex).stop(true, true).velocity("transition.fadeOut");
       ePanes.eq(currentIndex).stop(true, true).find('span').velocity("transition.slideUpOut", { stagger: 100, drag: false });
       ePanes.eq(currentIndex).stop(true, true).find('.text_author').delay(300).velocity("transition.slideUpOut");
       // set current index : check in panes collection length
       currentIndex = index;
       if(currentIndex < 0) currentIndex = ePanes.length-1;
       else if(currentIndex >= ePanes.length) currentIndex = 0;
       // display pane
       ePanes.eq(currentIndex).stop(true, true).velocity("transition.fadeIn");
       ePanes.eq(currentIndex).stop(true, true).find('span').velocity("transition.slideUpIn", { stagger: 100, drag: false });
       ePanes.eq(currentIndex).stop(true, true).find('.text_author').delay(300).velocity("transition.slideUpIn");
   }
   
   function run(){
      bar.set(0);
      showPane(currentIndex+1);
      bar.animate(1.0, time, run);
   }
   

   // PLAYER
   var player = plyr.setup("#plyr_player",{
      iconUrl: 'resources/lib/plyr/sprite.svg',
      controls: ["progress", "mute"]
   })[0];

   $('.showPlayer').click(function(e){

      var videoStatic = $(this).data("static");
      var videoH264 = $(this).data("h264");
      var videoWebm = $(this).data("webm");
      var videoOgv = $(this).data("ogv");
      var pauseVideoId = $(this).data("pause");
      
      player.source({
         type: 'video',
         title:'',
         sources: [{
            src: videoH264,
            type: 'video/mp4'
         },
         {
            src: videoWebm,
            type: 'video/webm'
         }],
         poster: videoStatic,
      });
    
      // Show stuff
/*
      setTimeout(function(){
         $('#'+pauseVideoId)[0].pause();
      }, 600);
*/
      $('#modal_player')
         .velocity("transition.shrinkIn");
      $("#button_closePlayer")
         .delay(400)
         .velocity("transition.bounceIn");
      setTimeout(player.play, 500);
      
      $('#button_closePlayer').click(function(e){
         
         // Hide stuff
//          $('#'+pauseVideoId)[0].play();
         $('#modal_player')
            .velocity("transition.shrinkOut");
         $("#button_closePlayer")
            .velocity({opacity: 0});
         player.pause();
      });   
   });
   

   // CONTACT WINDOW
   $('#button_contactUs').click(function(e){
      // Show stuff
      $('#modal_contact')
         .velocity("transition.perspectiveLeftIn");
      $("#modal_contact .wrap_heading")
         .delay(300)
         .velocity("transition.slideUpIn");
      $("#modal_contact .item_input")
         .delay(500)
         .velocity("transition.flipYIn", { stagger: 100, drag: true });
      $("#modal_contact .wrap_submit")
         .delay(1000)
         .velocity("transition.bounceIn");
      $("#button_closeContact")
         .delay(500)
         .velocity("transition.bounceIn");
   });

   // CONTACT WINDOW
   // SHOW AFTER CLICK ON "LET'S SHOW IT"
   $('#tree_play').click(function(e){
      setTimeout(function() {
         for (var i = 0; i < statusParticles.length; i++) {
            if(statusParticles[i]) disableParticles(i);
         }

      }, 600);

      button_contactUs.click();
   });
   
   $('#button_closeContact').click(function(e){
      for (var i = 0; i < statusParticles.length; i++) {
         if(statusParticles[i]) enableParticles(i);
      }

      closeContact();
   });
   
   function closeContact(){
      // Hide stuff
      $("#modal_contact").velocity("stop");
      $('#modal_contact')
         .velocity("transition.fadeOut");
      $("#button_closeContact").velocity("stop");
      $("#modal_contact .wrap_heading").velocity("stop");
      $("#modal_contact .item_input").velocity("stop");
      $("#modal_contact .wrap_submit").velocity("stop");
      $("#button_closeContact")
         .velocity({opacity: 0});
      $("#modal_contact .wrap_heading")
         .velocity({opacity: 0});
      $("#modal_contact .item_input")
         .velocity({opacity: 0});
      $("#modal_contact .wrap_submit")
         .velocity({opacity: 0});
         
      setTimeout(function(){
            $('#modal_contact .wrap_sent').css({'display':'none'});
        }, 800);
        setTimeout(function(){
            $('#modal_contact .wrap_modal').css({'display':'table-cell', 'opacity':'1'});
        }, 800);
   }
      
         
   $('#button_sendContact').on('click', function(){

        var name = $('#input_name').val();
        var phone = $('#input_phone').val();
        var email = $('#input_email').val();
        var message = $('#input_message').val();

        if(name.length < 3){
            $('#form_name').addClass('state_invalid');
            $('#form_name').velocity('callout.shake');
        }else{
            $('#form_name').removeClass('state_invalid');
        }

        if(!(/^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i).test(email)){
            $('#form_email').addClass('state_invalid');
            $('#form_email').velocity("callout.shake");
        }else{
            $('#form_email').removeClass('state_invalid');
        }
        
        if(message.length < 3){
            $('#form_message').addClass('state_invalid');
            $('#form_message').velocity("callout.shake");
            
        }else{
            $('#form_message').removeClass('state_invalid');
        }

        if($('#modal_contact .item_input').hasClass('state_invalid') === false){
            $.ajax({
                'type': 'POST',
                'url': '/sender.php',
                'cache': false,
                'data': {
                    'name': name,
                    'telephone': phone,
                    'email': email,
                    'message': message
                },
                'timeout': 10000,
                'success': function()
                {
                   $('#modal_contact .wrap_modal').velocity("transition.slideDownBigOut");
                   $('#modal_contact .wrap_sent').delay(300).velocity("transition.slideDownBigIn");
                   
                    $('#modal_contact input').val('');
                    $('#modal_contact textarea').val('');

                     for (var i = 0; i < statusParticles.length; i++) {
                        if(statusParticles[i]) enableParticles(i);
                     }

                    setTimeout(closeContact, 2500);
                }
            });
        }
    });     
   
// PORTFOLIO SLIDER
   var sliderStatus = "closed";
   
   // Run slider
   var slider = $("#lightSlider_portfolio").lightSlider({
        item: 6,
        slideMove: 6,
        slideMargin: 0,
        pager: false,
        controls: true,
        loop: false,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600,
        responsive : [
            {
                breakpoint:1550,
                settings: {
                    item: 5,
                    slideMove: 5,
                  }
            },
            {
                breakpoint: 1350,
                settings: {
                    item: 4,
                    slideMove: 4
                  }
            },
            {
                breakpoint: 1100,
                settings: {
                    item: 3,
                    slideMove: 3
                  }
            },
            {
                breakpoint: 850,
                settings: {
                    item: 2,
                    slideMove: 2
                  }
            }
        ]
    });
   
   // Navigation
   $('#button_prev').click(function(e){
      slider.goToPrevSlide();
   });
   
   $('#button_next').click(function(e){
      slider.goToNextSlide();
   });
   
   // Show more portfolio
   $('#button_more').click(function(e){
      sliderStatus = "opened";

      // Show stuff
      $('#section_showreel').addClass('show_more');
      $('#button_more')
         .velocity("transition.fadeOut");
      $("#button_closeMore")
         .delay(500)
         .velocity("transition.bounceIn");
      
      $('#slider_portfolio .button_nav')
         .velocity("transition.fadeIn");
         
      // Hide more portfolio
      $('#button_closeMore').click(function(e){
         if (sliderStatus == "opened") {
            closeMore();
            sliderStatus = "closed";
         }
      });
      
      $('#section_showreel .wrap_screen').click(function(e){
         if (sliderStatus == "opened") {
            closeMore();
            sliderStatus = "closed";
         }
            
      });   
   });   
   
   function closeMore() {
      $('#section_showreel').removeClass('show_more');
      $('#slider_portfolio .button_nav')
         .velocity("transition.fadeOut");
      $('#button_more')
         .velocity("transition.fadeIn");
      $("#button_closeMore")
         .velocity("transition.fadeOut");
   }
      
   
   
// ANIMATION FUNCTIONS
   // Show 1. INTRO
   function showIntro (){
      $('#video_intro')[0].play();
      $("#button_playIntro")
         .delay(500)
         .velocity("transition.bounceIn");   
      $("#button_scroll")
         .delay(800)
         .velocity("transition.slideUpBigIn");
   }

   // Hide 1. INTRO
   function hideIntro (){
//       $('#video_intro')[0].pause();
      $("#button_playIntro").hide();
      $("#button_scroll").hide();   
      $("#button_playIntro").velocity("stop");
      $("#button_scroll").velocity("stop");
   }

   // Show 2. WE ARE
   function showWeare (){
      $("#section_weare .wrap_heading > div")
         .velocity("transition.slideUpBigIn", {stagger: 300, drag: true});
      $("#section_weare .name_experience .wrap_point")
         .delay(500)
         .velocity("transition.slideUpBigIn", {});
      $("#section_weare .name_synergy .wrap_point")
         .delay(700)
         .velocity("transition.slideUpBigIn", {});
      $("#section_weare .name_thinking .wrap_point")
         .delay(700)
         .velocity("transition.slideUpBigIn", {});

      $('.box_outerRing.pulseCenter').addClass('animatePulse');
      $('.box_outerRing.pulseSide').addClass('animatePulse');
   }

   // Hide 2. WE ARE
   function hideWeare (){
      $("#section_weare .wrap_heading > div").velocity("stop");
      $("#section_weare .wrap_heading > div").css('opacity', '0');
      $("#section_weare .item_point .wrap_point").velocity("stop");
      $("#section_weare .item_point .wrap_point").css('opacity', '0');
   }

   // Show 3. SHOWREEL
   function showShowreel (){
      $('#video_showreel')[0].play();
      $("#section_showreel .wrap_heading > div")
         .velocity("transition.slideUpBigIn", {stagger: 100, drag: false});
      $("#section_showreel .wrap_more")
         .velocity("transition.slideUpBigIn", {});
   }

   // Hide 3. SHOWREEL
   function hideShowreel (){
      $('#video_showreel')[0].pause();
      $("#section_showreel .wrap_more").velocity("stop");
      $("#section_showreel .wrap_more").css('opacity', '0');
      $("#section_showreel .wrap_heading > div")
         .velocity("stop");
      $("#section_showreel .wrap_heading > div").css('opacity', '0');
   }

   // Show 4. CLIENTS
   function showClients (){
      $("#slider_feedback")
         .velocity("transition.slideUpIn", {});
      $("#slider_feedbackProgress")
         .delay(700)
         .velocity("transition.bounceIn", {});
      $("#section_clients .item_logo img")
         .delay(400)
         .velocity("transition.slideLeftIn", {stagger: 100, drag: false}); 
      // Run clients feedback slider
      var currentIndex = 0;
      bar.set(0);
      run();
   }

   // Hide 4. CLIENTS
   function hideClients (){
      $("#section_clients .item_logo img").velocity("stop");
      $("#slider_feedback .item_feedback").hide();
      $("#slider_feedback .item_feedback span").hide();
      $("#slider_feedback .item_feedback .text_author").hide();
      $("#slider_feedbackProgress").hide();
      $("#section_clients .item_logo img").hide();
      
      var currentIndex = 0;
   bar.set(0); 
}

   // Show 5. PROCESS
   function showProcess (){
      $("#button_contactUs").velocity("transition.slideUpOut");
   }

   // Hide 5. PROCESS
   function hideProcess (){
      $("#button_contactUs").velocity("transition.slideDownIn");
   }

   modifyFPNav();

   //  FP nav ===================
   $('#fp-nav ul li').mouseenter(function(){
      var circleNavEnt = $('#fp-nav').find("svg .circleNav").eq($(this).index()+1);
      var hoverCy   = parseInt(circleNavEnt.attr('cy'));
      var currentCy = parseInt($('#fp-nav').find("svg .circleNav.current").attr('cy'));
      
      if(hoverCy != currentCy) circleNavEnt.velocity({ r: 5 }, 200);
   })
   .mouseleave(function(){
      var circleNavLeav = $('#fp-nav').find("svg .circleNav").eq($(this).index()+1);
      circleNavLeav.velocity({ r: 0 }, 200);
   });


   function changeSlideNav(slideNumber) {
      var circleNavLeav = $('#fp-nav').find("svg .circleNav").eq(slideNumber+1);
      circleNavLeav.attr('r', 0);

      var circleNavClick = $('#fp-nav').find("svg .circleNav").eq(slideNumber);
      var goTo = parseFloat($('#fp-nav').find('svg .circleNav').eq(slideNumber+1).attr('cy'));
      var lengthWay = Math.abs(goTo - circleNavClick.attr('cy'));

      $('#fp-nav').find('svg .circleNav.current')
         .velocity("finish")
         .velocity({ r: [ 8 , [ 0.895, 0.03, 0.685, 0.22 ]]}, 230 )
         .velocity({ cy: goTo }, Math.abs(15 * lengthWay))
         .velocity({ r: [ 5 , [ 0.215, 0.61, 0.355, 1 ]] }, 230 );
   }
   // END FP nav ===================
}



var prevFPS = 0;

window.countFPS = (function () {
  var lastLoop = (new Date()).getMilliseconds();
  var count = 1;
  var fps = 0;

  return function () {
    var currentLoop = (new Date()).getMilliseconds();
    if (lastLoop > currentLoop) {
      fps = count;
      count = 1;
    } else {
      count += 1;
    }
    lastLoop = currentLoop;
    return fps;
  };
}());
