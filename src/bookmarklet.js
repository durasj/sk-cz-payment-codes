'use strict';

/**
 * Inspired by the bookmarkleter by Chris Zarate.
 * https://github.com/chriszarate/bookmarkleter
 * Released to the public domain without warranty.
 */

function bookmarklet(code) {
    // URI-encode only a subset of characters. Most user agents are permissive with
    // non-reserved characters, so don't obfuscate more than we have to.
    const specialCharacters = ['%', '"', '<', '>', '#', '@', ' ', '\\&', '\\?'];

    // Add javascript prefix and wrap in IIFE to prevent populating of global variable space.
    code = 'javascript:void function () {' + code + '}();';

    // URI-encode special characters
    specialCharacters.forEach(function (char) {
        const charRegex = new RegExp(char, 'g');
        code = code.replace(charRegex, encodeURIComponent(char.replace(/\\/g, '')));
    });

    // Return bookmarklet as single line.
    return code.replace(/\r?\n|\r/g, '%20');
}

module.exports = bookmarklet;
