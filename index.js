/**
 * Created by maplex on 2018/3/29.
 */
const Title = require('./lib/Title');
const Componse = require('./lib/Componse');
const H1 = require('./lib/Componse/H1');
const H2 = require('./lib/Componse/H2');
const H3 = require('./lib/Componse/H3');
const H4 = require('./lib/Componse/H4');
const H5 = require('./lib/Componse/H5');
const Bold = require('./lib/Componse/Bold');
const Span = require('./lib/Componse/Span');
const Paragraph = require('./lib/Componse/Paragraph');
const Code = require('./lib/Componse/Code');
const InlineCode = require('./lib/Componse/InlineCode');
const Italic = require('./lib/Componse/Italic');
const Link = require('./lib/Componse/Link');
const Image = require('./lib/Componse/Image');
const UnorderedList = require('./lib/Componse/UnorderedList');
const OrderedList = require('./lib/Componse/OrderedList');
// const Blockquotes = require('./lib/Componse/Blockquotes');
const Table = require('./lib/Componse/Table');

module.exports = {
    Title,
    Componse,
    H1,
    H2,
    H3,
    H4,
    H5,
    Bold,
    Span,
    Paragraph,
    Code,
    InlineCode,
    Italic,
    Link,
    Image,
    UnorderedList,
    OrderedList,
    Table,
    P: Paragraph
};