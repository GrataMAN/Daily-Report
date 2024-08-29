// Массив мотивационных сообщений
const motivations = [
    "Делай больше, если получается!",
    "Ты в натуре крассава вац!",
    "Каждый день — это новый день!",
    "Не бойся меняться, чтобы стать сильнее!",
    "Твои усилия сегодня — это твоя грыжа завтра!",
    "Не сдавайся, даже когда кажется, что всё невозможно!",
    "Ты уже на полпути к своему успеху!",
    "Каждое маленькое усилие ведёт к большим достижениям!",
    "Стань лучше сегодня, чем ты был вчера!",
    "Ты способен достичь всего, к чему стремишься!"
];

// Функция для выбора случайного мотивационного сообщения
function getRandomMotivation() {
    const randomIndex = Math.floor(Math.random() * motivations.length);
    return motivations[randomIndex];
}

// Функция для обновления мотивационного сообщения на странице
function updateMotivation() {
    const motivationElement = document.getElementById('motivation');
    motivationElement.textContent = getRandomMotivation();
}

// Обновление мотивационного сообщения при загрузке страницы
document.addEventListener('DOMContentLoaded', updateMotivation);

// Переменные для хранения очков
let imanScore = 0;
let healthScore = 0;
let careerScore = 0;

// Количество вопросов в каждой категории
const totalImanQuestions = 16;
const totalHealthQuestions = 6;
const totalCareerQuestions = 3;

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
