window.onload = function() {

waterfall();

function random(val) {
    return Math.ceil(Math.random() * 10) * val;
}

let dataInt = {
    'data': [
        {
            'src': '0.jpg',
            'picName': '其最甚者',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '0.jpg'
            },
            'authorName': 'shh',
            'writing': '其中的代表'
        },
        {
            'src': '1.jpg',
            'picName': '木瓜葛根也',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '1.jpg'
            },
            'authorName': 'yswe',
            'writing': '木瓜和葛根'
        },
        {
            'src': '2.jpg',
            'picName': '无丰乳之功',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '0.jpg'
            },
            'authorName': 'wey',
            'writing': '明明没有丰胸的功效'
        },
        {
            'src': '3.jpg',
            'picName': '戴隆胸之帽',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '1.jpg'
            },
            'authorName': 'uyo',
            'writing': '却被商家们扣上了一顶高帽'
        },
        {
            'src': '4.jpg',
            'picName': '自其冠也',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '0.jpg'
            },
            'authorName': 'wa',
            'writing': '自打这高帽扣上以来'
        },
        {
            'src': '5.jpg',
            'picName': '独宠于众',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '1.jpg'
            },
            'authorName': 'kytyt',
            'writing': '就独得广大女性恩宠'
        },
        {
            'src': '6.jpg',
            'picName': '乃劝其雨露均沾',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '6.jpg'
            },
            'authorName': 'qer',
            'writing': '于是我就劝她们一定要雨露均沾'
        },
        {
            'src': '7.jpg',
            'picName': '然其固拒乎',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '0.jpg'
            },
            'authorName': '傻傻分不清',
            'writing': '可她们非要不听呢'
        },
        {
            'src': '8.jpg',
            'picName': '丰乳，木瓜，葛根足矣',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '8.jpg'
            },
            'authorName': '请问',
            'writing': '就要丰胸！就要木瓜！就要葛根！'
        },
        {
            'src': '9.jpg',
            'picName': '葛根',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '1.jpg'
            },
            'authorName': '电饭锅',
            'writing': '葛根'
        },
        {
            'src': '10.jpg',
            'picName': '素与参齐',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '10.jpg'
            },
            'authorName': '美女',
            'writing': '素来便与人参齐名'
        },
        {
            'src': '11.jpg',
            'picName': '谓之曰北参南葛',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '0.jpg'
            },
            'authorName': '这些',
            'writing': '称为北参南葛'
        },
        {
            'src': '12.jpg',
            'picName': '更具千年人参之美誉',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '12.jpg'
            },
            'authorName': '就会',
            'writing': '更有千年人参的美称'
        },
        {
            'src': '13.jpg',
            'picName': '然则葛根之用多为讹言',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '1.jpg'
            },
            'authorName': '经营',
            'writing': '可是葛根的作用却被以讹传讹'
        },
        {
            'src': '14.jpg',
            'picName': '或丰乳，或补阳',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '0.jpg'
            },
            'authorName': '我让他',
            'writing': '有的说丰胸，有的说补阳'
        },
        {
            'src': '15.jpg',
            'picName': '每念于此',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '1.jpg'
            },
            'authorName': '与',
            'writing': '每次想到这儿'
        },
        {
            'src': '16.jpg',
            'picName': '未尝不痛心疾首',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '0.jpg'
            },
            'authorName': '评审表',
            'writing': '都没有一次不痛心疾首的'
        },
        {
            'src': '17.jpg',
            'picName': '犹觉如芒在背',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '17.jpg'
            },
            'authorName': '骗我的',
            'writing': '感觉芒刺在背'
        },
        {
            'src': '18.jpg',
            'picName': '地狱之回，舍我其谁？',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '18.jpg'
            },
            'authorName': '进度',
            'writing': '无奈之下我只能带着我不入地狱谁入地狱的想法'
        },
        {
            'src': '19.jpg',
            'picName': '遂涌之葛商',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '19.jpg'
            },
            'authorName': '太慢',
            'writing': '涌入广大葛根卖家之中'
        },
        {
            'src': '20.jpg',
            'picName': '纠之谬荒',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '0.jpg'
            },
            'authorName': '安静',
            'writing': '想着帮助人们重新认识一下葛根'
        },
        {
            'src': '21.jpg',
            'picName': '会之福康',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '21.jpg'
            },
            'authorName': '乐福',
            'writing': '机缘巧合之下接触了葛福康'
        },
        {
            'src': '22.jpg',
            'picName': '福康者，何物也?',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '22.jpg'
            },
            'authorName': 'afraid',
            'writing': '葛福康到底是什么呢？'
        },
        {
            'src': '23.jpg',
            'picName': '谷歌搜之，被告？',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '1.jpg'
            },
            'authorName': '鸡蛋饼',
            'writing': '谷歌了一下，葛福康被告？'
        },
        {
            'src': '24.jpg',
            'picName': '百度寻之，吓尿？',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '24.jpg'
            },
            'authorName': '公司v',
            'writing': '百度了一下，吓我一大跳？'
        },
        {
            'src': '25.jpg',
            'picName': '必应探之，葬乎？',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '0.jpg'
            },
            'authorName': '交通费',
            'writing': '必应了一下，葛福康葬礼？'
        },
        {
            'src': '26.jpg',
            'picName': '一圈觅之，车夫？',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '1.jpg'
            },
            'authorName': '深刻',
            'writing': '360了一下，葛福康老司机？'
        },
        {
            'src': '27.jpg',
            'picName': '福康者，何物也？',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '0.jpg'
            },
            'authorName': '收件人',
            'writing': '神TM葛福康！葛福康到底是什么？'
        },
        {
            'src': '28.jpg',
            'picName': '亦不知',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '28.jpg'
            },
            'authorName': '看得人',
            'writing': '我也不知道'
        },
        {
            'src': '29.jpg',
            'picName': '自字上观之',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '1.jpg'
            },
            'authorName': '立业',
            'writing': '反正从字面上来看'
        },
        {
            'src': '30.jpg',
            'picName': '盖冀食者皆福康罢',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '0.jpg'
            },
            'authorName': '利润高',
            'writing': '即希望食用它的人们都幸福安康'
        },
        {
            'src': '31.jpg',
            'picName': '求之不得也',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '0.jpg'
            },
            'authorName': '勒戒',
            'writing': '正合我意'
        },
        {
            'src': '32.jpg',
            'picName': '况余生于草榻',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '32.jpg'
            },
            'authorName': '两万多',
            'writing': '更何况对于我这种自幼在农村'
        },
        {
            'src': '33.jpg',
            'picName': '长于糍粑',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '1.jpg'
            },
            'authorName': '佩服',
            'writing': '吃着各种农家产品长大的来说'
        },
        {
            'src': '34.jpg',
            'picName': '亲于农家',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '1.jpg'
            },
            'authorName': '好多',
            'writing': '对自产自销的农家产品有一种天然的亲近感'
        },
        {
            'src': '35.jpg',
            'picName': '享于童咖',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '35.jpg'
            },
            'authorName': '乐视的',
            'writing': '看到这个就仿佛看到了自己的童年'
        },
        {
            'src': '36.jpg',
            'picName': '自入商也',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '0.jpg'
            },
            'authorName': '刻度',
            'writing': '然而，自打我加入葛根卖家以来'
        },
        {
            'src': '37.jpg',
            'picName': '独宠于众',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '37.jpg'
            },
            'authorName': '可是我',
            'writing': '就独得广大同胞恩宠'
        },
        {
            'src': '38.jpg',
            'picName': '乃劝其雨露均沾',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '0.jpg'
            },
            'authorName': '游戏王',
            'writing': '于是商家们都劝我一定要雨露均沾'
        },
        {
            'src': '39.jpg',
            'picName': '然余固拒乎',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '0.jpg'
            },
            'authorName': '玫瑰花',
            'writing': '可我非要不听呢？'
        },
        {
            'src': '40.jpg',
            'picName': '福康足矣',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '1.jpg'
            },
            'authorName': '康师傅',
            'writing': '就要葛福康！葛福康！葛福康！'
        },
        {
            'src': '41.jpg',
            'picName': '何为福康邪？',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '41.jpg'
            },
            'authorName': '了法国',
            'writing': '所以葛福康到底是啥？'
        },
        {
            'src': '42.jpg',
            'picName': '困谷歌',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '0.jpg'
            },
            'authorName': '不卡了',
            'writing': '谷歌搜不到'
        },
        {
            'src': '43.jpg',
            'picName': '迷百度',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '1.jpg'
            },
            'authorName': '渴望的',
            'writing': '百度搜不到'
        },
        {
            'src': '44.jpg',
            'picName': '难必应',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '0.jpg'
            },
            'authorName': '七大姑',
            'writing': '必应搜不到'
        },
        {
            'src': '45.jpg',
            'picName': '惑一圈',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '45.jpg'
            },
            'authorName': '烹饪个',
            'writing': '360搜不到'
        },
        {
            'src': '46.jpg',
            'picName': '何其神乎？',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '46.jpg'
            },
            'authorName': '乐观',
            'writing': '多么神奇！'
        },
        {
            'src': '47.jpg',
            'picName': '自淘得也',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '0.jpg'
            },
            'authorName': '为什么',
            'writing': '然而自打在淘宝被搜索到了以来'
        },
        {
            'src': '48.jpg',
            'picName': '独宠于众',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '1.jpg'
            },
            'authorName': '拉嘎',
            'writing': '便独得广大顾客恩宠'
        },
        {
            'src': '49.jpg',
            'picName': '乃劝其雨露均沾',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '49.jpg'
            },
            'authorName': '娃儿',
            'writing': '于是我就劝顾客一定要雨露均沾'
        },
        {
            'src': '50.jpg',
            'picName': '然其固拒乎',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '0.jpg'
            },
            'authorName': '老司机',
            'writing': '可顾客们非要不听呢？(此处省略一万字)'
        },
        {
            'src': '51.jpg',
            'picName': '或曰',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '51.jpg'
            },
            'authorName': '等等我',
            'writing': '有人说'
        },
        {
            'src': '52.jpg',
            'picName': '吾觅吾傲',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '0.jpg'
            },
            'authorName': '联络员',
            'writing': '我搜到了我自豪'
        },
        {
            'src': '53.jpg',
            'picName': '余藏余瞧',
            'numbers': [random(2), random(2), random(1)],
            'headPic': {
                'src': '1.jpg'
            },
            'authorName': '欧瑞丰',
            'writing': '赶紧收藏瞧一瞧！'
        }
    ]
};

