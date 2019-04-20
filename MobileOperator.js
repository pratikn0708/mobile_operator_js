"use strict";
exports.__esModule = true;
var MobileOperator = /** @class */ (function () {
    function MobileOperator(operatorId, operatorName, rating) {
        this.operatorId = operatorId;
        this.opeartorName = operatorName;
        this.rating = rating;
    }
    MobileOperator.prototype.getOperatorId = function () {
        return this.operatorId;
    };
    MobileOperator.prototype.getOperatorName = function () {
        return this.opeartorName;
    };
    MobileOperator.prototype.getRating = function () {
        return this.rating;
    };
    return MobileOperator;
}());
exports.MobileOperator = MobileOperator;
