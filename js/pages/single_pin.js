// 東京都庁
var totyo = {
    lat: 35.689634,
    lng: 139.692101,
};
// JR新宿駅
var station = {
    lat: 35.690891,
    lng: 139.700229,
};

google.maps.event.addDomListener(window, 'load', function() {
    var mapdiv = document.getElementById('map_canvas');
    var myOptions = {
        zoom: 15,
        center: new google.maps.LatLng(totyo.lat, totyo.lng),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scaleControl: true,
    };
    var map = new google.maps.Map(mapdiv, myOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(station.lat, station.lng),
        map: map,
        title: '新宿駅'
    });
});

