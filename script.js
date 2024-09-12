let totalQuestions = 30;
let positiveAnswers = 0;
let answeredQuestions = 0;

function handleClick(button, type) {
  // Если ответ уже дан, не реагировать
  if (button.classList.contains('clicked')) return;

  // Пометить нажатую кнопку как выбранную
  button.classList.add('clicked');
  button.disabled = true; // Блокируем нажатую кнопку

  // Отключаем соседнюю кнопку
  let buttons = button.parentElement.children; // Получаем все кнопки в контейнере
  for (let btn of buttons) {
    if (btn !== button && !btn.classList.contains('clicked')) {
      btn.disabled = true; // Блокируем кнопку, которая не была нажата
    }
  }

  // Увеличиваем количество отвеченных вопросов
  answeredQuestions++;

  // Если ответ "Да", увеличиваем положительные ответы
  if (type === 'green') {
    positiveAnswers++;
  }

  // Обновляем прогресс
  updateProgress();
}

function updateProgress() {
  // Прогресс вычисляется только на основе положительных ответов
  let progress = (positiveAnswers / totalQuestions) * 100;
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
