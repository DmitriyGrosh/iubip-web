const chai = require('chai');
const expect = chai.expect;
const calculateCircleArea = require('./circleArea');

describe('Circle Area Calculation', function() {
	it('should return correct area for radius 1', function() {
		expect(calculateCircleArea(1)).to.be.closeTo(Math.PI, 0.001);
	});

	it('should return correct area for radius 5', function() {
		expect(calculateCircleArea(5)).to.be.closeTo(78.54, 0.01);
	});

	it('should return correct area for radius 10', function() {
		expect(calculateCircleArea(10)).to.be.closeTo(314.16, 0.01);
	});

	it('should return 0 for radius 0', function() {
		expect(calculateCircleArea(0)).to.equal(0);
	});

	it('should throw an error for negative radius', function() {
		expect(() => calculateCircleArea(-1)).to.throw('Radius cannot be negative');
	});
});
