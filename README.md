# hubotfy

Print hubot on your terminal.

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

## How to use ??

```
var hubotfy = require('hubotfy');
var opt = {
  msg   : 'Hello, there?',
  tpl   : 'default',
  color : true
}

console.log( hubotfy(opt) );
```
