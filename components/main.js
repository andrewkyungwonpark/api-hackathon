$.ajax({
  'url': "https://www.balldontlie.io/api/v1/teams",
  success: data => console.log(data),
})

$.ajax({
  'url': "http://api.geonames.org/postalCodeLookupJSON?&postalcode=90703&country=US&username=andrewkpark",
  success: data => console.log(data),
})
