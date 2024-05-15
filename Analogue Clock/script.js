setInterval(()=>{
    d = new Date();
    htime = d.getHours();
    // console.log(htime);
    mtime = d.getMinutes();
    // console.log(mtime);
    stime = d.getSeconds();
    // console.log(stime);
    hrotation = 30 * htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;


    if(htime === 12 && mtime === 0 ){
        playAudio();
    }
    
},1000);

let audioCount = 0;

function playAudio(){
    let audio = new Audio("gameover.mp3");
    audio.play();
   
    if(audioCount<12){
        setTimeout(playAudio,1000);
        audioCount++;
    }
    else{
        audioCount=0;
    }
}





// let gameover = new Audio("gameover.mp3");
// d = new Date();
// htime = d.getHours();
// // if(htime===14 ){
// //     timeMusic.play();
// // }

// gameover = 0;
// function playAudio(){
//     if(gameover<12){
//         setInterval(()=>{
//             playAudio;
//         },500)
//         gameover++;
//     }
// }

// if(htime===0 && mtime===0 && stime===0){
//     playAudio();
// }