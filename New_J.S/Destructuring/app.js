// const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

// const highScore = scores[0];
// const secondScore = scores[1];
// const [gold, silver, bronze, ...rest] = scores;

// const { born: birthYear } = user;

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 1999
    },
    {
        title: 'Nothing Hill',
        score: 77,
        year: 2019
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

movies.filter(movie => movie.score >= 90);
movies.filter(({score}) => score >= 90);

movies.map(({title, year, score}) => {
    return `${title}(${year}): ${score}/100`;
})