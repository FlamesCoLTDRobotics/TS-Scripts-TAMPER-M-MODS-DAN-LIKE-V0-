
Tampermonkey® by Jan Biniok
v4.18.1
	
MAX - Universal Code Generator 1.0
by Your Name
1
// ==UserScript==
2
// @name         MAX - Universal Code Generator 1.0
3
// @namespace    http://tampermonkey.net/
4
// @version      1.0
5
// @description  A filter that displays a button next to the "demod" label
6
// @author       Your Name
7
// @match        *://*/*
8
// @grant        none
9
// ==/UserScript==
10
​
11
(function() {
12
    'use strict';
13
​
14
    // Find the demod label on the page
15
    var demodLabel = document.querySelector("[data-demod='true']");
16
​
17
    // If the demod label is found, add the button next to it
18
    if (demodLabel) {
19
        var button = document.createElement("button");
20
        button.innerText = "Universal Code Generator 1.0";
21
        demodLabel.parentNode.insertBefore(button, demodLabel.nextSibling);
22
​
23
        // Add event listener for button click
24
        button.addEventListener("click", function() {
25
            // Your code for generating code goes here
26
        });
27
    }
28
})();
29
​
