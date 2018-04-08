'use strict';

const Componse = require('../Componse');

class Table extends Componse {
    constructor(dataJson, headers) {
        super();

        if(!Array.isArray(dataJson)) {
            dataJson = [];
        }
        this.dataJson = dataJson;

        this.headerDefined = false;
        this.headerKeys = [];
        this.headerNames = [];

        if(headers && typeof headers === 'object') {
            if(Array.isArray(headers)) {
                for(const item of headers) {
                    if(typeof item === 'object') {
                        const keys = Object.keys(item);
                        for(const key of keys) {
                            this.headerKeys.push(key);
                            this.headerNames.push(item[key]);
                        }
                    } else if(typeof item === 'string') {
                        this.headerKeys.push(item);
                        this.headerNames.push(item);
                    }
                }
            } else {
                for(const key in headers) {
                    if(!headers.hasOwnProperty(key)) continue;
                    this.headerKeys.push(key);
                    this.headerNames.push(headers[key]);
                }
            }
        }
        if(this.headerKeys.length) {
            this.headerDefined = true;
        }
    }

    _joint(values, part) {
        let str = `${part} `;
        for(const v of values) {
            str += `${v} ${part} `;
        }
        return str;
    }

    _jointByNumber(key, number, part) {
        let arr = Array.apply(null, Array(number)).map(m => key);
        return this._joint(arr, part);
    }

    format() {
        let headerKeys = [];
        let headerNames  = [];
        if(this.headerDefined) {
            headerKeys = this.headerKeys;
            headerNames = this.headerNames;
        } else {
            const dataOne = this.dataJson[0];
            headerKeys = Object.keys(dataOne);
            headerNames = headerKeys;
        }

        const headersLength = headerKeys.length;

        let formatString = '';

        // headers
        formatString += this._joint(headerNames, '|') + '\n';
        formatString += this._jointByNumber('---', headersLength, '|') + '\n';

        for(const item of this.dataJson) {
            const arr = [];
            for(const key of headerKeys) {
                arr.push(item[key] || '');
            }
            formatString += this._joint(arr, '|') + '\n';
        }

        formatString = formatString.slice(0, formatString.length - 1);
        return formatString;
    }
}

module.exports = Table;
