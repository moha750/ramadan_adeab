var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var nameInput = document.getElementById('name')
var downloadBtn = document.getElementById('download-btn')
const x = canvas.width / 2;



var image = new Image()
image.crossOrigin="anonymous";
image.src = 'r6.jpg'
image.onload = function () {
	drawImage()
}

function drawImage() {
	// ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
	ctx.font = '48pt b';
	ctx.fillStyle = '#29B8A8'
	ctx.textAlign = "center";

	ctx.fillText(nameInput.value, x, 1340)
    
}

nameInput.addEventListener('input', function () {
	drawImage()
})

downloadBtn.addEventListener('click', function () {
	downloadBtn.href = canvas.toDataURL('image/jpg')
	downloadBtn.download = 'كل عام وأنت بخير' + nameInput.value
})