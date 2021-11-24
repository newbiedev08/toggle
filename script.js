

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");


function toggleMenu() {
 if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
   closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
   closeIcon.style.display = "block";
   menuIcon.style.display = "none";
 }
}

hamburger.addEventListener("click", toggleMenu);
hamburger.addEventListener("onmouseover",toggleMenu);

menuItems.forEach(
  function(menuItem){
   menuItem.addEventListener('click', toggleMenu);
 });

// function bgColor() {
// document.getElementById('textRed').style.backgroundColor = 'red';
// document.getElementById('textBlue').style.backgroundColor = 'blue';
// document.getElementById('textYellow').style.backgroundColor = 'yellow';
// document.getElementById('textGreen').style.backgroundColor = 'green';
// document.getElementById('textOrange').style.backgroundColor = 'orange';
// document.getElementById('textPurple').style.backgroundColor = 'purple';
// }

const home = document.getElementById('textHome');


home.addEventListener('click', () => {
document.body.style.backgroundColor="lightblue";
  console.log('click home');
});

const red = document.getElementById('textRed');


red.addEventListener('click', () => {
document.body.style.backgroundColor="red";
  console.log('click red');
});
const yellow = document.getElementById('textYellow');

yellow.addEventListener('click', () =>{
  document.body.style.backgroundColor="yellow";
  console.log('click yellow');
});
const orange = document.getElementById('textOrange');

orange.addEventListener('click', () =>{
  document.body.style.backgroundColor="orange";
  console.log('click orange');
});
const blue = document.getElementById('textBlue');

blue.addEventListener('click', () =>{
  document.body.style.backgroundColor="blue";
  console.log('click blue');
});

const purple= document.getElementById('textPurple');

purple.addEventListener('click', () =>{
  document.body.style.backgroundColor="purple";
  console.log('click purple');

});
