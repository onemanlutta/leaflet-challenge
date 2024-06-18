// Initialize the map
var myMap = L.map("map").setView([37.7749, -122.4194], 5);

// Add a tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
}).addTo(myMap);

// Function to determine marker size based on magnitude
function markerSize(magnitude) {
  return magnitude * 4;
}

// Function to determine marker color based on depth
function getColor(depth) {
  return depth > 90 ? '#FF6347' :
         depth > 70 ? '#FFA500' :
         depth > 50 ? '#FFD700' :
         depth > 30 ? '#FFFF00' :
         depth > 10 ? '#ADFF2F' :
                      '#00FF00';
}

// Fetch the data and create markers
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  L.geoJSON(data, {
    pointToLayer: function(feature, latlng) {
      return L.circleMarker(latlng, {
        radius: markerSize(feature.properties.mag),
        fillColor: getColor(feature.geometry.coordinates[2]),
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      });
    },
    onEachFeature: function(feature, layer) {
      layer.bindPopup(
        "<h3>" + feature.properties.place + "</h3>" +
        "<hr><p>" + new Date(feature.properties.time) + "</p>" +
        "<hr><p>Magnitude: " + feature.properties.mag + "</p>" +
        "<hr><p>Depth: " + feature.geometry.coordinates[2] + " km</p>"
      );
    }
  }).addTo(myMap);
});

// Create legend for earthquake depth
var legend = L.control({ position: "bottomright" });

legend.onAdd = function(map) {
  var div = L.DomUtil.create("div", "legend");
  var labels = ['-10 - 10 km', '10 - 30 km', '30 - 50 km', '50 - 70 km', '70 - 90 km', '90+ km'];
  var colors = ["#00FF00", "#ADFF2F", "#FFFF00", "#FFD700", "#FFA500", "#FF6347"];

  // Add legend title
  var legendTitle = "<h4>Depth Legend</h4>";
  div.innerHTML = legendTitle;

  // Create the legend table
  var tableHtml = '<table>';
  for (var i = 0; i < labels.length; i++) {
    tableHtml += '<tr><td style="background-color:' + colors[i] + '; width: 20px;"></td><td>' + labels[i] + '</td></tr>';
  }
  tableHtml += '</table>';
  div.innerHTML += tableHtml;

  // Style the legend container
  div.style.backgroundColor = "#fff";
  div.style.padding = "10px";
  div.style.border = "1px solid #ccc";
  div.style.textAlign = "left";
  div.style.width = "100px"; 

  return div;
};

// Add legend to map
legend.addTo(myMap);
