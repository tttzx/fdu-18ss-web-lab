window.onload=function (){

    var smallPic = document.getElementById("thumbnails").getElementsByTagName("img");
    var bigPic = document.getElementById("featured");

    smallPic[0].onclick = function (){
        bigPic.innerHTML = '<img src="images/medium/5855774224.jpg" title="Battle"/>\<figcaption>Battle</figcaption>';
    };
    smallPic[1].onclick = function (){
        bigPic.innerHTML = '<img src="images/medium/5856697109.jpg" title="Luneburg"/>\<figcaption>Luneburg</figcaption>';
    };
    smallPic[2].onclick = function (){
        bigPic.innerHTML = '<img src="images/medium/6119130918.jpg" title="Bermuda"/>\<figcaption>Bermuda</figcaption>';
    };    
    smallPic[3].onclick = function (){
        bigPic.innerHTML = '<img src="images/medium/8711645510.jpg" title="Athens"/>\<figcaption>Athens</figcaption>';
    };
    smallPic[4].onclick = function (){
        bigPic.innerHTML = '<img src="images/medium/9504449928.jpg" title="Florence"/>\<figcaption>Florence</figcaption>';
    };

    var figcaption = document.getElementsByTagName("figcaption");

    bigPic.onmouseenter = function () {
        figcaption[0].style.transaction = "1s";
        figcaption[0].style.opacity = 0.8;
    };
    bigPic.onmouseleave = function () {
        figcaption[0].style.transition = "1s";
        figcaption[0].style.opacity = 0;
    };

};