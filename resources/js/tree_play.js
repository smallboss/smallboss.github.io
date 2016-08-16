var allowedStop = false;

// SHOW TREEPLAY ################################
function showTreePlay(){
   $('#tree_play').find('#rect_play').velocity({ 
      x: "447.2",
      y: "1405.3",
      width: "66.8",
      height: "66.8"
   }, {
      duration: 3850,
      frequency: 615,
      friction: 645,
      frequency_2: 465,
      friction_2: 525,
      anim: 0,
      easing: "dynamicSpringExpanded",
      complete: function() {allowedStop = true;},
      progress: function(elements, c, r, s, t) {
         if(c > 0.3) $("#tree_play").find('#rect_play').velocity("finish");
     }
   });

   $('#tree_play').find('#tree_circle').velocity({ 
      x: "440.7",
      y: "1398.9",
      width: "79.6",
      height: "79.6"
   }, {
      duration: 3850,
      frequency: 615,
      friction: 645,
      frequency_2: 465,
      friction_2: 525,
      anim: 0,
      easing: "dynamicSpringExpanded",
      progress: function(elements, c, r, s, t) {
         if(c > 0.3) $("#tree_play").find('#tree_circle').velocity("finish");
      }
   });

   $('#tree_play').find('#play_polygon').velocity({ 
      x: "460.5",
      y: "1419",
      width: "40",
      height: "40"
   }, {
      duration: 3850,
      frequency: 615,
      friction: 645,
      frequency_2: 465,
      friction_2: 525,
      anim: 0,
      easing: "dynamicSpringExpanded",
      progress: function(elements, c, r, s, t) {
         if(c > 0.3) $("#tree_play").find('#play_polygon').velocity("finish");
      }
   });
};


$( document ).ready(function() {
// MOUSEENTER #################################
   $('#tree_play').mouseenter(function(){
      if(allowedStop){
         $(this).find('#rect_play'   ).velocity("stop", "leave_rect"   );
         $(this).find('#tree_circle' ).velocity("stop", "leave_circle" );
         $(this).find('#play_text'   ).velocity("stop");
         $(this).find('#play_polygon').velocity("stop", "leave_polygon");
      }
      else{
         $(this).find('#rect_play'   ).velocity("finish");
         $(this).find('#tree_circle' ).velocity("finish");
         $(this).find('#play_polygon').velocity("finish");
      }


      // #rect_play =============================
      $('#tree_play').find('#rect_play').velocity({ 
         x:     "415",
         width: "138.1"
      }, {
         duration: 300,
         easing: [1,.0,.86,.53],
         queue: "enter_rect"
      })
      .velocity({ 
         x:     "349",
         width: "267.2"
      }, {
         duration: 1630,
         frequency: 370,
         friction: 630,
         frequency_2: 220,
         friction_2: 320,
         easing: "dynamicSpring",
         queue: "enter_rect",
         progress: function(elements, c, r, s, t) {
           if(c > 0.3) $("#tree_play").find('#rect_play').velocity("finish");
         }
      })
      .dequeue("enter_rect");


      //#tree_circle =============================
      $('#tree_play').find('#tree_circle').velocity({ 
         x:     "410.8",
         width: "143.5" 
      },{
         duration: 300,
         easing: [1,.0,.86,.53],
         queue: "enter_circle"
      })
      .velocity({ 
         x:     "339",
         width: "287" 
      },{
         duration: 1630,
         frequency: 370,
         friction: 630,
         frequency_2: 220,
         friction_2: 320,
         easing: "dynamicSpring",
         queue: "enter_circle",
         progress: function(elements, c, r, s, t) {
           if(c > 0.3) $("#tree_play").find('#tree_circle').velocity("finish");
         }
      })
      .dequeue("enter_circle");


      //#play_text =============================  
      $('#tree_play').find('#play_text').velocity({
         width: 128,
         x: 417
         
      }, {
         duration: 300,
         easing: [1,.0,.86,.53],
         queue: "enter_text"
      })
      .velocity({
         width: 188,
         x: 387
      }, {
         duration: 1630,
         frequency: 370,
         friction: 630,
         frequency_2: 220,
         friction_2: 320,
         easing: "dynamicSpring",
         queue: "enter_text",
         progress: function(elements, c, r, s, t) {
           if(c > 0.3) $("#tree_play").find('#play_text').velocity("finish");
         }
      })
      .dequeue("enter_text");

      //#play-polygon ============================= 
      $('#tree_play').find('#play_polygon').velocity({
         x: 481.5,
         y: 1436,
         width: 0,
         height: 0
      }, 480, [.67,0,.32,1]
      );
   });



   // mouseleave #################################
   $('#tree_play').mouseleave(function(){

      if(allowedStop){
         $(this).find('#rect_play'   ).velocity("stop", "enter_rect"  );
         $(this).find('#tree_circle' ).velocity("stop", "enter_circle");
         $(this).find('#play_text'   ).velocity("stop", "enter_text"  );
         $(this).find('#play_polygon').velocity("stop");
      }


      // #rect_play =============================
      var currentWidthRect = parseFloat($('#rect_play').attr('width'));
      $(this).find('#rect_play')
      .velocity({ 
         x:     480 - currentWidthRect / 4,
         width: currentWidthRect / 2
      }, {
         duration: 300,
         easing: [1,.0,.86,.53],
         queue: "leave_rect"
      })
      .velocity({ 
         x: "447.2",
         width: "66.8",
      }, {
         duration: 1630,
         frequency: 370,
         friction: 630,
         frequency_2: 220,
         friction_2: 320,
         easing: "dynamicSpring",
         queue: "leave_rect",
         progress: function(elements, c, r, s, t) {
           if(c > 0.3) $("#tree_play").find('#rect_play').velocity("finish");
         }
      })
      .dequeue("leave_rect");


      // tree_circle =============================
      var currentWidthCircle = parseFloat($('#tree_circle').attr('width'));
      $(this).find('#tree_circle')
      .velocity({ 
         x:     480 - currentWidthCircle / 4,
         width: currentWidthCircle / 2
      },{
         duration: 300,
         easing: [1,.0,.86,.53],
         queue: "leave_circle"
      })
      .velocity({ 
         x:     "440.7",
         width: "79.559998"
      }, {
         duration: 1630,
         frequency: 370,
         friction: 630,
         frequency_2: 220,
         friction_2: 320,
         easing: "dynamicSpring",
         queue: "leave_circle",
         progress: function(elements, c, r, s, t) {
           if(c > 0.3) $("#tree_play").find('#tree_circle').velocity("finish");
         }
      })
      .dequeue("leave_circle");
      

      // play_text =============================
      $(this).find('#play_text').velocity({
         x: 481.5,
         width: 0
      }, {
         duration:480,
         easing: [.67,0,.32,1]
      });


      // play_polygon =============================
      $(this).find('#play_polygon').velocity({ 
         x: "471",
         y: "1428",
         width: "20",
         height: "20"
      },{
         duration: 300,
         easing: [1,.0,.86,.53],
         queue: "leave_polygon"
      })
      .velocity({ 
         x: "460.5",
         y: "1419",
         width: "40",
         height: "40"
      },{
         duration: 1630,
         frequency: 370,
         friction: 630,
         frequency_2: 220,
         friction_2: 320,
         easing: "dynamicSpring",
         queue: "leave_polygon",
         progress: function(elements, c, r, s, t) {
           if(c > 0.3) $("#tree_play").find('#play_polygon').velocity("finish");
         }
      })
      .dequeue("leave_polygon");
   });
});