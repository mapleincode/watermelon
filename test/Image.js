const should = require('should');
const { Image } = require('../index');

describe('Image', function() {
    describe('#toString()', function() {
        it('should equal Image with note', function() {
            const url = 'https://www.baidu.com/img/bd_logo1.png';
            const note = 'test image';

            const image = new Image(url, note);
            image.toString().should.equal('![test image](https://www.baidu.com/img/bd_logo1.png)');
        });

        it('should equal image without note', function() {
            const url = 'https://www.baidu.com/img/bd_logo1.png';

            const image = new Image(url);
            image.toString().should.equal('![](https://www.baidu.com/img/bd_logo1.png)');
        });
    });
});