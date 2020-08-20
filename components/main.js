//DOM Query selectors
let bodyContainer = document.querySelector('.body-container');
let imageContainer = document.querySelector('.image-container');
let buttonContainer = document.querySelector('.button-container');
let blurbContainer = document.querySelector('.blurb-container');
let containerArr = [
  bodyContainer,
  imageContainer,
  buttonContainer,
  blurbContainer
];
let nbaLogosArr = [
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
let zipCode = document.getElementById('zipCodeInput');
let city = document.getElementById('cityInput');
let logoButton = document.querySelector('.nba-button');

function alert() {
  alert('Please enter in your zip code!')
}

//NBA logo button click event that generates random NBA team,
//dynamically creates new lanading page/DOM elements
logoButton.addEventListener('click', function (event) {
  for (let i = 0; i < containerArr.length; i++) {
    containerArr[i].innerHTML = '';
  }
  let fanOf = document.createElement('h2')
  fanOf.classList.add('text');
  fanOf.textContent = 'You are now a fan of:'
  let teamText = document.createElement('h2');
  teamText.classList.add('text');
  let teamLogo = document.createElement('img');
  imageContainer.append(teamLogo);
  let returnContainer = document.createElement('div');
  returnContainer.classList.add('return-container');
  let rerollContainer = document.createElement('div');
  rerollContainer.classList.add('reroll-container')
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

})


function getRandomTeamName(teams) {
  return teams[Math.floor(Math.random() * teams.length)].full_name;
}

//Zip Code Ajax call that will auto-populate city when user inputs zip code
zipCode.addEventListener('input', function (event) {
  console.log(event.target.value)
  if (event.target.value.length === 5) {
    $.ajax({
      url: "http://api.geonames.org/postalCodeLookupJSON?&postalcode=" + event.target.value + "&country=US&username=andrewkpark",
      success: data => {
        console.log(data);
        city.value = data.postalcodes[0].placeName
      }
    })
  }
})
