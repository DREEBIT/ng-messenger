"use strict";
var StringUtils = (function () {
    function StringUtils() {
    }
    StringUtils.getInitials = function (string) {
        var initials = string.match(/\b\w/g) || [];
        initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
        return initials;
    };
    return StringUtils;
}());
exports.StringUtils = StringUtils;
//# sourceMappingURL=string.utils.js.map