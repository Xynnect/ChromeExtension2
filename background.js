/**
 * Created by XelnectPC on 7/25/2015.
 */
chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create("popup.html",
        {  frame: "none",
            id: "framelessWinID",
            innerBounds: {
                width: 360,
                height: 300,
                left: 600,
                minWidth: 220,
                minHeight: 220
            }
        }
    );
});