const onNameClick = function () {
  //  console.log('got into function')
  //   $('#message').text('Welcome to the moon.')
  //   $('#message').css('background-Color', 'blue')
  //   setTimeout(() => $('#message').text(''), 3000)
  //   $('.container').addClass('animated rollOut');
  //   $('#welcomePage').addClass('animated rollIn')
  }

const addHandlers = () => {
    // $('#nextView').on('click', onMoonClick)
  }

  $(() => {
    addHandlers()
  })


  <script>
				// init controller
				var controller = new ScrollMagic.Controller();
			</script>
			<style type="text/css">
				#reveal1 {
					opacity: 0;
					-webkit-transform: scale(0.9);
						 -moz-transform: scale(0.9);
							-ms-transform: scale(0.9);
							 -o-transform: scale(0.9);
									transform: scale(0.9);
					-webkit-transition: all 1s ease-in-out;
						 -moz-transition: all 1s ease-in-out;
							-ms-transition: all 1s ease-in-out;
							 -o-transition: all 1s ease-in-out;
									transition: all 1s ease-in-out;
				}
				#reveal1.visible {
					opacity: 1;
					-webkit-transform: none;
						 -moz-transform: none;
							-ms-transform: none;
							 -o-transform: none;
									transform: none;
				}
			</style>
			<div class="spacer s2"></div>
			<div id="trigger1" class="spacer s0"></div>
			<div id="reveal1" class="box2 blue">
				<p>I will be revealed when scrolled into view and hidden when scrolled past.</p>
				<a href="#" class="viewsource">view source</a>
			</div>
			<div class="spacer s2"></div>
			<script>
					// build scene
					new ScrollMagic.Scene({
										triggerElement: "#trigger1",
										triggerHook: 0.9, // show, when scrolled 10% into view
										duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
										offset: 50 // move trigger to center of element
									})
									.setClassToggle("#reveal1", "visible") // add class to reveal
									.addIndicators() // add indicators (requires plugin)
									.addTo(controller);
			</script>
