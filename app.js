const goto = (map, feature) => {
  map.flyTo({
    center: feature.geometry.coordinates,
    zoom: 18,
    speed: 0.2,
    curve: 1
  })
}

const main = (geojson) => {
  let i = 0
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'https://hfu.github.io/macrostyle/style.json',
    attributionControl: true,
    hash: true
  })
  map.on('moveend', e => {
    console.log(e)
    goto(map, geojson.features[i++ % geojson.features.length])
  })
  goto(map, geojson.features[i])
}

fetch('https://hfu.github.io/un-locations/un-locations.geojson')
  .then(response => response.json())
  .then(geojson => main(geojson))

