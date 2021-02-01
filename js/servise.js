var gCurrProj = null;
var gProjects = [
  {
    id: 1,
    name: 'Book Show',
    title: 'Management and organization of a bookstore',
    desc: 'If you need help ordering and organizing in your bookstore, place where the user can see the books, prices, and description on the books.This is the project for you!',
    imgUrl: 'img/portfolio/books-logo.png',
    url: 'https://odedron100.github.io/Book-shop/',
    publishedAt: '27.1.21',
    // labels: ['Matrixes', 'keyboard events'],
  },
  {
    id: 2,
    name: 'Chat',
    title: 'Chat with a service representative',
    desc: 'If you need help, you can go to the website and talk to a live service representative who will help you solve the problems!The service representative can route the calls and the calls are saved so that they can go over the calls',
    imgUrl: 'img/portfolio/messanger.jpg',
    url: 'https://odedron100.github.io/Book-shop/',
    publishedAt: '20.10.20',
    // labels: ['Matrixes', 'keyboard events'],
  },
  {
    id: 3,
    name: 'Mine sewwped',
    title: 'Thinking game',
    desc: 'If you like games that combine thinking, animation and competition.This is the game for you!',
    imgUrl: 'img/portfolio/mines-sweeper-logo.png',
    url: 'https://odedron100.github.io/mine-swepped---oded-ron/',
    publishedAt: '23.1.21',
    // labels: ['Matrixes', 'keyboard events'],
  },
  {
    id: 4,
    name: 'Touch nums',
    title: 'Thinking game for kids',
    desc: 'A thinking game for children that combines thinking and knowing numbers according to degrees of difficulty',
    imgUrl: 'img/portfolio/numbers-logo.jpeg',
    url: 'https://odedron100.github.io/touch-nums/',
    publishedAt: '13.1.21',
    // labels: ['Matrixes', 'keyboard events'],
  },
  {
    id: 5,
    name: 'Pacman',
    title: 'Game',
    desc: 'Familiar Pacman game with animations and upgrades',
    imgUrl: 'img/portfolio/pacman2.jpeg',
    url: 'https://odedron100.github.io/Pacman/',
    publishedAt: '18.1.21',
    // labels: ['Matrixes', 'keyboard events'],
  },
]


function getProjects() {
  return gProjects;
}

// function getProjectFromId(id) {
//   var project = gProjects.find(function (project) {
//     return id === project.id;
//   })
//   return project;
// }

function updateCurrProject(id) {
  var project = gProjects.find(function (project) {
    return id === project.id;
  })
  gCurrProj = project;
  renderModal();
}

function getCurrProject() {
  return gCurrProj;
}

function sendMessage(email, subject, message) {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${message}`
}
