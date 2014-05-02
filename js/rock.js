$(function(){	

	$('#drumsDel').live('click', function(){
		window.nowDrums=undefined;window.nextDrums=undefined;
		drums1.stop();drums2.stop();drums3.stop();drums4.stop();drums5.stop();
		drums6.stop();drums7.stop();drums8.stop();drums9.stop();drums10.stop();
	});

	$('#bassDel').live('click', function(){
		window.nowBass=undefined;window.nextBass=undefined;
		bass1.stop();bass2.stop();bass3.stop();bass4.stop();bass5.stop();
		bass6.stop();bass7.stop();bass8.stop();bass9.stop();bass10.stop();
	});

	$('#leadguitarDel').live('click', function(){
		window.nowLeadguitar=undefined;window.nextLeadguitar=undefined;
		leadguitar1.stop();leadguitar2.stop();leadguitar3.stop();leadguitar4.stop();leadguitar5.stop();
		leadguitar6.stop();leadguitar7.stop();leadguitar8.stop();leadguitar9.stop();leadguitar10.stop();
	});

	$('#rhythmguitarDel').live('click', function(){
		window.nowRhythmguitar=undefined;window.nextRhythmguitar=undefined;
		rhythmguitar1.stop();rhythmguitar2.stop();rhythmguitar3.stop();rhythmguitar4.stop();rhythmguitar5.stop();
		rhythmguitar6.stop();rhythmguitar7.stop();rhythmguitar8.stop();rhythmguitar9.stop();rhythmguitar10.stop();
		rhythmguitar11.stop();rhythmguitar12.stop();rhythmguitar13.stop();rhythmguitar14.stop();rhythmguitar15.stop();
		rhythmguitar16.stop();rhythmguitar17.stop();rhythmguitar18.stop();rhythmguitar19.stop();rhythmguitar20.stop();
	});

	$('div[id*="drums"]').live('click', function(){
		$('div[id*="drums"]').removeClass('active');
		$(this).addClass('active');
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

	$('div[id*="bass"]').live('click', function(){
		$('div[id*="bass"]').removeClass('active');
		$(this).addClass('active');
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

	$('div[id*="leadguitar"]').live('click', function(){
		$('div[id*="leadguitar"]').removeClass('active');
		$(this).addClass('active');		
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

	$('div[id*="rhythmguitar"]').live('click', function(){
		$('div[id*="rhythmguitar"]').removeClass('active');
		$(this).addClass('active');		
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
		case 'drums1': drums1.play(); console.log('playing drums1'); break;
		case 'drums2': drums2.play(); console.log('playing drums2'); break;
		case 'drums3': drums3.play(); console.log('playing drums3'); break;
		case 'drums4': drums4.play(); console.log('playing drums4'); break;
		case 'drums5': drums5.play(); console.log('playing drums5'); break;
		case 'drums6': drums6.play(); console.log('playing drums6'); break;
		case 'drums7': drums7.play(); console.log('playing drums7'); break;
		case 'drums8': drums8.play(); console.log('playing drums8'); break;
		case 'drums9': drums9.play(); console.log('playing drums9'); break;
		case 'drums10': drums10.play(); console.log('playing drums10'); break;
		}			
	}

	playBass = function(){
		stopBass();
		switch(window.nextBass){
		case 'bass1': bass1.play(); console.log('playing bass1'); break;
		case 'bass2': bass2.play(); console.log('playing bass2'); break;
		case 'bass3': bass3.play(); console.log('playing bass3'); break;
		case 'bass4': bass4.play(); console.log('playing bass4'); break;
		case 'bass5': bass5.play(); console.log('playing bass5'); break;
		case 'bass6': bass6.play(); console.log('playing bass6'); break;
		case 'bass7': bass7.play(); console.log('playing bass7'); break;
		case 'bass8': bass8.play(); console.log('playing bass8'); break;
		case 'bass9': bass9.play(); console.log('playing bass9'); break;
		case 'bass10': bass10.play(); console.log('playing bass10'); break;
		}			
	}

	playLeadguitar = function(){
		stopLeadguitar();
		switch(window.nextLeadguitar){
		case 'leadguitar1': leadguitar1.play(); console.log('playing leadguitar1'); break;
		case 'leadguitar2': leadguitar2.play(); console.log('playing leadguitar2'); break;
		case 'leadguitar3': leadguitar3.play(); console.log('playing leadguitar3'); break;
		case 'leadguitar4': leadguitar4.play(); console.log('playing leadguitar4'); break;
		case 'leadguitar5': leadguitar5.play(); console.log('playing leadguitar5'); break;
		case 'leadguitar6': leadguitar6.play(); console.log('playing leadguitar6'); break;
		case 'leadguitar7': leadguitar7.play(); console.log('playing leadguitar7'); break;
		case 'leadguitar8': leadguitar8.play(); console.log('playing leadguitar8'); break;
		case 'leadguitar9': leadguitar9.play(); console.log('playing leadguitar9'); break;
		case 'leadguitar10': leadguitar10.play(); console.log('playing leadguitar10'); break;
		}			
	}

	playRhythmguitar = function(){
		stopRhythmguitar();
		switch(window.nextRhythmguitar){
		case 'rhythmguitar1': rhythmguitar1.play(); console.log('playing rhythmguitar1'); break;
		case 'rhythmguitar2': rhythmguitar2.play(); console.log('playing rhythmguitar2'); break;
		case 'rhythmguitar3': rhythmguitar3.play(); console.log('playing rhythmguitar3'); break;
		case 'rhythmguitar4': rhythmguitar4.play(); console.log('playing rhythmguitar4'); break;
		case 'rhythmguitar5': rhythmguitar5.play(); console.log('playing rhythmguitar5'); break;
		case 'rhythmguitar6': rhythmguitar6.play(); console.log('playing rhythmguitar6'); break;
		case 'rhythmguitar7': rhythmguitar7.play(); console.log('playing rhythmguitar7'); break;
		case 'rhythmguitar8': rhythmguitar8.play(); console.log('playing rhythmguitar8'); break;
		case 'rhythmguitar9': rhythmguitar9.play(); console.log('playing rhythmguitar9'); break;
		case 'rhythmguitar10': rhythmguitar10.play(); console.log('playing rhythmguitar10'); break;
		case 'rhythmguitar11': rhythmguitar11.play(); console.log('playing rhythmguitar11'); break;
		case 'rhythmguitar12': rhythmguitar12.play(); console.log('playing rhythmguitar12'); break;
		case 'rhythmguitar13': rhythmguitar13.play(); console.log('playing rhythmguitar13'); break;
		case 'rhythmguitar14': rhythmguitar14.play(); console.log('playing rhythmguitar14'); break;
		case 'rhythmguitar15': rhythmguitar15.play(); console.log('playing rhythmguitar15'); break;
		case 'rhythmguitar16': rhythmguitar16.play(); console.log('playing rhythmguitar16'); break;
		case 'rhythmguitar17': rhythmguitar17.play(); console.log('playing rhythmguitar17'); break;
		case 'rhythmguitar18': rhythmguitar18.play(); console.log('playing rhythmguitar18'); break;
		case 'rhythmguitar19': rhythmguitar19.play(); console.log('playing rhythmguitar19'); break;
		case 'rhythmguitar20': rhythmguitar20.play(); console.log('playing rhythmguitar20'); break;
		}			
	}

	stopDrums = function(){
		drums1.stop();drums2.stop();drums3.stop();drums4.stop();drums5.stop();
		drums6.stop();drums7.stop();drums8.stop();drums9.stop();drums10.stop();
	}

	stopBass = function(){
		bass1.stop();bass2.stop();bass3.stop();bass4.stop();bass5.stop();
		bass6.stop();bass7.stop();bass8.stop();bass9.stop();bass10.stop();
	}

	stopLeadguitar = function(){
		leadguitar1.stop();leadguitar2.stop();leadguitar3.stop();leadguitar4.stop();leadguitar5.stop();
		leadguitar6.stop();leadguitar7.stop();leadguitar8.stop();leadguitar9.stop();leadguitar10.stop();
	}

	stopRhythmguitar = function(){
		rhythmguitar1.stop();rhythmguitar2.stop();rhythmguitar3.stop();rhythmguitar4.stop();rhythmguitar5.stop();
		rhythmguitar6.stop();rhythmguitar7.stop();rhythmguitar8.stop();rhythmguitar9.stop();rhythmguitar10.stop();
		rhythmguitar11.stop();rhythmguitar12.stop();rhythmguitar13.stop();rhythmguitar14.stop();rhythmguitar15.stop();
		rhythmguitar16.stop();rhythmguitar17.stop();rhythmguitar18.stop();rhythmguitar19.stop();rhythmguitar20.stop();
	}

});