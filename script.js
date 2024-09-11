let totalQuestions = 30;
let positiveAnswers = 0;
let answeredQuestions = 0;

function handleClick(button, type) {
  // Если ответ уже дан, не реагировать
  if (button.classList.contains('clicked')) return;

  // Пометить нажатую кнопку как выбранную
  button.classList.add('clicked');
  button.disabled = true; // Блокируем нажатую кнопку

  // Отключить другую кнопку
  let siblingButton = button.nextElementSibling || button.previousElementSibling;
  if (siblingButton && !siblingButton.classList.contains('clicked')) {
    siblingButton.disabled = true; // Блокируем кнопку, которая не была нажата
  }

  // Увеличиваем количество отвеченных вопросов
  answeredQuestions++;

  // Если ответ "Да", увеличиваем положительные ответы
  if (type === 'green') {
    positiveAnswers++;
  }

  updateProgress();
}

function updateProgress() {
  let progress = (answeredQuestions / totalQuestions) * 100;
  document.getElementById('progress-bar').style.width = progress + '%';

  // Вычисляем цвет от красного (0%) до зелёного (100%)
  let redValue = Math.max(255 - Math.round((progress / 100) * 255), 0);
  let greenValue = Math.min(Math.round((progress / 100) * 255), 255);
  
  // Меняем цвет всей шкалы
  document.getElementById('progress-bar').style.backgroundColor = `rgb(${redValue}, ${greenValue}, 0)`;

  let motivationSection = document.getElementById('motivation');
  
  // Мотивация появляется только когда все вопросы отвечены
  if (answeredQuestions === totalQuestions) {
    if (progress === 100) {
      motivationSection.textContent = "Ма ща Аллагь! Ты выполнил все!";
    } else if (progress > 50) {
      motivationSection.textContent = "Неплохо, продолжай в том же духе!";
    } else {
      motivationSection.textContent = "Плохо дело, но не отчаивайся в милости всевышнего!";
    }
    motivationSection.style.display = 'block'; // Показываем мотивацию
  } else {
    motivationSection.textContent = ''; // Очищаем мотивацию, если не все ответы даны
    motivationSection.style.display = 'none'; // Скрываем мотивацию
  }
}
