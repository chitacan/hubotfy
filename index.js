var C = require('chalk')
  , E = require('os').EOL;

exports = module.exports = hubotfy;

var COLUMN = 25;
var ROW    = 3;

/**
 * @param opt Option make hubot on your terminal.
 * @param opt.msg The message to say.
 * @param opt.tpl The hubot template.
 * @param opt.color Color or black?.
 */
function hubotfy(opt) {
  opt = opt || {};
  var msg = opt.msg   || 'Self-replication process complete... Good luck with that.';
  var tpl = opt.tpl   || 'default';
  var clr = opt.color || true;

  msg = new Message(msg).lsplit().addSpace().lines;
  var c = clr ? C.cyan   : noColor;
  var y = clr ? C.yellow : noColor;

  switch(tpl) {
  case 'default':
    return basic(msg, c, y);
  case 'drill':
    return withDrill(msg, c, y);
  case 'receipt':
  case 'paper':
    return withReceipt(msg, c, y);
  }
}

function noColor(s) { return s }

var basic = function(msg, c, y) {
  var result = 
'                     ________________________  '                 + E +
'                    /                        \\'                 + E +
'                    |'+msg[0]+'|'                                + E +
'           '+y('_____')+'    |'+msg[1]+'|'                       + E +
'  '+c('//\\\\')+y('    /')+c('_____')+y('\\')+'   \\'+msg[2]+'/ '+ E +
'  '+c('\\\\//+')+y('  |')+c('[^_/\\_]')+y('|')+'   /-----------------------  ' + E +
'  '+y('|   | _|___')+'@@'+y('__|__')+'                      '    + E +
'  '+y('+===+/  ///     ')+c('\\_\\')+'                        '  + E +
'   '+c('| |_')+y('\\ /// HUBOT/')+c('\\\\')+'                  ' + E +
'   '+c('|___/')+y('\\//      /')+c('  \\\\')+'                 ' + E +
'         '+y('\\      /   +---+')+'                          '   + E +
'          '+y('\\____/    |   |')+'                          '   + E +
'           '+c('| //|')+'    '+y('+===+')+'                 '    + E +
'            '+c('\\//')+'      |xx|                          '   + E;

  return result;
};

var withDrill = function(msg, c, y) {
  var result = 
'                     ________________________  '                 + E +
'                    /                        \\'                 + E +
' '+c('  //\\')+'              |'+msg[0]+'|'                      + E +
' '+c(' ////\\  ')+'  '+y('_____')+'    |'+msg[1]+'|'             + E +
' '+c('//////\\  ')+y('/')+c('_____')+y('\\')+'   \\'+msg[2]+'/ ' + E +
' '+c('=======')+y(' |')+c('[^_/\\_]')+y('|')+'   /-----------------------  ' + E +
'  '+y('|   | _|___')+'@@'+y('__|__')+'                      '    + E +
'  '+y('+===+/  ///     ')+c('\\_\\')+'                        '  + E +
'   '+c('| |_')+y('\\ /// HUBOT/')+c('\\\\')+'                  ' + E +
'   '+c('|___/')+y('\\//      /')+c('  \\\\')+'                 ' + E +
'         '+y('\\      /   +---+')+'                          '   + E +
'          '+y('\\____/    |   |')+'                          '   + E +
'           '+c('| //|')+'    '+y('+===+')+'                 '    + E +
'            '+c('\\//')+'      |xx|                          '   + E;

  return result;
};

var withReceipt = function(msg, c, y) {
  var result =
'                     ________________________  '                     + E +
' _____              /                        \\ '                    + E +
' \\    \\             |'+msg[0]+'|'                                  + E +
' |    |    '+y('_____')+'    |'+msg[1]+'|'                           + E +
' |__'+c('\\\\')+'|   '+y('/')+c('_____')+y('\\')+'   \\'+msg[2]+'/ ' + E +
'   '+c('|//')+y('+  |')+c('[^_/\\_]')+y('|')+'   /-----------------------  '  + E +
'  '+y('|   | _|___')+'@@'+y('__|__')+'                      '        + E +
'  '+y('+===+/  ///     ')+c('\\_\\')+'                        '      + E +
'   '+c('| |_')+y('\\ /// HUBOT/')+c('\\\\')+'                  '     + E +
'   '+c('|___/')+y('\\//      /')+c('  \\\\')+'                 '     + E +
'         '+y('\\      /   +---+')+'                          '       + E +
'          '+y('\\____/    |   |')+'                          '       + E +
'           '+c('| //|')+'    '+y('+===+')+'                 '        + E +
'            '+c('\\//')+'      |xx|                          '       + E;

  return result;
};

function Message(msg) {
  this.msg   = msg;
  this.lines = [];
}

Message.prototype.lsplit = function() {
  this.lines = this.msg
  .trim()
  .split(' ')
  .reduce(function(prev, cur) {
    var p = prev.pop() || '';
    return (p.length + cur.length + 1 >= COLUMN) ?
      prev.concat(p).concat(cur) :
      prev.concat(p + ' ' + cur);
  }, [])
  .map(function(l) {
    space = COLUMN - l.length;
    left  = parseInt(space / 2) + (space % 2)
    right = parseInt(space / 2) + 1
    return new Array(left).join(' ') + l + new Array(right).join(' ');
  });
  return this;
}

Message.prototype.addSpace = function() {
  var space = new Array(COLUMN).join(' ');
  switch (this.lines.length) {
    case 0:
      return [space, space, space];
    case 1:
      this.lines.unshift(space);
      this.lines.push   (space);
      break;
    case 2:
      this.lines.push   (space);
      break;
  }
  return this;
}
