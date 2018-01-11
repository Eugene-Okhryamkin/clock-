var clock = document.getElementById('clock');

function start() {
    var time = new Date();
    var h = (time.getHours() % 24).toString();
    var m = time.getMinutes().toString();
    var s = time.getSeconds().toString();

    if (h.length < 2) {
        h = '0' + h;
    }

    if (m.length < 2) {
        m = '0' + m;
    }

    if (s.length < 2) {
        s = '0' + s;
    }

    var giveClock = h + ':' + m + ':' + s; 


    clock.textContent = giveClock;

    var body = document.getElementsByTagName('body');

    if (h >= 4) {
        document.body.style.background = 'url(img/earlyMorning.jpg)';
        document.body.style.backgroundSize = "cover";
    } 

    if (h >= 8) {
        document.body.style.background = 'url(img/morning.jpg)';
        document.body.style.backgroundSize = "cover";
    } 

    if (h >= 13) {
        document.body.style.background = 'url(img/afternoon.jpg)';
        document.body.style.backgroundSize = "cover";
    } 
    if (h >= 16) {
        document.body.style.background = 'url(img/earlyEvening.jpg)';
        document.body.style.backgroundSize = "cover";
    } 
    
    if (h >= 20) {
        document.body.style.background = 'url(img/evening.jpg)';
        document.body.style.backgroundSize = "cover";
    } 

    if (h >= 23) {
        document.body.style.background = 'url(img/night.jpg)';
        document.body.style.backgroundSize = "cover";
    } 
}
setInterval(start, 1000);