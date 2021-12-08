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
    this.media.muted = true;
}


MediaPlayer.prototype.mute= function (){
    this.media.muted = true;
}

MediaPlayer.prototype.mutedToggle= function (){
    this.media.muted ? this.media.muted=false : this.media.muted = true;
}



 export default MediaPlayer;