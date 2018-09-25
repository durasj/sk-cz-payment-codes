'use strict';

const generate = require('./generate');

test('converts a simple set of codes', () => {
    const vs = '1234567890';
    const ss = '1234567890';
    const ks = '1234';

    expect(generate(vs, ss, ks)).toBe(
        `/VS${vs}/SS${ss}/KS${ks}`
    );
});

test('converts a simple set of codes to CZ format', () => {
    const vs = '1234567890';
    const ss = '1234567890';
    const ks = '1234';

    expect(generate(vs, ss, ks, 'CZ')).toBe(
        `/VS/${vs}/SS/${ss}/KS/${ks}`
    );
});

test('omits any code in SK format', () => {
    expect(generate()).toBe(
        `/VS/SS/KS`
    );
});

test('omits any code in CZ format', () => {
    const vs = '';
    const ss = '';
    const ks = '';

    expect(generate(vs, ss, ks, 'CZ')).toBe(
        ``
    );
});

test('omits "ks" in CZ format', () => {
    const vs = '1234567890';
    const ss = '1234567890';
    const ks = '';

    expect(generate(vs, ss, ks, 'CZ')).toBe(
        `/VS/${vs}/SS/${ss}`
    );
});

test('omits "ss" and "ks" in CZ format', () => {
    const vs = '1234567890';
    const ss = '';
    const ks = '';

    expect(generate(vs, ss, ks, 'CZ')).toBe(
        `/VS/${vs}`
    );
});

test('pads "ks" shorther than 4 chars with zeroes', () => {
    const vs = '1234567890';
    const ss = '1234567890';
    const ks = '123';

    expect(generate(vs, ss, ks)).toBe(
        `/VS${vs}/SS${ss}/KS0${ks}`
    );
});

test('throws error for "vs" non-numeric or longer than 10 numbers', () => {
    let vs = '12345678900';
    const ss = '1234567890';
    const ks = '1234';

    expect(() => generate(vs, ss, ks)).toThrowError(
        'Wrong "vs" format - should be up to 10 numbers.'
    );

    vs = 's1234567890';

    expect(() => generate(vs, ss, ks)).toThrowError(
        'Wrong "vs" format - should be up to 10 numbers.'
    );
});

test('throws error for "ss" non-numeric or longer than 10 numbers', () => {
    const vs = '1234567890';
    let ss = '12345678900';
    const ks = '1234';

    expect(() => generate(vs, ss, ks)).toThrowError(
        'Wrong "ss" format - should be up to 10 numbers.'
    );

    ss = 's1234567890';

    expect(() => generate(vs, ss, ks)).toThrowError(
        'Wrong "ss" format - should be up to 10 numbers.'
    );
});

test('throws error for "ks" non-numeric or longer than 4 numbers', () => {
    const vs = '1234567890';
    const ss = '1234567890';
    let ks = '12345';

    expect(() => generate(vs, ss, ks)).toThrowError(
        'Wrong "ks" format - should be up to 4 numbers.'
    );

    ks = 's123';

    expect(() => generate(vs, ss, ks)).toThrowError(
        'Wrong "ks" format - should be up to 4 numbers.'
    );
});

test('throws error for unsupported format', () => {
    const vs = '1234567890';
    const ss = '1234567890';
    const ks = '1234';

    expect(() => generate(vs, ss, ks, '')).toThrowError(
        'Unsupported format. Supported formats: "SK", "CZ".'
    );
});
