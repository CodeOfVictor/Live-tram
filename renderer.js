document.addEventListener("DOMContentLoaded", function() {
    var map = L.map('map').setView([41.6561, -0.8785], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    fetch('tramRoute.geojson')
        .then(response => response.json())
        .then(data => {
            L.geoJSON(data).addTo(map);
        });

    fetch('tramStops.geojson')
        .then(response => response.json())
        .then(data => {
            L.geoJSON(data, {
                pointToLayer: function (feature, latlng) {
                    let markerOptions = {
                        icon: L.icon({
                            iconUrl: './img/marker-icon.png',
                            iconSize: [25, 41],
                            iconAnchor: [12, 41],
                            popupAnchor: [1, -34]
                        })
                    };

                    if (feature.properties && feature.properties.destinos) {
                        let arrivalTimes = feature.properties.destinos;
                        let nearestArrival = Math.min(...arrivalTimes.map(d => d.minutos));

                        console.log(`Stop: ${feature.properties.title}, Nearest Arrival: ${nearestArrival} minutes`);

                        if (nearestArrival < 2) {
                            markerOptions.icon = L.icon({
                                iconUrl: './img/marker-icon-green.png',
                                iconSize: [25, 41],
                                iconAnchor: [12, 41],
                                popupAnchor: [1, -34]
                            });
                        }
                    }

                    return L.marker(latlng, markerOptions);
                },
                onEachFeature: function (feature, layer) {
                    if (feature.properties && feature.properties.title) {
                        let popupContent = `<strong>${feature.properties.title}</strong>`;
                        
                        if (feature.properties.destinos) {
                            feature.properties.destinos.forEach(destino => {
                                popupContent += `<br/>${destino.minutos} minutes`;
                            });
                        }

                        layer.bindPopup(popupContent);
                    }
                }
            }).addTo(map);
        });
});
