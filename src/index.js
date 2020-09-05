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
var DarKRoast = /** @class */ (function (_super) {
    __extends(DarKRoast, _super);
    function DarKRoast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DarKRoast.prototype.getDescription = function () {
        return 'Dark Roast';
    };
    DarKRoast.prototype.getCost = function () {
        return 40.0;
    };
    return DarKRoast;
}(Beverage));
var Decaf = /** @class */ (function (_super) {
    __extends(Decaf, _super);
    function Decaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Decaf.prototype.getDescription = function () {
        return 'Expresso';
    };
    Decaf.prototype.getCost = function () {
        return 50.0;
    };
    return Decaf;
}(Beverage));
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
var Soy = /** @class */ (function (_super) {
    __extends(Soy, _super);
    function Soy(beverage) {
        var _this = _super.call(this) || this;
        _this.beverage = beverage;
        return _this;
    }
    Soy.prototype.getDescription = function () {
        return this.beverage.getDescription() + " with soy";
    };
    Soy.prototype.getCost = function () {
        return this.beverage.getCost() + 15.0;
    };
    return Soy;
}(CondimentDecorator));
var Mocha = /** @class */ (function (_super) {
    __extends(Mocha, _super);
    function Mocha(beverage) {
        var _this = _super.call(this) || this;
        _this.beverage = beverage;
        return _this;
    }
    Mocha.prototype.getDescription = function () {
        return this.beverage.getDescription() + " with mocha";
    };
    Mocha.prototype.getCost = function () {
        return this.beverage.getCost() + 20.0;
    };
    return Mocha;
}(CondimentDecorator));
