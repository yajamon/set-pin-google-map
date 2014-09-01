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

    var marker = new google.maps.Marker({
        position : position,
        title : options.title,
    });

    this.list.push(marker);
};

Markers.prototype.setMap = function(map) {
    this.each(function(index, marker) {
        marker.setMap(map);

        var infoWindow = new google.maps.InfoWindow({
            content : marker.title,
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(map, marker);
        });
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

Markers.prototype.clear = function() {
    this.each(function (index, marker) {
        marker.setMap(null);
        this.list = [];
    });
};
