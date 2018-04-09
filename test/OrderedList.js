const should = require('should');
const { OrderedList } = require('../index');

describe('OrderedList', function() {
    describe('#toString', function() {
        it('should equal', function() {
            const list = ['one', 'two', 'three'];
            const order = new OrderedList(list);
    
            order.toString().should.equal('1. one\n2. two\n3. three\n\n');
        });
    });
});
