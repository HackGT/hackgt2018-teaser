// October 19th at 9pm
// EDT is 4 hours behind UTC (zulu)
var startDate = new Date("2018-10-19T21:00:00-0400");

var days = document.getElementById('days');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');

function updateDate() {
    var dateDelta = (startDate - Date.now()) / 1000;
    var minuteDelta = dateDelta / 60;
    var hourDelta = minuteDelta / 60;
    var dayDelta = hourDelta / 24;

    minuteDelta %= 60;
    hourDelta %= 24;

    days.textContent = Math.floor(dayDelta);
    hours.textContent = Math.floor(hourDelta);
    minutes.textContent = Math.floor(minuteDelta);

}

updateDate();
var secondsToMinuteMark = 60 - ((Date.now() / 1000) % 60);
setTimeout(function() {
    updateDate();
    setInterval(updateDate, 60 * 1000);
}, Math.round(secondsToMinuteMark * 1000));

// for mailchimp mailing list subscription pop up
document.getElementById('subscribe').onclick = function() {
    document.getElementById('modal').style.display = 'block';
}

document.getElementById('modal').onclick = function(event) {
    if(event.target.id == 'modal') {
        document.getElementById('modal').style.display = 'none';
    }
}

document.getElementById('close').onclick = function() {
    document.getElementById('modal').style.display = 'none';
}