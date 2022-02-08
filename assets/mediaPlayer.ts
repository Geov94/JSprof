class MediaPlayer {

    media: HTMLMediaElement;
    plugins:Array<any>; 


    constructor(config) {

        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlugins();

    }
    play() {
        this.media.paused ? this.media.play() : this.media.pause();
    }
    pause() {
        this.media.pause();
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