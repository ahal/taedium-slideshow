function min(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}

function adjustResolution() {
  var width = window.innerWidth;
  var height = window.innerHeight;

  // scale the image container
  const ABS_WIDTH = 1200; // images should be 1200x900
  const ABS_HEIGHT = 900;
  const PER_WIDTH = min(0.5 + 200 / width, 0.9);
  const PER_HEIGHT = 0.8;
 
  // scale with width 
  var tW = min(width * PER_WIDTH, ABS_WIDTH);
  var tH = (tW * ABS_HEIGHT / ABS_WIDTH) * 1.1;

  if (tH > min(height * PER_HEIGHT, ABS_HEIGHT)) {
    // scale with height
    tH = min(height * PER_HEIGHT, ABS_HEIGHT);
    tW = (tH * 0.9) * ABS_WIDTH / ABS_HEIGHT;
  }

  var slides = document.querySelectorAll('div.taedium');
  for (var i = 0; i < slides.length; ++i) {
    slides[i].style.width = tW + "px";
    slides[i].style.height = tH + "px";
  }

  // scale the header font size
  var scale_factor = 0.1;                     
  var max_scale = 500;
  var min_scale = 5;

  var font_size = height * scale_factor;

  if (font_size > max_scale) font_size = max_scale;
  if (font_size < min_scale) font_size = min_scale;
  var header = document.querySelectorAll('div.header')[0];
  header.style.fontSize = font_size + '%';

  // scale title font size
  var titles = document.querySelectorAll('div.title');
  var title_height = window.getComputedStyle(titles[0], '').getPropertyValue('height');
  title_height = parseFloat(title_height.slice(0, title_height.length - 2));
  
  scale_factor = 4.0;
  max_scale = 1000;
  min_scale = 100;
  font_size = title_height * scale_factor;
  if (font_size > max_scale) font_size = max_scale;
  if (font_size < min_scale) font_size = min_scale;


  for (var i = 0; i < titles.length; ++i) {
    titles[i].style.fontSize = font_size + '%';
  }
}

function validateKey(evt){
  var key = (evt) ? evt.which : event.keyCode;
  if (String.fromCharCode(key) == "r") {
    adjustResolution();
  }
}
