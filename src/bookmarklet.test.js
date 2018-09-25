'use strict';

const bookmarklet = require('./bookmarklet');

test('generates simple prefixed IIFE', () => {
    const code = 'console.log(123)';

    expect(bookmarklet(code)).toBe(
        'javascript:void%20function%20()%20{' + code + '}();'
    );
});

test('encodes reserved characters', () => {
    const code = "console.log('%', '\"', '<', '>', '#', '@', ' ', '\\&', '\\?')";

    const encodedCode =
        "console.log('%25',%20'%22',%20'%3C',%20'%3E',%20'%23',%20'%40',%20'%20',%20'\\%26',%20'\\%3F')";

    expect(bookmarklet(code)).toBe(
        'javascript:void%20function%20()%20{' + encodedCode + '}();'
    );
});
