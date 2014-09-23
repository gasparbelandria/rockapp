$(function(){	
	/*************************************** Rock Drum
		Setting Rock Drum
	*/
	var row = '<button class="btn btn-red" id="drumsDel_99">stop</button>';
	$.each(drums99, function( index, value ) {
		var item = eval(index)+1;
		row+='<button class="btn btn-red" id="drums_99'+item+'" data="'+value+'">'+item+'</button>';
	})
	$('#rockDrumContainer_99').append(row);

	/*************************************** Rock Bass
		Setting Rock Bass
	*/
	var row = '<button class="btn btn-blue" id="bassDel_99">stop</button>';
	$.each(bass99, function( index, value ) {
		var item = eval(index)+1;
		row+='<button class="btn btn-blue" id="bass_99'+item+'" data="'+value+'">'+item+'</button>';
	})
	$('#rockBassContainer_99').append(row);

	/*************************************** Rock Lead
		Setting Rock Lead
	*/
	var row = '<button class="btn btn-green" id="leadguitarDel_99">stop</button>';
	$.each(leadGuitar99, function( index, value ) {
		var item = eval(index)+1;
		row+='<button class="btn btn-green" id="leadguitar_99'+item+'" data="'+value+'">'+item+'</button>';
	})
	$('#rockLeadContainer_99').append(row);

	/*************************************** Rock Rhythm
		Setting Rock Rhythm
	*/
	var row = '<button class="btn btn-yellow" id="rhythmguitarDel_99">stop</button>';
	$.each(rhythmGuitar99, function( index, value ) {
		var item = eval(index)+1;
		row+='<button class="btn btn-yellow" id="rhythmguitar_99'+item+'" data="'+value+'">'+item+'</button>';
	})
	$('#rockRhythmContainer_99').append(row);

	/*
		Handlers Sounds
	*/

	$('button').live('click', function(){
		//this.beat = $('#'+this.id).attr('data');
	});

	$('#drumsDel_99').live('click', function(){
		$('button[id*="drums_99"]').removeClass('btn-red-active');
		window.nowDrums_99=undefined;window.nextDrums_99=undefined;
	});

	$('#bassDel_99').live('click', function(){
		$('button[id*="bass_99"]').removeClass('btn-blue-active');
		window.nowBass_99=undefined;window.nextBass_99=undefined;
	});

	$('#leadguitarDel_99').live('click', function(){
		$('button[id*="leadguitar_99"]').removeClass('btn-yellow-active');
		window.nowLeadguitar_99=undefined;window.nextLeadguitar_99=undefined;
	});

	$('#rhythmguitarDel_99').live('click', function(){
		$('button[id*="rhythmguitar_99"]').removeClass('btn-yellow-active');
		window.nowRhythmguitar_99=undefined;window.nextRhythmguitar_99=undefined;
	});

	$('button[id*="drums_99"]').live('click', function(){
		$('button[id*="drums_99"]').removeClass('btn-red-active');
		$(this).addClass('btn-red-active');
		if ($(this).attr('data')!==undefined){
			window.nowDrumsData_99=$(this).attr('data');
			if (window.nowDrums_99===undefined){
				window.nowDrums_99=$(this).attr('id');
				window.nextDrums_99=$(this).attr('id');
				if ( (window.nowBass_99===undefined) && (window.nowLeadguitar_99===undefined) && (window.nowRhythmguitar_99===undefined) ){
					playDrums_99();
				}
			}else{
				window.nextDrums_99=$(this).attr('id');
			}
		}
	});

	$('button[id*="bass_99"]').live('click', function(){
		$('button[id*="bass_99"]').removeClass('btn-blue-active');
		$(this).addClass('btn-blue-active');
		if ($(this).attr('data')!==undefined){
			if (window.nowBass_99===undefined){
				window.nowBass_99=$(this).attr('id');
				window.nextBass_99=$(this).attr('id');
				if ( (window.nowDrums_99===undefined) && (window.nowLeadguitar_99===undefined) && (window.nowRhythmguitar_99===undefined) ){
					playBass_99();
				}
			}else{
				window.nextBass_99=$(this).attr('id');
			}
		}
	});

	$('button[id*="leadguitar_99"]').live('click', function(){
		$('button[id*="leadguitar_99"]').removeClass('btn-green-active');
		$(this).addClass('btn-green-active');		
		if ($(this).attr('data')!==undefined){
			if (window.nowLeadguitar_99===undefined){
				window.nowLeadguitar_99=$(this).attr('id');
				window.nextLeadguitar_99=$(this).attr('id');
				if ( (window.nowBass_99===undefined) && (window.nowDrums_99===undefined) && (window.nowRhythmguitar_99===undefined) ){
					playLeadguitar_99();
				}
			}else{
				window.nextLeadguitar_99=$(this).attr('id');
			}
		}
	});

	$('button[id*="rhythmguitar_99"]').live('click', function(){
		$('button[id*="rhythmguitar_99"]').removeClass('btn-yellow-active');
		$(this).addClass('btn-yellow-active');		
		if ($(this).attr('data')!==undefined){
			if (window.nowRhythmguitar_99===undefined){
				window.nowRhythmguitar_99=$(this).attr('id');
				window.nextRhythmguitar_99=$(this).attr('id');
				if ( (window.nowBass_99===undefined) && (window.nowDrums_99===undefined) && (window.nowLeadguitar_99===undefined) ){
					playRhythmguitar_99();
				}
			}else{
				window.nextRhythmguitar_99=$(this).attr('id');
			}
		}
	});

	playDrums_99 = function(){
		stopDrums_99();
		switch(window.nextDrums_99){
			case 'drums_991': howls['rock99/Drums/EMOK3Beat99-01.wav'].play(); break;
			case 'drums_992': howls['rock99/Drums/EMOK3Beat99-02.wav'].play(); break;
			case 'drums_993': howls['rock99/Drums/EMOK3Beat99-03.wav'].play(); break;
			case 'drums_994': howls['rock99/Drums/EMOK3Beat99-04.wav'].play(); break;
			case 'drums_995': howls['rock99/Drums/EMOK3Beat99-05.wav'].play(); break;
			case 'drums_996': howls['rock99/Drums/EMOK3Beat99-06.wav'].play(); break;
			case 'drums_997': howls['rock99/Drums/EMOK3Beat99-07.wav'].play(); break;
			case 'drums_998': howls['rock99/Drums/EMOK3Beat99-08.wav'].play(); break;
		}			
	}

	playBass_99 = function(){
		stopBass_99();
		switch(window.nextBass_99){
			case 'bass_991': howls['rock99/Bass/EMOK3BassA99A-01.wav'].play(); break;
			case 'bass_992': howls['rock99/Bass/EMOK3BassA99A-02.wav'].play(); break;
			case 'bass_993': howls['rock99/Bass/EMOK3BassA99A-03.wav'].play(); break;
			case 'bass_994': howls['rock99/Bass/EMOK3BassA99A-04.wav'].play(); break;
			case 'bass_995': howls['rock99/Bass/EMOK3BassA99A-05.wav'].play(); break;
			case 'bass_996': howls['rock99/Bass/EMOK3BassA99A-06.wav'].play(); break;
			case 'bass_997': howls['rock99/Bass/EMOK3BassA99A-07.wav'].play(); break;
			case 'bass_998': howls['rock99/Bass/EMOK3BassA99A-08.wav'].play(); break;
			case 'bass_999': howls['rock99/Bass/EMOK3BassA99A-09.wav'].play(); break;
			case 'bass_9910': howls['rock99/Bass/EMOK3BassA99A-10.wav'].play(); break;
		}			
	}

	playLeadguitar_99 = function(){
		stopLeadguitar_99();
		switch(window.nextLeadguitar_99){
			case 'leadguitar_991': howls['rock99/LeadGuitar/EMOK3LeadGuitA99A-01.wav'].play(); break;
			case 'leadguitar_992': howls['rock99/LeadGuitar/EMOK3LeadGuitA99A-02.wav'].play(); break;
			case 'leadguitar_993': howls['rock99/LeadGuitar/EMOK3LeadGuitA99A-03.wav'].play(); break;
			case 'leadguitar_994': howls['rock99/LeadGuitar/EMOK3LeadGuitA99A-04.wav'].play(); break;
			case 'leadguitar_995': howls['rock99/LeadGuitar/EMOK3LeadGuitA99A-05.wav'].play(); break;
			case 'leadguitar_996': howls['rock99/LeadGuitar/EMOK3LeadGuitA99A-06.wav'].play(); break;
			case 'leadguitar_997': howls['rock99/LeadGuitar/EMOK3LeadGuitA99A-07.wav'].play(); break;
			case 'leadguitar_998': howls['rock99/LeadGuitar/EMOK3LeadGuitA99A-08.wav'].play(); break;
			case 'leadguitar_999': howls['rock99/LeadGuitar/EMOK3LeadGuitA99A-09.wav'].play(); break;
			case 'leadguitar_9910': howls['rock99/LeadGuitar/EMOK3LeadGuitA99A-10.wav'].play(); break;
		}			
	}

	playRhythmguitar_99 = function(){
		stopRhythmguitar_99();
		switch(window.nextRhythmguitar_99){
			case 'rhythmguitar_991': howls['rock99/RhythmGuitar/EMOK3RhyGuitA99A-01.wav'].play(); break;
			case 'rhythmguitar_992': howls['rock99/RhythmGuitar/EMOK3RhyGuitA99A-02.wav'].play(); break;
			case 'rhythmguitar_993': howls['rock99/RhythmGuitar/EMOK3RhyGuitA99A-03.wav'].play(); break;
			case 'rhythmguitar_994': howls['rock99/RhythmGuitar/EMOK3RhyGuitA99A-04.wav'].play(); break;
			case 'rhythmguitar_995': howls['rock99/RhythmGuitar/EMOK3RhyGuitA99A-05.wav'].play(); break;
			case 'rhythmguitar_996': howls['rock99/RhythmGuitar/EMOK3RhyGuitA99A-06.wav'].play(); break;
			case 'rhythmguitar_997': howls['rock99/RhythmGuitar/EMOK3RhyGuitA99A-07.wav'].play(); break;
			case 'rhythmguitar_998': howls['rock99/RhythmGuitar/EMOK3RhyGuitA99A-08.wav'].play(); break;
			case 'rhythmguitar_999': howls['rock99/RhythmGuitar/EMOK3RhyGuitA99A-09.wav'].play(); break;
			case 'rhythmguitar_9910': howls['rock99/RhythmGuitar/EMOK3RhyGuitA99A-10.wav'].play(); break;
		}			
	}

	stopDrums_99 = function(){
		for (var i=0; i<drums99.length; i++) {
		    howls[drums99[i]].stop();
		}
	}

	stopBass_99 = function(){
		for (var i=0; i<bass99.length; i++) {
		    howls[bass99[i]].stop();
		}
	}

	stopLeadguitar_99 = function(){
		for (var i=0; i<leadGuitar99.length; i++) {
		    howls[leadGuitar99[i]].stop();
		}
	}

	stopRhythmguitar_99 = function(){
		for (var i=0; i<rhythmGuitar99.length; i++) {
		    howls[rhythmGuitar99[i]].stop();
		}
	}
});


