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
