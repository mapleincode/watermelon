const should = require('should');
const { Bold, Paragraph } = require('../index');

describe('Bold', function() {
    describe('#toString', function() {
        it('should equal **Bold**', function() {
            const bold = new Bold('Bold');
            bold.toString().should.equal('**Bold**');
        });
    });

    describe('#inline', function() {
        it('should equal', function() {
            const bold = new Bold('Bold');
            const p = new Paragraph(['this is ', bold, '.']);
            p.toString().should.equal('this is **Bold**.\n\n');
        });
    });
});
