/**
 * Modules
 */

const {url} = require('cloud-fs')
const staticModule = require('static-module')
const {dirname} = require('path')

/**
 * Expose
 */

module.exports = brCloudFS

/**
 * br-cloud-fs
 */

function brCloudFS (file) {
  var vars = {
      __filename: file,
      __dirname: dirname(file),
  }
  return staticModule({
    'cloud-fs': {
      url: getUrl
    }
  })

  function getUrl (f) {
    return `'${url(f, {filename: file})}'`
  }
}
