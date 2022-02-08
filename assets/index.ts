import MediaPlayer from "./mediaPlayer";
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause'

const video:HTMLElement = document.querySelector("video");
const button:HTMLElement  = document.querySelector("button");
const buttonUnmute:HTMLElement = document.getElementById("buttonUnmute");
const player = new MediaPlayer({ el: video,plugins:[new AutoPlay(),new AutoPause()]});
button.onclick =() => player.play();
buttonUnmute.onclick = () =>player.mutedToggle();




 
 
