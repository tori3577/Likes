window.onload = function () {
    document.getElementById('velo').onclick = function () {
        rotatePictures()
    };
    document.getElementById('clicks').onclick = function () {
        like();
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
    var currentPictureIndex = getCurrentPictureIndex(picturesArray, pic.src);
    // объявляем индекс следующей картинки
    var nextPictureIndex = 0;
    // если текущая картинка не последняя в массиве
    if (currentPictureIndex != (picturesArray.length - 1)) {
        // то индекс следующей картинки будет индексом текущей + 1
        nextPictureIndex = currentPictureIndex + 1;
    }
    // устанавливаем новую картинку
    var nextPicture = picturesArray[nextPictureIndex];
    pic.src = nextPicture;

    // устанавливаем количество лайков новой картинки на кнопку
    document.getElementById("clicks").innerText = pictures[nextPicture]
}

// функция для поиска индекса отображаемой картинки
function getCurrentPictureIndex(picturesArray, picSrc) {
    return picturesArray
    // фильтруем массив с картинками,
    // пропускаем дальше только те элементы, picSrc.match() на которых вернет true
        .filter(function (p) {
            return picSrc.match(p)
        })
        // тут имеем массив только с одним найденным элементом благодаря filter
        // преобразуем этот элемент в индекс этого элемента из массива
        .map(function (p) {
            return picturesArray.indexOf(p)
        })
        // тут имеем массив с одним элементом - индексом отображаемой картинки
        // извлекаем этот элемент из полученного массива по индексу 0 и возвращаем из функции
        [0];
}

function like() {
    var pic = document.getElementById('velo');
    // ищем индекс отображаемой картинки
    // создаем массив из ключей pictures (image/Mountainbike.jpg, image/Oldschool_basket.jpg и т.д.)
    var picturesArray = Object.keys(pictures);
    // получаем индекс текущей картинки, вызвав функцию, которая его ищет
    var currentPictureIndex = getCurrentPictureIndex(picturesArray, pic.src);
    // получаем текущую картинку, обращением к элементу массива по индексу
    var currentPicture = picturesArray[currentPictureIndex];
    // увеличиваем количество лайков на 1
    pictures[currentPicture]++;
    // устанавливаем количество лайков на кнопку
    document.getElementById("clicks").innerText = pictures[currentPicture];
}