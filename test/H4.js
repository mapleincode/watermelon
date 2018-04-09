const should = require('should');
const { H4 } = require('../index');

describe('H4', function() {
    describe('#toString()', function() {
        it('should equal #### h4', function() {
            const h4 = new H4('h4');
            h4.toString().should.equal('#### h4\n\n');
        });
    });
});