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
// 新宿中央公園
var park = {
    lat: 35.689773,
    lng: 139.689626,
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

    var marker1 = new google.maps.Marker({
        position: new google.maps.LatLng(station.lat, station.lng),
        map: map,
        title: '新宿駅'
    });
    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(park.lat, park.lng),
        map: map,
        title: '新宿中央公園'
    });
});

