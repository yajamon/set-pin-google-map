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

var geocoder = new google.maps.Geocoder();
var getOptions = {
    'address' : '新宿駅',
};

var markers = new Markers();

window.addEventListener('load', function() {
    var mapdiv = document.getElementById('map_canvas');
    map = new google.maps.Map(mapdiv, mapOptions);

    var callback = function (result, status) {
        if (status == google.maps.GeocoderStatus.OK) {
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

    geocoder.geocode(getOptions, callback);
});
