window.onload = function () {
    document.getElementById('velo').onclick = function () {
        rotatePictures()
    };
    document.getElementById('clicks').onclick = function () {
        setClick();
    };
};

var pictures = [
    'image/Mountainbike.jpg',
    'image/Oldschool_basket.jpg',
    'image/Wall_bike.jpg',
    'image/Oldschool_bike.jpg'];

function rotatePictures() {
    var pic = document.getElementById('velo');
    // ищем индекс отображаемой картинки
    var currentPictureIndex = pictures
    // фильтруем массив с картинками,
    // пропускаем дальше только те элементы, которые pic.src.match на которых вернет true
        .filter(function (p) {
            return pic.src.match(p)
        })
        // тут имеем массив только с одним найденным элементом благодаря filter
        // преобразуем этот элемент в индекс этого элемента из массива
        .map(function (p) {
            return pictures.indexOf(p)
        })
        // тут имеем массив с одним элементом - индексом отображаемой картинки
        // извлекаем этот элемент из полученного массива по индексу 0 и пишем в переменную currentPictureIndex
        [0];
    // объявляем индекс следующей картинки
    var nextPictureIndex = 0;
    // если текущая картинка не последняя в массиве
    if (currentPictureIndex != (pictures.length - 1)) {
        // то индекс следующей картинки будет индексом текущей + 1
        nextPictureIndex = currentPictureIndex + 1;
    }
    // устанавливаем новую картинку
    pic.src = pictures[nextPictureIndex];
}

var clicks = 0;
function setClick() {
    clicks++;
    document.getElementById("clicks").innerHTML = clicks;
};