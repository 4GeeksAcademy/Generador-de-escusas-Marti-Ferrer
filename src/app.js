import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


const randomElement = (Array)=>{
  const randomPosition = Math.trunc(Math.random() * Array.length)
  return Array[randomPosition]
} 
const excuse = randomElement(who) + " " + randomElement(action) + " " + randomElement(what) + " " + randomElement(when) + " " + "."

const excuseHTMLElement = document.getElementById("excuse")

excuseHTMLElement.innerHTML = excuse

};

































