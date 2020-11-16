const Bike = require("../../src/models/bike");
const request = require("request");

beforeEach(() => (Bike.allBikes = []));
beforeEach(() => {
  console.log("testeando...");
});

describe("Bike API", () => {
  describe("get bikes / ", () => {
    it("Status 200", () => {
      expect(Bike.allBikes.length).toBe(0);

      var bike1 = new Bike(2, "red", "urban", [-26.5382994, -59.3446029]);
      var bike2 = new Bike(2, "red", "urban", [-26.5382994, -59.3446029]);
      Bike.add(bike1);
      Bike.add(bike2);

      expect(Bike.allBikes.length).toBe(2);

      request.get("https://localhost:3001/bikes", function (
        error,
        response,
        body
      ) {
        expect(response.statusCode).toBe(200);
      });
    });
  });

  describe("post bike", () => {
    it("Status 200", (done) => {
      let headers = { "content-type": "application/json" };
      let bike =
        '{"id": 10, "color": "red", "model": "urban", "lat": -26, "log": -59}';
      request.post(
        {
          headers: headers,
          url: "https://localhost:3001/bikes/create",
          body: bike,
        },
        function (error, response, body) {
          expect(response.statusCode).toBe(200);
          expect(Bike.findById(10).color).toBe("red");
          done();
        }
      );
    });
  });
});
