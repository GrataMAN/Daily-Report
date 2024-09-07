// Массив аятов
const ayats = [
    "وَٱسۡتَعِينُواْ بِٱلصَّبۡرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلۡخَٰشِعِينَ Кто поступит праведно, будь то мужчина или женщина, и при этом будет веровать, Мы даруем ему жизнь хорошую.",
    "Всё, что есть на земле, и всё, что есть на небе, славит Его. И Он — Сильный, Мудрый.",
    "Нет принуждения в религии. Истина явно отделилась от заблуждения.",
    "Поистине, с трудом приходит облегчение. Поистине, с трудом приходит облегчение.",
    "И помни Господа твоего в душе твоей с покорностью и страхом, без громких слов, утром и вечером.",
    "И скажи Моим рабам, чтобы они говорили слово лучше. Воистину, шайтан сеет раздор между ними.",
    "И повелели людям быть добрыми к родителям. Если один из них или оба доживут до старости, не говори им «фу», не будь грубым с ними, а говори им слова почтения.",
    "Скажи: «Мой Господь не обращает внимания на вас, если вы не будете молиться Ему».",
    "Поистине, Аллах — ваш Господь. Нет Бога, кроме Него."
];

// Переменные для хранения очков
let imanScore = 0;
let healthScore = 0;
let careerScore = 0;

// Количество вопросов в каждой категории
const totalImanQuestions = 13;
const totalHealthQuestions = 6;
const totalCareerQuestions = 4;

// Функция для выбора случайного мотивационного сообщения
function getRandomMotivation() {
    const randomIndex = Math.floor(Math.random() * motivations.length);
    return motivations[randomIndex];
}

// Функция для выбора случайного аята
function getRandomAyat() {
    const randomIndex = Math.floor(Math.random() * ayats.length);
    return ayats[randomIndex];
}

// Функция для обновления мотивационного сообщения на странице
function updateMotivation() {
    const motivationElement = document.getElementById('motivation');
    motivationElement.textContent = getRandomMotivation();
}

// Функция для обновления аята на странице
function updateAyat() {
    const ayatElement = document.getElementById('ayat');
    ayatElement.textContent = getRandomAyat();
}

// Функция для обновления шкалы
function updateScore(category, answer, button) {
    if (answer) {
        switch (category) {
            case 'iman':
                imanScore++;
                break;
            case 'health':
                healthScore++;
                break;
            case 'career':
                careerScore++;
                break;
        }
    }

    const imanPercentage = (imanScore / totalImanQuestions) * 100;
    const healthPercentage = (healthScore / totalHealthQuestions) * 100;
    const careerPercentage = (careerScore / totalCareerQuestions) * 100;

    document.getElementById('imanBar').children[0].style.width = imanPercentage + '%';
    document.getElementById('imanBar').children[0].style.backgroundColor = getColorForPercentage(imanPercentage);

    document.getElementById('healthBar').children[0].style.width = healthPercentage + '%';
    document.getElementById('healthBar').children[0].style.backgroundColor = getColorForPercentage(healthPercentage);

    document.getElementById('careerBar').children[0].style.width = careerPercentage + '%';
    document.getElementById('careerBar').children[0].style.backgroundColor = getColorForPercentage(careerPercentage);

    // Изменение цвета кнопок
    const buttons = button.parentElement.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.classList.remove('active-yes', 'active-no');
    });

    // Добавляем нужный класс к выбранной кнопке
    button.classList.add(answer ? 'active-yes' : 'active-no');
}

function getColorForPercentage(pct) {
    const r = pct < 50 ? 255 : Math.floor(255 - (pct * 2 - 100) * 255 / 100);
    const g = pct > 50 ? 255 : Math.floor((pct * 2) * 255 / 100);
    const b = 0;
    return `rgb(${r},${g},${b})`;
}

// Функция обработки ответа
function handleAnswer(category, answer, button) {
    updateScore(category, answer, button);
}

// Обновление аята и мотивационного сообщения при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    updateAyat();
});
