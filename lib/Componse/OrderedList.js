/**
 * Created by maplex on 2018/3/29.
 */
'use strict';
const Paragraph = require('./Paragraph');
const Componse = require('../Componse');
class OrderedList extends Componse {
    constructor(list) {
        super();
        this.list  = [];
        for(let item of list) {
            if(!(item instanceof Componse)) {
                item = new Paragraph(item);
            }
            item.singleParagraph = false; // 去除 List的段落化
            this.list.push(item);
        }
    }

    format() {
        let formatString = '';
        let startNo = 1;
        for(const item of this.list) {
            formatString += `${startNo}. ${item.toString()}\n`;
            startNo ++;
        }
        formatString = formatString.slice(0, formatString.length - 1);
        return formatString;
    }
}

module.exports = OrderedList;