window.onscroll = function() {
    waterfall();
    if (checkScrollSide()) {
        let main = document.getElementById('main');
        for (let i = 0; i < dataInt.data.length; i++) {
            let oBox = document.createElement('div');
            oBox.className = 'box';
            main.appendChild(oBox);

            let oPic = document.createElement('div');
            oPic.className = 'pic';
            oBox.appendChild(oPic);

            let picContainer = document.createElement('div');
            picContainer.className = 'pic-container';
            oPic.appendChild(picContainer);

            let buttons = document.createElement('div');
            buttons.className = 'buttons';
            picContainer.appendChild(buttons);

            let btnCollect = document.createElement('button');
            btnCollect.className = 'button btn-collect';
            btnCollect.innerHTML = '<span class="fa fa-star-o fa-lg"></span> 收集 28';
            buttons.appendChild(btnCollect);

            let btnZan = document.createElement('button');
            btnZan.className = 'button btn-zan';
            btnZan.innerHTML = '<span class="fa fa-thumbs-up fa-lg"></span>';
            buttons.appendChild(btnZan);

            let btnComment = document.createElement('button');
            btnComment.className = 'button btn-comment';
            btnComment.innerHTML = '<span class="fa fa-commenting fa-lg"></span>';
            btnComment.style.marginLeft = '5px';
            buttons.appendChild(btnComment);

            let oImg = document.createElement('img');
            oImg.src = './images/' + dataInt.data[i].src;
            picContainer.appendChild(oImg);

            let oIntroduce = document.createElement('div');
            oIntroduce.className = 'introduce';
            oPic.appendChild(oIntroduce);

            let picName = document.createElement('p');
            picName.innerHTML = dataInt.data[i].picName;
            oIntroduce.appendChild(picName);

            let numbers = document.createElement('p');
            numbers.className = 'numbers';
            numbers.innerHTML = '<span class="fa fa-star"></span> ' + dataInt.data[i].numbers[0] + '&nbsp;&nbsp;<span class="fa fa-thumbs-up"></span> ' + dataInt.data[i].numbers[1] + '&nbsp;&nbsp;<span class="fa fa-commenting"></span> ' + dataInt.data[i].numbers[2];
            oIntroduce.appendChild(numbers);

            let author = document.createElement('div');
            author.className = 'author clearfloat';
            oPic.appendChild(author);

            let headPic = document.createElement('a');
            headPic.className = 'head-pic';
            headPic.href = '##';
            author.appendChild(headPic);

            let touxiang = document.createElement('img');
            touxiang.src = './images/' + dataInt.data[i].headPic.src;
            headPic.appendChild(touxiang);

            let authorText = document.createElement('div');
            authorText.className = 'author-text';
            author.appendChild(authorText);

            let authorName = document.createElement('a');
            authorName.className = 'author-name';
            authorName.innerHTML = dataInt.data[i].authorName;
            authorName.href = '##';
            authorText.appendChild(authorName);

            let fabudao = document.createElement('p');
            fabudao.innerHTML = '发布到 ';
            authorText.appendChild(fabudao);

            let writing = document.createElement('a');
            writing.className = 'writing';
            writing.innerHTML = dataInt.data[i].writing;
            writing.href = '##';
            fabudao.appendChild(writing);

        }
        waterfall();
    }
}
}



