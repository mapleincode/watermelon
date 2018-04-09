const should = require('should');
const { Table } = require('../index');

describe('Table', function() {
    describe('#toString()', function() {
        describe('without config', function() {
            it('should equal table', function() {
                const list = [
                    { a: 1, b: 2, c: 3 },
                    { a: 4, b: 5, d: 6 }
                ]
                const table = new Table(list);
                table.toString().should.equal('| a | b | c | \n| --- | --- | --- | \n| 1 | 2 | 3 | \n| 4 | 5 |  | \n\n');
            });
        });

        describe('with config', function() {
            it('should equal table with config 1', function() {
                const list = [
                    { a: 1, b: 2, c: 3 },
                    { a: 4, b: 5, d: 6 }
                ];
                const config = {
                    a: 'nameA',
                    b: 'nameB',
                    c: 'nameC',
                    d: 'nameD',
                    e: 'nameE'
                };
                const table = new Table(list, config);
                table.toString().should.equal('| nameA | nameB | nameC | nameD | nameE | \n| --- | --- | --- | --- | --- | \n| 1 | 2 | 3 |  |  | \n| 4 | 5 |  | 6 |  | \n\n');
            });

            it('should equal table with config 2', function() {
                const list = [
                    { a: 1, b: 2, c: 3 },
                    { a: 4, b: 5, d: 6 }
                ];

                const config = [
                    { c: 'nameC' },
                    { a: 'nameA' },
                    { b: 'nameB' }
                ];
                const table = new Table(list, config);
                table.toString().should.equal('| nameC | nameA | nameB | \n| --- | --- | --- | \n| 3 | 1 | 2 | \n|  | 4 | 5 | \n\n');
            });

            it('should equal table with config 3', function() {
                const list = [
                    { a: 1, b: 2, c: 3 },
                    { a: 4, b: 5, d: 6 }
                ];
                const config = ['c', 'b', 'a'];
                const table = new Table(list, config);
                table.toString().should.equal('| c | b | a | \n| --- | --- | --- | \n| 3 | 2 | 1 | \n|  | 5 | 4 | \n\n');
            });
        });
    });
});