export const APP_CONFIG = {
  weatherApiId : '590cfaa5bc83f1462b734446dc128210',
  gaApiKey : 'AIzaSyCyci_Na9i4pvpYKQ21NPG3yqbCwz3TwWs',
  position : {
      lat: +window.localStorage.APP_CONFIG_lat || 51.51,
      lng: +window.localStorage.APP_CONFIG_lng || -0.13
    },
    city: window.localStorage.APP_CONFIG_city || "London"
};