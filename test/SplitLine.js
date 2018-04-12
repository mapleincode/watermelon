const should = require('should');
const { SplitLine } = require('../index');

describe('SplitLine', function() {
    describe('#toString()', function() {
        it('should equal ---', function() {
            const splitLine = new SplitLine();
            splitLine.toString().should.equal('---\n\n');
        });
    });
});