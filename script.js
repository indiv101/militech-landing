// Открытие и закрытие меню
const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');

if (menuButton && menu) {
    menuButton.addEventListener('click', function() {
        menu.classList.toggle('show');
        menuButton.setAttribute('aria-expanded', menu.classList.contains('show'));
    });

    menu.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            menu.classList.remove('show');
            menuButton.setAttribute('aria-expanded', 'false');
        });
    });
}

// Калькулятор на главной странице
const calculateButton = document.getElementById('calculate');

if (calculateButton) {
    calculateButton.addEventListener('click', function() {
        const quantity = Number(document.getElementById('quantity').value);
        const price = 100;
        const result = document.getElementById('result');

        if (quantity < 1 || !Number.isInteger(quantity)) {
            result.textContent = 'Введите целое число больше нуля';
        } else {
            result.textContent = 'Итого: ' + (quantity * price) + ' кредитов';
        }
    });
}

// Аккордеон с вопросами на главной странице
const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
    question.addEventListener('click', function() {
        const answer = question.nextElementSibling;
        const isOpen = answer.classList.toggle('open');
        question.setAttribute('aria-expanded', isOpen);
        const icon = question.querySelector('span');
        if (icon) icon.textContent = isOpen ? '-' : '+';

        document.querySelectorAll('.answer').forEach(function(item) {
            if (item !== answer) {
                item.classList.remove('open');
                const otherQuestion = item.previousElementSibling;
                if (otherQuestion && otherQuestion.classList.contains('question')) {
                    otherQuestion.setAttribute('aria-expanded', 'false');
                    const otherIcon = otherQuestion.querySelector('span');
                    if (otherIcon) otherIcon.textContent = '+';
                }
            }
        });
    });
});

// Галерея: изображения из Cyberpunk 2077.
// Внешние источники могут менять адреса или ограничивать загрузку изображений.
const galleryImages = [
    {
        src: 'https://images.pushsquare.com/66f2362563e25/cyberpunk-2077-ps5-pro-update.large.jpg',
        alt: 'Башня Militech в Corporate Plaza ночью',
        title: 'Башня Militech',
        description: 'Корпоративная башня с подсветкой фасада в ночном Night City.'
    },
    {
        src: 'https://cdn.gracza.pl/galeria/galeria_duze3/660843.jpg',
        alt: 'Вид на здание Militech с улицы',
        title: 'Офис в Corporate Plaza',
        description: 'Здание Militech среди высоток делового района.'
    },
    {
        src: 'https://i0.wp.com/thepathwitcher.blog/wp-content/uploads/2024/09/cyberpunk-social-commentary-image-1.png?resize=1024%2C576&ssl=1',
        alt: 'Панорама Corporate Plaza с башней Militech',
        title: 'Corporate Plaza',
        description: 'Широкий вид на корпоративный район и башню Militech.'
    }
];

let currentImage = 0;
const slideImage = document.getElementById('slideImage');
const slideNumber = document.getElementById('slideNumber');
const slideTitle = document.getElementById('slideTitle');
const slideDescription = document.getElementById('slideDescription');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

function showImage() {
    if (!slideImage || !slideNumber) return;

    slideImage.onerror = function() {
        this.onerror = null;
        this.src = 'assets/images/image-unavailable.svg';
    };
    slideImage.src = galleryImages[currentImage].src;
    slideImage.alt = galleryImages[currentImage].alt;
    slideNumber.textContent = (currentImage + 1) + ' / ' + galleryImages.length;

    if (slideTitle) slideTitle.textContent = galleryImages[currentImage].title;
    if (slideDescription) slideDescription.textContent = galleryImages[currentImage].description;
}

if (slideImage && slideNumber && nextButton && prevButton) {
    showImage();
    nextButton.addEventListener('click', function() {
        currentImage = (currentImage + 1) % galleryImages.length;
        showImage();
    });
    prevButton.addEventListener('click', function() {
        currentImage = (currentImage - 1 + galleryImages.length) % galleryImages.length;
        showImage();
    });
}

// Демонстрационная форма обратной связи
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        document.getElementById('formMessage').textContent = 'Спасибо! Это учебная форма, данные не отправляются.';
        this.reset();
    });
}
