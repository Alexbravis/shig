const wrapperViewer = document.querySelector('.wrapper_viewer');
const photo = document.querySelectorAll('.training_photo');
const cross = document.querySelector('.cross');
const viewer = document.querySelector('.viewer');
const left = document.querySelector('.left');
const right = document.querySelector('.right'); 






	for(let i = 0; i < photo.length; i++) {
		photo[i].addEventListener('click', function(e) {
			wrapperViewer.style.display = 'flex';
			viewer.setAttribute('src', photo[i].getAttribute('src'));


			cross.addEventListener('click', function() {
				viewer.setAttribute('src', '#');
				wrapperViewer.style.display = 'none';
				viewer.classList.remove('viewer_checked');
			});	
		});
	}
	viewer.addEventListener('click', function() {
		viewer.classList.toggle('viewer_checked');
	});
	
	
	
	window.addEventListener('click', function(e) {
		if(e.target == wrapperViewer) {
			wrapperViewer.style.display = 'none';
		}
	});
















// for(let i = 0; i < photo.length; i++) {
// 	photo[i].addEventListener('click', function() {
// 		wrapperViewer.style.display = 'flex';
// 		copySrcPhoto = photo[i].getAttribute('src');
// 		viewer.setAttribute('src', copySrcPhoto);
// 	});
// }

// for(let x = 0; x < photo.length; x++) {
// 	function clickNext() {
// 		scrollPhoto = photo[x++].getAttribute('src');
// 		viewer.setAttribute('src', scrollPhoto);
// 		if (x >= photo.length) {
// 			x = 0;
// 		}
		
// 	}
// 	function clickBack() {
// 		scrollPhoto = photo[x--].getAttribute('src');
// 		viewer.setAttribute('src', scrollPhoto);
// 		if (x < 0) {
// 			x = photo.length - 1;
// 		}
// 	}

// 	right.addEventListener('click', clickNext);
// 	left.addEventListener('click', clickBack);
// }

// cross.addEventListener('click', function() {
// 	viewer.setAttribute('src', '#');
// 	wrapperViewer.style.display = 'none';

// });

