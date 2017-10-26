function initMap() {
  var fac = {lat: 51.529479, lng: -0.042180};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: fac
  });
  var marker = new google.maps.Marker({
    position: fac,
    map: map
  });
}
