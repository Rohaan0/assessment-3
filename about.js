console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submitted successfully');
}


function picEvent(evt) {
	evt.preventDefault();

	alert(`If you're reading this at least your not dead yet!`)
}

let form = document.querySelector('#contact');
let pic = document.querySelector('img')

pic.addEventListener('mouseover', picEvent)

form.addEventListener('submit', handleSubmit);