/**
 * Created by maplex on 2018/3/29.
 */
'use strict';

class Componse {
    constructor(text) {
        this.singleParagraph = true; // 是否为单独一个段落
        this.keepLineBreak = false; // 是否保留回车
        this.formatText = true; // 是否格式化段落

        this.text = this._filter(text);

        // 初始化某些神奇的 Config
        if(this.initConfig) {
            this.initConfig();
        }
        
        // 处理回车
        this._dealLineBreak();
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
