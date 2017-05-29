# Penneo Browser Utilities

### Installation

Add the script to your HTML page. You can use the CDN version from `https://cdn.jsdelivr.net/gh/penneo/browser-uri-utils/bin/browser-utils.min.js`, or host it yourself and target directly to it.

```
<!-- index.html -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/penneo/browser-uri-utils/bin/browser-utils.min.js"></script>
```

NPM and Bower installations will be available soon.

### Usage

To enhance any link `<a>` element in a website to integrate Penneo, you only need the link, the data and the script above to be included.

In HTML, create a link with a temporary `href`.

```
<a id="penneo-link" href="#">Link to Penneo</a>
```

In javascript

1. Create the payload to be sent to the Penneo Desktop application accoding to the URI Schema for the integration.
2. Select the link element
3. Enhance the link with the global `penneoLink` function that the script exposes.


```js
<script type="text/javascript">
    // 1. create data payload
    var data = {name: 'Test Casefile'};

    // 2. select link element
    var link = document.getElementById('penneo-link');

    // 3. enhance link
    penneoLink(data, link); // This will update the href of the link to be compatible with the Penneo Desktop application.
</script>
```

Full example will be made available soon.
