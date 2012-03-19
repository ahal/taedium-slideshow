function startTime() {
  var today=new Date();
  var h=today.getHours();
  var m=today.getMinutes();
  var s=today.getSeconds();
  // add a zero in front of numbers<10
  var ap = "AM";
  if (h> 11) { ap = "PM";        }
  if (h> 12) { h= h - 12; }
  if (h== 0) { h= 12;        }
  m=checkTime(m);
  s=checkTime(s);
  document.getElementById('clock').innerHTML=h+":"+m+" "+ap;
  setTimeout('startTime()',500);
}

function checkTime(i) {
  if (i<10) {
    i="0" + i;
  }
  return i;
}
