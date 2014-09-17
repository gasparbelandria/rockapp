$(function(){	
	/*************************************** Rock Drum
		Setting Rock Drum
	*/
	var row = '<button class="btn btn-red" id="drumsDel_105">stop</button>';
	$.each(drums105, function( index, value ) {
		var item = eval(index)+1;
		row+='<button class="btn btn-red" id="drums_105'+item+'" data="'+value+'">'+item+'</button>';
	})
	$('#rockDrumContainer_105').append(row);

	/*************************************** Rock Bass
		Setting Rock Bass
	*/
	var row = '<button class="btn btn-blue" id="bassDel_105">stop</button>';
	$.each(bass105, function( index, value ) {
		var item = eval(index)+1;
		row+='<button class="btn btn-blue" id="bass_105'+item+'" data="'+value+'">'+item+'</button>';
	})
	$('#rockBassContainer_105').append(row);

	/*************************************** Rock Lead
		Setting Rock Lead
	*/
	var row = '<button class="btn btn-green" id="leadguitarDel_105">stop</button>';
	$.each(leadGuitar105, function( index, value ) {
		var item = eval(index)+1;
		row+='<button class="btn btn-green" id="leadguitar_105'+item+'" data="'+value+'">'+item+'</button>';
	})
	$('#rockLeadContainer_105').append(row);

	/*************************************** Rock Rhythm
		Setting Rock Rhythm
	*/
	var row = '<button class="btn btn-yellow" id="rhythmguitarDel_105">stop</button>';
	$.each(rhythmGuitar105, function( index, value ) {
		var item = eval(index)+1;
		row+='<button class="btn btn-yellow" id="rhythmguitar_105'+item+'" data="'+value+'">'+item+'</button>';
	})
	$('#rockRhythmContainer_105').append(row);

	/*
		Handlers Sounds
	*/

	$('button').live('click', function(){
		//this.beat = $('#'+this.id).attr('data');
	});

	$('#drumsDel_105').live('click', function(){
		$('button[id*="drums_105"]').removeClass('btn-red-active');
		window.nowDrums_105=undefined;window.nextDrums_105=undefined;
	});

	$('#bassDel_105').live('click', function(){
		$('button[id*="bass_105"]').removeClass('btn-blue-active');
		window.nowBass_105=undefined;window.nextBass_105=undefined;
	});

	$('#leadguitarDel_105').live('click', function(){
		$('button[id*="leadguitar_105"]').removeClass('btn-yellow-active');
		window.nowLeadguitar_105=undefined;window.nextLeadguitar_105=undefined;
	});

	$('#rhythmguitarDel_105').live('click', function(){
		$('button[id*="rhythmguitar_105"]').removeClass('btn-yellow-active');
		window.nowRhythmguitar_105=undefined;window.nextRhythmguitar_105=undefined;
	});

	$('button[id*="drums_105"]').live('click', function(){
		$('button[id*="drums_105"]').removeClass('btn-red-active');
		$(this).addClass('btn-red-active');
		if ($(this).attr('data')!==undefined){
			window.nowDrumsData_105=$(this).attr('data');
			if (window.nowDrums_105===undefined){
				window.nowDrums_105=$(this).attr('id');
				window.nextDrums_105=$(this).attr('id');
				if ( (window.nowBass_105===undefined) && (window.nowLeadguitar_105===undefined) && (window.nowRhythmguitar_105===undefined) ){
					playDrums_105();
				}
			}else{
				window.nextDrums_105=$(this).attr('id');
			}
		}
	});

	$('button[id*="bass_105"]').live('click', function(){
		$('button[id*="bass_105"]').removeClass('btn-blue-active');
		$(this).addClass('btn-blue-active');
		if ($(this).attr('data')!==undefined){
			if (window.nowBass_105===undefined){
				window.nowBass_105=$(this).attr('id');
				window.nextBass_105=$(this).attr('id');
				if ( (window.nowDrums_105===undefined) && (window.nowLeadguitar_105===undefined) && (window.nowRhythmguitar_105===undefined) ){
					playBass_105();
				}
			}else{
				window.nextBass_105=$(this).attr('id');
			}
		}
	});

	$('button[id*="leadguitar_105"]').live('click', function(){
		$('button[id*="leadguitar_105"]').removeClass('btn-green-active');
		$(this).addClass('btn-green-active');		
		if ($(this).attr('data')!==undefined){
			if (window.nowLeadguitar_105===undefined){
				window.nowLeadguitar_105=$(this).attr('id');
				window.nextLeadguitar_105=$(this).attr('id');
				if ( (window.nowBass_105===undefined) && (window.nowDrums_105===undefined) && (window.nowRhythmguitar_105===undefined) ){
					playLeadguitar_105();
				}
			}else{
				window.nextLeadguitar_105=$(this).attr('id');
			}
		}
	});

	$('button[id*="rhythmguitar_105"]').live('click', function(){
		$('button[id*="rhythmguitar_105"]').removeClass('btn-yellow-active');
		$(this).addClass('btn-yellow-active');		
		if ($(this).attr('data')!==undefined){
			if (window.nowRhythmguitar_105===undefined){
				window.nowRhythmguitar_105=$(this).attr('id');
				window.nextRhythmguitar_105=$(this).attr('id');
				if ( (window.nowBass_105===undefined) && (window.nowDrums_105===undefined) && (window.nowLeadguitar_105===undefined) ){
					playRhythmguitar_105();
				}
			}else{
				window.nextRhythmguitar_105=$(this).attr('id');
			}
		}

	});

	playDrums_105 = function(){
		stopDrums_105();
		switch(window.nextDrums_105){
			case 'drums_1051': howls['rock105/Drums/EMOK2Beat105-01.wav'].play(); break;
			case 'drums_1052': howls['rock105/Drums/EMOK2Beat105-02.wav'].play(); break;
			case 'drums_1053': howls['rock105/Drums/EMOK2Beat105-03.wav'].play(); break;
			case 'drums_1054': howls['rock105/Drums/EMOK2Beat105-04.wav'].play(); break;
			case 'drums_1055': howls['rock105/Drums/EMOK2Beat105-05.wav'].play(); break;
			case 'drums_1056': howls['rock105/Drums/EMOK2Beat105-06.wav'].play(); break;
			case 'drums_1057': howls['rock105/Drums/EMOK2Beat105-07.wav'].play(); break;
			case 'drums_1058': howls['rock105/Drums/EMOK2Beat105-08.wav'].play(); break;
			case 'drums_1059': howls['rock105/Drums/EMOK2Beat105-09.wav'].play(); break;
			case 'drums_10510':howls['rock105/Drums/EMOK2Beat105-10.wav'].play(); break;
		}			
	}

	playBass_105 = function(){
		stopBass_105();
		switch(window.nextBass_105){
			case 'bass_1051': howls['rock86/Bass/EMOK1Bass86E-01.wav'].play(); break;
			case 'bass_1052': howls['rock86/Bass/EMOK1Bass86E-02.wav'].play(); break;
			case 'bass_1053': howls['rock86/Bass/EMOK1Bass86E-03.wav'].play(); break;
			case 'bass_1054': howls['rock86/Bass/EMOK1Bass86E-04.wav'].play(); break;
			case 'bass_1055': howls['rock86/Bass/EMOK1Bass86E-05.wav'].play(); break;
			case 'bass_1056': howls['rock86/Bass/EMOK1Bass86E-06.wav'].play(); break;
			case 'bass_1057': howls['rock86/Bass/EMOK1Bass86E-07.wav'].play(); break;
			case 'bass_1058': howls['rock86/Bass/EMOK1Bass86E-08.wav'].play(); break;
			case 'bass_1059': howls['rock86/Bass/EMOK1Bass86E-09.wav'].play(); break;
			case 'bass_10510':howls['rock86/Bass/EMOK1Bass86E-10.wav'].play(); break;
		}			
	}

	playLeadguitar_105 = function(){
		stopLeadguitar_105();
		switch(window.nextLeadguitar_105){
			case 'leadguitar_1051': howls['rock86/LeadGuitar/EMOK1LeadGuit86E-01.wav'].play(); break;
			case 'leadguitar_1052': howls['rock86/LeadGuitar/EMOK1LeadGuit86E-02.wav'].play(); break;
			case 'leadguitar_1053': howls['rock86/LeadGuitar/EMOK1LeadGuit86E-03.wav'].play(); break;
			case 'leadguitar_1054': howls['rock86/LeadGuitar/EMOK1LeadGuit86E-04.wav'].play(); break;
			case 'leadguitar_1055': howls['rock86/LeadGuitar/EMOK1LeadGuit86E-05.wav'].play(); break;
			case 'leadguitar_1056': howls['rock86/LeadGuitar/EMOK1LeadGuit86E-06.wav'].play(); break;
			case 'leadguitar_1057': howls['rock86/LeadGuitar/EMOK1LeadGuit86E-07.wav'].play(); break;
			case 'leadguitar_1058': howls['rock86/LeadGuitar/EMOK1LeadGuit86E-08.wav'].play(); break;
			case 'leadguitar_1059': howls['rock86/LeadGuitar/EMOK1LeadGuit86E-09.wav'].play(); break;
			case 'leadguitar_10510':howls['rock86/LeadGuitar/EMOK1LeadGuit86E-10.wav'].play(); break;
		}			
	}

	playRhythmguitar_105 = function(){
		stopRhythmguitar_105();
		switch(window.nextRhythmguitar_105){
			case 'rhythmguitar_1051': howls['rock86/RhythmGuitar/EMOK1RhyGuitA86E-01.wav'].play(); break;
			case 'rhythmguitar_1052': howls['rock86/RhythmGuitar/EMOK1RhyGuitA86E-02.wav'].play(); break;
			case 'rhythmguitar_1053': howls['rock86/RhythmGuitar/EMOK1RhyGuitA86E-03.wav'].play(); break;
			case 'rhythmguitar_1054': howls['rock86/RhythmGuitar/EMOK1RhyGuitA86E-04.wav'].play(); break;
			case 'rhythmguitar_1055': howls['rock86/RhythmGuitar/EMOK1RhyGuitA86E-05.wav'].play(); break;
			case 'rhythmguitar_1056': howls['rock86/RhythmGuitar/EMOK1RhyGuitA86E-06.wav'].play(); break;
			case 'rhythmguitar_1057': howls['rock86/RhythmGuitar/EMOK1RhyGuitA86E-07.wav'].play(); break;
			case 'rhythmguitar_1058': howls['rock86/RhythmGuitar/EMOK1RhyGuitA86E-08.wav'].play(); break;
			case 'rhythmguitar_1059': howls['rock86/RhythmGuitar/EMOK1RhyGuitA86E-09.wav'].play(); break;
			case 'rhythmguitar_10510':howls['rock86/RhythmGuitar/EMOK1RhyGuitA86E-10.wav'].play(); break;
		}			
	}

	stopDrums_105 = function(){
		for (var i=0; i<drums105.length; i++) {
		    howls[drums105[i]].stop();
		}
	}

	stopBass_105 = function(){
		for (var i=0; i<bass105.length; i++) {
		    howls[bass105[i]].stop();
		}
	}

	stopLeadguitar_105 = function(){
		for (var i=0; i<leadGuitar105.length; i++) {
		    howls[leadGuitar105[i]].stop();
		}
	}

	stopRhythmguitar_105 = function(){
		for (var i=0; i<rhythmGuitar105.length; i++) {
		    howls[rhythmGuitar105[i]].stop();
		}
	}

});


