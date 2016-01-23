import $ from 'jquery'

class Services {
    static getCities(success) {
        $.ajax("http://localhost:3000/cities").done(function (data) {
            success(data);
        });
    }

    static getTemperature(cityId, success) {
        $.ajax("http://localhost:3000/temperature/" + cityId).done(function (data) {
            success(data);
        });
    }
}

module.exports = Services;