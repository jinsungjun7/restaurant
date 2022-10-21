const loadGoogleMapsApi = require('load-google-maps-api');

class Map {
  
    static loadGoogleMapsApi() {
      return loadGoogleMapsApi({ key: "AIzaSyCxoUHPeqFwtjcr6LeKCWGBFZzNbJazqew" });
    }
    static createMap(googleMaps, mapElement) {
      const map = new googleMaps.Map(mapElement, {
        center: { lat: 37.552199, lng: 126.987981 },
        zoom: 14,
      });
      const marker = new google.maps.Marker({
        position: { lat: 37.552199, lng: 126.987981 },
        map: map,
      });
      return [map, marker];
    }
}

export { Map };
  