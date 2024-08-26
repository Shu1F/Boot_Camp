const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]

exams.every(exam => exam >= 75);

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
        year: 2013
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2014
    },
    {
        title: 'Alien',
        score: 90,
        year: 2011
    }
]

movies.some(movie => movie.year > 2010);