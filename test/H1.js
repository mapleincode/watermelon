const should = require('should');
const { H1 } = require('../index');

describe('H1', function() {
    describe('#toString()', function() {
        it('should equal # h1', function() {
            const h1 = new H1('h1');
            h1.toString().should.equal('# h1\n\n');
        });
    });
});