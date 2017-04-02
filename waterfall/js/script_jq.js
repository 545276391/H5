$(window).on('load',function(){

	waterfall();

	let dataInt={'data':[{'src':'0.jpg'},{'src':'1.jpg'},{'src':'2.jpg'},{'src':'3.jpg'}]};
	
	$(window).on('scroll',function(){
		if(checkScrollSide()){
			$.each(dataInt.data,function(key,value){
				let oBox = $('<div>').addClass('box').appendTo($('#main'));
				let oPic = $('<div>').addClass('pic').appendTo($(oBox));
				$('<img>').attr('src','images/'+ $(value).attr('src')).appendTo($(oPic));
			});
			waterfall();
		}
	});
});

function waterfall() {
    let $boxArr = $('#main>div');
    let oBoxW = $boxArr.eq(0).outerWidth();
    let cols = Math.floor($(window).width() / oBoxW);
    $('#main').width(oBoxW * cols).css('margin','0 auto');

    let hArr = [];
    $boxArr.each(function(index,value){
    	if(index<cols){
    		hArr.push($boxArr.eq(index).outerHeight());
    	}else{
    		let minH = Math.min.apply(null, hArr);
    		let minHIndex = $.inArray(minH,hArr);
    		$(value).css({
    			'position':'absolute',
    			'top':minH+'px',
    			'left':minHIndex*oBoxW+'px'
    		});
    		hArr[minHIndex]+=$boxArr.eq(index).outerHeight();
    	}
    });
}

function checkScrollSide(){
	let $lastBox = $('#main>div').last();
	let lastBoxH = $lastBox.offset().top + Math.floor($lastBox.outerHeight()/2);
	let scrollTop = $(window).scrollTop();
	let height = $(window).height();
	return (lastBoxH<scrollTop+height) ? true:false;
}