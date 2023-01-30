export default {
	enter: (el, done, ease, duration) => {
		gsap.from(el, duration, {
			scale: 2,
			opacity: 0,
			ease,
			onComplete: done
		})
	},
	leave: (el, done, ease, duration) => {
		gsap.to(el, duration, {
			scale: 0,
			opacity: 0,
			ease,
			onComplete: done
		})
	}
}
