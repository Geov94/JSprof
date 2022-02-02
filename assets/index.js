import MediaPlayer from "./mediaPlayer.js";
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector("video");
const button = document.querySelector("button");
const buttonUnmute = document.getElementById("buttonUnmute");
const player = new MediaPlayer({ el: video,plugins:[new AutoPlay(),new AutoPause()]});
button.onclick =() => player.play();
buttonUnmute.onclick = () =>player.mutedToggle();


if ('serviceWorker' in navigator){

    navigator.serviceWorker.register('/sw.js').catch(error =>{
        console.log(error.message)
    })
}

 
 
