//start function that creates starting elements on DOM upon load
function loadContainer() {
  let container = document.createElement('div');
  container.classList.add('container');
  document.body.append(container);
}

function loadHeader() {
  let header = document.createElement('div');
  header.classList.add('header-container');
  let headerPhoto1 = document.createElement('img');
  let headerPhoto2 = document.createElement('img');
  headerPhoto1.classList.add('header-photo');
  headerPhoto2.classList.add('header-photo')
  headerPhoto1.src = 'assets/nba-transparent.png';
  headerPhoto2.src = 'assets/nba-transparent.png'
  let headerText = document.createElement('h1');
  headerText.classList.add('header');
  headerText.textContent = 'HOW TO NBA';
  header.append(headerPhoto1, headerText, headerPhoto2);
}

function loadBody() {
  let bodyContainer = document.createElement('div');
  bodyContainer.classList.add('body-container');
  let headerBlurb = document.createElement('div');
  headerBlurb.classList.add('header-blurb')
  let headerH2 = document.createElement('h2');
  headerH2.classList.add('text');
  headerH2.textContent = 'Don\'t know which team to root for? We can help!'
  headerBlurb.append(headerH2);
  let whereAreYou = document.createElement('div');
  whereAreYou.classList.add('where-are-you')
  let locationHeading = document.createElement('h2');
  locationHeading.classList.add('location-heading');
  locationHeading.textContent = 'Where are you from?';
  whereAreYou.append(locationHeading);
}

function loadLocationField() {
  let locationField = document.createElement('form')
  locationField.classList.add('location-field');
  let table = document.createElement('table');
  let tbody = document.createElement('tbody');
  let trow = document.createElement('tr');
  let zipAndCity = document.createElement('td');
  zipAndCity.textContent = 'Zip Code/City';
  let zipTd = document.createElement('td');
  let zipCodeInput = document.createElement('input');
  zipCodeInput.setAttribute('id', 'zipCodeInput');
  zipCodeInput.setAttribute('name', 'zipcode');
  zipCodeInput.setAttribute('size', '14');
  zipCodeInput.setAttribute('type', 'text');
  zipTd.append(zipCodeInput);
  let spanTd = document.createElement('td');
  let span = document.createElement('span');
  span.style.position = 'relative';
  span.style.zIndex = '24';
  let cityInput = document.createElement('input')
  cityInput.setAttribute('id', 'cityInput');
  cityInput.setAttribute('name', 'city');
  cityInput.setAttribute('size', '30');
  cityInput.setAttribute('type', 'text');
  span.append(cityInput);
  spanTd.append(span);
  trow.append(zipAndCity, zipTd, spanTd);
  tbody.append(trow);
  table.append(tbody);
  locationField.append(table);
  let bodyContainer = document.querySelector('.body-container')
  let headerBlurb = document.querySelector('.header-blurb')
  let whereAreYou = document.querySelector('.where-are-you');
  bodyContainer.append(headerBlurb, whereAreYou, locationField);
}

function newLandingPage() {
  let fanOf = document.createElement('h2')
  fanOf.classList.add('text');
  fanOf.setAttribute('id', 'fan-of')
  fanOf.textContent = 'You are now a fan of:'
  let teamText = document.createElement('h2');
  teamText.classList.add('text');
  teamText.setAttribute('id', 'team-text')
  let teamLogo = document.createElement('img');
  teamLogo.setAttribute('id', 'team-logo')
  let image = document.querySelector('.image-container');
  image.append(teamLogo);
  let returnContainer = document.createElement('div');
  returnContainer.classList.add('return-container');
  let rerollContainer = document.createElement('div');
  rerollContainer.classList.add('reroll-container')
  let buttonContainer = document.querySelector('.button-container')
  buttonContainer.append(returnContainer, rerollContainer);
  let returnButton = document.createElement('img');
  returnButton.classList.add('return');
  returnButton.src = 'assets/nba-players/kobe.png'
  let rerollButton = document.createElement('img');
  rerollButton.classList.add('reroll');
  rerollButton.src = 'assets/nba-players/durant.png'
  let returnBlurb = document.createElement('h2');
  returnBlurb.classList.add('return-blurb')
  returnBlurb.textContent = 'RETURN TO HOME'
  let rerollBlurb = document.createElement('h2');
  rerollBlurb.textContent = 'GIVE ME ANOTHER TEAM';
  rerollBlurb.classList.add('reroll-blurb')
  returnContainer.append(returnButton, returnBlurb);
  rerollContainer.append(rerollButton, rerollBlurb);
}

