var modal = document.getElementById('simpleModal');

var modalBtn = document.getElementById('modalBtn');

var closeBtn = document.getElementById("closeBtn");

modalBtn.addEventListener('click',openModal);

closeBtn.addEventListener('click',closeModal);

function openModal(){
	modal.style.display = 'block';
}

function closeModal(){
	modal.style.display = 'none';
}

// animation
const div1 = document.querySelector(".nav-animation1")
const div2 = document.querySelector(".nav-animation2")
const div3 = document.querySelector(".nav-animation3")
const div4 = document.querySelector(".nav-animation4")
const div5 = document.querySelector(".nav-animation5")
const div6 = document.querySelector(".nav-animation6")
const div7 = document.querySelector(".nav-animation7")
const div8 = document.querySelector(".nav-animation8")
const div9 = document.querySelector(".nav-animation9")

const option ={
	root: null,
	threshold:0,
};
// const tl = new TimelineMax();
// tl.fromTo(div1,0.5,{width:"0%",height:"40%"},{width:"38%",ease: Power2.easeInOut})
// .fromTo(div2,0.5,{width:"0%"},{width:"20%",ease: Power2.easeInOut})

const boxCallBack = (entries, ob, deg) => {
	const [entry] = entries;
	if (entry.isIntersecting) {
	  entry.target.classList.remove("hidden");
	  entry.target.style.transform = `rotate(${deg}deg)`;
	  entry.target.style.transitionDuration = "0.2s";
	  entry.target.style.transitionDelay = "0.5s";
	}
	ob.unobserve(entry.target);
  };
  const boxCallBack = (entries, ob, deg) => {
	const [entry] = entries;
	if (entry.isIntersecting) {
	  entry.target.classList.remove("hidden");
	  entry.target.style.transform = `rotate(${deg}deg)`;
	  entry.target.style.transitionDuration = "0.2s";
	  entry.target.style.transitionDelay = "0.5s";
	}
	ob.unobserve(entry.target);
  };
  
  const boxObserver2 = new IntersectionObserver(function (e, o) {
	boxCallBack(e, o, 30);
  }, option);
  boxObserver2.observe(div2);
  const boxObserver3 = new IntersectionObserver(function (e, o) {
	boxCallBack(e, o, 45);
  }, option);
  boxObserver3.observe(div3);
  const boxObserver4 = new IntersectionObserver(function (e, o) {
	boxCallBack(e, o, 45);
  }, option);
  boxObserver4.observe(div4);
  const boxObserver5 = new IntersectionObserver(function (e, o) {
	boxCallBack(e, o, 45);
  }, option);
  boxObserver5.observe(div5);
  const boxObserver6 = new IntersectionObserver(function (e, o) {
	boxCallBack(e, o, 45);
  }, option);
  boxObserver6.observe(div6);
  const boxObserver7 = new IntersectionObserver(function (e, o) {
	boxCallBack(e, o, 45);
  }, option);
  boxObserver7.observe(div7);
  const boxObserver8 = new IntersectionObserver(function (e, o) {
	boxCallBack(e, o, 45);
  }, option);
  boxObserver8.observe(div8);
  const boxObserver9 = new IntersectionObserver(function (e, o) {
	boxCallBack(e, o, 45);
  }, option);
  boxObserver9.observe(div9);




