// 東京都庁
var totyo = {
    lat: 35.689634,
    lng: 139.692101,
};

var map = null;
var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(totyo.lat, totyo.lng),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scaleControl: true,
};

var markers = new Markers();

var geocoder = new google.maps.Geocoder();
var geoCallback = function (result, status) {
    if (status == google.maps.GeocoderStatus.OK) {
        markers.clear();

        var latLng = result[0].geometry.location;
        markers.add({
            lat: latLng.lat(),
            lng: latLng.lng(),
            title: result[0].formatted_address,
        });
        markers.setMap(map);
    } else {
        alert('エラー！');
    }
}

var searchButtun = null;
window.document.getElementById('search');


window.addEventListener('load', function() {
    var mapdiv = document.getElementById('map_canvas');
    map = new google.maps.Map(mapdiv, mapOptions);

    searchButtun = window.document.getElementById('search');

    searchButtun.addEventListener('click', function () {
        var address = window.document.getElementById('address');
        var getOptions = {
            'address' : address.value,
        };
        geocoder.geocode(getOptions, geoCallback);
    });
    searchButtun.click();
});
