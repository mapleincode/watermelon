const should = require('should');
const { Span, Paragraph } = require('../index');

describe('Span', function() {
    describe('#toString', function() {
        it('should equal Span', function() {
            const span = new Span('Span');
            span.toString().should.equal('Span');
        });
    });

    describe('#inline', function() {
        it('should equal', function() {
            const span = new Span('Span');
            const p = new Paragraph(['this is ', span, '.']);
            p.toString().should.equal('this is Span.\n\n');
        });
    });
});
