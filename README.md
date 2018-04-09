markdown code generate.

## Install

```sh
npm install wm-md --save
```

## Usage

```js
const { Title, H1 } = require('wm-md');

const h1 = new H1('Hello World');
const title = new Title(h1);
console.log(title.toString()); // # Hello World\n\n

title.push('this is paragraph');
console.log(title.toString()); // # Hello World\n\nthis is paragraph\n\n
```

## Componse

* H1

```js
const h1 = new H1('H1');
h1.toString(); // # H1\n\n
```

* H2

```js
const h2 = new H2('H2');
h2.toString(); // ## H2\n\n
```

* H3

```js
const h3 = new H3('H3');
h3.toString(); // ### H3\n\n
```

* H4

```js
const h4 = new H4('H4');
h4.toString(); // #### H4\n\n
```

* H5

```js
const h4 = new H5('H5');
h5.toString(); // ##### H5\n\n
```

* Blockquotes

```js
// single-line
const block1 = new Blockquotes('one');
block1.toString(); // > one\n\n

// mult-line
const block2 = new Blockquotes('one\ntwo');
block1.toString(); // > one\n> two\n\n
```

* Bold 

```js
const bold = new Bold('bold');
bold.toString(); // **bold**
```

* Code

```js
const codeStr = 'console.log(\'hello world\')';
const codeType = 'js';
const code = new Code(codeStr, codeType);
code.toString();
// ```js
// console.log('hello world');
// ```
```

* InlineCode

```js
const inline = new InlineCode('console.log(\'Hello World\')');
inline.toString(); // `console.log('Hello World')`
```

* Italic

```js
const italic = new Italic('Italic');
italic.toString(); // *Italic*
```

* Link

```js
const url = 'http://www.google.com';
const site = 'Google';

// with name
const link1 = new Link(url, site);
link1.toString(); // [Google](http://www.google.com)

// without name
const link2 = new Link(url);
link1.toString(); // [](http://www.google.com)
```

* OrderedList

```js
const list = ['one', 'two', 'three'];
const order = new OrderedList(list);
order.toString();
// 1. one
// 2. two
// 3. three
//
//
```

* UnorderedList

```js
const list = ['one', 'two', 'three'];
const order = new UnorderedList(list);
order.toString();
// * one
// * two
// * three
//
//
```



* Paragraph

```js
const p1 = new P('paragraph');
p1.toString(); // paragraph\n\n

const p2 = new P('one\ntwo');
p2.toString(); // one two\n\n

const p3 = new P(['one', 'two']);
p3.toString(); // onetwo\n\n

const p4 = new P(['one', new Bold('two')]);
p4.toString(); // one**two**\n\n

const p5 = new P('one');
p5.joint('two');
p5.joint(new Bold('three'));
p5.toString(); // onetwo**three**\n\n
```

* Span

```js
const span = new Span('span');
span.toString() === 'span'; //true
```

* Table

```js
const list = [
    { a:1, b:2, c:3 },
    { a:4, b:5, d:6 }
];
```

```js
const table = new Table(list);
table.toString();
```

| a    | b    | c    |
| ---- | ---- | ---- |
| 1    | 2    | 3    |
| 4    | 5    |      |

```js
const config = {
    a: 'nameA',
    b: 'nameB',
    c: 'nameC',
    d: 'nameD',
    e: 'nameE'
};
const table = new Table(list, config);
table.toString();
```

| nameA | nameB | nameC | nameD | nameE |
| ----- | ----- | ----- | ----- | ----- |
| 1     | 2     | 3     |       |       |
| 4     | 5     |       | 6     |       |

```js
const config = [
    { c: 'nameC' },
    { a: 'nameA' },
    { b: 'nameB' }
];
const table = new Table(list, config);
table.toString();
```

| nameC | nameA | nameB |
| ----- | ----- | ----- |
| 3     | 1     | 2     |
|       | 4     | 5     |

```js
const list = [
    { a: 1, b: 2, c: 3 },
    { a: 4, b: 5, d: 6 }
];
const config = ['c', 'b', 'a'];
const table = new Table(list, config);
table.toString();
```

| c    | b    | a    |
| ---- | ---- | ---- |
| 3    | 2    | 1    |
|      | 5    | 4    |

```js
const list = [
    { a: new Bold(1), b: 2, c: 3 },
    { a: 4, b: 5, d: 6 }
];
const table = new Table(list);
table.toString();
```

| a     | b    | c    |
| ----- | ---- | ---- |
| **1** | 2    | 3    |
| 4     | 5    |      |
