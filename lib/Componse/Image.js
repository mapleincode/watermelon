/**
 * Created by maplex on 2018/3/29.
 */
'use strict';
const Componse = require('../Componse');
class Image extends Componse {
    constructor(imageLink, imageName) {
        super(imageLink);
        if(!imageName) {
            imageName = imageLink;
        }
        this.imageName = imageName;
        this.singleParagraph = false;
    }

    format() {
        return `![${this.linkName}](this.text)`;
    }
}

module.exports = Image;
