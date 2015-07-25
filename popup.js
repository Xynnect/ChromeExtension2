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

    var greeting = "hola, ";
    var button = document.getElementById("mybutton");
    button.person_name = "Roberto";
    button.addEventListener("click", function() {
        alert(greeting + button.person_name + ".");
    }, false);

}, false);
