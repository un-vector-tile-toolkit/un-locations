const goto = (map, feature) => {
  console.log(feature.properties.label)
  map.flyTo({
    center: feature.geometry.coordinates,
    zoom: 18,
    // speed: 0.6,
    // curve: 1
  })
}

const main = (geojson) => {
  let i = 0
  const list = [0, 1, 9, 10, 12, 14, 15]
  const N = list.length
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'https://casale.vectortiles.xyz:8888/style.json',
    attributionControl: true,
    hash: true
  })
  map.on('moveend', e => {
    goto(map, geojson.features[list[++i % N]])
  })
  goto(map, geojson.features[list[++i % N]])
}

fetch('https://un-vector-tile-toolkit.github.io/un-locations/un-locations.geojson')
  .then(response => response.json())
  .then(geojson => main(geojson))

