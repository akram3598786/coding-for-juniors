
// alert("Hello Akky welcome! this is your first responsive website");



let slider_img = document.querySelector('.slider_img');
let images = ['slide1.jpg', 'slide2.png', 'slide3.png'];
let i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
}
