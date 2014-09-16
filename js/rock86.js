/*utils.loadTemplate([
	'rock86/Drums/EMOK1Beat86-01.wav', 
	'rock86/Drums/EMOK1Beat86-02.wav', 
	'rock86/Drums/EMOK1Beat86-03.wav', 
	'rock86/Drums/EMOK1Beat86-04.wav', 
	'rock86/Drums/EMOK1Beat86-05.wav', 
	'rock86/Drums/EMOK1Beat86-06.wav', 
	'rock86/Drums/EMOK1Beat86-07.wav', 
	'rock86/Drums/EMOK1Beat86-08.wav', 
	'rock86/Drums/EMOK1Beat86-09.wav', 
	'rock86/Drums/EMOK1Beat86-10.wav']);
*/

// Preload Howl objects
var drums = [
	'rock86/Drums/EMOK1Beat86-01.wav', 
	'rock86/Drums/EMOK1Beat86-02.wav', 
	'rock86/Drums/EMOK1Beat86-03.wav', 
	'rock86/Drums/EMOK1Beat86-04.wav', 
	'rock86/Drums/EMOK1Beat86-05.wav', 
	'rock86/Drums/EMOK1Beat86-06.wav', 
	'rock86/Drums/EMOK1Beat86-07.wav', 
	'rock86/Drums/EMOK1Beat86-08.wav', 
	'rock86/Drums/EMOK1Beat86-09.wav', 
	'rock86/Drums/EMOK1Beat86-10.wav'];

var bass = [
	'rock86/Bass/EMOK1Bass86E-01.wav', 
	'rock86/Bass/EMOK1Bass86E-02.wav', 
	'rock86/Bass/EMOK1Bass86E-03.wav', 
	'rock86/Bass/EMOK1Bass86E-04.wav', 
	'rock86/Bass/EMOK1Bass86E-05.wav', 
	'rock86/Bass/EMOK1Bass86E-06.wav', 
	'rock86/Bass/EMOK1Bass86E-07.wav', 
	'rock86/Bass/EMOK1Bass86E-08.wav', 
	'rock86/Bass/EMOK1Bass86E-09.wav',  
	'rock86/Bass/EMOK1Bass86E-10.wav'];

var leadGuitar = [
	'rock86/LeadGuitar/EMOK1LeadGuit86E-01.wav', 
	'rock86/LeadGuitar/EMOK1LeadGuit86E-02.wav', 
	'rock86/LeadGuitar/EMOK1LeadGuit86E-03.wav', 
	'rock86/LeadGuitar/EMOK1LeadGuit86E-04.wav', 
	'rock86/LeadGuitar/EMOK1LeadGuit86E-05.wav', 
	'rock86/LeadGuitar/EMOK1LeadGuit86E-06.wav', 
	'rock86/LeadGuitar/EMOK1LeadGuit86E-07.wav', 
	'rock86/LeadGuitar/EMOK1LeadGuit86E-08.wav', 
	'rock86/LeadGuitar/EMOK1LeadGuit86E-09.wav',  
	'rock86/LeadGuitar/EMOK1LeadGuit86E-10.wav'];

var rhythmGuitar = [
	'rock86/RhythmGuitar/EMOK1RhyGuitA86E-01.wav', 
	'rock86/RhythmGuitar/EMOK1RhyGuitA86E-02.wav', 
	'rock86/RhythmGuitar/EMOK1RhyGuitA86E-03.wav', 
	'rock86/RhythmGuitar/EMOK1RhyGuitA86E-04.wav', 
	'rock86/RhythmGuitar/EMOK1RhyGuitA86E-05.wav', 
	'rock86/RhythmGuitar/EMOK1RhyGuitA86E-06.wav', 
	'rock86/RhythmGuitar/EMOK1RhyGuitA86E-07.wav', 
	'rock86/RhythmGuitar/EMOK1RhyGuitA86E-08.wav', 
	'rock86/RhythmGuitar/EMOK1RhyGuitA86E-09.wav',  
	'rock86/RhythmGuitar/EMOK1RhyGuitA86E-10.wav'];

var howls = {};
for (var i=0; i<drums.length; i++) {
    howls[drums[i]] = new Howl({urls: [drums[i]] , loop: true, onend: function() {playRhythmguitar();playLeadguitar();playDrums();playBass();}});
}

