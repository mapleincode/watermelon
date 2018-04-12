/**
 * Created by maplex on 2018-04-12 18:04:20
 */
'use strict';
const Componse = require('../Componse');
class SplitLine extends Componse {
    constructor() {
        super();
    }
    
    format() {
        return `---`;
    }
}

module.exports = SplitLine;
