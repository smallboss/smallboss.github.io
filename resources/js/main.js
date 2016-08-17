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
			showWeare();
			showShowreel();
			showClients();
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
			*/
			// 5. PROCESS
			if(anchorLink == 'process'){
				showProcess();
				showTree();
			}

		},
		onLeave: function(index, nextIndex, direction){
			var leavingSection = $(this);

			changeSlideNav(nextIndex-1);
						
			if(nextIndex == 1){
				// showIntro();
			}
			
			if(nextIndex == 2){
				// showWeare();
			}
			
			if(nextIndex == 3){
				// showShowreel();
			}
			
			if(nextIndex == 4){
				// showClients();
			}
			
			if(nextIndex == 5){
				// showProcess();
				// setTimeout(showTree(), 700);
			}
						
// Leaving 1. INTRO  =======================================
			if(index == 1 && direction =='down'){
				setTimeout(hideIntro, 700);

				if(nextIndex == 2){
					hideWeare();
					showWeare();

					$('.section.fp-section').eq(index-1)
						.css({
								'z-index': 1,
							   'animation': 'animFrom1To2_1 0.8s'
							});
							setTimeout(function() {
								$('.section.fp-section').eq(index-1).css('z-index', 0);
							}, 800);

					$('.section.fp-section').eq(index)
						.css({
								'z-index': 1,
							   'animation': 'animFrom1To2_2 0.8s'
						 	 });
							setTimeout(function() {
								$('.section.fp-section').eq(index).css('transform', 'translateY(-100vh)');
							}, 800);

				}

				if(nextIndex == 3){
					setTimeout(showShowreel, 800);

					$('.section.fp-section').eq(index-1)
						.css({
								'z-index': 3,
							   'animation': 'animFrom1To3_1 0.8s',
							   'animation-timing-function': 'cubic-bezier(0.645, 0.045, 0.355, 1)'
							});
							setTimeout(function() {
								$('.section.fp-section').eq(index-1).css('z-index', 0);
							}, 800);

					$('.section.fp-section').eq(index)
						.css('z-index', 1)
						.css('animation', 'animFrom1To3_2 1.5s 0.17s');
						setTimeout(function() {
							$('.section.fp-section').eq(index).css('z-index', 0);
						}, 1670);

					$('.section.fp-section').eq(nextIndex-1)
						.css('transform', 'translateY(-100vh)')
						.css({
								'z-index': 1,
							   'animation': 'animFrom1To3_3 0.8s 0.4s',
							   'animation-timing-function': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
						    });
							setTimeout(function() {
								$('.section.fp-section').eq(nextIndex-1).css('transform', 'translateY(-200vh)');
							}, 1200);
				}

				if(nextIndex == 4){
					hideClients();
					setTimeout(showClients, 1100);

					$('.section.fp-section').eq(index-1)
						.css({
								'z-index': 1,
							   'animation': 'animFrom1To4_1 0.7s',
							   'animation-timing-function': 'cubic-bezier(0.47, 0, 0.745, 0.715)'
							});
							setTimeout(function() {
								$('.section.fp-section').eq(index-1).css('z-index', 0);
							}, 600);

					$('.section.fp-section').eq(index)
						.css('z-index', 1)
						.css('transform', 'translateY(0vh)')
						.css('animation-timing-function', 'cubic-bezier(0.25, 0.46, 0.45, 0.94)')
						.css('animation', 'animFrom1To4_2 1.4s');
						setTimeout(function() {
							// $('.section.fp-section').eq(index).css('z-index', 0);
							$('.section.fp-section').eq(index).css('transform', 'translateY(-170vh)');
						}, 1400);

					$('.section.fp-section').eq(index+1)
						.css('transform', 'translateY(-100vh)')
						.css({
								'z-index': 1,
							   'animation': 'animFrom1To4_3 1.1s 0.4s',
							   'animation-timing-function': 'cubic-bezier(0.39, 0.575, 0.565, 1)',
						    });
							setTimeout(function() {
								$('.section.fp-section').eq(index+1).css('transform', 'translateY(-270vh)');
							}, 1550);

					$('.section.fp-section').eq(nextIndex-1)
						.css('transform', 'translateY(-100vh)')
						.css({
								'z-index': 1,
							   'animation': 'animFrom1To4_4 .9s 0.7s',
							   'animation-timing-function': 'cubic-bezier(0.39, 0.575, 0.565, 1)'
						    });
							setTimeout(function() {
								$('.section.fp-section').eq(nextIndex-1).css('transform', 'translateY(-300vh)');
							}, 1600);
				}

				if(nextIndex == 5){
					$('.section.fp-section').eq(index-1)
						.css({
								'z-index': 1,
							   'animation': 'animFrom1To5_1 0.7s',
							   'animation-timing-function': 'cubic-bezier(0.47, 0, 0.745, 0.715)'
							});
							setTimeout(function() {
								$('.section.fp-section').eq(index-1).css('z-index', 0);
							}, 600);

					$('.section.fp-section').eq(index)
						.css('z-index', 1)
						.css('transform', 'translateY(0vh)')
						.css('animation-timing-function', 'cubic-bezier(0.25, 0.46, 0.45, 0.94)')
						.css('animation', 'animFrom1To5_2 1.4s');
						setTimeout(function() {
							$('.section.fp-section').eq(index).css('transform', 'translateY(-170vh)');
						}, 1400);

					$('.section.fp-section').eq(index+1)
						.css('transform', 'translateY(-100vh)')
						.css({
								'z-index': 1,
							   'animation': 'animFrom1To5_3 1.1s 0.4s',
							   'animation-timing-function': 'cubic-bezier(0.39, 0.575, 0.565, 1)',
						    });
							setTimeout(function() {
								$('.section.fp-section').eq(index+1).css('transform', 'translateY(-270vh)');
							}, 1550);

					$('.section.fp-section').eq(index+2)
						.css('transform', 'translateY(-200vh)')
						.css({
								'z-index': 1,
							   'animation': 'animFrom1To5_4 1.1s 0.8s',
							   'animation-timing-function': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
						    });
							setTimeout(function() {
								$('.section.fp-section').eq(index+2).css('transform', 'translateY(-370vh)');
							}, 1900);


					$('.section.fp-section').eq(nextIndex-1)
						.css('transform', 'translateY(-300vh)')
						.css({
								'z-index': 1,
							   'animation': 'animFrom1To5_5 0.7s 1s',
							   'animation-timing-function': 'cubic-bezier(0.39, 0.575, 0.565, 1)'
						    });
							setTimeout(function() {
								$('.section.fp-section').eq(nextIndex-1).css('transform', 'translateY(-400vh)');
							}, 1700);
				}
			}
			
// Leaving 2. WE ARE =============================
			if(index == 2 && direction =='down'){
				setTimeout(function() {
					$('#section_weare .wrap_screen').velocity("stop");
					$('.box_outerRing.pulseCenter').removeClass('animatePulse');
					$('.box_outerRing.pulseSide').removeClass('animatePulse');
				}, 700);
				

				if(nextIndex == 3){
					hideShowreel();
					showShowreel();
					$('.section.fp-section').eq(index-1)
							.css({
									'z-index': 1,
								   'animation': 'animFrom2To3_2 0.8s'
								 });

								setTimeout(function() {
									$('.section.fp-section').eq(index-1).css('z-index', 0);
								}, 800);

					$('.section.fp-section').eq(index)
							.css({
									'z-index': 1,
								   'animation': 'animFrom2To3_3 0.8s',
								   'transform': 'translateY(-200vh)'
							 	 });
				}


				if(nextIndex == 4){
					hideClients();
					setTimeout(showClients, 700);

					$('.section.fp-section').eq(index-1)
						.css({
								'z-index': 3,
							   'animation': 'animFrom2To4_2 0.8s',
							   'animation-timing-function': 'cubic-bezier(0.645, 0.045, 0.355, 1)'
							});
							setTimeout(function() {
								$('.section.fp-section').eq(index-1).css('z-index', 0);
							}, 800);

					$('.section.fp-section').eq(index)
						.css('z-index', 1)
						.css('animation', 'animFrom2To4_3 1.5s 0.17s');
						setTimeout(function() {
							$('.section.fp-section').eq(index).css('z-index', 0);
						}, 1670);

					$('.section.fp-section').eq(nextIndex-1)
						.css('transform', 'translateY(-200vh)')
						.css({
								'z-index': 1,
							   'animation': 'animFrom2To4_4 0.8s 0.4s',
							   'animation-timing-function': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
						    });
							setTimeout(function() {
								$('.section.fp-section').eq(nextIndex-1).css('transform', 'translateY(-300vh)');
							}, 1200);		
				}

				if(nextIndex == 5){
					$('.section.fp-section').eq(index-1)
						.css({
								'z-index': 1,
							   'animation': 'animFrom2To5_2 0.7s',
							   'animation-timing-function': 'cubic-bezier(0.47, 0, 0.745, 0.715)'
							});
							setTimeout(function() {
								$('.section.fp-section').eq(index-1).css('z-index', 0);
							}, 600);

					$('.section.fp-section').eq(index)
						.css('z-index', 1)
						.css('transform', 'translateY(0vh)')
						.css('animation-timing-function', 'cubic-bezier(0.25, 0.46, 0.45, 0.94)')
						.css('animation', 'animFrom2To5_3 1.4s');
						setTimeout(function() {
							// $('.section.fp-section').eq(index).css('z-index', 0);
							$('.section.fp-section').eq(index).css('transform', 'translateY(-270vh)');
						}, 1400);

					$('.section.fp-section').eq(index+1)
						.css('transform', 'translateY(-100vh)')
						.css({
								'z-index': 1,
							   'animation': 'animFrom2To5_4 1.1s 0.4s',
							   'animation-timing-function': 'cubic-bezier(0.39, 0.575, 0.565, 1)',
						    });
							setTimeout(function() {
								$('.section.fp-section').eq(index+1).css('transform', 'translateY(-370vh)');
							}, 1550);

					$('.section.fp-section').eq(nextIndex-1)
						.css('transform', 'translateY(-200vh)')
						.css({
								'z-index': 1,
							   'animation': 'animFrom2To5_5 .9s 0.7s',
							   'animation-timing-function': 'cubic-bezier(0.39, 0.575, 0.565, 1)'
						    });
							setTimeout(function() {
								$('.section.fp-section').eq(nextIndex-1).css('transform', 'translateY(-400vh)');
							}, 1600);	
				}
			}

			else if(index == 2 && direction == 'up'){
				$('#section_weare .wrap_screen').velocity("stop");
				$('.box_outerRing.pulseCenter').removeClass('animatePulse');
				$('.box_outerRing.pulseSide').removeClass('animatePulse');

				if(nextIndex == 1){
					hideIntro();
					showIntro();

					$('.section.fp-section').eq(nextIndex-1)
							.css({
									'z-index': 2,
								   'animation': 'animFrom2To1_1 0.8s'
								 });
							setTimeout(function() {
								$('.section.fp-section').eq(nextIndex-1).css('transform', 'translateY(0vh)');
							}, 800);

					$('.section.fp-section').eq(index-1)
							.css({
									'z-index': 1,
								   'animation': 'animFrom2To1_2 0.8s'
							 	 });
							setTimeout(function() {
								$('.section.fp-section').eq(index-1).css('z-index', 0);
							}, 800);
				}
			}
			
// Leaving 3. SHOWREEL ====================================
			if(index == 3 && direction =='down'){
				if(nextIndex == 4){
					hideClients();
					showClients();

					$('.section.fp-section').eq(index-1)
							.css({
									'z-index': 1,
								   'animation': 'animFrom3To4_3 0.8s'
								 });

							setTimeout(function() {
								$('.section.fp-section').eq(index-1).css('z-index', 0);
							}, 800);

					$('.section.fp-section').eq(index)
							.css({
									'z-index': 1,
								   'animation': 'animFrom3To4_4 0.8s'
							 	 });
				}

				if(nextIndex == 5){
					$('.section.fp-section').eq(index-1)
						.css({
								'z-index': 3,
							   'animation': 'animFrom3To5_3 0.8s',
							   'animation-timing-function': 'cubic-bezier(0.645, 0.045, 0.355, 1)'
							});
							setTimeout(function() {
								$('.section.fp-section').eq(index-1).css('z-index', 0);
							}, 800);

					$('.section.fp-section').eq(index)
						.css('z-index', 1)
						.css('animation', 'animFrom3To5_4 1.5s 0.17s');
						setTimeout(function() {
							$('.section.fp-section').eq(index).css('z-index', 0);
						}, 1670);

					$('.section.fp-section').eq(nextIndex-1)
						.css('transform', 'translateY(-300vh)')
						.css({
								'z-index': 1,
							   'animation': 'animFrom3To5_5 0.8s 0.4s',
							   'animation-timing-function': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
						    });
							setTimeout(function() {
								$('.section.fp-section').eq(nextIndex-1).css('transform', 'translateY(-400vh)');
							}, 1200);	
				}
			}

			else if(index == 3 && direction == 'up'){
				if(nextIndex == 2){
					hideWeare();
					showWeare();
					$('.section.fp-section').eq(nextIndex-1)
							.css({
									'z-index': 2,
								   'animation': 'animFrom3To2_2 0.8s'
								 });
							setTimeout(function() {
								$('.section.fp-section').eq(nextIndex-1).css('transform', 'translateY(-100vh)');
							}, 800);

					$('.section.fp-section').eq(index-1)
							.css({
									'z-index': 1,
								   'animation': 'animFrom3To2_3 0.8s'
							 	 });
							setTimeout(function() {
								$('.section.fp-section').eq(index-1).css('z-index', 0);
							}, 800);
				}


				if(nextIndex == 1){
					hideIntro();
					setTimeout(showIntro, 700);

					$('.section.fp-section').eq(index-1)
						.css({
								'z-index': 3,
							   'animation': 'animFrom3To1_3 0.8s',
							   'animation-timing-function': 'cubic-bezier(0.645, 0.045, 0.355, 1)'
							});
							setTimeout(function() {
								$('.section.fp-section').eq(index-1).css('z-index', 0);
							}, 800);

					$('.section.fp-section').eq(index-2)
						.css('z-index', 1)
						.css('animation', 'animFrom3To1_2 1.5s 0.17s');
						setTimeout(function() {
							$('.section.fp-section').eq(index).css('z-index', 0);
						}, 1670);

					$('.section.fp-section').eq(nextIndex-1)
						.css('transform', 'translateY(-200vh)')
						.css({
								'z-index': 2,
							   'animation': 'animFrom3To1_1 0.8s 0.4s',
							   'animation-timing-function': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
						    });
							setTimeout(function() {
								$('.section.fp-section').eq(nextIndex-1).css('transform', 'translateY(0vh)');
							}, 1200);		
				}
			}
			
// Leaving 4. CLIENTS =================================
			if(index == 4 && direction =='down'){
				// showProcess();
				// setTimeout(showTree(), 700);
				$('.wrap_clients').velocity("stop");

				$('.section.fp-section').eq(index-1)
					.css({
							'z-index': 1,
						   'animation': 'animFrom4To5_4 0.8s'
						 });

					setTimeout(function() {
						$('.section.fp-section').eq(index-1).css('z-index', 0);
					}, 800);

				$('.section.fp-section').eq(index)
					.css({
							'z-index': 1,
						   'animation': 'animFrom4To5_5 0.8s',
						   'transform': 'translateY(-400vh)'
					 	 });
			}

			else if(index == 4 && direction == 'up'){
				$('.wrap_clients').velocity("stop");


				if(nextIndex == 1){
					hideIntro();
					setTimeout(showIntro, 1100);

					$('.section.fp-section').eq(index-1)
							.css({
									'z-index': 1,
								   'animation': 'animFrom4To1_4 0.7s',
								   'animation-timing-function': 'cubic-bezier(0.47, 0, 0.745, 0.715)'
								});
							setTimeout(function() {
								$('.section.fp-section').eq(index-1).css('z-index', 0);
							}, 600);

					$('.section.fp-section').eq(index-2)
							.css('z-index', 2)
							.css('transform', 'translateY(-300vh)')
							.css('animation-timing-function', 'cubic-bezier(0.25, 0.46, 0.45, 0.94)')
							.css('animation', 'animFrom4To1_3 1.4s');
							setTimeout(function() {
								$('.section.fp-section').eq(index).css('z-index', 0);
								$('.section.fp-section').eq(index).css('transform', 'translateY(-130vh)');
							}, 1400);

					$('.section.fp-section').eq(index-3)
							.css('transform', 'translateY(-200vh)')
							.css({
									'z-index': 3,
								   'animation': 'animFrom4To1_2 1.1s 0.4s',
								   'animation-timing-function': 'cubic-bezier(0.39, 0.575, 0.565, 1)',
							    });
							setTimeout(function() {
								$('.section.fp-section').eq(index+1).css('z-index', 0);
								$('.section.fp-section').eq(index+1).css('transform', 'translateY(0vh)');
							}, 1550);

					$('.section.fp-section').eq(nextIndex-1)
							.css('transform', 'translateY(-100vh)')
							.css({
									'z-index': 4,
								   'animation': 'animFrom4To1_1 .9s 0.7s',
								   'animation-timing-function': 'cubic-bezier(0.39, 0.575, 0.565, 1)'
							    });
							setTimeout(function() {
								$('.section.fp-section').eq(nextIndex-1).css('transform', 'translateY(0vh)');
							}, 1600);
				}


				if(nextIndex == 2){
					hideWeare();
					setTimeout(showWeare, 400);

					$('.section.fp-section').eq(index-1)
							.css({
									'z-index': 3,
								   'animation': 'animFrom4To2_4 0.8s',
								   'animation-timing-function': 'cubic-bezier(0.645, 0.045, 0.355, 1)'
								});
							setTimeout(function() {
								$('.section.fp-section').eq(index-1).css('z-index', 0);
							}, 800);

					$('.section.fp-section').eq(index-2)
							.css('z-index', 1)
							.css('animation', 'animFrom4To2_3 1.5s 0.17s');
							setTimeout(function() {
								$('.section.fp-section').eq(index-2).css('z-index', 0);
							}, 1670);

					$('.section.fp-section').eq(nextIndex-1)
							.css('transform', 'translateY(-300vh)')
							.css({
									'z-index': 2,
								   'animation': 'animFrom4To2_2 0.8s 0.4s',
								   'animation-timing-function': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
							    });
							setTimeout(function() {
								$('.section.fp-section').eq(nextIndex-1).css('transform', 'translateY(-100vh)');
							}, 1200);	
				}


				if(nextIndex == 3){
					hideShowreel();
					showShowreel();
					$('.section.fp-section').eq(nextIndex-1)
							.css({
									'z-index': 2,
								   'animation': 'animFrom4To3_3 0.8s'
								 });
							setTimeout(function() {
								$('.section.fp-section').eq(nextIndex-1).css('transform', 'translateY(-200vh)');
							}, 800);

					$('.section.fp-section').eq(index-1)
							.css({
									'z-index': 1,
								   'animation': 'animFrom4To3_4 0.8s'
							 	 });
							setTimeout(function() {
								$('.section.fp-section').eq(index-1).css('z-index', 0);
							}, 800);
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
				disableParticles(4);

				
				if(nextIndex == 1){
					hideIntro();
					setTimeout(hideIntro, 1500);

					$('.section.fp-section').eq(index-1)
						.css({
								'z-index': 1,
							   'animation': 'animFrom5To1_5 0.7s',
							   'animation-timing-function': 'cubic-bezier(0.47, 0, 0.745, 0.715)'
							});
							setTimeout(function() {
								$('.section.fp-section').eq(index-1).css('z-index', 0);
							}, 600);

					$('.section.fp-section').eq(index-2)
						.css('z-index', 2)
						.css('transform', 'translateY(0vh)')
						.css('animation-timing-function', 'cubic-bezier(0.25, 0.46, 0.45, 0.94)')
						.css('animation', 'animFrom5To1_4 1.4s');
						setTimeout(function() {
							$('.section.fp-section').eq(index-2).css('transform', 'translateY(-170vh)');
						}, 1400);

					$('.section.fp-section').eq(index-3)
						.css('transform', 'translateY(-100vh)')
						.css({
								'z-index': 3,
							   'animation': 'animFrom5To1_3 1.1s 0.4s',
							   'animation-timing-function': 'cubic-bezier(0.39, 0.575, 0.565, 1)',
						    });
							setTimeout(function() {
								$('.section.fp-section').eq(index-3).css('transform', 'translateY(-270vh)');
							}, 1550);

					$('.section.fp-section').eq(index-4)
						.css('transform', 'translateY(-200vh)')
						.css({
								'z-index': 4,
							   'animation': 'animFrom5To1_2 1.1s 0.8s',
							   'animation-timing-function': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
						    });
							setTimeout(function() {
								$('.section.fp-section').eq(index-4).css('transform', 'translateY(0vh)');
							}, 1900);


					$('.section.fp-section').eq(nextIndex-1)
						.css('transform', 'translateY(100vh)')
						.css({
								'z-index': 5,
							   'animation': 'animFrom5To1_1 0.7s 1s',
							   'animation-timing-function': 'cubic-bezier(0.39, 0.575, 0.565, 1)'
						    });
							setTimeout(function() {
								$('.section.fp-section').eq(nextIndex-1).css('transform', 'translateY(0vh)');
							}, 1700);
				}



				if(nextIndex == 2){
					hideWeare();
					setTimeout(showWeare, 1000);

					
					$('.section.fp-section').eq(index-1)
						.css({
								'z-index': 1,
							   'animation': 'animFrom5To2_5 0.7s',
							   'animation-timing-function': 'cubic-bezier(0.47, 0, 0.745, 0.715)'
							});
							setTimeout(function() {
								$('.section.fp-section').eq(index-1).css('z-index', 0);
							}, 600);

					$('.section.fp-section').eq(index-2)
						.css('z-index', 2)
						.css('transform', 'translateY(-400vh)')
						.css('animation-timing-function', 'cubic-bezier(0.25, 0.46, 0.45, 0.94)')
						.css('animation', 'animFrom5To2_4 1.4s');
						setTimeout(function() {
							$('.section.fp-section').eq(index-2).css('z-index', 0);
							$('.section.fp-section').eq(index-2).css('transform', 'translateY(-230vh)');
						}, 1400);

					$('.section.fp-section').eq(index-3)
						.css('transform', 'translateY(-300vh)')
						.css({
								'z-index': 3,
							   'animation': 'animFrom5To2_3 1.1s 0.4s',
							   'animation-timing-function': 'cubic-bezier(0.39, 0.575, 0.565, 1)',
						   });
							setTimeout(function() {
								$('.section.fp-section').eq(index-3).css('z-index', 0);
								$('.section.fp-section').eq(index-3).css('transform', 'translateY(-100vh)');
							}, 1550);

					$('.section.fp-section').eq(nextIndex-1)
						.css('transform', 'translateY(-200vh)')
						.css({
								'z-index': 4,
							   'animation': 'animFrom5To2_2 .9s 0.7s',
							   'animation-timing-function': 'cubic-bezier(0.39, 0.575, 0.565, 1)'
						   });
							setTimeout(function() {
								$('.section.fp-section').eq(nextIndex-1).css('transform', 'translateY(-100vh)');
							}, 1600);
				}


				if(nextIndex == 3){
					hideShowreel();
					setTimeout(showShowreel, 500);

					$('.section.fp-section').eq(index-1)
						.css({
								'z-index': 3,
							   'animation': 'animFrom5To3_5 0.8s',
							   'animation-timing-function': 'cubic-bezier(0.645, 0.045, 0.355, 1)'
							});
							setTimeout(function() {
								$('.section.fp-section').eq(index-1).css('z-index', 0);
							}, 800);

					$('.section.fp-section').eq(index-2)
						.css('z-index', 1)
						.css('animation', 'animFrom5To3_4 1.5s 0.17s');
						setTimeout(function() {
							$('.section.fp-section').eq(index-2).css('z-index', 0);
						}, 1670);

					$('.section.fp-section').eq(nextIndex-1)
						.css('transform', 'translateY(-400vh)')
						.css({
								'z-index': 2,
							   'animation': 'animFrom5To3_3 0.8s 0.4s',
							   'animation-timing-function': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
						    });
							setTimeout(function() {
								$('.section.fp-section').eq(nextIndex-1).css('z-index', 0);
								$('.section.fp-section').eq(nextIndex-1).css('transform', 'translateY(-200vh)');
							}, 1200);
				}

				if(nextIndex == 4){
					hideClients();
					showClients();

					$('.section.fp-section').eq(nextIndex-1)
							.css({
									'z-index': 2,
								   'animation': 'animFrom5To4_4 0.8s'
								 });
							setTimeout(function() {
								$('.section.fp-section').eq(nextIndex-1).css('transform', 'translateY(-300vh)');
							}, 800);

					$('.section.fp-section').eq(index-1)
							.css({
									'z-index': 1,
								   'animation': 'animFrom5To4_5 0.8s'
							 	 });
							setTimeout(function() {
								$('.section.fp-section').eq(index-1).css('z-index', 0);
							}, 800);
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
		time	= 0,
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
// 			$('#'+pauseVideoId)[0].play();
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
// 		$('#video_intro')[0].pause();
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

      console.log($(this).index());

      $('#fp-nav').find("svg .circleInner").eq($(this).index()).css("fill-opacity", "1");
      
      if(hoverCy != currentCy) circleNavEnt.velocity({ r: 5 }, 200);
   })
   .mouseleave(function(){
      var circleNavLeav = $('#fp-nav').find("svg .circleNav").eq($(this).index()+1);
      $('#fp-nav').find("svg .circleInner").eq($(this).index()).css("fill-opacity", "0.7");
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
