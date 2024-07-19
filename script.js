document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('animate-image');
    const randomNumber1 = document.getElementById('random-number1');
    const randomNumber2 = document.getElementById('random-number2');

    image.addEventListener('click', function() {
        // Запуск анимации
        image.classList.add('animate');
        
        // Удаление анимации через 0.5 секунды (время совпадает с transition в CSS)
        setTimeout(() => {
            image.classList.remove('animate');
        }, 500);

        // Генерация двух случайных чисел от 1 до 6
        const number1 = Math.floor(Math.random() * 6) + 1;
        const number2 = Math.floor(Math.random() * 6) + 1;
        randomNumber1.textContent = number1;
        randomNumber2.textContent = number2;
    });
});
