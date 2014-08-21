google.maps.event.addDomListener(window, 'load', function() {
    var mapdiv = document.getElementById('map_canvas');
    var myOptions = {
        zoom: 15,
        center: new google.maps.LatLng(35.689634, 139.692101),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scaleControl: true,
    };
    var map = new google.maps.Map(mapdiv, myOptions);
});
