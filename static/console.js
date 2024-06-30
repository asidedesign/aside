/*  ¯\_(ツ)_/¯  */

var r='\n\n' +
'                              _|              \n'+
'                              _|              \n'+
'  _|_|_|    _|_|_|  _|    _|_|_|    _|_|      \n'+
'_|    _|  _|_|      _|  _|    _|  _|_|_|_|    \n'+
'_|    _|      _|_|  _|  _|    _|  _|          \n'+
'  _|_|_|  _|_|_|    _|    _|_|_|    _|_|_|    \n\n'+
'Visit http://aside.design/info \n\n';
console.log(r);


/* update favicon */

function updateFavicon() {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const favicon = document.getElementById('favicon');
    if (isDarkMode) {
      favicon.href = 'favicon-dark.png';
    } else {
      favicon.href = 'favicon.png';
    }
  }

  // Initial call to set the favicon based on the current preference
  updateFavicon();

  // Listen for changes in the color scheme
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);