function loadImages() {
  let image = document.createElement('div');
  image.classList.add('image-container');
  let giannis = document.createElement('img');
  giannis.src = 'assets/nba-players/giannis.png'
  let lebron = document.createElement('img');
  lebron.src = 'assets/nba-players/lebron.png'
  let steph = document.createElement('img');
  steph.src = 'assets/nba-players/steph.png'
  image.append(giannis, lebron, steph);
}

function loadBlurb() {
  let blurb = document.createElement('div');
  blurb.classList.add('blurb-container');
  let buttonBlurb = document.createElement('h2');
  buttonBlurb.classList.add('button-blurb');
  buttonBlurb.textContent = 'Give me a team!'
  blurb.append(buttonBlurb);
}

function loadButtons() {
  let buttons = document.createElement('div');
  buttons.classList.add('button-container');
  let buttonContainer = document.createElement('div')
  buttonContainer.classList.add('logo-button-container');
  buttons.append(buttonContainer);
  let nbaButton = document.createElement('img')
  nbaButton.classList.add('nba-button');
  nbaButton.src = 'assets/nba-transparent.png';
  buttonContainer.append(nbaButton);
}

function appendDivs() {
  let container = document.querySelector('.container')
  let header = document.querySelector('.header')
  let bodyContainer = document.querySelector('.body-container')
  let image = document.querySelector('.image-container')
  let blurb = document.querySelector('.blurb-container')
  let buttons = document.querySelector('.button-container')
  container.append(header, bodyContainer, image, blurb, buttons);
}

// function startApp() {
//   loadHeader();
//   loadContainer();
//   loadBody();
//   loadLocationField();
//   loadImages();
//   loadBlurb();
//   loadButtons();
//   appendDivs();
// }


