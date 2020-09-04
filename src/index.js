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
//Bebidas
var Beverage = /** @class */ (function () {
    function Beverage() {
    }
    return Beverage;
}());
var HouseBlend = /** @class */ (function (_super) {
    __extends(HouseBlend, _super);
    function HouseBlend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HouseBlend.prototype.getDescription = function () {
        return 'House Blend';
    };
    HouseBlend.prototype.getCost = function () {
        return 25.0;
    };
    return HouseBlend;
}(Beverage));
//Complementos
var CondimentDecorator = /** @class */ (function (_super) {
    __extends(CondimentDecorator, _super);
    function CondimentDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CondimentDecorator;
}(Beverage));
var Milk = /** @class */ (function (_super) {
    __extends(Milk, _super);
    function Milk(beverage) {
        var _this = _super.call(this) || this;
        _this.beverage = beverage;
        return _this;
    }
    Milk.prototype.getDescription = function () {
        return this.beverage.getDescription() + " with milk";
    };
    Milk.prototype.getCost = function () {
        return this.beverage.getCost() + 10.0;
    };
    return Milk;
}(CondimentDecorator));
//Interfaz
var cafe1 = new HouseBlend();
console.log(cafe1.getDescription() + " cuesta: " + cafe1.getCost() + " pesos");
cafe1 = new Milk(cafe1);
console.log(cafe1.getDescription() + " cuesta: " + cafe1.getCost() + " pesos");
