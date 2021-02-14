//import functions
const { BadRequestError } = require("../expressError");
const { sqlForPartialUpdate } = require("../helpers/sql");

//this is the test sample data

describe("test update data format", function () {
  test("test data run", function () {
    const result = sqlForPartialUpdate({ f1: "v1" }, { f1: "f1", fF2: "f2" });
    expect(result).toEqual({
      setCols: '"f1"=$1',
      values: ["v1"],
    });
  });

  // I want to test throw bad error function and I dont know why it doesnt pass

  test("throws err if no dataToUpdate", function () {
    const result = sqlForPartialUpdate({}, { f1: "f1", fF2: "f2" });
    expect(result).toThrowError(BadRequestError);
  });
});
