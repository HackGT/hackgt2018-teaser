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

// for mailchimp mailing list subscription pop up
(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';}(jQuery));var $mcj = jQuery.noConflict(true);

function clear() {
    document.getElementById('modal').style.display = 'none';

    // remove validation stuff
    var errorMessage = document.getElementById('mce-error-response');
    var successMessage = document.getElementById('mce-success-response');
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';
    successMessage.textContent = '';
    successMessage.style.display = 'none';

    var messages = document.querySelectorAll('div.mce_inline_error');
    for (var i = 0; i < messages.length; i++) {
        messages[i].textContent = '';
    }
    document.getElementById('mce-EMAIL').classList.remove('mce_inline_error');
}

document.getElementById('subscribe').onclick = function() {
    document.getElementById('modal').style.display = 'block';
}

document.getElementById('modal').onclick = function(event) {
    if(event.target.id == 'modal') {
        clear();
    }
}

document.getElementById('close').onclick = function() {
    clear();
}