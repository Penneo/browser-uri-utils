let _penneo = {
    terminalEncode: (str) => {
      return str.replace(/"/g, `\\"`);  
    },

    htmlEncode: (str) => {
        return str
            .replace(/\\/g, '&#92;')
            // .replace(/{/g, '&#123;')
            // .replace(/}/g, '&#125;')
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    },

    stringify: (data) => {
        try {
            return JSON.stringify(data);
        } catch (e) {
            console.log(e);
            return false;
        }
    }
}

/**
 * Returns a valid `href` to be set in an <a> tag programatically.
 * @param  {object} data javascript object to integrate with Penneo desktop.
 * @return {string}      href uri
 */
function createHref(data) {
    const prefix = 'penneo:';
    let str = _penneo.stringify(data);

    if (!str) {
        return false;
    }

    return prefix + _penneo.htmlEncode(_penneo.terminalEncode(str));
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
