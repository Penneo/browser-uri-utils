let _penneo = {
    stringify: (data) => {
        try {
            return JSON.stringify(data);
        } catch (e) {
            console.log(e);
            return false;
        }
    },
  
    browserEncode: (str) => {
       return encodeURIComponent(str);
    }
}

/**
 * Returns a valid `href` to be set in an <a> tag programatically.
 * @param  {object} data javascript object to integrate with Penneo desktop.
 * @return {string}      href uri
 */
function createHref(data) {
    var prefix = 'penneo:browser,';
    var str = _penneo.stringify(data);

    if (!str) {
        return false;
    }
  
    return prefix + _penneo.browserEncode(str);
}

/**
 * Enhances an existing <a> tag with a Penneo link.
 * @param  {object} data javascript object to integrate with Penneo desktop.
 * @return {void}
 */
function penneoLink(data, target) {
    if (!target || target.tagName !== 'A') {
        return false;
    }

    target.href = createHref(data);
}

var link = document.getElementById('pl');

// Example:
// var data = {name: 'test'};
// penneoLink(data, link);
