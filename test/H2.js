const should = require('should');
const { H2 } = require('../index');

describe('H2', function() {
    describe('#toString()', function() {
        it('should equal ## h2', function() {
            const h2 = new H2('h2');
            h2.toString().should.equal('## h2\n\n');
        });
    });
});