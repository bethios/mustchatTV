(function() {
    function Fixtures() {
        var Fixtures = {};

        var albumPicasso = {
            title: 'The Colors',
            artist: 'Pablo Picasso',
            label: 'Cubism',
            year: '1881',
            albumArtUrl: '/assets/images/album_covers/01.png',
            songs: [
                { title: 'Blue', duration: '161.71', audioUrl: '/assets/music/blue' , stars : 4 , numberOfRatings : 1, skip : false},
                { title: 'Green', duration: '103.96', audioUrl: '/assets/music/green' , stars : 4 , numberOfRatings : 1, skip : false},
                { title: 'Red', duration: '268.45', audioUrl: '/assets/music/red' , stars : 4 , numberOfRatings : 1, skip : false},
                { title: 'Pink', duration: '153.14', audioUrl: '/assets/music/pink' , stars : 4 , numberOfRatings : 1, skip : false},
                { title: 'Magenta', duration: '374.22', audioUrl: '/assets/music/magenta' , stars : 4 , numberOfRatings : 1, skip : false}
            ]
        };

        var albumMarconi = {
            title: 'The Telephone',
            artist: 'Guglielmo Marconi',
            label: 'EM',
            year: '1909',
            albumArtUrl: '/assets/images/album_covers/20.png',
            songs: [
                { title: 'Hello, Operator?', duration: '1:01' , audioUrl: '/assets/music/blue' , stars : 4 , numberOfRatings : 1, skip : false},
                { title: 'Ring, ring, ring', duration: '5:01' , audioUrl: '/assets/music/green' , stars : 4 , numberOfRatings : 1, skip : false },
                { title: 'Fits in your pocket', duration: '3:21' , audioUrl: '/assets/music/red' , stars : 4 , numberOfRatings : 1, skip : false},
                { title: 'Can you hear me now?', duration: '3:14' , audioUrl: '/assets/music/pink' , stars : 4 , numberOfRatings : 1, skip : false},
                { title: 'Wrong phone number', duration: '2:15' , audioUrl: '/assets/music/magenta' , stars : 4 , numberOfRatings : 1, skip : false}
            ]
        };

        Fixtures.getAlbum = function() {
            return albumPicasso;
        };

        Fixtures.getCollection = function(numberOfAlbums){
          var albumCollection = [];

          for(var i =0; i < numberOfAlbums; i++){
              albumCollection.push(albumPicasso);
          }

          return albumCollection;
        };

        return Fixtures;
    }

    angular
        .module('blocJams')
        .factory('Fixtures', Fixtures);
})();
