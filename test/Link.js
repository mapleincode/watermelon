const should = require('should');
const { P, Link } = require('../index');

describe('Link', function() {
    describe('#toString', function() {
        it('should equal link', function() {
            const link = new Link('http://www.google.com', 'Google');
            link.toString().should.equal('[Google](http://www.google.com)');
        });

        it('should equal link without name', function() {
            const link = new Link('http://www.google.com');
            link.toString().should.equal('[http://www.google.com](http://www.google.com)');
        });
    });

    describe('inline', function() {
        it('should equal paragraph', function() {
            const link = new Link('http://www.google.com', 'Google');
            const p = new P('this is a website: ', link, '.');
            p.toString().should.equal('this is a website: [Google](http://www.google.com).\n\n');
        });
    });
});