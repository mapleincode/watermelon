const should = require('should');
const { P, Span } = require('../index');

describe('Paragraph', function() {
    describe('#toString', function() {
        it('should equal paragraph', function() {
            const p = new P('this is a paragraph');
            p.toString().should.equal('this is a paragraph\n\n');
        });

        it('should remove redundant linebreak', function() {
            const p = new P('there has many linebreak.\n\n\n\n\n\n');
            p.toString().should.equal('there has many linebreak.\n\n');
        });

        it('should replace blank to breakline when there has two paragraph', function() {
            const p = new P('one p.\ntwo p.');
            p.toString().should.equal('one p. two p.\n\n');
        });

        it('should replace two breakline to one with options', function() {
            const p = new P('one p.\ntwo p.', { keepLineBreak: true });
            p.toString().should.equal('one p.\n\ntwo p.\n\n');
        });

        it('should not impact with componse to options', function() {
            const p = new P('one p.', new Span('two p.'));
            p.toString().should.equal('one p.two p.\n\n');
        });
    });
    
    describe('#joint', function() {
        it('should equal', function() {
            const p = new P('this is');
            const q = new Span(' a ');
            p.joint(q);
            p.joint('paragraph');
            p.toString().should.equal('this is a paragraph\n\n');
        });
    });
});