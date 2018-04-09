const should = require('should');
const { H3 } = require('../index');

describe('H3', function() {
    describe('#toString()', function() {
        it('should equal ### h3', function() {
            const h3 = new H3('h3');
            h3.toString().should.equal('### h3\n\n');
        });
    });
});