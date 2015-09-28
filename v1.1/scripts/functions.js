function getSomeTime() {

  var date = new Date();
  var hour = date.getHours().toString();
  var minutes = date.getMinutes().toString()
  var seconds = date.getSeconds().toString();
  var utc2;

  if (date.getMinutes() < 10) {

    minutes = "0" + minutes;

  }

  if (date.getSeconds() < 10) {

    seconds = "0" + seconds;

  }

  document.getElementById('clock').innerHTML = hour + " " + minutes + " " + seconds;

}

function getSomeDate() {

    var date2 = new Date();
    var weekday = new Array(7);
      weekday[0]=  "SUN";
      weekday[1] = "MON";
      weekday[2] = "TUE";
      weekday[3] = "WED";
      weekday[4] = "THU";
      weekday[5] = "FRI";
      weekday[6] = "SAT";
    var day = weekday[date2.getDay()];
      day = day.toString();
    var month = new Array(12);
      month[0] = "JAN";
      month[1] = "FEB";
      month[2] = "MAR";
      month[3] = "APR";
      month[4] = "MAY";
      month[5] = "JUN";
      month[6] = "JUL";
      month[7] = "AUG";
      month[8] = "SEP";
      month[9] = "OCT";
      month[10] = "NOV";
      month[11] = "DEC";
    var monthText = month[date2.getMonth()];
      monthText = monthText.toString();
    var monthNum = date2.getDate().toString();

  document.getElementById('date1').innerHTML = day + " <b>" + monthNum + "</b> " + monthText;
  document.getElementById('dow').innerHTML = day + " ";
  document.getElementById('date').innerHTML = monthNum + " ";
  document.getElementById('month').innerHTML = monthText;
}
