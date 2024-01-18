var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


navigator.geolocation.watchPosition(success,error);

function Ubicacion(lat,lng,accuracy){
    this.lat = lat;
    this.lng = lng;
    this.accuracy = accuracy;
}

let marker,circle,zoomed;

function success(pos){
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    const accuracy = pos.coords.accuracy;


    if(marker){
        map.removeLayer(marker);
        map.removeLayer(circle);
    }

    marker = L.marker([lat,lng]).addTo(map);
    circle = L.circle([lat,lng],{radius: accuracy}).addTo(map);

    if(!zoomed){
        zoomed = map.fitBounds(circle.getBounds());
    }

    let objUbi = new Ubicacion(lat,lng,accuracy);
    let size = localStorage.length;
    
    switch (size) {
        case 0:
            localStorage.setItem(0, JSON.stringify(objUbi));
            break;
        case 1:
            localStorage.setItem(1, JSON.stringify(objUbi));
            break;
        case 2:
            localStorage.setItem(2, JSON.stringify(objUbi));
            break;
        case 3:
            localStorage.setItem(3, JSON.stringify(objUbi));
            break;
        case 4:
            localStorage.setItem(4, JSON.stringify(objUbi));
            break;
        default:
            for (let index = 0; index < size; index++) {

                marker = L.marker([JSON.parse(localStorage.getItem(index)).lat,JSON.parse(localStorage.getItem(index)).lng]).addTo(map);
                circle = L.circle([JSON.parse(localStorage.getItem(index)).lat,JSON.parse(localStorage.getItem(index)).lng],{radius: JSON.parse(localStorage.getItem(0)).accuracy}).addTo(map);
            }
            break;
    }
    map.setView([lat,lng]);
}
function error(err){
    if(err.code === 1){
        alert("Permitir acceso a ubucacion")
    }
}

