const should = require('should');
const { Code } = require('../index');

describe('Code', function() {
    describe('#toString()', function() {
        it('should equal code', function() {
            const text = 'console.log(\'Hello World!\')';
            const type = 'javascript';
            const code = new Code(text, type);
            code.toString().should.equal('```javascript\nconsole.log(\'Hello World!\')\n```\n\n');
        });

        it('should equal code without code-type', function() {
            const text = 'console.log(\'Hello World!\')';
            const code = new Code(text);
            code.toString().should.equal('```\nconsole.log(\'Hello World!\')\n```\n\n');
        });
    });
});