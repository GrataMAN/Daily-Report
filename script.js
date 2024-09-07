let totalQuestions = 30;
let positiveAnswers = 0;

function handleClick(button, type) {
  // Если ответ уже дан, не реагировать
  if (button.classList.contains('disabled')) return;

  // Пометить нажатую кнопку как выбранную
  button.classList.add('clicked', 'disabled');

  // Отключить другую кнопку
  let siblingButton = button.nextElementSibling || button.previousElementSibling;
  siblingButton.classList.add('disabled');
  
  if (type === 'green') {
    positiveAnswers++;
  }

  updateProgress();
}

function updateProgress() {
  let progress = (positiveAnswers / totalQuestions) * 100;
  document.getElementById('progress-bar').style.width = progress + '%';

  let motivationSection = document.getElementById('motivation');
  if (progress > 50) {
    motivationSection.textContent = "Молодец ахи! Продолжай в том же духе!";
  } else {
    motivationSection.textContent = "Не сдавайся ахи, стремись к лучшему!";
  }
}
