"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike = void 0;
var Bike = /** @class */ (function () {
    function Bike() {
    }
    Bike.prototype.start = function () {
        console.log("bike started..");
    };
    Bike.prototype.stop = function () {
        console.log("bike stopped..");
    };
    return Bike;
}());
exports.Bike = Bike;
var Airplane = /** @class */ (function () {
    function Airplane() {
    }
    Airplane.prototype.start = function () {
        console.log("Airplane started..");
    };
    Airplane.prototype.stop = function () {
        console.log("Airplane stopped..");
    };
    Airplane.prototype.fly = function () {
        console.log("Airplane started flying..");
    };
    return Airplane;
}());
var plane = new Airplane();
Airplane.prototype.fly();
