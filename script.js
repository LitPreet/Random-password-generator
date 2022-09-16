let pass1 = document.querySelectorAll(".psw")


function generateP()
{
    pass1.value='';
let Pass ;
let str = 
'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
    'abcdefghijklmnopqrstuvwxyz0123456789@#$';
    for(let i =1; i<=8; i++)
    {
        let char = Math.floor(Math.random()*str.length + 1);
        Pass= pass1.value += str.charAt(char);
    }
 
    return Pass;

}

function renderpsw()
{
    pass1.forEach(pass1 => pass1.textContent=
        generateP());
}
/* light theme */

const toggle = document.getElementById("toggle");

const container = document.querySelector(".container");
const accent = document.querySelector(".text-accent");
const green = document.querySelector("#ran");
const subtitle = document.querySelector("#ran2");

const generator = document.querySelector(".genbtn");


toggle.addEventListener("input", e => {
    isChecked = e.target.checked;
    
    if(isChecked) {
        container.classList.add("light-theme");
        accent.classList.add("light-theme");
        green.classList.add("light-theme");
        subtitle.classList.add("light-theme");
      
        generator.classList.add("light-theme");
    } else {
        container.classList.remove("light-theme");
        accent.classList.remove("light-theme");
        green.classList.remove("light-theme");
        subtitle.classList.remove("light-theme");
       
        generator.classList.remove("light-theme");
    }
});
function cpy() {
    let copyText = document.querySelector("#pass1");
    copyText.select();
    document.execCommand("copy");
  }
  
  browser.alarms.create({
    delayInMinutes: 0.1
  });
