const main = (geojson) => {
  console.log(geojson)
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'https://hfu.github.io/macrostyle/style.json',
    attributionControl: true,
    hash: true
  })
}

fetch('https://hfu.github.io/un-locations/un-locations.geojson')
  .then(response => response.json())
  .then(geojson => main(geojson))

