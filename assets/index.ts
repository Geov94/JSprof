import MediaPlayer from "./mediaPlayer";
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause'
import Ads from "./plugins/ads";

const video:HTMLElement = document.querySelector("video");
const button:HTMLElement  = document.querySelector("button");
const buttonUnmute:HTMLElement = document.getElementById("buttonUnmute");
const player = new MediaPlayer({ el: video,plugins:[new AutoPlay(),new AutoPause(),new Ads()]});
button.onclick =() => player.play();
buttonUnmute.onclick = () =>player.mutedToggle();




 
 
