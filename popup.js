var alarmClock = {

    onHandler : function(e) {
        chrome.alarms.create("waterAlarm", {periodInMinutes: 30} );
        document.querySelector(".active")
                window.close();
    },

    offHandler : function(e) {
        chrome.alarms.clear("waterAlarm");
                window.close();
    },

    setup: function() {
        var a = document.getElementById('alarmOn');
        a.addEventListener('click',  alarmClock.onHandler );
        var a = document.getElementById('alarmOff');
        a.addEventListener('click',  alarmClock.offHandler );
    }
};

document.addEventListener('DOMContentLoaded', function () {
alarmClock.setup();
});