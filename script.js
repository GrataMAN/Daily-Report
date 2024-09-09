let totalQuestions = 30;
let positiveAnswers = 0;
let answeredQuestions = 0;

function handleClick(button, type) {
  // Если ответ уже дан, не реагировать
  if (button.classList.contains('disabled')) return;

  // Пометить нажатую кнопку как выбранную
  button.classList.add('clicked', 'disabled');

  // Отключить другую кнопку
  let siblingButton = button.nextElementSibling || button.previousElementSibling;
  if (siblingButton) {
    siblingButton.classList.add('disabled');
  }
  
  if (type === 'green') {
    positiveAnswers++;
  }

  answeredQuestions++;
  updateProgress();
}

function updateProgress() {
  let progress = (positiveAnswers / totalQuestions) * 100;
  document.getElementById('progress-bar').style.width = progress + '%';

  let motivationSection = document.getElementById('motivation');
  // Отображать мотивацию, только если все вопросы отвечены
  if (answeredQuestions === totalQuestions) {
    if (progress > 50) {
      motivationSection.textContent = "Молодец ахи! Продолжай в том же духе!";
    } else {
      motivationSection.textContent = "Ты моросишь да ахи? чё так плохо всё?!";
    }
    motivationSection.style.display = 'block'; // Показываем мотивацию
  } else {
    motivationSection.style.display = 'none'; // Скрываем мотивацию, если не все вопросы отвечены
  }
}
