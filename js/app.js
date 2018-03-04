window.sr = ScrollReveal();

sr.reveal('.top_row', {
	duration: 2000,
	origin: 'top',
	distance: '300px'
}, 200);

sr.reveal('#big_img', {
	duration: 2000,
	origin: 'left',
	distance: '300px'
});

sr.reveal('#schedule ul li', {
	duration: 2000,
	origin: 'right',
	distance: '300px'
});

sr.reveal('.bottom_row', {
	duration: 2000,
	origin: 'left',
	distance: '300px'
});