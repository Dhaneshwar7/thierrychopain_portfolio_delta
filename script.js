function xxx() {
	const x = window.screen.width;
	console.log(x);
	if (x === 1440) {
		console.log('yee');
	}
}
// xxx();
function yoyo() {
	gsap.registerPlugin(ScrollTrigger);
	const locoScroll = new LocomotiveScroll({
		el: document.querySelector('#main'),
		smooth: true,
		multiplier: 0.5,
	});
	locoScroll.on('scroll', ScrollTrigger.update);
	ScrollTrigger.scrollerProxy('#main', {
		scrollTop(value) {
			return arguments.length
				? locoScroll.scrollTo(value, 0, 0)
				: locoScroll.scroll.instance.scroll.y;
		}, // we don't have to define a scrollLeft because we're only scrolling vertically.
		getBoundingClientRect() {
			return {
				top: 0,
				left: 0,
				width: window.innerWidth,
				height: window.innerHeight,
			};
		},
		pinType: document.querySelector('#main').style.transform
			? 'transform'
			: 'fixed',
	});
	ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
	ScrollTrigger.refresh();
}
yoyo();
function pageOne() {
	var tl = gsap.timeline();
	tl.from('#page1', {
		duration: 0.6,
		// ease : Expo.easeInOut,
		ease: 'sine.out',
		opacity: 0,
	})
		.from('.maintext span', {
			stagger: 0.1,
			duration: 1.7,
			ease: 'power4.out',
			y: 550,
		})
		.to('.maintext .boldt', {
			fontWeight: '900',
			ease: 'power3.out',
			delay: -1.8,
			duration: 0.3,
		})
		const x = window.screen.width;
		if (x === 1440 ) {
			console.log('144000');
			tl.to('#page1 ,.page2', {
			scrollTrigger: {
				trigger: '.page2',
				scroller: '#main',
				end: 'top 70%',
				start: 'top 80%',
				scrub: -5,
			},
			backgroundColor: '#ffff',
			
		})
		}
		else if(x < 480){
			console.log('48000')
			tl.to('#page1 ,.page2', {
				scrollTrigger: {
					trigger: '.page2',
					scroller: '#main',
					end: 'top 10%',
					start: 'top 20%',
					scrub: -5,
					// markers:true
				},
				backgroundColor: '#ffff',
			});
		}
}
pageOne();
function pageSixColor() {
	// ------ GRay color changes from page 6-----
	var graycolorbg = gsap.timeline();
	graycolorbg.to('.page6 ,#main', {
		scrollTrigger: {
			trigger: '.page6',
			scroller: '#main',
			end: 'top 70%',
			start: 'top 80%',
			scrub: 2,
		},
		backgroundColor: '#E0E0E0',
	});
}
pageSixColor();
function pageThree() {
	// ---------Page 3333-------
	var pg3 = gsap.timeline();
	pg3.from('.pg3line', {
		scrollTrigger: {
			trigger: '#page3',
			scroller: '#main',
			start: 'top 55%',
			end: 'top 30%',
			// markers:true
		},
		// duration:1,
		ease: 'power3.out',
		width: '0%',
	});
	pg3.from('.pg3lft-text>h1 ,.pg3lft-text>p', {
		scrollTrigger: {
			scroller: '#main',
			trigger: '#page3',
			start: 'top 70%',
			end: 'top 40%',
			// markers:true,
			scrub: 3,
		},
		opacity: 0.5,
		y: 100,
		stagger: 0.5,
		ease: Expo.easeInOut,
	});

	gsap.to('.pg3rtxt', {
		scrollTrigger: {
			scroller: '#main',
			trigger: '#page3',
			start: 'top top',
			end: 'top 40%',
			// markers:true,
		},
		opacity: 1,
		stagger: 1,
	});
}
pageThree();
function pageFour() {
	// ------- PAGE4 gsap for expert top line----
	var pg4tl = gsap
		.timeline({
			scrollTrigger: {
				trigger: '#page4',
				scroller: '#main',
				start: 'top 60%',
				end: 'top 50%',
				// markers:true
			},
		})
		.to('.expertline', {
			duration: 2,
			ease: 'bounce.out',
			width: '80%',
		})
		.from(
			'#experttxt',
			{
				y: 40,
				opacity: 0.4,
				ease: 'power2.out',
				duration: 1,
			},
			`-.1`
		);
}
pageFour();
function pageFive() {
	// ---------Page 5555555555555555 gsap-----
	// -----------Page5 line 111111 GSap---------
	var pgfiveline111 = gsap
		.timeline({
			scrollTrigger: {
				trigger: '.pg5container',
				scroller: '#main',
				start: 'top 90%',
				end: 'top 80%',
				// markers:true,
			},
		})
		.to('.line1.is-inview', {
			// duration:1,
			ease: 'power4.out',
			width: '100%',
		})
		.to('.awww', {
			y: -10,
			opacity: 1,
			stagger: 1,
			ease: Circ,
		})
		.from('#ulone li', {
			y: 20,
			stagger: 0.1,
			opacity: 0,
			ease: 'power1.out',
		});

	// -----------Page5 line 2222 GSap---------
	var pgfiveline2 = gsap
		.timeline({
			scrollTrigger: {
				trigger: '#line2',
				scroller: '#main',
				start: 'top 90%',
				end: 'top 80%',
				// markers:true,
			},
		})
		.to('.line2.is-inview', {
			// duration:1,
			ease: 'power4.out',
			width: '100%',
		})
		.to('.cssda', {
			y: -10,
			opacity: 1,
			stagger: 1,
			ease: Circ,
		})
		.from('#ultwo li', {
			y: 20,
			stagger: 0.1,
			opacity: 0,
			ease: 'power1.out',
		});
	// -----------Page5 line 3333 GSap---------
	var pgfiveline33333 = gsap
		.timeline({
			scrollTrigger: {
				trigger: '#line3',
				scroller: '#main',
				start: 'top 90%',
				end: 'top 80%',
				// markers:true,
			},
		})
		.to('.line3.is-inview', {
			// duration:1,
			ease: 'power4.out',
			width: '100%',
		})
		.to('.divers', {
			y: -10,
			opacity: 1,
			stagger: 1,
			ease: Circ,
		})
		.from('#ulthree li', {
			y: 20,
			stagger: 0.1,
			opacity: 0,
			ease: 'power1.out',
		});
}
pageFive();
function pageSeven() {
	// --------page 7 gsap-----
	var pg7 = gsap
		.timeline({
			scrollTrigger: {
				trigger: '.page7main',
				scroller: '#main',
				start: 'top 70%',
				end: 'top 20%',
				// markers:true
			},
		})
		.to('#gregename', {
			opacity: 1,
			duration: 0.3,
			y: -40,
			delay: 0.5,
		})
		.to('.pg7line', {
			ease: 'power4.out',
			width: '100%',
		})
		.from('.grege h2', {
			y: 40,
			// duration:1.5,
			ease: 'power2.out',
			stagger: 0.2,
		});
}
pageSeven();
function pageEight() {
	// -------Page 8 gsap---
	var pg8testi = gsap
		.timeline({
			scrollTrigger: {
				trigger: '.ptesti1-cont',
				scroller: '#main',
				start: 'top 70%',
				end: 'top 20%',
				// markers:true
				// scrub:2
			},
		})
		.from('.ptesti1-frame', {
			height: '0',
			duration: 0.4,
		})
		.from('.ptesti1 .para', {
			opacity: 0,
			duration: 0.3,
			y: -40,
		});

	var pg11testi = gsap
		.timeline({
			scrollTrigger: {
				trigger: '.ptesti2-cont',
				scroller: '#main',
				start: 'top 70%',
				end: 'top 20%',
				// markers:true
				// scrub:2
			},
		})
		.from('.ptesti2-frame', {
			height: '0',
			duration: 0.4,
		})
		.from('.ptesti2 .para', {
			opacity: 0,
			duration: 0.3,
			y: -40,
		});

	// -----------project videoo------
	var projectvideo1 = gsap
		.timeline({
			scrollTrigger: {
				trigger: '.pv1',
				scroller: '#main',
				start: 'top 80%',
				end: 'top 40%',
				// markers:true,
				scrub: 2,
			},
		})
		.from('.pv1', {
			scale: 0.5,
			opacity: 0,
			duration: 1.2,
		});
	var projectvideo2 = gsap
		.timeline({
			scrollTrigger: {
				trigger: '.pv2',
				scroller: '#main',
				start: 'top 80%',
				end: 'top 40%',
				// markers:true,
				srub: 2,
			},
		})
		.from('.pv2', {
			scale: 0.5,
			opacity: 0,
			duration: 1.2,
		});
}
pageEight();
function pageTen() {
	// -----------Page 10 gsap-----
	var pg10 = gsap
		.timeline({
			scrollTrigger: {
				trigger: '#page10',
				scroller: '#main',
				start: 'top 70%',
				end: 'top 20%',
				// markers:true
			},
		})
		.to('#page10 .stickyname', {
			opacity: 1,
			duration: 0.2,
			y: -40,
			delay: 0.3,
		})
		.to('#page10 .stickyline', {
			ease: 'power4.out',
			width: '100%',
		})
		.from('#page10 .stickyopt h2', {
			y: 40,
			// duration:1.3,
			ease: 'power2.out',
			stagger: 0.2,
		});
}
pageTen();
function pageTwelve() {
	// -----------Page 12 gsap-----
	var pg12 = gsap
		.timeline({
			scrollTrigger: {
				trigger: '#page12',
				scroller: '#main',
				start: 'top 70%',
				end: 'top 20%',
				// markers:true
			},
		})
		.to('#page12 .stickyname', {
			opacity: 1,
			duration: 0.2,
			y: -40,
			delay: 0.3,
		})
		.to('#page12 .stickyline', {
			ease: 'power4.out',
			width: '100%',
		})
		.from('#page12 .stickyopt h2', {
			y: 40,
			// duration:1.3,
			ease: 'power2.out',
			stagger: 0.2,
		});
}
pageTwelve();
