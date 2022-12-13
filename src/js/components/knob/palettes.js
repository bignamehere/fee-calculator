
//TODO: make _init attributes optional

function LightenDarkenColor(col, amt) {
  var usePound = false;
  if (col[0] === "#") {
      col = col.slice(1);
      usePound = true;
  }
  var num = parseInt(col,16);
  var r = (num >> 16) + amt;
  if (r > 255) r = 255;
  else if  (r < 0) r = 0;
  var b = ((num >> 8) & 0x00FF) + amt;
  if (b > 255) b = 255;
  else if  (b < 0) b = 0;
  var g = (num & 0x0000FF) + amt;
  if (g > 255) g = 255;
  else if (g < 0) g = 0;
  return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}

export default {
  /* jn: {
    bg_color: '#FFFFFF',
    bg_border_color: '#FFFFFF',
    track_bg_color: LightenDarkenColor('#5AA3D2', 50),
    track_color_init: LightenDarkenColor('#85c7f1', -10),
    track_color: LightenDarkenColor('#0f589f', -10),
    cursor_color_init: LightenDarkenColor('#0f589f', -2),
    cursor_color: LightenDarkenColor('#00468B', -2),
    markers_color: '#0f589f',
    font_color: LightenDarkenColor('#0f589f', -20),
  }, */
  jn: {
    bg_color: '#FFFFFF',
    bg_border_color: '#FFFFFF',
    track_bg_color: '#C7DFF0',
    track_color_init: '#0057AD',
    track_color: '#003B75',
    cursor_color_init: '#FAB417',
    cursor_color: '#5AA3D2',
    markers_color: '#0f589f',
    font_color: '#00468B',
  },
}