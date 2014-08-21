var Markers = function Markers () {
    this.list = [];
};

Markers.prototype.add = function(options) {
    if (!options.lat && options.lat !== 0) {
        throw new TypeError('latの値が不正です');
    }
    if (!options.lng && options.lng !== 0) {
        throw new TypeError('lngの値が不正です');
    }

    var position = new google.maps.LatLng(options.lat, options.lng);

    this.list.push(new google.maps.Marker({
        position : position,
        title : options.title,
    }));
};

Markers.prototype.setMap = function(map) {
    for (var index = 0; index < this.list.length; index++) {
        this.list[index].setMap(map);
    }
};
