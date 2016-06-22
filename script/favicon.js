function myFunction() {
  head = document.getElementsByTagName('head');
  links = head[0].getElementsByTagName('link');
  for (var i in links) {
     link = links[i];
     if (link.getAttribute('rel') == 'shortcut icon') {
        link.setAttribute('href', 'https://ardacraft.github.io/ardacraft/style/images/favicon.png');
        break;
     }
  }
};
var body = document.getElementsByTagName('body');
if (window.addEventListener) {
  window.addEventListener('load', myFunction, false);
}
else if (window.attachEvent) {
  window.attachEvent('onload', myFunction );
}
