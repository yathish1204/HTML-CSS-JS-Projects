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

//scroller

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
