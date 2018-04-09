'use strict';

const should = require('should');
const { Title, P } = require('../index');

describe('Title', function() {
    describe('#init', function() {
        it('should equal blank string with init', function() {
            const title = new Title();
            title.toString().should.equal('');
        });
    });
    describe('#string', function() {
        it('should equal with text', function() {
            const title = new Title('hello world');
            title.toString().should.equal('hello world\n\n');
        });

        it('should equal with muli-text', function() {
            const title = new Title(['hello', 'world']);
            title.toString().should.equal('hello\n\nworld\n\n');
        });

        it('should equal with muli-object', function() {
            const p = new P('hello');
            const title = new Title([p, 'world']);
            title.toString().should.equal('hello\n\nworld\n\n');
        });
    });

    describe('#push', function() {
        it('should equal with push a text', function() {
            const title = new Title('hello');
            title.push('world');
            title.toString().should.equal('hello\n\nworld\n\n');
        });

        it('should equal with push an object', function() {
            const title = new Title('hello');
            const p = new P('world');
            title.push(p);
            title.toString().should.equal('hello\n\nworld\n\n');
        });
    });
});