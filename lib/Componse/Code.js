/**
 * Created by maplex on 2018/3/29.
 */
'use strict';
const Componse = require('../Componse');
class Code extends Componse {
    constructor(text, codeType) {
        super(text);
        this.codeType = codeType;
    }

    format() {
        return `\`\`\`${this.code || ''}\n${
            this.text
        }\n\`\`\``;
    }
}

module.exports = Code;
