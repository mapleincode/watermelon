const should = require('should');
const { Italic, Paragraph } = require('../index');

describe('Italic', function() {
    describe('#toString', function() {
        it('should equal *Italic*', function() {
            const italic = new Italic('Italic');
            italic.toString().should.equal('*Italic*');
        });
    });

    describe('#inline', function() {
        it('should equal paragraph', function() {
            const italic = new Italic('Italic');
            const p = new Paragraph(['this is ', italic, '.']);
            p.toString().should.equal('this is *Italic*.\n\n');
        });
    });
});
