// Открытие и закрытие меню
const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', function() {
    menu.classList.toggle('show');
});

// Калькулятор
const calculateButton = document.getElementById('calculate');

calculateButton.addEventListener('click', function() {
    let quantity = Number(document.getElementById('quantity').value);
    let price = 100;

    if (quantity < 1 || !Number.isInteger(quantity)) {
        document.getElementById('result').textContent = 'Введите целое число больше нуля';
    } else {
        let total = quantity * price;
        document.getElementById('result').textContent = 'Итого: ' + total + ' кредитов';
    }
});

// Аккордеон с вопросами
const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
    question.addEventListener('click', function() {
        let answer = question.nextElementSibling;

        // Закрываем все ответы
        document.querySelectorAll('.answer').forEach(function(item) {
            if (item !== answer) {
                item.classList.remove('open');
            }
        });

        // Открываем или закрываем выбранный ответ
        answer.classList.toggle('open');
    });
});

// Слайдер из трех картинок
const images = [
    'https://static.wikia.nocookie.net/cyberpunk/images/a/aa/Militech_Chimera_CP2077PL_01.jpg/revision/latest/scale-to-width-down/1200?cb=20231128161454',
    'https://i.ytimg.com/vi/vPACYFT2zxM/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFwgXChcMA8=&amp;rs=AOn4CLA92iTLplMUTNA4PLVXAtBnPiOTXw',
    'https://static.wikia.nocookie.net/cyberpunk/images/c/ca/Militech_Basilisk_Database_CP2077.png/revision/latest/scale-to-width-down/1200?cb=20210322090743'
];

let currentImage = 0;
const slideImage = document.getElementById('slideImage');
const slideNumber = document.getElementById('slideNumber');

function showImage() {
    slideImage.src = images[currentImage];
    slideNumber.textContent = (currentImage + 1) + ' / 3';
}

document.getElementById('next').addEventListener('click', function() {
    currentImage++;
    if (currentImage >= images.length) {
        currentImage = 0;
    }
    showImage();
});

document.getElementById('prev').addEventListener('click', function() {
    currentImage--;
    if (currentImage < 0) {
        currentImage = images.length - 1;
    }
    showImage();
});

// Форма обратной связи (демонстрационная)
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('formMessage').textContent = 'Спасибо! Это учебная форма, данные не отправляются.';
    this.reset();
});
