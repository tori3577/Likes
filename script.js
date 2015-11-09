

document.getElementById('velo').onclick = function() {imageChange()};


	function imageChange () {
     var pic = document.getElementById('velo');

     if (pic.src.match('Oldschool_bike')) {
     	pic.src = 'image/Mountainbike.jpg';

     }
     else if (pic.src.match('Mountainbike')) {
     	pic.src = 'image/Oldschool_basket.jpg';
     }
     else if (pic.src.match('Oldschool_basket')) {
     	pic.src = 'image/Wall_bike.jpg';
     }
     else{
     	pic.src ='image/Oldschool_bike.jpg';
     }

}

 var clicks = 0;
    function setClick() {
        clicks ++;
        document.getElementById("clicks").innerHTML = clicks;
    };