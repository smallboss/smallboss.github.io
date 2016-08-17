var true_waypoint = 0;
var addEv = false;

var startShowTree = false;
var startCircleStick = false;
var endLineUnderStick = false;
var startCircleNote = false;

var waypoint_stick = null;
var waypoint_note = null

var coef = 1;
var allowedStopTool = false;


var statusParticles = new Array();
statusParticles[0] = false;
statusParticles[1] = false;
statusParticles[2] = false;
statusParticles[3] = false;
statusParticles[4] = false;

var waypoint_particles_2 = 0;
var waypoint_particles_3 = 0;
var waypoint_particles_4 = 0;

function showTree(){
   coef = $('#svg_tree').height() / 1250;
   true_waypoint = $(window).height();
   waypoint_stick = (($('#svg_tree').height()) / 2.65) + $(window).height() / 5;
   waypoint_note  = (($('#svg_tree').height()) / 1.37) + $(window).height() / 5;


   waypoint_particles_3 = (($('#svg_tree').height()) / 1.8) + $(window).height() / 5;
   waypoint_particles_4 = (($('#svg_tree').height()) / 1.3) + $(window).height() / 5;


   startVal = false;
   true_waypoint = $(window).height();
   

   setTimeout(function(){
      if(!startShowTree){
         lineTopTree();
      }
      
      startShowTree = true;
   }, 1000);

   setTimeout(function(){startIcicles()},3500); // START Icicles

   // setTimeout(function(){enableParticles(0)},10);
   // setTimeout(function(){enableParticles(1)},10);
   // setTimeout(function(){enableParticles(2)},10);
   statusParticles[0] = true;
   statusParticles[1] = true;
   statusParticles[2] = true;
}

$( document ).ready(function() {

   var elem = document.getElementById('section_process');

    if (elem.addEventListener) {
      if ('onwheel' in document) {
        // IE9+, FF17+
        elem.addEventListener("wheel", onWheel);
      } 
      else if ('onmousewheel' in document) {
        // устаревший вариант события
        elem.addEventListener("mousewheel", onWheel);
      } else {
        // Firefox < 17
        elem.addEventListener("MozMousePixelScroll", onWheel);
      }
    } else { // IE8-
      elem.attachEvent("onmousewheel", onWheel);
    }


    // Это решение предусматривает поддержку IE8-
    function onWheel(e) {
      e = e || window.event;

      var delta = e.deltaY || e.detail || e.wheelDelta;

      if(e.wheelDelta === undefined) {
         delta *= 22;
      }

      if((true_waypoint + delta) < 0) delta = -(true_waypoint);

      if((true_waypoint + delta) < ($('.wrap_processSection').height()-100)){
         true_waypoint += delta;
      }


      if(true_waypoint > waypoint_stick && !startCircleStick) {
         startCircleStick = true;
         showCircleStick();
      }

      if(true_waypoint > waypoint_note && !startCircleNote && endLineUnderStick) {
         startCircleNote = true;
         showCircleNote();
      }

      if(true_waypoint < waypoint_stick) {
         if(!letShowIcicles){
            startIcicles();
         }
      } else {
         stopIcicles();
      }

      // waypoint particles ============
      if (true_waypoint > waypoint_particles_3 && statusParticles[0]) {
         statusParticles[0] = false;
         disableParticles(0);
         statusParticles[3] = true;
         enableParticles(3);
         console.log('x0');
      }

      if (true_waypoint > waypoint_particles_4 && statusParticles[1]) {
         statusParticles[1] = false;
         disableParticles(1);
         statusParticles[4] = true;
         enableParticles(4);
         console.log('x1');
      }


      if (true_waypoint < waypoint_particles_3 && statusParticles[3]) {
         statusParticles[3] = false;
         disableParticles(3);
         statusParticles[0] = true;
         enableParticles(0);
         console.log('x3');
      }

      if (true_waypoint < waypoint_particles_4 && statusParticles[4]) {
         statusParticles[4] = false;
         disableParticles(4);
         statusParticles[1] = true;
         enableParticles(1);
         console.log('x4');
      }
      // END waypoint particles ========

      // console.log(true_waypoint + " :WP");

      e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    }
 });