window.addEventListener('load', function () {
  let container = document.createElement('div');
  container.classList.add('container');
  document.body.append(container);

  let header = document.createElement('div');
  header.classList.add('header-container');
  let headerPhoto1 = document.createElement('img');
  let headerPhoto2 = document.createElement('img');
  headerPhoto1.classList.add('header-photo');
  headerPhoto2.classList.add('header-photo')
  headerPhoto1.src = 'assets/nba-transparent.png';
  headerPhoto2.src = 'assets/nba-transparent.png'
  let headerText = document.createElement('h1');
  headerText.classList.add('header');
  headerText.textContent = 'HOW TO NBA';
  header.append(headerPhoto1, headerText, headerPhoto2);

  let bodyContainer = document.createElement('div');
  bodyContainer.classList.add('body-container');
  let headerBlurb = document.createElement('div');
  headerBlurb.classList.add('header-blurb')
  let headerH2 = document.createElement('h2');
  headerH2.classList.add('text');
  headerH2.textContent = 'Don\'t know which team to root for? We can help!'
  headerBlurb.append(headerH2);
  let whereAreYou = document.createElement('div');
  whereAreYou.classList.add('where-are-you')
  let locationHeading = document.createElement('h2');
  locationHeading.classList.add('location-heading');
  locationHeading.textContent = 'Where are you from?';
  whereAreYou.append(locationHeading);

  let locationField = document.createElement('form')
  locationField.classList.add('location-field');
  let table = document.createElement('table');
  let tbody = document.createElement('tbody');
  let trow = document.createElement('tr');
  let zipAndCity = document.createElement('td');
  zipAndCity.textContent = 'Zip Code/City';
  let zipTd = document.createElement('td');
  let zipCodeInput = document.createElement('input');
  zipCodeInput.setAttribute('id', 'zipCodeInput');
  zipCodeInput.setAttribute('name', 'zipcode');
  zipCodeInput.setAttribute('size', '14');
  zipCodeInput.setAttribute('type', 'text');
  zipTd.append(zipCodeInput);
  let spanTd = document.createElement('td');
  let span = document.createElement('span');
  span.style.position = 'relative';
  span.style.zIndex = '24';
  let cityInput = document.createElement('input')
  cityInput.setAttribute('id', 'cityInput');
  cityInput.setAttribute('name', 'city');
  cityInput.setAttribute('size', '30');
  cityInput.setAttribute('type', 'text');
  span.append(cityInput);
  spanTd.append(span);
  trow.append(zipAndCity, zipTd, spanTd);
  tbody.append(trow);
  table.append(tbody);
  locationField.append(table);
  bodyContainer.append(headerBlurb, whereAreYou, locationField);


  const containerArr = [
    bodyContainer,
    image,
    buttons,
    blurb,
  ];

  let nbaButton = document.querySelector('.nba-button')
  nbaButton.addEventListener('click', (event) => {
    for (let i = 0; i < containerArr.length; i++) {
      containerArr[i].innerHTML = '';
    }
    let fanOf = document.createElement('h2')
    fanOf.classList.add('text');
    fanOf.setAttribute('id', 'fan-of')
    fanOf.textContent = 'You are now a fan of:'
    let teamText = document.createElement('h2');
    teamText.classList.add('text');
    teamText.setAttribute('id', 'team-text')
    let teamLogo = document.createElement('img');
    teamLogo.setAttribute('id', 'team-logo')
    let image = document.querySelector('.image-container');
    image.append(teamLogo);
    let returnContainer = document.createElement('div');
    returnContainer.classList.add('return-container');
    let rerollContainer = document.createElement('div');
    rerollContainer.classList.add('reroll-container')
    let buttonContainer = document.querySelector('.button-container')
    buttonContainer.append(returnContainer, rerollContainer);
    let returnButton = document.createElement('img');
    returnButton.classList.add('return');
    returnButton.src = 'assets/nba-players/kobe.png'
    let rerollButton = document.createElement('img');
    rerollButton.classList.add('reroll');
    rerollButton.src = 'assets/nba-players/durant.png'
    let returnBlurb = document.createElement('h2');
    returnBlurb.classList.add('return-blurb')
    returnBlurb.textContent = 'RETURN TO HOME'
    let rerollBlurb = document.createElement('h2');
    rerollBlurb.textContent = 'GIVE ME ANOTHER TEAM';
    rerollBlurb.classList.add('reroll-blurb')
    returnContainer.append(returnButton, returnBlurb);
    rerollContainer.append(rerollButton, rerollBlurb);

    //Generate random team from data fetched
    $.ajax({
      'url': "https://www.balldontlie.io/api/v1/teams",
      success: data => {
        console.log(data);
        const randomTeam = getRandomTeamName(data.data)
        console.log(randomTeam);
        teamText.textContent = randomTeam
        for (let i = 0; i < nbaLogosArr.length; i++) {
          if (randomTeam === nbaLogosArr[i].team) {
            teamLogo.src = nbaLogosArr[i].image
          }
        }
      }
    })
    bodyContainer.append(fanOf, teamText)

    //reroll team (durant button)
    rerollContainer.addEventListener('click', (event) => {
      teamText.innerHTML = '';
      teamLogo.innerHTML = '';
      $.ajax({
        'url': "https://www.balldontlie.io/api/v1/teams",
        success: data => {
          console.log(data);
          const randomTeam = getRandomTeamName(data.data)
          console.log(randomTeam);
          teamText.textContent = randomTeam
          for (let i = 0; i < nbaLogosArr.length; i++) {
            if (randomTeam === nbaLogosArr[i].team) {
              teamLogo.src = nbaLogosArr[i].image
            }
          }
        }
      })
    })
  })
  //function to get random team name generated from data fetched
  function getRandomTeamName(teams) {
    return teams[Math.floor(Math.random() * teams.length)].full_name;
  }

  //Zip Code Ajax call that will auto-populate city when user inputs zip code
  zipCodeInput.addEventListener('input', function (event) {
    console.log(event.target.value)
    if (event.target.value.length === 5) {
      $.ajax({
        url: "http://api.geonames.org/postalCodeLookupJSON?&postalcode=" + event.target.value + "&country=US&username=andrewkpark",
        success: data => {
          console.log(data);
          cityInput.value = data.postalcodes[0].placeName
        }
      })
    }
  })
})

