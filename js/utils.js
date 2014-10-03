(function() {
  /*
  gaspar: preload sounds
  */
  window.utils = {
      // Asynchronously load templates located in separate .html files
      loadTemplate: function(sounds, callback) {
          var deferreds = [];
          $.each(sounds, function(index, sound) {
              var that = this;
              this.sound = sound;
              if (sound) {
                  var wav = window.location.origin + window.location.pathname + sound;
                  deferreds.push($.get(wav, function(data) {
                    var name = that.sound.split('.');
                        name = name[0].split('/');
                        name = name[2];
                        name = name.replace("-", "");
                      window[name] = {data:data};
                      //console.log(name);
                      //$('#preload').html(name);
                  }));
              } else {
                  console.log(sound + " not found");
              }
          });

          //$.when.apply(null, deferreds).done(callback);
          $.when.apply(null, deferreds).done(function(){
            $('#main').css('display','block');
            $('#preload').css('display','none')
          });
         // console.log(window);
      },
  };

    
})();