// PARTICLES JS ===============================================
$( document ).ready(function() {
   
   particlesJS("particles-js0", {"particles":{"number":{"value":13,"density":{"enable":false,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"polygon","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.9,"random":true,"anim":{"enable":true,"speed":3,"opacity_min":0,"sync":false}},"size":{"value":1.4,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":true}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":0.6313181133058181},"move":{"enable":false,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"bounce","bounce":false,"attract":{"enable":true,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},onresize: {
      enable: true,
      density_auto: true,
      density_area: 400},
      "resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
      // var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { } requestAnimationFrame(update); }; requestAnimationFrame(update);

   particlesJS("particles-js1", {"particles":{"number":{"value":13,"density":{"enable":false,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"polygon","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.9,"random":true,"anim":{"enable":true,"speed":3,"opacity_min":0,"sync":false}},"size":{"value":1.4,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":true}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":0.6313181133058181},"move":{"enable":false,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"bounce","bounce":false,"attract":{"enable":true,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},onresize: {
      enable: true,
      density_auto: true,
      density_area: 400},
      "resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
      //var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { } requestAnimationFrame(update); }; requestAnimationFrame(update);

   particlesJS("particles-js2", {"particles":{"number":{"value":13,"density":{"enable":false,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"polygon","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.9,"random":true,"anim":{"enable":true,"speed":3,"opacity_min":0,"sync":false}},"size":{"value":1.4,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":true}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":0.6313181133058181},"move":{"enable":false,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"bounce","bounce":false,"attract":{"enable":true,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},onresize: {
      enable: true,
      density_auto: true,
      density_area: 400},
      "resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
      // var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { } requestAnimationFrame(update); }; requestAnimationFrame(update);

   particlesJS("particles-js3", {"particles":{"number":{"value":13,"density":{"enable":false,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"polygon","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.9,"random":true,"anim":{"enable":true,"speed":3,"opacity_min":0,"sync":false}},"size":{"value":1.4,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":true}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":0.6313181133058181},"move":{"enable":false,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"bounce","bounce":false,"attract":{"enable":true,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},onresize: {
      enable: true,
      density_auto: true,
      density_area: 400},
      "resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
      // var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { } requestAnimationFrame(update); }; requestAnimationFrame(update);

   particlesJS("particles-js4", {"particles":{"number":{"value":13,"density":{"enable":false,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"polygon","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.9,"random":true,"anim":{"enable":true,"speed":3,"opacity_min":0,"sync":false}},"size":{"value":1.4,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":true}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":0.6313181133058181},"move":{"enable":false,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"bounce","bounce":false,"attract":{"enable":true,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},onresize: {
      enable: true,
      density_auto: true,
      density_area: 400},
      "resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
      // var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { } requestAnimationFrame(update); }; requestAnimationFrame(update);
});

function enableParticles(index) {
   cancelRequestAnimFrame(window.pJSDom[index].pJS.fn.checkAnimFrame);
   cancelRequestAnimFrame(window.pJSDom[index].pJS.fn.drawAnimFrame);
   window.pJSDom[index].pJS.fn.particlesEmpty();
   window.pJSDom[index].pJS.fn.canvasClear();

   window.pJSDom[index].pJS.particles.move.enable = true;
   window.pJSDom[index].pJS.fn.vendors.start();
}

function disableParticles(index) {
   window.pJSDom[index].pJS.particles.move.enable = false;
   window.pJSDom[index].pJS.fn.vendors.start();
}
// END PARTICLES JS ============================================

$( document ).ready(function() {
   $('.wrap_label').mouseenter(function(){
      if($(this).find('path').css('opacity') == 1){
         $(this).find('line').velocity("stop", "hide_line"   );
         $('#tooltip_' + $(this).attr('id').split('_')[1]).find('text .text_tooltip').each(function(){
            $(this).velocity("finish", "hide_letter");
         }); 

         allowedStopTool = false;

         showTooltip('#tooltip_' + $(this).attr('id').split('_')[1]);
      }
   })
   .mouseleave(function(){
      $(this).find('line').velocity("stop", "show_line");

      $('#tooltip_' + $(this).attr('id').split('_')[1]).find('text .text_tooltip').each(function(){
         $(this).velocity("stop", "show_letter");
      }); 

      hideTooltip('#tooltip_' + $(this).attr('id').split('_')[1]);
   });
});

// HIDE TOOLTIP ==========================
function hideTooltip (id) {
   if(!allowedStopTool){

      var startHideLetter = false;

      if($(id+ " line").attr('vect') != "h"){
         $(id+ " line").velocity({
            y1: $(id+ " line").attr("miny1"),
            y2: $(id+ " line").attr("miny2")
         }, {
            duration: 100,
            easing: 'linear',
            queue: "hide_line"
         })
         .dequeue("hide_line");
      }
      else {
         $(id+ " line").velocity({
            x1: $(id+ " line").attr("minx1"),
            x2: $(id+ " line").attr("minx2")
         }, {
            duration: 100,
            easing: 'linear',
            queue: "hide_line"
         })
         .dequeue("hide_line");
      }

      hideLetterTooltip($(id+ " text .text_tooltip").first());
   }
}


function hideLetterTooltip(letter) {
   var startHideLetter = false;
   var lasted = false;

   var x_end = -10;

   if($(letter).closest('text').attr('side') == 'right'){
      x_end = 10;
   }


   $(letter).velocity({
      x: '+='+x_end,
      fillOpacity: 0
   }, {
      duration: 200,
      delay: 40,
      easing: [.04,.76,.16,.9],
      queue: "hide_letter",
      progress: function(elements, c, r, s, t) {
         if(!startHideLetter && c > 0.2) {
            startHideLetter = true;

            if($(letter).next().index() <= 3) {
               hideLetterTooltip($(letter).next())
            }
         }
      }
   })
   .dequeue("hide_letter");
}


// SHOW TOOLTIP ==========================
function showTooltip (id) {
   var startShowLetter = false;

   if($(id+ " line").attr('vect') != 'h'){

      $(id+ " line").velocity({
         y1: $(id+ " line").attr("maxy1"),
         y2: $(id+ " line").attr("maxy2")
      }, {
         duration: 100,
         easing: 'linear',
         queue: "show_line"
      })
      .dequeue("show_line");
   }
   else {
      $(id+ " line").velocity({
         x1: $(id+ " line").attr("maxx1"),
         x2: $(id+ " line").attr("maxx2")
      }, {
         duration: 100,
         easing: 'linear',
         queue: "show_line"
      })
      .dequeue("show_line");
   }

   showLetterTooltip($(id+ " text .text_tooltip").first());
}


function showLetterTooltip(letter) {
   var startShowLetter = false;

   var x_end = -10;

   if($(letter).closest('text').attr('side') == 'right'){
      x_end = 10;
   }

   $(letter).velocity({
      x: [x_end, 0],
      fillOpacity: 1
   }, {
      duration: 400,
      delay: 40,
      easing: [.17,.67,.69,.99],
      queue: "show_letter",
      progress: function(elements, c, r, s, t) {
         if(!startShowLetter && c > 0.2) {
            startShowLetter = true;

            if($(letter).next().index() <= 3) {
               showLetterTooltip($(letter).next())
            }
         }
      }
   })
   .dequeue("show_letter");
}


// LINE TOP TREE =====================
function lineTopTree(){
   var startShowText = false;

   $('#line_top_tree').velocity({ 
      y2: 47
   }, {
      duration: 400,
      progress: function(elements, c, r, s, t) {
         if(!startShowText && c > 0.5) {
            startShowText = true;
            headText();
         }
      }
   });
};



// HEAD TEXT =====================
function headText() {
   var startCircleLamp    = false;
   var startLabelScript   = false;
   var startlineUnderText = false;

   $('#head_text').velocity({ 
      opacity: 1,
      translateY: [0, -35]
   }, {
      duration: 300,
      easing: "[0,.91,.24,1]",
      complete: function() {},
      progress: function(elements, c, r, s, t) {
         if(!startCircleLamp && c > 0.2) {
            startCircleLamp = true;
            showCircleLamp();
         }

         if(!startLabelScript && c > 0.4){
            startLabelScript = true;
            showLabel("#label_script");
         }

         if(!startlineUnderText && c > 0.8) {
            startlineUnderText = true;
            lineUnderText();
         }
      }
   });
};



// LINE UNDER TEXT =====================
function lineUnderText(){
   $('#line_under_text').velocity({ y2: 172 }, 200 );
};


var circleAnimOpt = {
   duration  : 700,
   frequency : 115,
   friction  : 165
};


// LAMP ====================================
function showCircleLamp() {
   var startLabelInspiration = false;
   var startLineUnderLamp = false;

   var currentWidthLamp = parseFloat($('#lamp').attr('width'));

   $('#lamp').velocity({ 
      x:      454.5 - currentWidthLamp / 4,
      y:      182 - currentWidthLamp / 4,
      height: 54,
      width:  53
   },{
      duration:  circleAnimOpt.duration,
      frequency: circleAnimOpt.frequency,
      friction:  circleAnimOpt.friction,
      easing: "dynamicSpring",
      progress: function(elements, c, r, s, t) {
         if(!startLabelInspiration && c > 0.2){
            startLabelInspiration = true;
            showLabel("#label_inspiration");
         }

         if(!startLineUnderLamp && c > 0.4){
            startLineUnderLamp = true;
            lineUnderLamp();
         }
      }
   })
}


// STICK ====================================
function showCircleStick() {
   var startLabelAnimation = false;
   var startLineUnderStick = false;

   var currentWidthStick = parseFloat($('#stick').attr('width'));
   
   $('#stick').velocity({ 
      x:      454.5 - currentWidthStick / 4,
      y:      528 - currentWidthStick / 4,
      height: 53,
      width:  53
   },{
      duration:  circleAnimOpt.duration,
      frequency: circleAnimOpt.frequency,
      friction:  circleAnimOpt.friction,
      easing: "dynamicSpring",
      progress: function(elements, c, r, s, t) {
         if(!startLabelAnimation && c > 0.1){
            startLabelAnimation = true;
            showLabel("#label_animation");
         }

         if(!startLineUnderStick && c > 0.7){
            startLineUnderStick = true;
            lineUnderStick()
         }
      }
   })
}


// NOTE ====================================
function showCircleNote() {
   var startLineUnderNote = false;

   var currentWidthStick = parseFloat($('#note').attr('width'));
   
   $('#note').velocity({ 
      x:      454.5 - currentWidthStick / 4,
      y:      1020 - currentWidthStick / 4,
      height: 53,
      width:  53
   },{
      duration:  circleAnimOpt.duration,
      frequency: circleAnimOpt.frequency,
      friction:  circleAnimOpt.friction,
      easing: "dynamicSpring",
      progress: function(elements, c, r, s, t) {
         if(!startLineUnderNote && c > 0.1){
            startLineUnderNote = true;
            lineUnderNote();
         }
      }
   })
}



// LINE UNDER LAMP =========================
function lineUnderLamp(){
   var startLabelStoryboard = false;
   var startLabelAnimation  = false;

   $('#line_under_lamp').velocity({ 
      y2: 518
   }, {
      duration: 550,
      complete: function() {
         // lineUnderStick();
      },
      progress: function(elements, c, r, s, t) {
         if(!startLabelStoryboard && c > 0.15){
            startLabelStoryboard  = true;
            showLabel("#label_storyboard");
         }

         if(!startCircleStick && c > 0.95 && true_waypoint > (waypoint_stick-$(window).height() / 5)){
            startCircleStick = true;
            showCircleStick();
         }
      }
   });
};


// LINE UNDER STICK =========================
function lineUnderStick(){
   var startLabelDrawing    = false;
   var startLabelAnimation  = false;
   var startLabel3DGraphics = false;
   var startLabelVFX        = false;
   var startLabelComposing  = false;

   $('#line_under_stick').velocity({ 
      y2: 1011
   }, {
      duration: 750,
      complete: function() {
         endLineUnderStick = true;
      },
      progress: function(elements, c, r, s, t) {
         if(!startLabelDrawing && c > 0.01){
            startLabelDrawing = true;
            showLabel("#label_drawing");
         }
         if(!startLabel3DGraphics && c > 0.45){
            startLabel3DGraphics = true;
            showLabel("#label_3dgraphics");
         }
         if(!startLabelVFX && c > 0.5){
            startLabelVFX = true;
            showLabel("#label_vfx");
         }
         if(!startLabelComposing && c > 0.98){
            startLabelComposing = true;
            showLabel("#label_compositing");
         }
         if(!startCircleNote && c > 0.9 && true_waypoint > waypoint_note && !startCircleNote){
            startCircleNote = true;
            showCircleNote();
         }
      }
   });
};


// LINE UNDER NOTE =========================
function lineUnderNote(){
   var startLabelMusic     = false;
   var startLabelVoiceover = false;
   var startLabelSFX       = false;
   var startTreePlay       = false;

   $('#line_under_note').velocity({ 
      y2: 1399
   }, {
      duration: 600,
      progress: function(elements, c, r, s, t) {
         if(!startLabelMusic && c > 0.15){
            startLabelMusic = true;
            showLabel("#label_music");
         }
         if(!startLabelVoiceover && c > 0.45){
            startLabelVoiceover = true;
            showLabel("#label_voiceover");
         }
         if(!startLabelSFX && c > 0.66){
            startLabelSFX = true;
            showLabel("#label_sfx");
         }
         if(!startTreePlay && c > 0.95){
            startTreePlay = true;
            showTreePlay();
         }
      }
   });
};



function showLabel(label){
   showLetter($(label).find(".group_label").children()[0]);
   showBullet($(label).find(".wrap_bullet"));
};

function showLetter(showingLetter) {
   var startedNext = false;
   $(showingLetter).velocity({
      opacity: 1,
      translateX: 15
   }, {
      duration: 140,
      easing: [0,.9,.71,.980,.91,.38,1],
      progress: function(elements, c, r, s, t) {
         if(c > 0.1){
            if (!startedNext && $(showingLetter).next().length != 0) {
               startedNext = true;
               showLetter($(showingLetter).next());
            }
         }
      }
   });
}

function showBullet(showingBullet) {
   $(showingBullet).velocity({
      opacity: 1,
      translateY: [0, -20]
   }, {
      duration: 140,
      complete: function() {
         showBranch("#branch_" + showingBullet
                                       .selector
                                       .split('_')[1]
                                       .split(' ')[0]
                                    );
      }
   });
}


function showBranch(branch) {
   var duration = 0;

   if(branch.search("script"     ) != -1) duration = 600;
   if(branch.search("inspiration") != -1) duration = 1000;
   if(branch.search("storyboard" ) != -1) duration = 1000;
   if(branch.search("animation"  ) != -1) duration = 700;
   if(branch.search("drawing"    ) != -1) duration = 850;
   if(branch.search("3dgraphics" ) != -1) duration = 1000;
   if(branch.search("vfx"        ) != -1){duration = 750;

      $(branch).velocity({
         x2: 404
      }, {
         duration: duration,
         easing: [.72,.39,.22,.77]
      });

      return 0;
   }
   if(branch.search("compositing") != -1) duration = 800;
   if(branch.search("music"      ) != -1) duration = 900;
   if(branch.search("voiceover"  ) != -1) duration = 650;
   if(branch.search("sfx"        ) != -1) duration = 550;

   $(branch).velocity({
      "stroke-dashoffset": 0
   }, {
      duration: duration,
      easing: [.72,.39,.22,.77]
   });
}

