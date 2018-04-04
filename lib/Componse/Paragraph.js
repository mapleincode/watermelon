/**
 * Created by maplex on 2018/3/29.
 */
'use strict';

const Componse = require('../Componse');
const Span = require('./Span');

class Paragraph extends Componse {
    constructor(text) {
        super();
        this.mode = 'text';
        this.childJoints = [];

        if(Array.isArray(text)) {
            const childs = text.filter(t => this._filter(t));
            for(const child of childs) {
                this.joint(child);
            }
        } else {
            this.text = this._filter(text);
        }

        if(this.initConfig) {
            this.initConfig();
        }
        
        // 处理回车
        this._dealLineBreak();
    }

    _dealLineBreak() {
        if(!this.formatText) {
            return;
        }
        let newText = '';
        let newLine = false;
        let textStart = false;
        for(let i = 0; i < this.text.length; i ++) {
            const c = this.text[i];
            if(c === '\r') {
                continue;
            }
            // 消除回车
            if(c === '\n') {
                if(!newLine) {
                    newLine = true;
                    continue;
                } else {
                    continue;
                }
            }
            if(newLine) {
                newLine = false;
                if(this.KeepLineBreak) {
                    newText += '\n\n';
                } else {
                    newText += ' ';
                }
            }
            newText = newText + c;
        }
        this.text = newText;
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
