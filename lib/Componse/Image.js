/**
 * Created by maplex on 2018/3/29.
 */
'use strict';
const Componse = require('../Componse');
class Image extends Componse {
    constructor(imageLink, imageNote) {
        super(imageLink);
        this.imageNote = imageNote || '';
        this.singleParagraph = false;
    }

    format() {
        return `![${this.imageNote}](${this.text})`;
    }
}

module.exports = Image;
