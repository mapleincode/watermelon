/**
 * Created by maplex on 2018/3/29.
 */
'use strict';
const Componse = require('../Componse');
class InlineCode extends Componse {
    constructor(text) {
        super(text);
        this.singleParagraph = false;
    }
    
    format() {
        return `\`${this.text}\``;
    }
}

module.exports = InlineCode;
