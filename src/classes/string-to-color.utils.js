"use strict";
var StringToColorFactory = (function () {
    function StringToColorFactory(str) {
        this.str = str;
    }
    StringToColorFactory.prototype.hashCode = function (str) {
        var hash = 0;
        for (var i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        return hash;
    };
    StringToColorFactory.prototype.intToRGB = function (i) {
        var c = (i & 0x00FFFFFF)
            .toString(16)
            .toUpperCase();
        return "00000".substring(0, 6 - c.length) + c;
    };
    StringToColorFactory.prototype.generateColor = function () {
        return this.intToRGB(this.hashCode(this.str));
    };
    return StringToColorFactory;
}());
exports.StringToColorFactory = StringToColorFactory;
//# sourceMappingURL=string-to-color.utils.js.map