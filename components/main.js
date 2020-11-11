const header = document.querySelector('.header-container');
const bodyContainer = document.querySelector('.body-container');
const image = document.querySelector('.image-container');
const blurb = document.querySelector('.blurb-container');
const buttons = document.querySelector('.button-container');
const zipCodeInput = document.getElementById('zip-code-input');
const cityInput = document.getElementById('city-input')
const modal = document.querySelector('.modal')
const modalButton = document.querySelector('.modal-button');
const errorModal = document.querySelector('.error-modal');
const loadingSpinner = document.querySelector('.spinner');
let sneakerData = null;

const containers = [
  bodyContainer,
  image,
  buttons,
  blurb,
];


const nbaLogosArr = [
  { team: 'Portland Trail Blazers', image: 'assets/nba-team-logos/blazers.png' },
  { team: 'Milwaukee Bucks', image: 'assets/nba-team-logos/bucks.png' },
  { team: 'Chicago Bulls', image: 'assets/nba-team-logos/bulls.png' },
  { team: 'Cleveland Cavaliers', image: 'assets/nba-team-logos/cavs.png' },
  { team: 'Boston Celtics', image: 'assets/nba-team-logos/celtics.png' },
  { team: 'LA Clippers', image: 'assets/nba-team-logos/clippers.png' },
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

const brands = [
  'ASICS',
  "ADIDAS",
  "CONVERSE",
  "JORDAN",
  "NEW BALANCE",
  "NIKE",
  "PUMA",
  "REEBOK",
  "SAUCONY",
  "UNDER ARMOUR",
  "VANS",
  "YEEZY"
]



let nbaButton = document.getElementById('nba-button')
nbaButton.addEventListener('click', (event) => {
  showView('nba');
  let teamAndShoeContainer = document.createElement('div');
  teamAndShoeContainer.classList.add('team-and-shoe');
  bodyContainer.append(teamAndShoeContainer);
  let teamContainer = document.createElement('div');
  teamContainer.classList.add('team-container');
  bodyContainer.append(teamContainer);
  let fanOf = document.createElement('h2')
  fanOf.classList.add('text', 'view');
  fanOf.setAttribute('id', 'fan-of')
  fanOf.textContent = 'You are now a fan of:'
  let teamText = document.createElement('h2');
  let teamAndText = document.createElement('div');
  teamAndText.classList.add('team-and-text');
  teamText.classList.add('text', 'view');
  teamText.setAttribute('id', 'team-text')
  teamContainer.append(fanOf, teamText);
  let shoeContainer = document.createElement('div');
  shoeContainer.classList.add('shoe-container');
  let yourSneaker = document.createElement('h2');
  bodyContainer.append(shoeContainer);
  let sneakerText = document.createElement('h2');
  shoeContainer.append(sneakerText);
  sneakerText.classList.add('sneaker-text');
  let sneakerImg = document.createElement('img');
  shoeContainer.append(sneakerImg);
  sneakerImg.classList.add('sneaker-img');
  let imageContainer = document.querySelector('.image-container');
  teamAndShoeContainer.append(teamAndText, shoeContainer);

  let teamLogo = document.createElement('img');
  teamLogo.setAttribute('id', 'team-logo')
  teamLogo.classList.add('view');
  teamAndText.append(teamContainer, teamLogo);
  let returnContainer = document.createElement('div');
  returnContainer.classList.add('return-container', 'view');
  let rerollContainer = document.createElement('div');
  rerollContainer.classList.add('reroll-container', 'view')
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
  rerollBlurb.textContent = 'GIVE ME ANOTHER TEAM/KICKS';
  rerollBlurb.classList.add('reroll-blurb')
  returnContainer.append(returnButton, returnBlurb);
  rerollContainer.append(rerollButton, rerollBlurb);
  rerollContainer.addEventListener('click', resetPage);
  returnContainer.addEventListener('click', returnHome);

  showSpinner();


  function getRandomTeam(data) {
    $.ajax({
      'url': "https://www.balldontlie.io/api/v1/teams",
      success: data => {
        removeSpinner();
        const randomTeam = getRandomTeamName(data.data)
        teamText.textContent = randomTeam
        for (let i = 0; i < nbaLogosArr.length; i++) {
          if (randomTeam === nbaLogosArr[i].team) {
            teamLogo.src = nbaLogosArr[i].image
          }
        }

      },
      error: () => {
        showError();
        removeSpinner();
      }
    })
  }

  function getRandomTeamName(teams) {
    return teams[Math.floor(Math.random() * teams.length)].full_name;
  }

  function getSneaker() {
    const randomBrand = brands[Math.floor(Math.random() * brands.length)];
    const rerollContainer = document.querySelector('.reroll-container');
    rerollContainer.removeEventListener('click', getRandomTeam);
    setTimeout(function () {
      showSpinner();
      $.ajax({
        type: 'GET',
        'url': "https://api.thesneakerdatabase.com/v1/sneakers?limit=100&brand=" + randomBrand,
        success: data => {
          removeSpinner();
          const sneakersWithImages = []
          for (let i = 0; i < data.results.length; i++) {
            if (data.results[i].media.imageUrl) {
              sneakersWithImages.push(data.results[i])
            }
          }
          rerollContainer.addEventListener('click', getRandomTeam);
          sneakerData = sneakersWithImages[Math.floor(Math.random() * sneakersWithImages.length)];
          let sneakerImg = document.querySelector('.sneaker-img');
          sneakerImg.src = sneakerData.media.imageUrl;
          let sneakerText = document.querySelector('.sneaker-text');
          sneakerText.textContent = 'Your sneaker: \n' + sneakerData.title;
        },
        error: () => {
          showError();
          removeSpinner();
        }
      })
    }, 1000)
  }

  function returnHome(event) {
    showView('return-home');
    teamAndShoeContainer.parentNode.removeChild(teamAndShoeContainer)
    teamContainer.parentNode.removeChild(teamContainer);
    teamLogo.parentNode.removeChild(teamLogo);
    shoeContainer.parentNode.removeChild(shoeContainer);
    rerollContainer.parentNode.removeChild(rerollContainer);
    returnContainer.parentNode.removeChild(returnContainer);
    rerollContainer.removeEventListener('click', getSneaker)
    rerollContainer.removeEventListener('click', getRandomTeam)
  }

  function resetPage(event) {
    teamText.innerHTML = '';
    teamLogo.innerHTML = '';
    getSneaker();
    getRandomTeam();
  }

  getRandomTeam();
  getSneaker();
})

function showView(viewName) {
  const views = document.querySelectorAll('.view')
  for (let i = 0; i < views.length; i++) {
    if (views[i].dataset.viewName === viewName) {
      views[i].classList.remove('hidden')
    } else {
      views[i].classList.add('hidden')
    }
  }
}


function showError() {
  errorModal.classList.remove('hidden')
}

function showSpinner() {
  loadingSpinner.classList.remove('hidden')
}

function removeError() {
  errorModal.classList.add('hidden')
}

function removeSpinner() {
  loadingSpinner.classList.add('hidden')
}
