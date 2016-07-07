/**
 * Imports
 */

const test = require('tape')
const browserify = require('browserify')

var vm = require('vm');
var fs = require('fs');
var path = require('path');

/**
 * Tests
 */

test('should work', (t) => {
  t.plan(1);

  var b = browserify();
  b.add(__dirname + '/files/main.js');
  b.transform(path.dirname(__dirname));

  b.bundle(function (err, src) {
      if (err) t.fail(err);
      vm.runInNewContext(src, { console: { log: log } });
  });

  function log (msg) {
      t.equal('/assets/robot-8808695745776908300.html', msg);
  }
})
