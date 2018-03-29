/**
 * Created by maplex on 2018/3/29.
 */
'use strict';
const Componse = require('./Componse');
class H1 extends Componse {
    constructor(text) {
        super(text);
    }

    toString() {
        return `# ${this.text}\n\n`;
    }
}