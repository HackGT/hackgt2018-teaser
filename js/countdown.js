// october 19th at 9pm
// need to put in as a UTC date so browser timezone doesn't mess with it
var startDate = new Date(Date.UTC(2018, 9, 20, 2));

var days = document.getElementById('days');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');

function updateDate() {
    var dateDelta = startDate - new Date();
    var minuteDelta = dateDelta / (1000 * 60);
    var hourDelta = minuteDelta / 60;
    var dayDelta = hourDelta / 24;

    minuteDelta %= 60;
    hourDelta %= 24;

    days.innerHTML = Math.floor(dayDelta);
    hours.innerHTML = Math.floor(hourDelta);
    minutes.innerHTML = Math.floor(minuteDelta);

}

updateDate();
setInterval(updateDate, 60 * 1000);