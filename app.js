var car = {
    brand: "Alfa Romeo",
    model: "Giulietta",
    style: "hatchback",
    year: "2013",
    assembly: "Italy",
    engine: {
        type: "diesel",
        size: "1998",
        power: "140"
    },
    transmission: {
        type: "manual",
        gears: "6"
    },
    overview: function overview() {
        console.log("My car is", this.brand, this.model, "produced in", this.assembly, "in", this.year);
        console.log("It has", this.engine.size, "ccm", this.engine.type, "engine with", car.engine.power, "HP.");
    }
}

car.overview();

for (var property in car.engine) {
    console.log(property, ":", car.engine[property]);
}
