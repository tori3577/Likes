window.onload = function () {
    document.getElementById('velo').onclick = function () {
        rotatePictures()
    };
    document.getElementById('clicks').onclick = function () {
        setClick();
    };
};

var pictures = {
    'image/Mountainbike.jpg': 0,
    'image/Oldschool_basket.jpg': 0,
    'image/Wall_bike.jpg': 0,
    'image/Oldschool_bike.jpg': 0
};

function rotatePictures() {
    var pic = document.getElementById('velo');
    // ищем индекс отображаемой картинки
    // создаем массив из ключей pictures (image/Mountainbike.jpg, image/Oldschool_basket.jpg и т.д.)
    var picturesArray = Object.keys(pictures);
    var currentPictureIndex = picturesArray
    // фильтруем массив с картинками,
    // пропускаем дальше только те элементы, которые pic.src.match на которых вернет true
        .filter(function (p) {
            return pic.src.match(p)
        })
        // тут имеем массив только с одним найденным элементом благодаря filter
        // преобразуем этот элемент в индекс этого элемента из массива
        .map(function (p) {
            return picturesArray.indexOf(p)
        })
        // тут имеем массив с одним элементом - индексом отображаемой картинки
        // извлекаем этот элемент из полученного массива по индексу 0 и пишем в переменную currentPictureIndex
        [0];
    // объявляем индекс следующей картинки
    var nextPictureIndex = 0;
    // если текущая картинка не последняя в массиве
    if (currentPictureIndex != (picturesArray.length - 1)) {
        // то индекс следующей картинки будет индексом текущей + 1
        nextPictureIndex = currentPictureIndex + 1;
    }
    // устанавливаем новую картинку
    pic.src = picturesArray[nextPictureIndex];
}

var clicks = 0;
function setClick() {
    clicks++;
    document.getElementById("clicks").innerHTML = clicks;
};