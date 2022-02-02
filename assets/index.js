import MediaPlayer from "./mediaPlayer.js";
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector("video");
const button = document.querySelector("button");
const buttonUnmute = document.getElementById("buttonUnmute");
const player = new MediaPlayer({ el: video,plugins:[
    //new AutoPlay()
]});
button.onclick =() => player.play();
buttonUnmute.onclick = () =>player.mutedToggle();




 
 
