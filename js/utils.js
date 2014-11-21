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
            $('#preload').css('display','none');

            /**
             * Deleting Top Left buttons not "really really" visibles
             */
            var topleft_position = $('#topleft').position();
            var topleft_width = $('#topleft').width();
            var topleft_height = $('#topleft').height();

            var wrap = $('.wrap').width();
            var top, left;
            $('.drums').each(function(){
              top = $(this).position().top + wrap;
              left = $(this).position().left + wrap;
              if ((top>topleft_height) || (left>topleft_width)){
                console.log('houston tenemos un problema');
                $(this).remove();
              }
            });

            /**
             * Deleting Top Right buttons not "really really" visibles
             */
            var topright_position = $('#topright').position();
            var topright_width = $('#topright').width();
            var topright_height = $('#topright').height();

            $('.bass').each(function(){
              top = $(this).position().top + wrap;
              left = $(this).position().left + wrap;
              if ((top>topright_height) || (left>topright_width)){
                console.log('houston tenemos un problema');
                $(this).remove();
              }
            });

            /**
             * Deleting Botton Left buttons not "really really" visibles
             */
            var bottonleft_position = $('#bottonleft').position();
            var bottonleft_width = $('#bottonleft').width();
            var bottonleft_height = $('#bottonleft').height();

            $('.leadguitar').each(function(){
              top = $(this).position().top + wrap;
              left = $(this).position().left + wrap;
              if ((top>bottonleft_height) || (left>bottonleft_width)){
                console.log('houston tenemos un problema');
                $(this).remove();
              }
            });

            /**
             * Deleting Botton Right buttons not "really really" visibles
             */
            var bottonright_position = $('#bottonright').position();
            var bottonright_width = $('#bottonright').width();
            var bottonright_height = $('#bottonright').height();

            $('.rhythmguitar').each(function(){
              top = $(this).position().top + wrap;
              left = $(this).position().left + wrap;
              if ((top>bottonright_height) || (left>bottonright_width)){
                console.log('houston tenemos un problema');
                $(this).remove();
              }
            });

          });
      },
  }; 
})();