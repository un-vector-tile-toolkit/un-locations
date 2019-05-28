const goto = (map, feature) => {
  map.flyTo({
    center: feature.geometry.coordinates,
    zoom: 17,
    speed: 0.6,
    curve: 1
  })
}

const main = (geojson) => {
  let i = 0
  const N = geojson.features.length
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'https://hfu.github.io/macrostyle/style.json',
    attributionControl: true,
    hash: true
  })
  map.on('moveend', e => {
    console.log(e)
    i++
    while (i % N === 2 || i % N === 3) i++
    goto(map, geojson.features[i % N])
  })
  goto(map, geojson.features[i])
}

fetch('https://hfu.github.io/un-locations/un-locations.geojson')
  .then(response => response.json())
  .then(geojson => main(geojson))

