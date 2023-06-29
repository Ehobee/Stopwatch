window.addEventListener('load', load)

function load() {
    const startButton = document.querySelector('.start-btn');
    const stopButton = document.querySelector('.stop-btn');
    const resetButton = document.querySelector('.reset-btn');
    const counterElement = document.querySelector('.counter');
    let interval;

    let seconds = '00';
    let minutes = '00';
    let hours = '00';

    counterElement.textContent = `${hours}:${minutes}:${seconds}`;


    startButton.addEventListener('click', addInterval);


    function start() {
        seconds++;


        if (seconds < 10) {
            seconds = '0' + seconds;
        };



        if (seconds > 60) {
            minutes++;
            seconds = `00`;
            if (minutes < 10) {
                minutes = '0' + minutes;
            };
        };

        if (minutes > 60) {
            hours++;
            minutes = `00`;
            if (hours < 10) {
                hours = '0' + hours;
            }
        }

        counterElement.textContent = `${hours}:${minutes}:${seconds}`;

    };

    function addInterval() {
        interval = setInterval(start, 10);
    };


    function stopInterval() {
        clearInterval(interval)
    }

    stopButton.addEventListener('click', stopInterval);

    function resetInterval() {
        counterElement.textContent = '00:00:00';
        seconds = '00';
        minutes = '00';
        hours = '00';
    };

    resetButton.addEventListener('click', resetInterval);
}
