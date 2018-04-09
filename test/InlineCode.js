const should = require('should');
const { InlineCode, Paragraph } = require('../index');

describe('InlineCode', function() {
    describe('InlineCode', function() {
        describe('#toString', function() {
            it('should equal *InlineCode*', function() {
                const inlineCode = new InlineCode('InlineCode');
                inlineCode.toString().should.equal('`InlineCode`');
            });
        });
    
        describe('#inline', function() {
            it('should equal paragraph', function() {
                const inlineCode = new InlineCode('InlineCode');
                const p = new Paragraph(['this is ', inlineCode, '.']);
                p.toString().should.equal('this is `InlineCode`.\n\n');
            });
        });
    });
});
