/**
 * Created by maplex on 2018/3/29.
 */
'use strict';
const Componse = require('../Componse');
class H1 extends Componse {
    constructor(text) {
        super(text);
    }
    
    format() {
        return `#### ${this.text}`;
    }
}

module.exports = H1;
