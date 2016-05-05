function initialize() {
    var mapOptions = {
        zoom: 3,
        center: new google.maps.LatLng(36.719451, -73.243314),
        scrollwheel: false
    }

    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    born = 'img/born.png';
    augieCurrent = 'img/home.png';
    agustinHS = 'img/agustin_hs_graduation.png';
    agustinCollege = 'img/college_graduation.png';
    agustinMasters = 'inmg/masters_university.png';
    home = 'img/home.png';


    augie_bornLocation = new google.maps.LatLng(40.118175, -88.248957);
    northDakota = new google.maps.LatLng(48.416455, -101.359994);
    northCarolina = new google.maps.LatLng(35.171187, -79.014607);
    germany = new google.maps.LatLng(49.440027, 7.597741);
    alaska = new google.maps.LatLng(61.306483, -149.543617);
    bowlingGreen = new google.maps.LatLng(41.375867, -83.625730);
    columbus = new google.maps.LatLng(39.963388, -82.990586);
    osu = new google.maps.LatLng(40.014833, -83.031137);

    augie_CurrentLocation = new google.maps.Marker({
        position: columbus,
        map: map,
        icon: augieCurrent
    });

    augie_bornMarker = new google.maps.Marker({
        position: augie_bornLocation,
        map: map,
        icon: born,
        lablecContent: 'Champain, IL'
    });

    augie_ND = new google.maps.Marker({
        position: northDakota,
        icon: home,
        draggable: false,
        map: map
    });

    augie_NC = new google.maps.Marker({
        position: northCarolina,
        icon: home,
        draggable: false,
        map: map
    });

    augie_Germany = new google.maps.Marker({
        position: germany,
        icon: home,
        draggable: false,
        map: map
    });

    augie_Alaska = new google.maps.Marker({
        position: alaska,
        icon: agustinHS,
        draggable: false,
        map: map
    });

    augie_BowlingGreen = new google.maps.Marker({
        position: bowlingGreen,
        icon: agustinCollege,
        draggable: false,
        map: map
    });

    augie_Osu = new google.maps.Marker({
        position: osu,
        icon: agustinMasters,
        draggable: false,
        map: map
    });

    augie_Columbus = new google.maps.Marker({
        position: columbus,
        icon: home,
        draggable: false,
        map: map
    });
}

function removeLine()
{
    augie_drawLine.setMap(null);
}


function drawAgustin()
{  

    travel = [
       new google.maps.LatLng(40.118175, -88.248957),
       new google.maps.LatLng(48.416455, -101.359994),
       new google.maps.LatLng(35.171187, -79.014607),
       new google.maps.LatLng(49.440027, 7.597741),
       new google.maps.LatLng(42.217306, -83.251383),
       new google.maps.LatLng(61.306483, -149.543617),
       new google.maps.LatLng(41.375867, -83.625730),
       new google.maps.LatLng(39.963388, -82.990586)

    ];

    augie_drawLine = new google.maps.Polyline({
        path: travel,
        geodesic: true,
        strokeColor: '#190994',
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });
    augie_drawLine.setMap(map);
}

function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
        'callback=initialize';
    document.body.appendChild(script);
}

window.onload = loadScript;
