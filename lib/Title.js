/**
 * Created by maplex on 2018/3/29.
 */
'use strict';
const Paragraph  = require('./Componse/Paragraph');
const Componse = require('./Componse');


class Title {
    constructor(texts) {
        this.texts = [].concat(texts).filter(t => 
            t !== undefined && t !== null
        ).map((t) => {
            if(typeof t !== 'object') {
                return new Paragraph(t);
            }
            return t;
        }).filter(t => t instanceof Componse);
    }


    toString() {
        let textString = '';
        for(const text of this.texts) {
            textString += text.toString();
        }
        return textString;
    }

    push(text) {
        if(text instanceof Componse) {
            this.texts.push(text);
            return;
        }
        if(typeof text !== 'string' && text) {
            text = text.toString();
        }
        this.texts.push(new Paragraph(text));
    }
}

module.exports = Title;
