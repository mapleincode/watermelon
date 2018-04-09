const Componse = require('../Componse');

class Blockquotes extends Componse {
    constructor(text) {
        super(text);
        this.list = [];
        this.formatText();
    }

    initConfig() {
        // 初始化的时候不按照默认的进行处理
        this.needFormatText = false;
    }

    formatText() {
        // 处理特殊字符
        this._dealSpecialChar();
        // 按照回车处理
        this.list = this.text.split('\n'); 
    }

    format() {
        return this.list.map(l => `> ${l}`).join('\n');
    }
}

module.exports = Blockquotes;
