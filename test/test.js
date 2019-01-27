const expect = require("chai").expect;
const aJSON = require("../lib");

describe("appendable JSON", function () {

    it("should be appendable", function () {
        const ab = [{a: 1}, {b: 2}];
        const c = [{c: 3}];
        expect(aJSON.stringify(ab.concat(c))).to.equal(aJSON.stringify(ab) + aJSON.stringify(c));
    });

    it("should be idempotent", function () {
        const abc = [{a: 1}, {b: 2}, {c: 3}];
        const string = aJSON.stringify(abc);
        expect(aJSON.stringify(aJSON.parse(string))).to.equal(string);
    });

    it("should handle empty arrays", function () {
        expect(aJSON.stringify([])).to.equal("");
        expect(aJSON.parse("").length).to.equal(0);
    });

});