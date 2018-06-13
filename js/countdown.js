// October 19th at 9pm
// EDT is 4 hours behind UTC (zulu)
var startDate = new Date("2018-10-19T21:00:00-04:00");

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

// For mailchimp mailing list subscription pop up
function toggleModal(shouldShow) {
    document.getElementById("modal").style.display = shouldShow ? "block" : "none";
}

document.getElementById("subscribe").addEventListener("click", toggleModal.bind(null, true));
document.getElementById("subscribe").addEventListener("click", function() {
    document.getElementById("mce-EMAIL").value = "";
});
document.getElementById("mc-embedded-subscribe-form").addEventListener("submit", toggleModal.bind(null, false));
document.getElementById("modal").addEventListener("click", function(event) {
    if (event.target.id == "modal") {
        toggleModal(false);
    }
});
document.getElementById("close").addEventListener("click", toggleModal.bind(null, false));