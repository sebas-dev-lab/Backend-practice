const Bike = require("../../src/models/bike");

beforeEach(() => (Bike.allBikes = []));

describe("Bike.allBikes", () => {
  it("Start empty", () => {
    expect(Bike.allBikes.length).toBe(0);
  });
});

describe("Bike.add", () => {
  it("Must return an array with length > 0", () => {
    expect(Bike.allBikes.length).toBe(0);
    var a = new Bike(1, "red", "urban", [-26.5382994, -59.3446029]);
    Bike.add(a);
    expect(Bike.allBikes[0]).toBe(a);
  });
});

describe("Bike.findById", () => {
  it("Must be id", () => {
    expect(Bike.allBikes.length).toBe(0);
    var bike1 = new Bike(1, "red", "urban", [-26.5382994, -59.3446029]);
    var bike2 = new Bike(2, "red", "urban", [-26.5382994, -59.3446029]);
    Bike.add(bike1);
    Bike.add(bike2);
    let targetBike = Bike.findById(1);
    let targetBike2 = Bike.findById(2);
    expect(targetBike.id).toBe(1);
    expect(targetBike.color).toBe(targetBike.color);
    expect(targetBike.model).toBe(targetBike.model);
    expect(targetBike2.id).toBe(2);
    expect(targetBike2.color).toBe(targetBike2.color);
    expect(targetBike2.model).toBe(targetBike2.model);
  });
});

describe("Bike.remove", () => {
  it("Must remove", () => {
    expect(Bike.allBikes.length).toBe(0);
    var bike1 = new Bike(1, "red", "urban", [-26.5382994, -59.3446029]);
    var bike2 = new Bike(2, "red", "urban", [-26.5382994, -59.3446029]);
    Bike.add(bike1);
    Bike.add(bike2);
    expect(Bike.allBikes.length).toBe(2);
    Bike.remove(bike2.id);
    expect(Bike.allBikes.length).toBe(1);
    expect(Bike.allBikes[0].id).toBe(bike1.id);
  });
});