function waterfall() {
    let main = document.getElementById('main');
    let boxArr = document.getElementsByClassName('box');
    let oBoxW = boxArr[0].offsetWidth;
    let cols = Math.floor(document.documentElement.clientWidth / oBoxW);
    main.style.cssText = 'width:' + oBoxW * cols + 'px;margin:0 auto';

    let hArr = [];
    for (let i = 0; i < boxArr.length; i++) {
        if (i < cols) {
            hArr.push(boxArr[i].offsetHeight);
        } else {
            let minH = Math.min.apply(null, hArr);
            let index = getMinhIndex(hArr, minH);
            boxArr[i].style.position = 'absolute';
            boxArr[i].style.top = minH + 'px';
            boxArr[i].style.left = boxArr[index].offsetLeft + 'px';
            hArr[index] += boxArr[i].offsetHeight;
        }
    }
}

function getMinhIndex(arr, val) {
    for (let i in arr) {
        if (arr[i] === val) {
            return i;
        }
    }
}

function checkScrollSide() {
    let boxArr = document.getElementsByClassName('box');
    let lastBoxH = boxArr[boxArr.length - 1].offsetTop + Math.floor(boxArr[boxArr.length - 1].offsetHeight / 2);
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.body.clientHeight || document.documentElement.clientHeight;
    return (lastBoxH < scrollTop + height);
}
