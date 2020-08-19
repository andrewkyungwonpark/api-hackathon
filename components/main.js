//DOM Query selectors
let locationForm = document.querySelector('form');
let headerBlurb = document.querySelector('.header-blurb');
let whereAreYou = document.querySelector('.where-are-you')
let zipCode = document.getElementById('zipCodeInput');
let city = document.getElementById('cityInput')




$.ajax({
  'url': "https://www.balldontlie.io/api/v1/teams",
  success: data => console.log(data),
})


//Zip Code Ajax call that will auto-populate city when user inputs zip code
const locationData = [];

zipCode.addEventListener('input', function (event) {
  console.log(event.target.value)
  if (event.target.value.length === 5) {
    $.ajax({
      url: "http://api.geonames.org/postalCodeLookupJSON?&postalcode=" + event.target.value + "&country=US&username=andrewkpark",
      success: data => {
      locationData.push(data);
      city.value = locationData[0].postalcodes[0].placeName
      }
    })
  }
})
