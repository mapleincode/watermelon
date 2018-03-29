/**
 * Created by maplex on 2018/3/29.
 */
'use strict';

class Componse {
    constructor(text) {
        this.text = text;
        this.childs = [];

        this.huanhang = true;
    }

    toString() {
        return `${this.text}\n\n`;
    }
}

module.exports = Componse;
