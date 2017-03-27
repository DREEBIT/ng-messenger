"use strict";
var DomUtils = (function () {
    function DomUtils() {
    }
    DomUtils.findChildBySelector = function (element, selector) {
        var res = [].filter.call(document.querySelectorAll(selector), function (el) {
            return el.parentNode == element;
        });
        if (res && res.length > 0) {
            return res[0];
        }
        return null;
    };
    DomUtils.findParentBySelector = function (element, selector) {
        var all = document.querySelectorAll(selector);
        var cur = element.parentNode;
        while (cur && !DomUtils.collectionHas(all, cur)) {
            cur = cur.parentNode; //go up
        }
        return cur; //will return null if not found
    };
    DomUtils.collectionHas = function (a, b) {
        for (var i = 0, len = a.length; i < len; i++) {
            if (a[i] == b)
                return true;
        }
        return false;
    };
    DomUtils.scrollDown = function (element) {
        console.log('Current Top:', element.scrollTop);
        console.log('Scroll Height:', element.scrollHeight);
        element.scrollTop = element.scrollHeight;
    };
    return DomUtils;
}());
exports.DomUtils = DomUtils;
//# sourceMappingURL=dom.utils.js.map