document.addEventListener('DOMContentLoaded', function() {
    const banner = document.getElementById('dynamic-banner');
    const images = [
        { src: 'images/banner1.jpg', link: 'index.html' },
        { src: 'images/banner2.jpg', link: 'gallery.html' },
        { src: 'images/banner3.jpg', link: 'index.html' }
    ];
    
    let currentIndex = 0;
    
    // Создаем элементы изображений
    images.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = 'Баннер ' + (index + 1);
        imgElement.classList.add('banner-image');
        if (index === 0) imgElement.classList.add('active');
        
        // Добавляем обработчик клика
        imgElement.addEventListener('click', function() {
            window.location.href = image.link;
        });
        
        banner.appendChild(imgElement);
    });
    
    // Функция для смены изображений
    function rotateBanner() {
        const bannerImages = document.querySelectorAll('.banner-image');
        
        // Удаляем активный класс у текущего изображения
        bannerImages[currentIndex].classList.remove('active');
        
        // Переходим к следующему изображению
        currentIndex = (currentIndex + 1) % images.length;
        
        // Добавляем активный класс новому изображению
        bannerImages[currentIndex].classList.add('active');
    }
    
    // Запускаем ротацию каждые 5 секунд
    setInterval(rotateBanner, 5000);
});