const nbaLogosArr = [
  { team: 'Portland Trail Blazers', image: 'assets/nba-team-logos/blazers.png' },
  { team: 'Milwaukee Bucks', image: 'assets/nba-team-logos/bucks.png' },
  { team: 'Chicago Bulls ', image: 'assets/nba-team-logos/bulls.png' },
  { team: 'Cleveland Cavaliers', image: 'assets/nba-team-logos/cavs.png' },
  { team: 'Boston Celtics', image: 'assets/nba-team-logos/celtics.png' },
  { team: 'Los Angeles Clippers', image: 'assets/nba-team-logos/clippers.png' },
  { team: 'Memphis Grizzlies', image: 'assets/nba-team-logos/grizzlies.png' },
  { team: 'Atlanta Hawks', image: 'assets/nba-team-logos/hawks.png' },
  { team: 'Miami Heat', image: 'assets/nba-team-logos/heat.png' },
  { team: 'Charlotte Hornets', image: 'assets/nba-team-logos/hornets.png' },
  { team: 'Utah Jazz', image: 'assets/nba-team-logos/jazz.png' },
  { team: 'Sacramento Kings', image: 'assets/nba-team-logos/kings.png' },
  { team: 'New York Knicks', image: 'assets/nba-team-logos/knicks.png' },
  { team: 'Los Angeles Lakers', image: 'assets/nba-team-logos/lakers.png' },
  { team: 'Orlando Magic', image: 'assets/nba-team-logos/magic.png' },
  { team: 'Dallas Mavericks', image: 'assets/nba-team-logos/mavericks.png' },
  { team: 'Brooklyn Nets', image: 'assets/nba-team-logos/nets.png' },
  { team: 'Denver Nuggets', image: 'assets/nba-team-logos/nuggets.png' },
  { team: 'Indiana Pacers', image: 'assets/nba-team-logos/pacers.png' },
  { team: 'New Orleans Pelicans', image: 'assets/nba-team-logos/pelicans.png' },
  { team: 'Detroit Pistons', image: 'assets/nba-team-logos/pistons.png' },
  { team: 'Toronto Raptors', image: 'assets/nba-team-logos/raptors.png' },
  { team: 'Houston Rockets', image: 'assets/nba-team-logos/rockets.png' },
  { team: 'Philadelphia 76ers', image: 'assets/nba-team-logos/sixers.png' },
  { team: 'San Antonio Spurs', image: 'assets/nba-team-logos/spurs.png' },
  { team: 'Phoenix Suns', image: 'assets/nba-team-logos/suns.png' },
  { team: 'Oklahoma City Thunder', image: 'assets/nba-team-logos/thunder.png' },
  { team: 'Minnesota Timberwolves', image: 'assets/nba-team-logos/timberwolves.png' },
  { team: 'Golden State Warriors', image: 'assets/nba-team-logos/warriors.png' },
  { team: 'Washington Wizards', image: 'assets/nba-team-logos/wizards.png' },
];
