const should = require('should');
const { H5 } = require('../index');

describe('H5', function() {
    describe('#toString()', function() {
        it('should equal ##### h5', function() {
            const h5 = new H5('h5');
            h5.toString().should.equal('##### h5\n\n');
        });
    });
});