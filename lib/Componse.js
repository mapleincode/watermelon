/**
 * Created by maplex on 2018/3/29.
 */
'use strict';

class Componse {
    constructor(text) {
        this.singleParagraph = true; // 是否为单独一个段落
        this.keepLineBreak = false; // 是否保留回车
        this.needFormatText = true; // 是否格式化段落

        this.text = this._filter(text);

        // 初始化某些神奇的 Config
        if(this.initConfig) {
            this.initConfig();
        }
        
        // 处理回车
        this.formatText();
    }

    _filter(text) {
        if(text === null || text === undefined) {
            text = '';
        }
        if(typeof text === 'object' && text instanceof Componse) {
            return text;
        }
        return text.toString();
    }

    formatText() {
        if(!this.needFormatText) {
            return;
        }
        // deal line-break
        this._dealLineBreak();
        // deal special char
        this._dealSpecialChar();
    }
    /**
     * deal text line break
     */
    _dealLineBreak() {
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
                if(this.keepLineBreak) {
                    newText += '\n\n';
                } else {
                    newText += ' ';
                }
            }
            newText = newText + c;
        }
        this.text = newText;
    }

    /**
     * deal special characters
     */
    _dealSpecialChar() {
        let newText = '';
        for(let i = 0; i < this.text.length; i ++) {
            const character = this.text[i];
            if(character === '`') {
                newText +='\\`';
            } else if(character === '*') {
                newText += '\\*';
            } else {
                newText += character;
            }
        }
        this.text = newText;
    }

    format(text) {
        text = text || this.text;
        return text.toString();
    }

    toString(options) {
        options = options || {};
        const formatString = this.format();

        const tabSize = options.tabSize;
        if(!isNaN(parseInt(tabSize))) {
            const tabString = ' '.repeat(parseInt(tabSize));
            formatString = formatString.split('\n').map(s => 
            `${tabString}${s}`).join('\n');
        }

        if(this.singleParagraph) {
            return formatString + '\n\n';
        }
        return formatString;
    }
}

module.exports = Componse;
