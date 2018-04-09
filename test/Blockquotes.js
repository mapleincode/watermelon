const should = require('should');
const { Blockquotes } = require('../index');

describe('Blockquotes', function() {
    describe('#toString()', function() {
        it('should equal Blockquotes', function() {
            const text = 'hello world';
            const block = new Blockquotes(text);
            block.toString().should.equal('> hello world\n\n');
        });
        it('should equal Blockquotes with multi-line text', function() {
            const text = 'hello world\n\njavascript';
            const block = new Blockquotes(text);
            block.toString().should.equal('> hello world\n> \n> javascript\n\n');
        });
    });
    
});