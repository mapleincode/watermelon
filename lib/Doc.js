/**
 * Created by maplex on 2018/3/29.
 */
'use strict';
const Componse = require('./Componse');


class Doc {
    constructor(texts) {
        this.texts = [].concat(texts).map((t) => {
            if(typeof t === 'string') {
                return new Componse(t);
            }
            return t;
        });
    }


    toString() {
        let textString;
        for(const text of this.texts) {
            textString += text.toString();
        }
        return textString;
    }

    push() {

    }
}