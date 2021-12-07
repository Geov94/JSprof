function MediaPlayer(config) {
    this.media = config.el ;
    this.plugins = config.plugins || [];
    this._initPlugins();
   
 }
 MediaPlayer.prototype.play = function (){
        this.media.paused ? this.media.play() : this.media.pause();
 }

 MediaPlayer.prototype._initPlugins  = function (){
    this.plugins.forEach(plugin=>{
        plugin.run(this);
    })
}

MediaPlayer.prototype.mute= function (){
    this.media.muted ? this.media.unmute() : this.media.mute();
}



 export default MediaPlayer;