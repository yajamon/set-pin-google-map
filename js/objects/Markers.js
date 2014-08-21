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
    this.each(function(index, marker) {
        marker.setMap(map);
    });
};

Markers.prototype.each = function(callback) {
    if (typeof callback !== "function") {
        throw new TypeError("callback is not function.");
    }
    for (var index = 0; index < this.list.length; index++) {
        callback(index, this.list[index]);
    }
};
