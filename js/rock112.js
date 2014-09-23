$(function(){	
	/*************************************** Rock Drum
		Setting Rock Drum
	*/
	var row = '<button class="btn btn-red" id="drumsDel_112">stop</button>';
	$.each(drums112, function( index, value ) {
		var item = eval(index)+1;
		row+='<button class="btn btn-red" id="drums_112'+item+'" data="'+value+'">'+item+'</button>';
	})
	$('#rockDrumContainer_112').append(row);

	/*************************************** Rock Bass
		Setting Rock Bass
	*/
	var row = '<button class="btn btn-blue" id="bassDel_112">stop</button>';
	$.each(bass112, function( index, value ) {
		var item = eval(index)+1;
		row+='<button class="btn btn-blue" id="bass_112'+item+'" data="'+value+'">'+item+'</button>';
	})
	$('#rockBassContainer_112').append(row);

	/*************************************** Rock Lead
		Setting Rock Lead
	*/
	var row = '<button class="btn btn-green" id="leadguitarDel_112">stop</button>';
	$.each(leadGuitar112, function( index, value ) {
		var item = eval(index)+1;
		row+='<button class="btn btn-green" id="leadguitar_112'+item+'" data="'+value+'">'+item+'</button>';
	})
	$('#rockLeadContainer_112').append(row);

	/*************************************** Rock Rhythm
		Setting Rock Rhythm
	*/
	var row = '<button class="btn btn-yellow" id="rhythmguitarDel_112">stop</button>';
	$.each(rhythmGuitar112, function( index, value ) {
		var item = eval(index)+1;
		row+='<button class="btn btn-yellow" id="rhythmguitar_112'+item+'" data="'+value+'">'+item+'</button>';
	})
	$('#rockRhythmContainer_112').append(row);

	/*
		Handlers Sounds
	*/

	$('button').live('click', function(){
		//this.beat = $('#'+this.id).attr('data');
	});

	$('#drumsDel_112').live('click', function(){
		$('button[id*="drums_112"]').removeClass('btn-red-active');
		window.nowDrums_112=undefined;window.nextDrums_112=undefined;
	});

	$('#bassDel_112').live('click', function(){
		$('button[id*="bass_112"]').removeClass('btn-blue-active');
		window.nowBass_112=undefined;window.nextBass_112=undefined;
	});

	$('#leadguitarDel_112').live('click', function(){
		$('button[id*="leadguitar_112"]').removeClass('btn-yellow-active');
		window.nowLeadguitar_112=undefined;window.nextLeadguitar_112=undefined;
	});

	$('#rhythmguitarDel_112').live('click', function(){
		$('button[id*="rhythmguitar_112"]').removeClass('btn-yellow-active');
		window.nowRhythmguitar_112=undefined;window.nextRhythmguitar_112=undefined;
	});

	$('button[id*="drums_112"]').live('click', function(){
		$('button[id*="drums_112"]').removeClass('btn-red-active');
		$(this).addClass('btn-red-active');
		if ($(this).attr('data')!==undefined){
			window.nowDrumsData_112=$(this).attr('data');
			if (window.nowDrums_112===undefined){
				window.nowDrums_112=$(this).attr('id');
				window.nextDrums_112=$(this).attr('id');
				if ( (window.nowBass_112===undefined) && (window.nowLeadguitar_112===undefined) && (window.nowRhythmguitar_112===undefined) ){
					playDrums_112();
				}
			}else{
				window.nextDrums_112=$(this).attr('id');
			}
		}
	});

	$('button[id*="bass_112"]').live('click', function(){
		$('button[id*="bass_112"]').removeClass('btn-blue-active');
		$(this).addClass('btn-blue-active');
		if ($(this).attr('data')!==undefined){
			if (window.nowBass_112===undefined){
				window.nowBass_112=$(this).attr('id');
				window.nextBass_112=$(this).attr('id');
				if ( (window.nowDrums_112===undefined) && (window.nowLeadguitar_112===undefined) && (window.nowRhythmguitar_112===undefined) ){
					playBass_112();
				}
			}else{
				window.nextBass_112=$(this).attr('id');
			}
		}
	});

	$('button[id*="leadguitar_112"]').live('click', function(){
		$('button[id*="leadguitar_112"]').removeClass('btn-green-active');
		$(this).addClass('btn-green-active');		
		if ($(this).attr('data')!==undefined){
			if (window.nowLeadguitar_112===undefined){
				window.nowLeadguitar_112=$(this).attr('id');
				window.nextLeadguitar_112=$(this).attr('id');
				if ( (window.nowBass_112===undefined) && (window.nowDrums_112===undefined) && (window.nowRhythmguitar_112===undefined) ){
					playLeadguitar_112();
				}
			}else{
				window.nextLeadguitar_112=$(this).attr('id');
			}
		}
	});

	$('button[id*="rhythmguitar_112"]').live('click', function(){
		$('button[id*="rhythmguitar_112"]').removeClass('btn-yellow-active');
		$(this).addClass('btn-yellow-active');		
		if ($(this).attr('data')!==undefined){
			if (window.nowRhythmguitar_112===undefined){
				window.nowRhythmguitar_112=$(this).attr('id');
				window.nextRhythmguitar_112=$(this).attr('id');
				if ( (window.nowBass_112===undefined) && (window.nowDrums_112===undefined) && (window.nowLeadguitar_112===undefined) ){
					playRhythmguitar_112();
				}
			}else{
				window.nextRhythmguitar_112=$(this).attr('id');
			}
		}
	});

	playDrums_112 = function(){
		stopDrums_112();
		switch(window.nextDrums_112){
			case 'drums_1121': howls['rock112/Drums/EMOK5Beat112-01.wav'].play(); break;
			case 'drums_1122': howls['rock112/Drums/EMOK5Beat112-02.wav'].play(); break;
			case 'drums_1123': howls['rock112/Drums/EMOK5Beat112-03.wav'].play(); break;
			case 'drums_1124': howls['rock112/Drums/EMOK5Beat112-04.wav'].play(); break;
			case 'drums_1125': howls['rock112/Drums/EMOK5Beat112-05.wav'].play(); break;
			case 'drums_1126': howls['rock112/Drums/EMOK5Beat112-06.wav'].play(); break;
			case 'drums_1127': howls['rock112/Drums/EMOK5Beat112-07.wav'].play(); break;
			case 'drums_1128': howls['rock112/Drums/EMOK5Beat112-08.wav'].play(); break;
			case 'drums_1129': howls['rock112/Drums/EMOK5Beat112-09.wav'].play(); break;
			case 'drums_11210': howls['rock112/Drums/EMOK5Beat112-10.wav'].play(); break;
		}			
	}

	playBass_112 = function(){
		stopBass_112();
		switch(window.nextBass_112){
			case 'bass_1121': howls['rock112/Bass/EMOK5BassA112E-01.wav'].play(); break;
			case 'bass_1122': howls['rock112/Bass/EMOK5BassA112E-02.wav'].play(); break;
			case 'bass_1123': howls['rock112/Bass/EMOK5BassA112E-03.wav'].play(); break;
			case 'bass_1124': howls['rock112/Bass/EMOK5BassA112E-04.wav'].play(); break;
			case 'bass_1125': howls['rock112/Bass/EMOK5BassA112E-05.wav'].play(); break;
			case 'bass_1126': howls['rock112/Bass/EMOK5BassA112E-06.wav'].play(); break;
			case 'bass_1127': howls['rock112/Bass/EMOK5BassA112E-07.wav'].play(); break;
			case 'bass_1128': howls['rock112/Bass/EMOK5BassA112E-08.wav'].play(); break;
			case 'bass_1129': howls['rock112/Bass/EMOK5BassA112E-09.wav'].play(); break;
			case 'bass_11210': howls['rock112/Bass/EMOK5BassA112E-10.wav'].play(); break;
		}			
	}

	playLeadguitar_112 = function(){
		stopLeadguitar_112();
		switch(window.nextLeadguitar_112){
			case 'leadguitar_1121': howls['rock112/LeadGuitar/EMOK5LeadGuitA112E-01.wav'].play(); break;
			case 'leadguitar_1122': howls['rock112/LeadGuitar/EMOK5LeadGuitA112E-02.wav'].play(); break;
			case 'leadguitar_1123': howls['rock112/LeadGuitar/EMOK5LeadGuitA112E-03.wav'].play(); break;
			case 'leadguitar_1124': howls['rock112/LeadGuitar/EMOK5LeadGuitA112E-04.wav'].play(); break;
			case 'leadguitar_1125': howls['rock112/LeadGuitar/EMOK5LeadGuitA112E-05.wav'].play(); break;
			case 'leadguitar_1126': howls['rock112/LeadGuitar/EMOK5LeadGuitA112E-06.wav'].play(); break;
			case 'leadguitar_1127': howls['rock112/LeadGuitar/EMOK5LeadGuitA112E-07.wav'].play(); break;
			case 'leadguitar_1128': howls['rock112/LeadGuitar/EMOK5LeadGuitA112E-08.wav'].play(); break;
			case 'leadguitar_1129': howls['rock112/LeadGuitar/EMOK5LeadGuitA112E-09.wav'].play(); break;
			case 'leadguitar_11210': howls['rock112/LeadGuitar/EMOK5LeadGuitA112E-10.wav'].play(); break;
		}			
	}

	playRhythmguitar_112 = function(){
		stopRhythmguitar_112();
		switch(window.nextRhythmguitar_112){
			case 'rhythmguitar_1121': howls['rock112/RhythmGuitar/EMOK5RhyGuitA112E-01.wav'].play(); break;
			case 'rhythmguitar_1122': howls['rock112/RhythmGuitar/EMOK5RhyGuitA112E-02.wav'].play(); break;
			case 'rhythmguitar_1123': howls['rock112/RhythmGuitar/EMOK5RhyGuitA112E-03.wav'].play(); break;
			case 'rhythmguitar_1124': howls['rock112/RhythmGuitar/EMOK5RhyGuitA112E-04.wav'].play(); break;
			case 'rhythmguitar_1125': howls['rock112/RhythmGuitar/EMOK5RhyGuitA112E-05.wav'].play(); break;
			case 'rhythmguitar_1126': howls['rock112/RhythmGuitar/EMOK5RhyGuitA112E-06.wav'].play(); break;
			case 'rhythmguitar_1127': howls['rock112/RhythmGuitar/EMOK5RhyGuitA112E-07.wav'].play(); break;
			case 'rhythmguitar_1128': howls['rock112/RhythmGuitar/EMOK5RhyGuitA112E-08.wav'].play(); break;
			case 'rhythmguitar_1129': howls['rock112/RhythmGuitar/EMOK5RhyGuitA112E-09.wav'].play(); break;
			case 'rhythmguitar_11210': howls['rock112/RhythmGuitar/EMOK5RhyGuitA112E-10.wav'].play(); break;
		}			
	}

	stopDrums_112 = function(){
		for (var i=0; i<drums112.length; i++) {
		    howls[drums112[i]].stop();
		}
	}

	stopBass_112 = function(){
		for (var i=0; i<bass112.length; i++) {
		    howls[bass112[i]].stop();
		}
	}

	stopLeadguitar_112 = function(){
		for (var i=0; i<leadGuitar112.length; i++) {
		    howls[leadGuitar112[i]].stop();
		}
	}

	stopRhythmguitar_112 = function(){
		for (var i=0; i<rhythmGuitar112.length; i++) {
		    howls[rhythmGuitar112[i]].stop();
		}
	}

});