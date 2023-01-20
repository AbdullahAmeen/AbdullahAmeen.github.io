

var WorkPlaces = L.layerGroup();

var myIcon = L.icon({
    iconUrl: 'Resume_Map/img/my-icon2.png',
    iconSize: [48, 53],
    iconAnchor: [15, 25],
    popupAnchor: [-3, -36]
});
var myIcon2 = L.icon({
    iconUrl: 'Resume_Map/img/my-icon3.png',
    iconSize: [48, 53],
    iconAnchor: [15, 25],
    popupAnchor: [-3, -36],
});

L.marker([43.09757513681959,-89.3542957305908],{icon:myIcon2}).bindPopup("<h6 class='h1'><b>Math/Science Instructor-Upward Bound Program</b> </h6> <h6 class='h7'> <b>Forward Service Corporation - May 2018 - Sep-2019<br>Madison, Wisconsin, USA</b></h6> <ul class='details'> <li>Developed Upward Bound academic year curriculum for high school students</li><li>Guided students on 5-week summer program to one of Wisconsin's universities</li><li>Conducted ACT prep training in math and science sections</li><li>Tutored 60 students in math/science on regular basis</li></ul>",{
  maxWidth : 460
}).addTo(WorkPlaces),
L.marker([43.10984994346575,-89.3089342117309],{icon:myIcon2}).bindPopup("<h6 class='h1'><b>Case Manager</b> </h6> <h6 class='h7'> <b>Porchlight Inc. - Aug-2016 - Mar-2018 <br>Madison, Wisconsin, USA</b></h6> <ul class='details'> <li>Helped clients obtain stable housing and employment</li><li>Referred clients to available community resources</li><li>Provided daily advocacy and case management to up to 15 clients</li><li>Assisted clients in maintaining stable housing and employment</li></ul>",{
  maxWidth : 460
}).addTo(WorkPlaces),
L.marker([43.070596384405306,-89.3952476978302],{icon:myIcon2}).bindPopup("<h6 class='h1'><b>Substitute Teacher</b> </h6> <h6 class='h7'> <b>Madison Metropolitan School District - Sep-2015 - Feb-2018<br>Madison, Wisconsin, USA</b></h6> <ul class='details'> <li>Provided classroom support to teachers and students</li><li>Facilitated tutorial sessions for students in math and science</li><li>Taught and managed a class of 25- 30 students</li><li>Tutored students in math/science on regular basis</li></ul>",{
  maxWidth : 460
}).addTo(WorkPlaces),
L.marker([43.07241858824732,-89.52495664358139],{icon:myIcon2}).bindPopup("<h6 class='h1'><b>Lead Data Analyst - GIS</b> </h6> <h6 class='h7'> <b>Telephone and Data Systems (TDS) - Oct 2019 - Present<br>Madison, Wisconsin, USA</b></h6> <ul class='details'> <li>Used ArcGIS Pro and ArcGIS Online to study and analyze fiber cable networks in the Midwest and Eastern regions.</li><li>Created SOPs, Web maps, Python tools, Dashboards and trained personnel in GIS, Plat mapping, and route analysis.</li><li>Lead and supervised a diverse team of up to 10 persons in 5 locations (Florida, New York, Ohio, Texas, and Wisconsin).</li></ul>",{
  maxWidth : 460
}).addTo(WorkPlaces);


var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

var streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
    grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
    topograph = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {attribution: mbAttr});

var map = L.map('map', {
  center: [43.0731, -89.4012],
  measureControl:true,
  zoomSnap: 0.25,
  zoomControl:true, maxZoom:45, minZoom:1,
  zoomDelta: 2,
  zoom: 11,
  layers: [WorkPlaces, grayscale]
});

var baseLayers = {
  "Streets": streets,
  "Grayscale": grayscale,
  "Topography": topograph
};

var overlays = {
  "Work-Places": WorkPlaces
};

L.control.layers(baseLayers, overlays,{
  collapsed:true,
}).addTo(map);




// Next map frame starts from here

var WorkPlace = L.layerGroup();

