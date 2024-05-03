(function initSlider() {
    const prevButton = document.querySelector('.js--slider__prev');
    const nextButton = document.querySelector('.js--slider__next');
    const listElement = document.querySelector('.js--list');
    const dotList = document.querySelectorAll('.js--dotList .dot');

    nextButton.addEventListener('click', handleNextSlide);
    prevButton.addEventListener('click', handlePrevSlide);
    dotList.forEach((dot, index) => dot.addEventListener('click', () => goToSlide(dot, index)));
    
    function handleNextSlide() { // Функція для перемикання наступного слайда
        const activeElement = listElement.querySelector('.active');
        const nextElement = activeElement.nextElementSibling;
        if (nextElement) {
            switchActive(activeElement, nextElement);
            const index = Array.from(listElement.children).indexOf(nextElement);
            console.log(index);
            console.log(listElement.children);
            console.log(nextElement);
            illuminationDots(dotList[index]);
            toggleButtonVisibility();
        }
    }
      
    function handlePrevSlide() {// Функція для перемикання попереднього слайда
        const activeElement = listElement.querySelector('.active');
        const prevElement = activeElement.previousElementSibling;
        if (prevElement) {
            switchActive(activeElement, prevElement);
            const index = Array.from(listElement.children).indexOf(prevElement);
            illuminationDots(dotList[index]);
            toggleButtonVisibility();
        }
    }

    function goToSlide(dot, index) {// Функція для перемикання на слайд за індексом
        const activeElement = listElement.querySelector('.active');
        const targetElement = listElement.children[index];
        switchActive(activeElement, targetElement);
        illuminationDots(dot);
        toggleButtonVisibility();
    }

    function illuminationDots(dot){
        dotList.forEach((item) =>{
            if (item.classList.contains('active')){
                item.classList.remove('active');
            }
            dot.classList.add('active');
        });
    }

    function switchActive(current, target) {
        current.classList.remove('active');
        target.classList.add('active');
    }

    function toggleButtonVisibility() { // Функція для визначення видимості кнопок "Наступний" і "Попередній" залежно від поточного слайда
        const firstElement = listElement.firstElementChild;
        const lastElement = listElement.lastElementChild;
        const activeElement = listElement.querySelector('.active');

        prevButton.style.display = activeElement !== firstElement ? 'flex' : 'none';
        nextButton.style.display = activeElement !== lastElement ? 'flex' : 'none';
    }
})();
