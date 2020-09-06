var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Beverage } from './Beverage.js';
var Expresso = /** @class */ (function (_super) {
    __extends(Expresso, _super);
    function Expresso() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Expresso.prototype.getDescription = function () {
        return 'Expresso';
    };
    Expresso.prototype.getCost = function () {
        return 65.0;
    };
    return Expresso;
}(Beverage));
export { Expresso };
