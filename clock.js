setInterval(function() {
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  var hexTime = '#' + hours + '' + '' + minutes + '' + seconds;

  wrapper.style.backgroundColor = hexTime;
  clock.innerHTML = hexTime


}, 1000);
