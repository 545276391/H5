window.onload = function() {
    
    waterfall();

    let dataInt={'data':[{'src':'0.jpg'},{'src':'1.jpg'},{'src':'2.jpg'},{'src':'3.jpg'}]};
    	
    window.onscroll=function(){
        if(checkScrollSide()){
        	let main = document.getElementById('main');
            for(let i=0;i<dataInt.data.length;i++){
                let oBox=document.createElement('div'); 
                oBox.className='box';                   
                main.appendChild(oBox);            
                let oPic=document.createElement('div');
                oPic.className='pic';
                oBox.appendChild(oPic);
                let oImg=document.createElement('img');
                oImg.src='./images/'+dataInt.data[i].src;
                oPic.appendChild(oImg);
            }
            waterfall();
        };
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
            boxArr[i].style.left = boxArr[index].offsetLeft+'px';
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

function checkScrollSide(){
    let boxArr = document.getElementsByClassName('box');
	let lastBoxH = boxArr[boxArr.length-1].offsetTop + Math.floor(boxArr[boxArr.length-1].offsetHeight/2);
	let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	let height = document.body.clientHeight || document.documentElement.clientHeight;
	return (lastBoxH<scrollTop+height) ? true:false;
}


