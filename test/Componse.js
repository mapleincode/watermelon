const should = require('should');
const { Componse } = require('../index');

describe('Componse', function() {
    it('should deal special characters', function() {
        const str = 'The asterisk is \'*\'. The \'`\' is \'`\'.';
        const componse = new Componse(str);
        componse.toString().should.equal('The asterisk is \'\\*\'. The \'\\`\' is \'\\`\'.\n\n')
    });
});
