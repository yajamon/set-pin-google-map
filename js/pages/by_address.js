// 東京都庁
var totyo = {
    lat: 35.689634,
    lng: 139.692101,
};

var geocoder = new google.maps.Geocoder();
var getOptions = {
    'address' : '',
};

window.addEventListener('load', function() {
    var mapdiv = document.getElementById('map_canvas');
    var myOptions = {
        zoom: 15,
        center: new google.maps.LatLng(totyo.lat, totyo.lng),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scaleControl: true,
    };
    var map = new google.maps.Map(mapdiv, myOptions);

    var callback = function (result, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            // code
        } else {
            alert('エラー！');
        }
    }

    geocoder.geocode(getOptions, callback);
});
