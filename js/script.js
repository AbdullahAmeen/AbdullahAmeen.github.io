var map = L.map('map').setView([43.0982, -89.3811], 11);

var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    minZoom: 1,
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'],
    attribution: '<a href="https://www.google.com/maps" target=_blank> Google Sattellite Map</a>' }).addTo(map);