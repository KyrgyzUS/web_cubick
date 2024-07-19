document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('animate-image');
    const randomNumberDiv = document.getElementById('random-number');

    image.addEventListener('click', function() {
        // Запуск анимации
        image.classList.add('animate');
        
        // Удаление анимации через 0.5 секунды (время совпадает с transition в CSS)
        setTimeout(() => {
            image.classList.remove('animate');
        }, 500);

        // Генерация случайного числа от 1 до 12
        const randomNumber = Math.floor(Math.random() * 12) + 1;
        randomNumberDiv.textContent = randomNumber;
    });
});
