/**
 * Created by XelnectPC on 7/25/2015.
 */
document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function() {

        chrome.tabs.getSelected(null, function(tab) {
            d = document;

            var f = d.createElement('form');
            f.action = 'http://gtmetrix.com/analyze.html?bm';
            f.method = 'post';
            var i = d.createElement('input');
            i.type = 'hidden';
            i.name = 'url';
            i.value = tab.url;
            f.appendChild(i);
            d.body.appendChild(f);
            f.submit();
        });
    }, false);
    var checkPageButton2 = document.getElementById('checkPage2');
    checkPageButton2.addEventListener('click', function() {

        var newURL = "http://www.google.nl";
        chrome.tabs.create({ url: newURL });

    }, false);
}, false);
function updateContentStyle() {
    var content = document.getElementById("content");
    if (!content)
        return;

    var left = 0;
    var top = 0;
    var width = window.outerWidth;
    var height = window.outerHeight;

    var titlebar = document.getElementById("top-titlebar");
    if (titlebar) {
        height -= titlebar.offsetHeight;
        top += titlebar.offsetHeight;
    }
    titlebar = document.getElementById("bottom-titlebar");
    if (titlebar) {
        height -= titlebar.offsetHeight;
    }
    titlebar = document.getElementById("left-titlebar");
    if (titlebar) {
        width -= titlebar.offsetWidth;
        left += titlebar.offsetWidth;
    }
    titlebar = document.getElementById("right-titlebar");
    if (titlebar) {
        width -= titlebar.offsetWidth;
    }

    var contentStyle = "position: absolute; ";
    contentStyle += "left: " + left + "px; ";
    contentStyle += "top: " + top + "px; ";
    contentStyle += "width: " + width + "px; ";
    contentStyle += "height: " + height + "px; ";
    content.setAttribute("style", contentStyle);
}