'use strict';

function generate(vs = '', ss = '', ks = '', format = 'SK') {
    if (['SK', 'CZ'].indexOf(format) === -1) {
        throw new Error('Unsupported format. Supported formats: "SK", "CZ".');
    }

    if (!/^\d{0,10}$/.test(vs)) {
        throw new Error('Wrong "vs" format - should be up to 10 numbers.');
    }

    if (!/^\d{0,10}$/.test(ss)) {
        throw new Error('Wrong "ss" format - should be up to 10 numbers.');
    }

    if (!/^\d{0,4}$/.test(ks)) {
        throw new Error('Wrong "ks" format - should be up to 4 numbers.');
    }

    if (ks) {
        ks = ks.toString().padStart(4, '0');
    }

    if (format === 'SK') {
        return `/VS${vs}/SS${ss}/KS${ks}`;
    }

    let message = '';

    if (vs) {
        message += `/VS/${vs}`;
    }

    if (ss) {
        message += `/SS/${ss}`;
    }

    if (ks) {
        message += `/KS/${ks}`;
    }

    return message;
}

module.exports = generate;
