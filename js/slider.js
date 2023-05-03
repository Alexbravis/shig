const mainSliderItem = document.querySelectorAll('.training_photo_main');
const slaveSliderItem = document.querySelectorAll('.training_photo_slave');
const mainItem = document.querySelectorAll('.main_training_photo_item');
const slaveItem = document.querySelectorAll('.slave_training_photo_item')
const trNext = document.querySelectorAll('.training_next');
const trBack = document.querySelectorAll('.traning_back');

let x = 1, y = 2, z = 3;

let formatX;
let formatY;
let formatZ;

function nextSlides(item, sliderItem, path) {
	if (x > item.length - 1)
		x = 0;
	if (y > item.length - 1)
		y = 0;
	if (z > item.length - 1)
		z = 0;
		
	if (item[x].getAttribute('src').endsWith('jpg')) {
		formatX = 'jpg';
	} else if (item[x].getAttribute('src').endsWith('png')) {
		formatX = 'png';
	} else if (item[x].getAttribute('src').endsWith('jpeg')) {
		formatX = 'jpeg';
	}
	if (item[y].getAttribute('src').endsWith('jpg')) {
		formatY = 'jpg';
	} else if (item[y].getAttribute('src').endsWith('png')) {
		formatY = 'png';
	} else if (item[y].getAttribute('src').endsWith('jpeg')) {
		formatY = 'jpeg';
	}
	if (item[z].getAttribute('src').endsWith('jpg')) {
		formatZ = 'jpg';
	} else if (item[z].getAttribute('src').endsWith('png')) {
		formatZ = 'png';
	}  else if (item[z].getAttribute('src').endsWith('jpeg')) {
		formatZ = 'jpeg';
	}
	
	x++;
	y++;
	z++;

	sliderItem[0].setAttribute('src', `${path}${x}.` + formatX);
	sliderItem[1].setAttribute('src', `${path}${y}.` + formatY);
	sliderItem[2].setAttribute('src', `${path}${z}.` + formatZ);
}


function backSlides(item, sliderItem, path) {
	if(x < 2)
		x = item.length + 1;
	if(y < 2)
		y = item.length + 1;
	if(z < 2)
		z = item.length + 1;
	
	x--;
	y--;
	z--;

	if (item[x - 1].getAttribute('src').endsWith('jpg')) {
		formatX = 'jpg';
	} else if (item[x - 1].getAttribute('src').endsWith('png')) {
		formatX = 'png';
	} else if (item[x - 1].getAttribute('src').endsWith('jpeg')) {
		formatX = 'jpeg';
	}
	if (item[y - 1].getAttribute('src').endsWith('jpg')) {
		formatY = 'jpg';
	} else if (item[y - 1].getAttribute('src').endsWith('png')) {
		formatY = 'png';
	} else if (item[y - 1].getAttribute('src').endsWith('jpeg')) {
		formatY = 'jpeg';
	}
	if (item[z - 1].getAttribute('src').endsWith('jpg')) {
		formatZ = 'jpg';
	} else if (item[z - 1].getAttribute('src').endsWith('png')) {
		formatZ = 'png';
	} else if (item[z - 1].getAttribute('src').endsWith('jpeg')) {
		formatZ = 'jpeg';
	}

	sliderItem[0].setAttribute('src', `${path}${x}.` + formatX);
	sliderItem[1].setAttribute('src', `${path}${y}.` + formatY);
	sliderItem[2].setAttribute('src', `${path}${z}.` + formatZ);
}

trNext[0].addEventListener('click', function() {
	nextSlides(mainItem, mainSliderItem, 'img/up/');
});
trBack[0].addEventListener('click', function() {
	backSlides(mainItem, mainSliderItem, 'img/up/');
});
trNext[1].addEventListener('click', function() {
	nextSlides(slaveItem, slaveSliderItem, 'img/gramot/');
});
trBack[1].addEventListener('click', function() {
	backSlides(slaveItem, slaveSliderItem, 'img/gramot/');
});