for (var i=0; i<bass.length; i++) {
    howls[bass[i]] = new Howl({urls: [bass[i]] , loop: true, onend: function() {playRhythmguitar();playLeadguitar();playDrums();playBass();}});
}

for (var i=0; i<leadGuitar.length; i++) {
    howls[leadGuitar[i]] = new Howl({urls: [leadGuitar[i]] , loop: true, onend: function() {playRhythmguitar();playLeadguitar();playDrums();playBass();}});
}

for (var i=0; i<rhythmGuitar.length; i++) {
    howls[rhythmGuitar[i]] = new Howl({urls: [rhythmGuitar[i]] , loop: true, onend: function() {playRhythmguitar();playLeadguitar();playDrums();playBass();}});
}

$(function(){	
	/*************************************** Rock Drum
		Setting Rock Drum
	*/
	var rockDrum = ['rock86/Drums/EMOK1Beat86-01.mp3','rock86/Drums/EMOK1Beat86-02.mp3','rock86/Drums/EMOK1Beat86-03.mp3','rock86/Drums/EMOK1Beat86-04.mp3','rock86/Drums/EMOK1Beat86-05.mp3','rock86/Drums/EMOK1Beat86-06.mp3','rock86/Drums/EMOK1Beat86-07.mp3','rock86/Drums/EMOK1Beat86-08.mp3','rock86/Drums/EMOK1Beat86-09.mp3','rock86/Drums/EMOK1Beat86-10.mp3'];
	var row = '<button class="btn btn-red" id="drumsDel">stop</button>';
	$.each(rockDrum, function( index, value ) {
		var item = eval(index)+1;
		row+='<button class="btn btn-red" id="drums'+item+'" data="'+value+'">'+item+'</button>';
	})
	$('#rockDrumContainer').append(row);

	/*************************************** Rock Bass
		Setting Rock Bass
	*/
	var rockBass = ['rock86/Bass/EMOK1Bass86E-01.mp3','rock86/Bass/EMOK1Bass86E-02.mp3','rock86/Bass/EMOK1Bass86E-03.mp3','rock86/Bass/EMOK1Bass86E-04.mp3','rock86/Bass/EMOK1Bass86E-05.mp3','rock86/Bass/EMOK1Bass86E-06.mp3','rock86/Bass/EMOK1Bass86E-07.mp3','rock86/Bass/EMOK1Bass86E-08.mp3','rock86/Bass/EMOK1Bass86E-09.mp3','rock86/Bass/EMOK1Bass86E-10.mp3'];
	var row = '<button class="btn btn-blue" id="bassDel">stop</button>';
	$.each(rockBass, function( index, value ) {
		var item = eval(index)+1;
		row+='<button class="btn btn-blue" id="bass'+item+'" data="'+value+'">'+item+'</button>';
	})
	$('#rockBassContainer').append(row);

	/*************************************** Rock Lead
		Setting Rock Lead
	*/
	var rockLead = ['rock86/LeadGuitar/EMOK1LeadGuit86E-01.mp3','rock86/LeadGuitar/EMOK1LeadGuit86E-02.mp3','rock86/LeadGuitar/EMOK1LeadGuit86E-03.mp3','rock86/LeadGuitar/EMOK1LeadGuit86E-04.mp3','rock86/LeadGuitar/EMOK1LeadGuit86E-05.mp3','rock86/LeadGuitar/EMOK1LeadGuit86E-06.mp3','rock86/LeadGuitar/EMOK1LeadGuit86E-07.mp3','rock86/LeadGuitar/EMOK1LeadGuit86E-08.mp3','rock86/LeadGuitar/EMOK1LeadGuit86E-09.mp3','rock86/LeadGuitar/EMOK1LeadGuit86E-10.mp3'];
	var row = '<button class="btn btn-green" id="leadguitarDel">stop</button>';
	$.each(rockLead, function( index, value ) {
		var item = eval(index)+1;
		row+='<button class="btn btn-green" id="leadguitar'+item+'" data="'+value+'">'+item+'</button>';
	})
	$('#rockLeadContainer').append(row);

	/*************************************** Rock Rhythm
		Setting Rock Rhythm
	*/
	var rockRhythm = ['rock86/RhythmGuitar/EMOK1RhyGuitA86E-01.mp3','rock86/RhythmGuitar/EMOK1RhyGuitA86E-02.mp3','rock86/RhythmGuitar/EMOK1RhyGuitA86E-03.mp3','rock86/RhythmGuitar/EMOK1RhyGuitA86E-04.mp3','rock86/RhythmGuitar/EMOK1RhyGuitA86E-05.mp3','rock86/RhythmGuitar/EMOK1RhyGuitA86E-06.mp3','rock86/RhythmGuitar/EMOK1RhyGuitA86E-07.mp3','rock86/RhythmGuitar/EMOK1RhyGuitA86E-08.mp3','rock86/RhythmGuitar/EMOK1RhyGuitA86E-09.mp3','rock86/RhythmGuitar/EMOK1RhyGuitAt86E-10.mp3','rock86/RhythmGuitar/EMOK1RhyGuitB86E-01.mp3','rock86/RhythmGuitar/EMOK1RhyGuitB86E-02.mp3','rock86/RhythmGuitar/EMOK1RhyGuitB86E-03.mp3','rock86/RhythmGuitar/EMOK1RhyGuitB86E-04.mp3','rock86/RhythmGuitar/EMOK1RhyGuitB86E-05.mp3','rock86/RhythmGuitar/EMOK1RhyGuitB86E-06.mp3','rock86/RhythmGuitar/EMOK1RhyGuitB86E-07.mp3','rock86/RhythmGuitar/EMOK1RhyGuitB86E-08.mp3','rock86/RhythmGuitar/EMOK1RhyGuitB86E-09.mp3','rock86/RhythmGuitar/EMOK1RhyGuitB86E-10.mp3'];
	var row = '<button class="btn btn-yellow" id="rhythmguitarDel">stop</button>';
	$.each(rockRhythm, function( index, value ) {
		var item = eval(index)+1;
		row+='<button class="btn btn-yellow" id="rhythmguitar'+item+'" data="'+value+'">'+item+'</button>';
	})
	$('#rockRhythmContainer').append(row);

	/*
		Handlers Sounds
	*/

	$('button').live('click', function(){
		//this.beat = $('#'+this.id).attr('data');
	});

	$('#drumsDel').live('click', function(){
		window.nowDrums=undefined;window.nextDrums=undefined;
	});

	$('#bassDel').live('click', function(){
		window.nowBass=undefined;window.nextBass=undefined;
	});

	$('#leadguitarDel').live('click', function(){
		window.nowLeadguitar=undefined;window.nextLeadguitar=undefined;
	});

	$('#rhythmguitarDel').live('click', function(){
		window.nowRhythmguitar=undefined;window.nextRhythmguitar=undefined;
	});

	$('button[id*="drums"]').live('click', function(){
		$('button[id*="drums"]').removeClass('btn-red-active');
		$(this).addClass('btn-red-active');
		if ($(this).attr('data')!==undefined){
			window.nowDrumsData=$(this).attr('data');
			if (window.nowDrums===undefined){
				window.nowDrums=$(this).attr('id');
				window.nextDrums=$(this).attr('id');
				if ( (window.nowBass===undefined) && (window.nowLeadguitar===undefined) && (window.nowRhythmguitar===undefined) ){
					playDrums();
				}
			}else{
				window.nextDrums=$(this).attr('id');
			}
		}
	});

	$('button[id*="bass"]').live('click', function(){
		$('button[id*="bass"]').removeClass('btn-blue-active');
		$(this).addClass('btn-blue-active');
		if ($(this).attr('data')!==undefined){
			if (window.nowBass===undefined){
				window.nowBass=$(this).attr('id');
				window.nextBass=$(this).attr('id');
				if ( (window.nowDrums===undefined) && (window.nowLeadguitar===undefined) && (window.nowRhythmguitar===undefined) ){
					playBass();
				}
			}else{
				window.nextBass=$(this).attr('id');
			}
		}
	});

	$('button[id*="leadguitar"]').live('click', function(){
		$('button[id*="leadguitar"]').removeClass('btn-green-active');
		$(this).addClass('btn-green-active');		
		if ($(this).attr('data')!==undefined){
			if (window.nowLeadguitar===undefined){
				window.nowLeadguitar=$(this).attr('id');
				window.nextLeadguitar=$(this).attr('id');
				if ( (window.nowBass===undefined) && (window.nowDrums===undefined) && (window.nowRhythmguitar===undefined) ){
					playLeadguitar();
				}
			}else{
				window.nextLeadguitar=$(this).attr('id');
			}
		}
	});

	$('button[id*="rhythmguitar"]').live('click', function(){
		$('button[id*="rhythmguitar"]').removeClass('btn-yellow-active');
		$(this).addClass('btn-yellow-active');		
		if ($(this).attr('data')!==undefined){
			if (window.nowRhythmguitar===undefined){
				window.nowRhythmguitar=$(this).attr('id');
				window.nextRhythmguitar=$(this).attr('id');
				if ( (window.nowBass===undefined) && (window.nowDrums===undefined) && (window.nowLeadguitar===undefined) ){
					playRhythmguitar();
				}
			}else{
				window.nextRhythmguitar=$(this).attr('id');
			}
		}

	});

	playDrums = function(){
		stopDrums();
		switch(window.nextDrums){
			case 'drums1': howls['rock86/Drums/EMOK1Beat86-01.wav'].play(); break;
			case 'drums2': howls['rock86/Drums/EMOK1Beat86-02.wav'].play(); break;
			case 'drums3': howls['rock86/Drums/EMOK1Beat86-03.wav'].play(); break;
			case 'drums4': howls['rock86/Drums/EMOK1Beat86-04.wav'].play(); break;
			case 'drums5': howls['rock86/Drums/EMOK1Beat86-05.wav'].play(); break;
			case 'drums6': howls['rock86/Drums/EMOK1Beat86-06.wav'].play(); break;
			case 'drums7': howls['rock86/Drums/EMOK1Beat86-07.wav'].play(); break;
			case 'drums8': howls['rock86/Drums/EMOK1Beat86-08.wav'].play(); break;
			case 'drums9': howls['rock86/Drums/EMOK1Beat86-09.wav'].play(); break;
			case 'drums10': howls['rock86/Drums/EMOK1Beat86-10.wav'].play(); break;
		}			
	}

	playBass = function(){
		stopBass();
		switch(window.nextBass){
			case 'bass1': howls['rock86/Bass/EMOK1Bass86E-01.wav'].play(); break;
			case 'bass2': howls['rock86/Bass/EMOK1Bass86E-02.wav'].play(); break;
			case 'bass3': howls['rock86/Bass/EMOK1Bass86E-03.wav'].play(); break;
			case 'bass4': howls['rock86/Bass/EMOK1Bass86E-04.wav'].play(); break;
			case 'bass5': howls['rock86/Bass/EMOK1Bass86E-05.wav'].play(); break;
			case 'bass6': howls['rock86/Bass/EMOK1Bass86E-06.wav'].play(); break;
			case 'bass7': howls['rock86/Bass/EMOK1Bass86E-07.wav'].play(); break;
			case 'bass8': howls['rock86/Bass/EMOK1Bass86E-08.wav'].play(); break;
			case 'bass9': howls['rock86/Bass/EMOK1Bass86E-09.wav'].play(); break;
			case 'bass10': howls['rock86/Bass/EMOK1Bass86E-10.wav'].play(); break;
		}			
	}

	playLeadguitar = function(){
		stopLeadguitar();
		switch(window.nextLeadguitar){
			case 'leadguitar1': howls['rock86/LeadGuitar/EMOK1LeadGuit86E-01.wav'].play(); break;
			case 'leadguitar2': howls['rock86/LeadGuitar/EMOK1LeadGuit86E-01.wav'].play(); break;
			case 'leadguitar3': howls['rock86/LeadGuitar/EMOK1LeadGuit86E-01.wav'].play(); break;
			case 'leadguitar4': howls['rock86/LeadGuitar/EMOK1LeadGuit86E-01.wav'].play(); break;
			case 'leadguitar5': howls['rock86/LeadGuitar/EMOK1LeadGuit86E-01.wav'].play(); break;
			case 'leadguitar6': howls['rock86/LeadGuitar/EMOK1LeadGuit86E-01.wav'].play(); break;
			case 'leadguitar7': howls['rock86/LeadGuitar/EMOK1LeadGuit86E-01.wav'].play(); break;
			case 'leadguitar8': howls['rock86/LeadGuitar/EMOK1LeadGuit86E-01.wav'].play(); break;
			case 'leadguitar9': howls['rock86/LeadGuitar/EMOK1LeadGuit86E-01.wav'].play(); break;
			case 'leadguitar10': howls['rock86/LeadGuitar/EMOK1LeadGuit86E-10.wav'].play(); break;
		}			
	}

	playRhythmguitar = function(){
		stopRhythmguitar();
		switch(window.nextRhythmguitar){
			case 'rhythmguitar1': howls['rock86/RhythmGuitar/EMOK1RhyGuitA86E-01.wav'].play(); break;
			case 'rhythmguitar2': howls['rock86/RhythmGuitar/EMOK1RhyGuitA86E-02.wav'].play(); break;
			case 'rhythmguitar3': howls['rock86/RhythmGuitar/EMOK1RhyGuitA86E-03.wav'].play(); break;
			case 'rhythmguitar4': howls['rock86/RhythmGuitar/EMOK1RhyGuitA86E-04.wav'].play(); break;
			case 'rhythmguitar5': howls['rock86/RhythmGuitar/EMOK1RhyGuitA86E-05.wav'].play(); break;
			case 'rhythmguitar6': howls['rock86/RhythmGuitar/EMOK1RhyGuitA86E-06.wav'].play(); break;
			case 'rhythmguitar7': howls['rock86/RhythmGuitar/EMOK1RhyGuitA86E-07.wav'].play(); break;
			case 'rhythmguitar8': howls['rock86/RhythmGuitar/EMOK1RhyGuitA86E-08.wav'].play(); break;
			case 'rhythmguitar9': howls['rock86/RhythmGuitar/EMOK1RhyGuitA86E-09.wav'].play(); break;
			case 'rhythmguitar10': howls['rock86/RhythmGuitar/EMOK1RhyGuitA86E-10.wav'].play(); break;
		}			
	}


	stopDrums = function(){
		for (var i=0; i<drums.length; i++) {
		    howls[drums[i]].stop();
		}
	}

	stopBass = function(){
		for (var i=0; i<bass.length; i++) {
		    howls[bass[i]].stop();
		}
	}

	stopLeadguitar = function(){
		for (var i=0; i<leadGuitar.length; i++) {
		    howls[leadGuitar[i]].stop();
		}
	}

	stopRhythmguitar = function(){
		for (var i=0; i<rhythmGuitar.length; i++) {
		    howls[rhythmGuitar[i]].stop();
		}
	}

	/*

	// Create a new instance of an audio object and adjust some of its properties
	function setFrecuencyDrums(){
		var audio = new Audio();
		audio.src = window.nowDrumsData;
		// Establish all variables that your Analyser will use
		var canvas, ctx, source, contextDrum, analyser, fbc_array, bars, bar_x, bar_width, bar_height;
		// Initialize the MP3 player after the page loads all of its HTML into the window
		initMp3Player(audio);
	}

	function initMp3Player(audio){
		contextDrum = new webkitAudioContext(); // AudioContext object instance
		analyser = contextDrum.createAnalyser(); // AnalyserNode method
		canvas = document.getElementById('analyser_render');
		ctx = canvas.getContext('2d');
		// Re-route audio playback into the processing graph of the AudioContext
		source = contextDrum.createMediaElementSource(audio); 
		source.connect(analyser);
		analyser.connect(contextDrum.destination);
		frameLooper();
	}
	// frameLooper() animates any style of graphics you wish to the audio frequency
	// Looping at the default frame rate that the browser provides(approx. 60 FPS)
	function frameLooper(){
		window.webkitRequestAnimationFrame(frameLooper);
		fbc_array = new Uint8Array(analyser.frequencyBinCount);
		analyser.getByteFrequencyData(fbc_array);
		ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
		ctx.fillStyle = '#00CCFF'; // Color of the bars
		bars = 100;
		for (var i = 0; i < bars; i++) {
			bar_x = i * 3;
			bar_width = 2;
			bar_height = -(fbc_array[i] / 2);
			//fillRect( x, y, width, height ) // Explanation of the parameters below
			ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
		}
	}


	var soundId = "x";
	var sound = new Howl({
	  urls: ['rock86/RhythmGuitar/EMOK1RhyGuitA86E-09.wav'],
	  volume: .1,
	  loop: true,
	  id: soundId,
	  sprite: {
	    blast: [0, 1000],
	    laser: [2000, 3000],
	    winner: [4000, 7500],
	    thor: [1000, 1500],
	  },
	});

	setTimeout(function() {
	                          
	    //sound.play();
	    sound.volume(0.25);
	});


	sound.play('thor');

	$('#volume').change(function() {
		sound.volume($(this).val(), soundId)
		//sound.play('thor');
	});
*/
});