var myIcon2 = L.icon({
    iconUrl: 'Resume_Map/img/my-icon3.png',
    iconSize: [42, 52],
    iconAnchor: [15, 25],
    popupAnchor: [-3, -36],
});
L.marker([34.540782791277174,69.18048977851868],{icon:myIcon}).bindPopup("<h6 class='h1'><b>Field Program Director</b> </h6> <h6 class='h7'> <b>AECOM International Development -<a href='https://www.usaid.gov/afghanistan/fact-sheets/stability-key-areas-sika'><span class='LINKS'> SIKA-East</span></a> - Feb 2012 - Sep-2014</b></h6> <ul class='details'> <li>Planned, budgeted, and coordinated field activities for 21 districts and 6 provinces</li><li>Served as a liaison among project stakeholders and SIKA-East senior management</li><li>Launched/introduced SIKA-East program to relevant institutions and to the public at sub national level</li><li>Provided technical support to program and operations staff</li></ul>",{
  maxWidth : 460
}).addTo(WorkPlace),
L.marker([34.528152921422559,69.1943836212158],{icon:myIcon}).bindPopup("<h6 class='h1'><b>Environmental Health Engineering Manager</b> </h6> <h6 class='h7'> <b> International Rescue Committee - Jan 2007 - June-2009</b></h6> <ul class='details'> <li>Supervised 25 district engineers </li> <li>Trained field engineers in CAD, GIS, GPS and water supply networks design</li><li>Checked technical accuracy of sub-project proposals prior to donor submission</li><li>Contributed to establishment of over 200 Community Development Councils (CDCs)</li><li>Surveyed and designed over 30 community-based water supply network</li></ul>",{
  maxWidth : 460
}).addTo(WorkPlace),
L.marker([34.53786633646289,69.16690707206726],{icon:myIcon}).bindPopup("<h6 class='h1'><b>Regional Manager</b> </h6> <h6 class='h7'> <b> The Asia Foundation - Jan 2010 - Feb 2012</b></h6> <ul class='details'> <li>Budgeted, coordinated, and evaluated the PBGF program for 5 provinces</li> <li>Analyzed and presented performance evaluations of provincial governors offices in ArcMap</li><li>Assisted provincial governors offices with quarterly and annual budgeting</li><li>Monitored budget categories to ensure expenditures were in line with program guidelines</li></ul>",{
  maxWidth : 460
}).addTo(WorkPlace),
L.marker([34.81401251871912,67.82458752393723],{icon:myIcon}).bindPopup("<h6 class='h1'><b>Regional Manager <span class='basedkabul'>(Based in Kabul)</span> - The Asia Foundation</b></h6> <h6 class='PBGF'>Performanced Based Governors Fund (PBGF) <br>Jan 2010 - Feb 2012 </h6> <h6 class='h8'> Regularly traveled to <b>Bamyan</b> province for below purposes:   <ul class='details'> <li>Assisted provincial governor office with monthly, quarterly and annual budgeting</li> <li>Monitored Provincial Governors Fund's (PBGF) expenditure categories</li><li>Coordinated the program with provincial governor and donor counterparts</li><li>Conducted performance evaluation of the PBGF program on quarterly basis</li></ul></h6>",{
  maxWidth : 460
}).addTo(WorkPlace),
L.marker([36.26552168534952,68.01760196685791],{icon:myIcon}).bindPopup("<h6 class='h1'><b>Regional Manager <span class='basedkabul'>(Based in Kabul)</span> - The Asia Foundation</b></h6> <h6 class='PBGF'>Performanced Based Governors Fund (PBGF) <br>Jan 2010 - Feb 2012 </h6> <h6 class='h8'> Regularly traveled to <b>Samangan</b> province for below purposes:   <ul class='details'> <li>Assisted provincial governor office with monthly, quarterly and annual budgeting</li> <li>Monitored Provincial Governors Fund's (PBGF) expenditure categories</li><li>Coordinated the program with provincial governor and donor counterparts</li><li>Conducted performance evaluation of the PBGF program on quarterly basis</li></ul></h6>",{
  maxWidth : 460
}).addTo(WorkPlace),
L.marker([36.71298328509708,67.10573673248291],{icon:myIcon}).bindPopup("<h6 class='h1'><b>Regional Manager <span class='basedkabul'>(Based in Kabul)</span> - The Asia Foundation</b></h6> <h6 class='PBGF'>Performanced Based Governors Fund (PBGF) <br>Jan 2010 - Feb 2012 </h6> <h6 class='h8'> Regularly traveled to <b>Balkh</b> province for below purposes:   <ul class='details'> <li>Assisted provincial governor office with monthly, quarterly and annual budgeting</li> <li>Monitored Provincial Governors Fund's (PBGF) expenditure categories</li><li>Coordinated the program with provincial governor and donor counterparts</li><li>Conducted performance evaluation of the PBGF program on quarterly basis</li></ul></h6>",{
  maxWidth : 460
}).addTo(WorkPlace),
L.marker([36.71666428208896, 68.8677978515625],{icon:myIcon}).bindPopup("<h6 class='h1'><b>Regional Manager <span class='basedkabul'>(Based in Kabul)</span> - The Asia Foundation</b></h6> <h6 class='PBGF'>Performanced Based Governors Fund (PBGF) <br>Jan 2010 - Feb 2012</h6> <h6 class='h8'> Regularly traveled to <b>Kunduz</b> province for below purposes:   <ul class='details'> <li>Assisted provincial governor office with monthly, quarterly and annual budgeting</li> <li>Monitored Provincial Governors Fund's (PBGF) expenditure categories</li><li>Coordinated the program with provincial governor and donor counterparts</li><li>Conducted performance evaluation of the PBGF program on quarterly basis</li></ul></h6>",{
  maxWidth : 460
}).addTo(WorkPlace),
L.marker([36.73525578137582,69.52416658401489],{icon:myIcon}).bindPopup("<h6 class='h1'><b>Regional Manager <span class='basedkabul'>(Based in Kabul)</span> - The Asia Foundation</b></h6> <h6 class='PBGF'>Performanced Based Governors Fund (PBGF) <br>Jan 2010 - Feb 2012 </h6> <h6 class='h8'> Regularly traveled to <b>Takhar</b> province for below purposes:   <ul class='details'> <li>Assisted provincial governor office with monthly, quarterly and annual budgeting</li> <li>Monitored Provincial Governors Fund's (PBGF) expenditure categories</li><li>Coordinated the program with provincial governor and donor counterparts</li><li>Conducted performance evaluation of the PBGF program on quarterly basis</li></ul></h6>",{
  maxWidth : 460
}).addTo(WorkPlace),
L.marker([34.00073124300159,69.01834487915039],{icon:myIcon}).bindPopup("<h6 class='h1'><b>Environmental Health Field Engineering Manager <h6 class='h8'>International Rescue Committee Sep 2005 - June 2007 </h6></b> </h6> <h6 class='h8'> Served as a field engineering manager and then promoted and trasfered to Kabul main office. Regularly traveled to Logar province to do the following:   <ul class='details'> <li> Provide technical support to district engineers</li> <li>Monitor and inspect the construction phases of infrastructure projects</li> <li>Resolve community disputes</li></ul></h6>",{
  maxWidth : 460
}).addTo(WorkPlace),
L.marker([33.33610374104741,69.91782903671263],{icon:myIcon}).bindPopup("<h6 class='h1'><b>Environmental Health Senior Engineer <h6 class='h8'>International Rescue Committee Mar 2005 - Jule 2005 </h6></b> </h6> <h6 class='h8'> Served as a senior engineer first and then promoted and trasfered to Logar province as a field engineering manager. Occasionally traveled to Khost province to do the following:   <ul class='details'> <li> Provide technical support to district engineers</li> <li>Monitor and inspect the construction phases of infrastructure projects</li> <li>Conduct sites survey and sites selection</li> <li>Resolve community disputes</li></ul></h6>",{
  maxWidth : 460
}).addTo(WorkPlace),
L.marker([34.42739015929333,70.45643806457521],{icon:myIcon}).bindPopup("<h6 class='h1'><b>Environmental Health Engineering Manager <span class='basedkabul'>(Based in Kabul)</span>  <h6 class='h8'>International Rescue Committee June 2007 - June 2009</h6></b> </h6> <h6 class='h8'> Occasionally traveled to Nangarhar province to do the following:   <ul class='details'> <li> Provide technical support to district engineers</li> <li>Monitor and inspect the construction phases of infrastructure projects</li> <li>Resolve community disputes</li></ul></h6>",{
  maxWidth : 460
}).addTo(WorkPlace),
L.marker([34.3388950120101, 62.21166810200001],{icon:myIcon}).bindPopup("<h6 class='h1'><b>Environmental Health Engineering Manager <span class='basedkabul'>(Based in Kabul)</span>  <h6 class='h8'>International Rescue Committee June 2007 - June 2009</h6></b> </h6> <h6 class='h8'> Occasionally traveled to Herat province to do the following:   <ul class='details'> <li> Provide technical support to district engineers</li> <li>Monitor and inspect the construction phases of infrastructure projects</li> <li>Resolve community disputes</li></ul></h6>",{
  maxWidth : 460
}).addTo(WorkPlace),
L.marker([34.830026976201005,71.8407583236694],{icon:myIcon}).bindPopup("<h6 class='h1'><b>Water Supply Assistant Engineer</b> </h6> <h6 class='h7'> <b>Danish Committee for Aid to Afghan Refugees (DACAAR) <br> Pakistan  June 2002 - Jan 2004</b></h6> <h6 class='h8'>As an assistant engineer for a water supply program in 10 Afghan refugees camps in Northeastern Pakistan, I was responsible for the following:</h6><ul class='details'> <li>In coordination with camp elders, surveyed and selected sites for bore wells</li><li>Eastablished Water Management Committee (WMC) in each camp</li><li>Supervised staff and the contruction phases of water supply bore wells</li> <li>In coordination with Pakistani officials, solved community disputes</li></ul>",{
  maxWidth : 460
}).addTo(WorkPlace),
L.marker([34.553410745087284,69.1652977466583],{icon:myIcon}).bindPopup("<h6 class='h1'><b>Water Supply Design Engineer</b> </h6> <h6 class='h7'> <b>Danish Committee for Aid to Afghan Refugees (DACAAR) - Jan 2004 - Mar 2005</b></h6> <ul class='details'> <li>Surveyed and designed water supply network using GPS, GIS and MS Excel</li><li>Provided technical support to field teams during project implementation</li><li>Inspected quality of drinking water before survey and inauguration of a project</li> <li>Monitored the construction phases of water supply networks</li></ul>",{
  maxWidth : 460
}).addTo(WorkPlace);

