$(function(){	
	/*************************************** Rock Drum
		Setting Rock Drum
	*/
	var row = '<button class="btn btn-red" id="drumsDel_155">stop</button>';
	$.each(drums115, function( index, value ) {
		var item = eval(index)+1;
		row+='<button class="btn btn-red" id="drums_155'+item+'" data="'+value+'">'+item+'</button>';
	})
	$('#rockDrumContainer_155').append(row);

	/*************************************** Rock Bass
		Setting Rock Bass
	*/
	var row = '<button class="btn btn-blue" id="bassDel_155">stop</button>';
	$.each(bass115, function( index, value ) {
		var item = eval(index)+1;
		row+='<button class="btn btn-blue" id="bass_155'+item+'" data="'+value+'">'+item+'</button>';
	})
	$('#rockBassContainer_155').append(row);

	/*************************************** Rock Lead
		Setting Rock Lead
	*/
	var row = '<button class="btn btn-green" id="leadguitarDel_155">stop</button>';
	$.each(leadGuitar115, function( index, value ) {
		var item = eval(index)+1;
		row+='<button class="btn btn-green" id="leadguitar_155'+item+'" data="'+value+'">'+item+'</button>';
	})
	$('#rockLeadContainer_155').append(row);

	/*************************************** Rock Rhythm
		Setting Rock Rhythm
	*/
	var row = '<button class="btn btn-yellow" id="rhythmguitarDel_155">stop</button>';
	$.each(rhythmGuitar115, function( index, value ) {
		var item = eval(index)+1;
		row+='<button class="btn btn-yellow" id="rhythmguitar_155'+item+'" data="'+value+'">'+item+'</button>';
	})
	$('#rockRhythmContainer_155').append(row);

	/*
		Handlers Sounds
	*/

	$('button').live('click', function(){
		//this.beat = $('#'+this.id).attr('data');
	});

	$('#drumsDel_155').live('click', function(){
		$('button[id*="drums_155"]').removeClass('btn-red-active');
		window.nowDrums_155=undefined;window.nextDrums_155=undefined;
	});

	$('#bassDel_155').live('click', function(){
		$('button[id*="bass_155"]').removeClass('btn-blue-active');
		window.nowBass_155=undefined;window.nextBass_155=undefined;
	});

	$('#leadguitarDel_155').live('click', function(){
		$('button[id*="leadguitar_155"]').removeClass('btn-yellow-active');
		window.nowLeadguitar_155=undefined;window.nextLeadguitar_155=undefined;
	});

	$('#rhythmguitarDel_155').live('click', function(){
		$('button[id*="rhythmguitar_155"]').removeClass('btn-yellow-active');
		window.nowRhythmguitar_155=undefined;window.nextRhythmguitar_155=undefined;
	});

	$('button[id*="drums_155"]').live('click', function(){
		$('button[id*="drums_155"]').removeClass('btn-red-active');
		$(this).addClass('btn-red-active');
		if ($(this).attr('data')!==undefined){
			window.nowDrumsData_155=$(this).attr('data');
			if (window.nowDrums_155===undefined){
				window.nowDrums_155=$(this).attr('id');
				window.nextDrums_155=$(this).attr('id');
				if ( (window.nowBass_155===undefined) && (window.nowLeadguitar_155===undefined) && (window.nowRhythmguitar_155===undefined) ){
					playDrums_155();
				}
			}else{
				window.nextDrums_155=$(this).attr('id');
			}
		}
	});

	$('button[id*="bass_155"]').live('click', function(){
		$('button[id*="bass_155"]').removeClass('btn-blue-active');
		$(this).addClass('btn-blue-active');
		if ($(this).attr('data')!==undefined){
			if (window.nowBass_155===undefined){
				window.nowBass_155=$(this).attr('id');
				window.nextBass_155=$(this).attr('id');
				if ( (window.nowDrums_155===undefined) && (window.nowLeadguitar_155===undefined) && (window.nowRhythmguitar_155===undefined) ){
					playBass_155();
				}
			}else{
				window.nextBass_155=$(this).attr('id');
			}
		}
	});

	$('button[id*="leadguitar_155"]').live('click', function(){
		$('button[id*="leadguitar_155"]').removeClass('btn-green-active');
		$(this).addClass('btn-green-active');		
		if ($(this).attr('data')!==undefined){
			if (window.nowLeadguitar_155===undefined){
				window.nowLeadguitar_155=$(this).attr('id');
				window.nextLeadguitar_155=$(this).attr('id');
				if ( (window.nowBass_155===undefined) && (window.nowDrums_155===undefined) && (window.nowRhythmguitar_155===undefined) ){
					playLeadguitar_155();
				}
			}else{
				window.nextLeadguitar_155=$(this).attr('id');
			}
		}
	});

	$('button[id*="rhythmguitar_155"]').live('click', function(){
		$('button[id*="rhythmguitar_155"]').removeClass('btn-yellow-active');
		$(this).addClass('btn-yellow-active');		
		if ($(this).attr('data')!==undefined){
			if (window.nowRhythmguitar_155===undefined){
				window.nowRhythmguitar_155=$(this).attr('id');
				window.nextRhythmguitar_155=$(this).attr('id');
				if ( (window.nowBass_155===undefined) && (window.nowDrums_155===undefined) && (window.nowLeadguitar_155===undefined) ){
					playRhythmguitar_155();
				}
			}else{
				window.nextRhythmguitar_155=$(this).attr('id');
			}
		}
	});

	playDrums_155 = function(){
		stopDrums_155();
		switch(window.nextDrums_155){
			case 'drums_1551': howls['rock155/Drums/EMOK4Beat155-01.wav'].play(); break;
			case 'drums_1552': howls['rock155/Drums/EMOK4Beat155-02.wav'].play(); break;
			case 'drums_1553': howls['rock155/Drums/EMOK4Beat155-03.wav'].play(); break;
			case 'drums_1554': howls['rock155/Drums/EMOK4Beat155-04.wav'].play(); break;
			case 'drums_1555': howls['rock155/Drums/EMOK4Beat155-05.wav'].play(); break;
			case 'drums_1556': howls['rock155/Drums/EMOK4Beat155-06.wav'].play(); break;
			case 'drums_1557': howls['rock155/Drums/EMOK4Beat155-07.wav'].play(); break;
			case 'drums_1558': howls['rock155/Drums/EMOK4Beat155-08.wav'].play(); break;
			case 'drums_1559': howls['rock155/Drums/EMOK4Beat155-09.wav'].play(); break;
			case 'drums_15510': howls['rock155/Drums/EMOK4Beat155-10.wav'].play(); break;
		}			
	}

	playBass_155 = function(){
		stopBass_155();
		switch(window.nextBass_155){
			case 'bass_1551': howls['rock155/Bass/EMOK4BassA155G-01.wav'].play(); break;
			case 'bass_1552': howls['rock155/Bass/EMOK4BassA155G-02.wav'].play(); break;
			case 'bass_1553': howls['rock155/Bass/EMOK4BassA155G-03.wav'].play(); break;
			case 'bass_1554': howls['rock155/Bass/EMOK4BassA155G-04.wav'].play(); break;
			case 'bass_1555': howls['rock155/Bass/EMOK4BassA155G-05.wav'].play(); break;
			case 'bass_1556': howls['rock155/Bass/EMOK4BassA155G-06.wav'].play(); break;
			case 'bass_1557': howls['rock155/Bass/EMOK4BassA155G-07.wav'].play(); break;
			case 'bass_1558': howls['rock155/Bass/EMOK4BassA155G-08.wav'].play(); break;
			case 'bass_1559': howls['rock155/Bass/EMOK4BassA155G-09.wav'].play(); break;
			case 'bass_15510': howls['rock155/Bass/EMOK4BassA155G-10.wav'].play(); break;
		}			
	}

	playLeadguitar_155 = function(){
		stopLeadguitar_155();
		switch(window.nextLeadguitar_155){
			case 'leadguitar_1551': howls['rock155/LeadGuitar/EMOK4LeadGuitA155G-01.wav'].play(); break;
			case 'leadguitar_1552': howls['rock155/LeadGuitar/EMOK4LeadGuitA155G-02.wav'].play(); break;
			case 'leadguitar_1553': howls['rock155/LeadGuitar/EMOK4LeadGuitA155G-03.wav'].play(); break;
			case 'leadguitar_1554': howls['rock155/LeadGuitar/EMOK4LeadGuitA155G-04.wav'].play(); break;
			case 'leadguitar_1555': howls['rock155/LeadGuitar/EMOK4LeadGuitA155G-05.wav'].play(); break;
			case 'leadguitar_1556': howls['rock155/LeadGuitar/EMOK4LeadGuitA155G-06.wav'].play(); break;
			case 'leadguitar_1557': howls['rock155/LeadGuitar/EMOK4LeadGuitA155G-07.wav'].play(); break;
			case 'leadguitar_1558': howls['rock155/LeadGuitar/EMOK4LeadGuitA155G-08.wav'].play(); break;
			case 'leadguitar_1559': howls['rock155/LeadGuitar/EMOK4LeadGuitA155G-09.wav'].play(); break;
			case 'leadguitar_15510': howls['rock155/LeadGuitar/EMOK4LeadGuitA155G-10.wav'].play(); break;
		}			
	}

	playRhythmguitar_155 = function(){
		stopRhythmguitar_155();
		switch(window.nextRhythmguitar_155){
			case 'rhythmguitar_1551': howls['rock155/RhythmGuitar/EMOK4RhyGuitA155G-01.wav'].play(); break;
			case 'rhythmguitar_1552': howls['rock155/RhythmGuitar/EMOK4RhyGuitA155G-02.wav'].play(); break;
			case 'rhythmguitar_1553': howls['rock155/RhythmGuitar/EMOK4RhyGuitA155G-03.wav'].play(); break;
			case 'rhythmguitar_1554': howls['rock155/RhythmGuitar/EMOK4RhyGuitA155G-04.wav'].play(); break;
			case 'rhythmguitar_1555': howls['rock155/RhythmGuitar/EMOK4RhyGuitA155G-05.wav'].play(); break;
			case 'rhythmguitar_1556': howls['rock155/RhythmGuitar/EMOK4RhyGuitA155G-06.wav'].play(); break;
			case 'rhythmguitar_1557': howls['rock155/RhythmGuitar/EMOK4RhyGuitA155G-07.wav'].play(); break;
			case 'rhythmguitar_1558': howls['rock155/RhythmGuitar/EMOK4RhyGuitA155G-08.wav'].play(); break;
			case 'rhythmguitar_1559': howls['rock155/RhythmGuitar/EMOK4RhyGuitA155G-09.wav'].play(); break;
			case 'rhythmguitar_15510': howls['rock155/RhythmGuitar/EMOK4RhyGuitA155G-10s.wav'].play(); break;
		}			
	}

	stopDrums_155 = function(){
		for (var i=0; i<drums115.length; i++) {
		    howls[drums115[i]].stop();
		}
	}

	stopBass_155 = function(){
		for (var i=0; i<bass115.length; i++) {
		    howls[bass115[i]].stop();
		}
	}

	stopLeadguitar_155 = function(){
		for (var i=0; i<leadGuitar115.length; i++) {
		    howls[leadGuitar115[i]].stop();
		}
	}

	stopRhythmguitar_155 = function(){
		for (var i=0; i<rhythmGuitar115.length; i++) {
		    howls[rhythmGuitar115[i]].stop();
		}
	}

});


