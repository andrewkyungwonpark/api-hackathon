var postalcodes;

function getLocation(jData) {
  if (jData == null) {
    return;
  }
  postalcodes = jData.postalcodes;
  if (postalcodes.length > 1) {
    document.getElementById('suggestBoxElement').style.visibility = 'visible';
    var suggestBoxHTML = '';
    for (i = 0; i < jData.postalcodes.length; i++) {
      // for every postalcode record we create a html div
      // each div gets an id using the array index for later retrieval
      // define mouse event handlers to highlight places on mouseover
      // and to select a place on click
      // all events receive the postalcode array index as input parameter
      suggestBoxHTML += "<div class='suggestions' id=pcId" + i + " onmousedown='suggestBoxMouseDown(" + i + ")' onmouseover='suggestBoxMouseOver(" + i + ")' onmouseout='suggestBoxMouseOut(" + i + ")'> " + postalcodes[i].countryCode + ' ' + postalcodes[i].postalcode + '    ' + postalcodes[i].placeName + '</div>';
    }
    document.getElementById('suggestBoxElement').innerHTML = suggestBoxHTML;
  } else {
    if (postalcodes.length === 1) {
      var placeInput = document.getElementById("placeInput");
      placeInput.value = postalcodes[0].placeName;
    }
    closeSuggestBox();
  }
}

function closeSuggestBox() {
  document.getElementById('suggestBoxElement').innerHTML = '';
  document.getElementById('suggestBoxElement').style.visibility = 'hidden';
}
function suggestBoxMouseOut(obj) {
  document.getElementById('pcId' + obj).className = 'suggestions';
}
function suggestBoxMouseDown(obj) {
  closeSuggestBox();
  var placeInput = document.getElementById("placeInput");
  placeInput.value = postalcodes[obj].placeName;
}

function suggestBoxMouseOver(obj) {
  document.getElementById('pcId' + obj).className = 'suggestionMouseOver';
}


// this function is called when the user leaves the postal code input field
// it call the geonames.org JSON webservice to fetch an array of places
// for the given postal code
function postalCodeLookup() {

  var country = document.getElementById("countrySelect").value;

  if (geonamesPostalCodeCountries.toString().search(country) === -1) {
    return;
  }
  // display 'loading' in suggest box
  document.getElementById('suggestBoxElement').style.visibility = 'visible';
  document.getElementById('suggestBoxElement').innerHTML = '<small><i>loading ...</i></small>';

  var postalcode = document.getElementById("postalcodeInput").value;

  request = 'http://api.geonames.org/postalCodeLookupJSON?postalcode=' + postalcode + '&country=' + country + '&callback=getLocation&username=andrewkpark';

  aObj = new JSONscriptRequest(request);
  aObj.buildScriptTag();
  aObj.addScriptTag();
}
