/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs === null || strs.length === 0) {return '';}

    let arrLen = strs.length;
    let baseStr = strs[0];

    let index = 0;
    for ( ;index < baseStr.length; index++) {
        let pass = true;
        for (let arrIndex = 0; arrIndex < arrLen; arrIndex++) {
            if (strs[arrIndex].charAt(index) === '' || strs[arrIndex].charAt(index) !== baseStr.charAt(index)) {
                pass = false;
                break;
            }
        }
        if (pass === false) { break; }
    }

    return baseStr.substr(0, index);
};
