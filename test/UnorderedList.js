const should = require('should');
const { UnorderedList } = require('../index');

describe('UnorderedList', function() {
    describe('#toString', function() {
        it('should equal', function() {
            const list = ['one', 'two', 'three'];
            const order = new UnorderedList(list);
    
            order.toString().should.equal('* one\n* two\n* three\n\n');
        });
    });
});