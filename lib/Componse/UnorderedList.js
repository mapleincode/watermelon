/**
 * Created by maplex on 2018/3/29.
 */
'use strict';
const Paragraph = require('./Paragraph');
const Componse = require('../Componse');
class UnorderedList extends Componse {
    constructor(list) {
        super();
        this.list  = [];
        for(const item of list) {
            if(!item instanceof Componse) {
                item = new Paragraph(item);
            }
            this.list.push(item);
        }
    }

    format() {
        return this.list.map(item => `* ${item.toString()}`).join('\n');
    }
}

module.exports = UnorderedList;
