var ReactTools = require('react-tools');

module.exports = {
  process: function(src, filename) {
    return ReactTools.transform(src);
  }
};