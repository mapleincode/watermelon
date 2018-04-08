/**
 * Created by maplex on 2018/3/29.
 */
'use strict';
const Componse = require('../Componse');
class Link extends Componse {
    constructor(link, linkName) {
        super(link);
        if(!linkName) {
            linkName = link;
        }
        this.linkName = linkName;
        this.singleParagraph = false;
    }

    format() {
        return `[${this.linkName}](this.text)`;
    }
}

module.exports = Link;
