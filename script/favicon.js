document.observe("dom:loaded", function() {
    var link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://ardacraft.github.io/ardacraft/style/images/favicon.png';
    document.getElementsByTagName('head')[0].appendChild(link);
});
