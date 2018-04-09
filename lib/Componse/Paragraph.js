/**
 * Created by maplex on 2018/3/29.
 */
'use strict';

const Componse = require('../Componse');
const Span = require('./Span');

class Paragraph extends Componse {
    constructor(text, options) {
        super();
        this.mode = 'text';
        this.childJoints = [];
        this.options = {};

        if(typeof options === 'object' && !(options instanceof Componse)) {
            this.options = options;
        } else {
            if(arguments && arguments.length > 1 && !Array.isArray(text)) {
                text = Array.prototype.slice.call(arguments, 0);
            }
        } 

        if(Array.isArray(text)) {
            const childs = text.filter(t => this._filter(t));
            for(const child of childs) {
                this.joint(child);
            }
        } else {
            this.text = this._filter(text);
        }
        
        
        // 二次处理回车
        this.formatText = true;
        if(this.options.keepLineBreak) {
            this.keepLineBreak = true;
        }
        this._dealLineBreak();
    }

    initConfig() {
        this.formatText = false;
    }

    joint(child) {
        if(this.mode === 'text') {
            if(this.text !== undefined) {
                this.childJoints = [new Span(this.text)];   
            }
            this.mode = 'joint';
        }
        if(typeof child === 'string') {
            child = new Span(child);
        }
        this.childJoints.push(child);
    }

    format() {
        let formatString = '';
        if(this.mode === 'text') {
            formatString = this.text;
        } else {
            for(const joint of this.childJoints) {
                if(typeof joint === 'string') {
                    formatString += joint;
                } else {
                    formatString += joint.toString();
                }
            }
        }
        return formatString;
    }
}

module.exports = Paragraph;
