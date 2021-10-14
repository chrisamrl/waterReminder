chrome.notifications.onClicked.addListener( () => {
  var newURL = "https://www.youtube.com/watch?v=wnlcuZ0mJSU";
  chrome.tabs.create({ url: newURL });
})

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "myAlarm") {
  chrome.notifications.create('WaterReminder', {
    type: 'basic',
    iconUrl: 'image.png',
    title: 'Reminder to drink your water!',
    message: 'Also, click to do some exercises',
    priority: 2
    });
    chrome.notifications.clear('WaterReminder')
  }
  });