import $ from 'jquery'

class Services {
  static getCities(success) {
    $.ajax("http://localhost:3000/cities").done(function (data) {
      success(data);
    });
  }
}

module.exports = Services;