var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

var streetss  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
    grayscalee   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
    topography = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {attribution: mbAttr});

var mapy = L.map('mapy', {
  center: [33.5553, 66.9875],
  measureControl:true,
  zoomSnap: 0.25,
  zoomControl:true, maxZoom:45, minZoom:1,
  zoomDelta: 2,
  zoom: 6,
  layers: [WorkPlace, grayscalee]
});

var baseLayers = {
  "Streets": streetss,
  "Grayscale": grayscalee,
  "Topography": topography
};

var overlays = {
  "Work-Place": WorkPlace
};

L.control.layers(baseLayers, overlays,{
  collapsed:true,
}).addTo(mapy);

L.control.scale().addTo(map);
L.control.scale().addTo(mapy);

// Start adding title for the map.
L.Control.textbox = L.Control.extend({
  onAdd: function(map) {
    
  var text = L.DomUtil.create('div');
  text.id = "info_text";
  text.innerHTML = "<div class='Title'> <h4>Places I Have Worked </h4></div>"
  return text;
  },

  onRemove: function(map) {
    // Nothing to do here
  }
});
L.control.textbox = function(opts) { return new L.Control.textbox(opts);}
L.control.textbox({ position: 'topleft' }).addTo(map);

L.Control.textbox = L.Control.extend({
  onAdd: function(map) {
    
  var text = L.DomUtil.create('div');
  text.id = "info_text";
  text.innerHTML = "<div class='Title'> <h4>Places I Have Worked </h4></div>"
  return text;
  },

  onRemove: function(map) {
    // Nothing to do here
  }
});

L.control.textbox = function(opts) { return new L.Control.textbox(opts);}
L.control.textbox({ position: 'topleft' }).addTo(mapy);


// Adding Popup to Show the Coordinates of a Clicked Point

var popupOne = L.popup();
function onMapOneClick(e) {
    popupOne
    .setLatLng(e.latlng)
    .setContent("Latitude:  " + e.latlng.lat + '<br>' + "Longitude:  " + e.latlng.lng)
    .openOn(map);
};
map.on('click', onMapOneClick);



var popupTwo = L.popup();
function onMapTwoClick(e) {
    popupTwo
    .setLatLng(e.latlng)
    .setContent("Latitude:  " + e.latlng.lat + '<br>' + "Longitude:  " + e.latlng.lng)
    .openOn(mapy);
};
mapy.on('click', onMapTwoClick);
