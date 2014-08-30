// 東京都庁
var totyo = {
    lat: 35.689634,
    lng: 139.692101,
};

var markers = new Markers();

markers.add({
    title: 'JR新宿駅',
    lat: 35.690891,
    lng: 139.700229,
});
markers.add({
    title: '新宿中央公園',
    lat: 35.689773,
    lng: 139.689626,
});

var infoWindow1 = new google.maps.InfoWindow({
    content: 'JR新宿駅',
});
var infoWindow2 = new google.maps.InfoWindow({
    content: '新宿中央公園',
});

window.addEventListener('load', function() {
    var mapdiv = document.getElementById('map_canvas');
    var myOptions = {
        zoom: 15,
        center: new google.maps.LatLng(totyo.lat, totyo.lng),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scaleControl: true,
    };
    var map = new google.maps.Map(mapdiv, myOptions);

    markers.setMap(map);
    infoWindow1.open(map, markers.list[0]);
    infoWindow2.open(map, markers.list[1]);
});

