// JavaScript Document
window.onload = rotate;
var thisAd = 0;
function rotate() {
	"use strict";
	if (document.getElementById("adBanner").parentNode.tagName === "A") {
		document.getElementById("adBanner").parentNode.onclick = newLocation;
	}
	rotate();
	}
function newLocation() {
	"use strict";
	var adURL = new Array("negrino.com","sun.com","microsoft.com");
	document.location.href = "http://www." + adURL[thisAd];
	return false;
	}
function rotate() {
	"use strict";
	var adImages = new Array("img/background44.jpg","img/background55.jpg","img/background11.jpg");
	thisAd++;
if (thisAd === adImages.length) {
	thisAd = 0;
	}
	document.getElementById("adBanner").src = adImages[thisAd];
	setTimeout(rotate, 3 * 1000);//设置时间,本每隔多长时间改变广告条中的GIF
	}
