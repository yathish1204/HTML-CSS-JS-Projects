//JS to Typing effect
const texts = [
    "HTML",
    "CSS",
    "JavaScript",
    "Figma",
    "Adobe XD",
    "Adobe Creative Suite",
    "Framer",
    "Wix Studio",
    
];
let count  = 0;
let index=0;
let currentText = "";
let letter = "";

(function type(){
    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);


document.getElementById("typingText").textContent = letter;
if(letter.length === currentText.length){
    count++;
    index=0;

    //breathing time after typing
    // setTimeout(()=>{
    //     count++;
    //     index = 0;
    //     // type();
    // },1000)
}
setTimeout(type ,400);
})();

// type();

//Hamburger JS

document.querySelector(".cross").style.display = 'none';
document.querySelector(".hamBurger").addEventListener("click",()=>{
    document.querySelector(".sideBar").classList.toggle("sideBarGo");
    if(document.querySelector(".sideBar").classList.contains("sideBarGo")){
        document.querySelector(".ham").style.display = "inline";
        document.querySelector(".cross").style.display = "none";
    }
    else{
        document.querySelector(".ham").style.display = "none";
        setTimeout(()=>{
            document.querySelector(".cross").style.display = "inline";
        },300);
    }
})