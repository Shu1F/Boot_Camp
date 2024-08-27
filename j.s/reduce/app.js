const prices = [980, 1500, 1980, 4980, 2980];

// let total = 0;
// for (let price of prices) {
//     total += price;
// }
// console.log(total);//12420

prices.reduce((total, price) => {
    return total + price;
})

const minPrice = prices.reduce((min, price) => {
    if(min > price) {
        return price;
    }
    return min;
})

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

const highestMovie = movies.reduce((bestMovie, currentMovie) => {
    if (bestMovie.score < currentMovie.score) {
        return currentMovie;
    }
    return bestMovie;
})


const events = [2, 4, 6, 8];

const sum = events.reduce ((sum, num) => sm + num, 100);