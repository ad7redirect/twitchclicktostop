function clcktostop() {
document.querySelector('.video-ref').addEventListener('click', function() {
    // Находим видео внутри элемента (может быть как <video>, так и iframe с YouTube и т.д.)
    const video = this.querySelector('video');
    
    if (video) {
        // Для обычного HTML5 видео
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    } else {
        // Если видео в iframe (например, YouTube)
        const iframe = this.querySelector('iframe');
        if (iframe) {
            // Для YouTube API потребуется дополнительный код
            console.log('Управление iframe видео требует YouTube API или другого API видеоплеера');
        }
    }
});
console.log("TwitchClickToStop: working")
}
setTimeout(clcktostop, 1000);