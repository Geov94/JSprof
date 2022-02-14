class MediaPlayer {

    media: HTMLMediaElement;
    plugins:Array<any>; 
    container: HTMLElement;


    constructor(config) {

        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlugins();
        this.initPlayer();

    }
    play() {
        this.media.paused ? this.media.play() : this.media.pause();
    }
    pause() {
        this.media.pause();
    }

    initPlayer(){
        this.container = document.createElement('div');
        this.container.style.position='relative';
        this.media.parentNode.insertBefore(this.container,this.media);
        this.container.appendChild(this.media)
    }




    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
    mute() {
        this.media.muted = true;
    }
    mutedToggle() {
        this.media.muted ? this.media.muted = false : this.media.muted = true;
    }
}

 






MediaPlayer.prototype.mute= function (){
    this.media.muted = true;
}




 export default MediaPlayer;