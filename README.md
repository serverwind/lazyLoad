## LAZY-LOAD Images

This is very simple script, what make images to load only when they appear in your browser viewport. Why it's important you can read <a href='https://web.dev/browser-level-image-lazy-loading/'>here</a>.

<b>Advantages:</b>

1. Script is very small (<1 kb).
2. Script written on Vanilla Javascript (you don't need jquery or something else).
3. It works! :)

<b>Setup:</b>

Let's say you have image:

<code>&lt;img src='myCat.jpg'&gt;</code>

Change <i>src</i> to <i>data-src</i>, so it will look like:

<code>&lt;img data-src='myCat.jpg'&gt;</code>

Now connect my script to your page with this image:

<code>&lt;script src='https://cdn.jsdelivr.net/gh/lestrangeqq/lazyLoad@master/main.js' &gt;&lt;/script&gt;</code>

Thats all!