var map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 23.815983,
      lng: 90.366241
    },
    zoom: 8
  });
}
