$(window).on("load", function() {

    let $boxArr = $('#main>div');
    const oBoxW = $boxArr.eq(0).outerWidth();
    const cols = Math.floor($(window).width() / oBoxW);
    let hArr = [];
    let hArray = [];
    $('#main').width(oBoxW * cols).css('margin', '0 auto');

    start($boxArr, hArr);
    show($boxArr, 0, oBoxW, cols, hArray);
    
    let dataInt={'data':[{'src':'0.jpg'},{'src':'1.jpg'},{'src':'2.jpg'},{'src':'3.jpg'}]};
    window.onscroll = function() {
        // 拖动滚动条时
        if (checkscrollside()) {
            $.each(dataInt.data, function(key, value) {
                let oBox = $('<div>').addClass('pin').appendTo($('#main'));
                let oPic = $('<div>').addClass('box').appendTo($(oBox));
                $('<img>').attr('src', 'images/' + $(value).attr('src')).appendTo($(oPic));
            });
            waterfall(oBoxW, cols);
        }
    }
});

//计算及定位数据块显示分散效果
function start($boxArr, hArr) {

    let disLeft = $boxArr.eq(2).offset().left;
    const num = 30;
    $boxArr.each(function(index, value) {

        hArr.push($boxArr.eq(index).outerHeight());
        let maxH = Math.max.apply(null, hArr);
        let maxHIndex = $.inArray(maxH, hArr);
        let disTop = $boxArr.eq(maxHIndex).outerHeight();
        $(value).css({
            'position': 'absolute',
            'top': disTop + 'px',
            'left': disLeft + 'px',
            'margin-top': (Math.random() * 10 - 5) * num + 'px',
            'margin-left': (Math.random() * 10 - 5) * num * 2 + 'px',
            'opacity': 0.5
        });
    });
}


function waterfall(oBoxW, cols) {

    let $boxArr = $('#main>div');
    let hArr = [];
    $boxArr.each(function(index, value) {
        if (index < cols) {
            hArr.push($boxArr.eq(index).outerHeight());
        } else {
            let minH = Math.min.apply(null, hArr);
            let minHIndex = $.inArray(minH, hArr);
            $(value).css({
                'position': 'absolute',
                'top': minH + 'px',
                'left': minHIndex * oBoxW + 'px'
            });
            hArr[minHIndex] += $boxArr.eq(index).outerHeight();
        }
    });
}

function show($boxArr, i, oBoxW, cols, hArray) {

    if (i > $boxArr.length) {
        return;
    } else {

        //设置初始高度为0
        if (hArray.length !== cols) {
            for (let j = 0; j < cols; j++) {
                hArray[j] = 0;
            }
        }

        let minH = Math.min.apply(null, hArray);
        let minHIndex = $.inArray(minH, hArray);

        $boxArr.eq(i).animate({
            'margin': 0,
            'top': minH + 'px',
            'left': minHIndex * oBoxW + 'px',
            'opacity': 1
        }, 300, function() {

            hArray[minHIndex] += $boxArr.eq(i).outerHeight();
            show($boxArr, i + 1, oBoxW, cols, hArray);
        });
    }
}

function checkscrollside() {
    // 检测是否具备了加载数据块的条件
    let $lastBox = $('#main>div').last();
    let lastBoxH = $lastBox.offset().top + Math.floor($lastBox.outerHeight() / 2);
    let scrollTop = $(window).scrollTop();
    let height = $(window).height();
    return lastBoxH < scrollTop + height;
}
