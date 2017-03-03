(function() {
    function SongPlayer($rootScope, Fixtures) {
        var SongPlayer = {};

        var currentAlbum = Fixtures.getAlbum();

        var currentBuzzObject = null;

        var playSong = function(song){
            if(song.skip === true){
                SongPlayer.next();
                return;
            }

            currentBuzzObject.play();
            song.playing = true;
        };

        var stopSong = function(){
            currentBuzzObject.stop();
            currentBuzzObject.stop();
            SongPlayer.currentSong.playing = null
        };

        var setSong = function(song) {
            if (currentBuzzObject) {
                stopSong();
            }

            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });
            currentBuzzObject.bind('timeupdate', function() {
                $rootScope.$apply(function() {
                    SongPlayer.currentTime = currentBuzzObject.getTime();

                });
            });

            currentBuzzObject.bind('ended', function(event) {
                SongPlayer.next();
            });


            SongPlayer.rated = null;
            SongPlayer.currentSong = song;
        };

        var getSongIndex = function(song) {
            return currentAlbum.songs.indexOf(song);
        };

        SongPlayer.volume = 50;

        SongPlayer.currentSong = null;

        SongPlayer.rated = null;

        SongPlayer.currentTime = null;

        SongPlayer.play = function(song){
            song = song || SongPlayer.currentSong;

            if(SongPlayer.currentSong !== song){
                setSong(song);
                playSong(song);
            } else if (SongPlayer.currentSong === song){
              if(currentBuzzObject.isPaused()){
                  currentBuzzObject.play();
              }
            }
        };

        SongPlayer.pause = function (song) {
            song = song || SongPlayer.currentSong;
            currentBuzzObject.pause();
            song.playing = false;
        };

        SongPlayer.previous = function(){
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;

            if(currentSongIndex < 0){
                stopSong();
            }else{
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };

        SongPlayer.next = function(){
          var currentSongIndex = getSongIndex(SongPlayer.currentSong);
          currentSongIndex++;

          if(currentSongIndex > currentAlbum.songs.length){
              stopSong();
          }else{
              var song = currentAlbum.songs[currentSongIndex];
              setSong(song);
              playSong(song);
          }
        };

        SongPlayer.setCurrentTime = function(time) {
            if (currentBuzzObject) {
                currentBuzzObject.setTime(time);
            }
        };

        SongPlayer.muteAll = function(){
            if(currentBuzzObject){
                currentBuzzObject.toggleMute();
            }
        };

        SongPlayer.newRating = function() {
            if (SongPlayer.currentSong) {
                var numberOfTotalStars = SongPlayer.currentSong.stars || 0;
                var numberOfRatings = SongPlayer.currentSong.numberOfRatings;
                var currentStars = (numberOfTotalStars / numberOfRatings).toFixed(1);

                return currentStars;
            }
        };

        SongPlayer.rateSong = function(starRating){
            SongPlayer.currentSong.numberOfRatings++;
            SongPlayer.currentSong.stars += starRating;

            SongPlayer.rated = true;
        };

        SongPlayer.setVolume = function(newVolume){
            if(currentBuzzObject){
                currentBuzzObject.setVolume(newVolume);
            }
            SongPlayer.volume = newVolume
        };

        return SongPlayer;
    }

    angular
        .module('blocJams')
        .factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);
})();
