'use strict';

const fs = require('fs');

const generate = require('./src/generate');
const bookmarklet = require('./src/bookmarklet');

function onlySource(fn) {
    return fn.toString().replace(
        /function b\(\) {\s([\s\S]*)\s}/gm,
        '$1',
    )
}

function b() {
    const vs = window.prompt('VS:');
    const ss = window.prompt('SS:');
    const ks = window.prompt('KS:');

    let message = '';
    try {
        message = generate(vs, ss, ks);
    } catch (e) {
        alert('Error: ' + e);
        return;
    }

    if (document.activeElement && 'value' in document.activeElement) {
        document.activeElement.value = message;
    } else {
        alert(message);
    }
};

const skCode = onlySource(generate) + onlySource(b);
const skBookmarklet = bookmarklet(skCode);

const czCode = onlySource(generate) +
    onlySource(b).replace('generate(vs, ss, ks)', 'generate(vs, ss, ks, \'CZ\')');
const czBookmarklet = bookmarklet(czCode);

fs.writeFileSync('./bookmarklets/sk.js', skBookmarklet);
fs.writeFileSync('./bookmarklets/cz.js', czBookmarklet);
