# hubotfy

Get an ascii type [hubot](https://github.com/github/hubot).

```
                     ________________________
                    /                        \
                    |                        |
           _____    |      Hello, there?     |
  //\\    /_____\   \                        /
  \\//+  |[^_/\_]|   /-----------------------
  |   | _|___@@__|__
  +===+/  ///     \_\
   | |_\ /// HUBOT/\\
   |___/\//      /  \\
         \      /   +---+
          \____/    |   |
           | //|    +===+
            \//      |xx|

```

## How to get one ??

```javascript
var hubotfy = require('hubotfy');
var opt = {
  message  : 'Hello, there?',
  template : 'default',
  color    : true
}

console.log( hubotfy(opt) );
```
