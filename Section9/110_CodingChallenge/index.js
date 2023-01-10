const game = {
    team1: 'Manchester City',
    team1: 'Manchester United',
    players: [
        [
            'Ederson',
            'Walker',
            'Cancelo',
            'Dias',
            'Laporte',
            'Rodri',
            'Kevin De Bruyne',
            'Phil Foden',
            'Jack Grealish',
            'Riyad Mahrez',
            'Erling Haaland',
        ],
        [
            'David de Gea',
            'Victor Lindelöf',
            'Eric Bailly',
            'Harry Maguire',
            'Lisandro Martinez',
            'Casemiro',
            'Bruno Fernandes',
            'Christian Eriksen',
            'Fred',
            'Marcus Rashford',
            'Anthony Martial',
        ],

    ],
    score: '4:0',
    scored: ['Erling Haaland','Jack Grealish','Kevin De Bruyne','Phil Foden'],
    date: 'Nov 9th, 2015',
    odds: {
        team1: 1.33,
        x : 3.5,
        team2: 2,
    }
};



const [players1,players2] = game.players;
console.log(players1,players2);


const [GK, ...fieldPlayers]=players1;
console.log(GK,fieldPlayers);



const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Periscic', 'Coutinho'];
console.log(players1Final);


const {odds:{team1,x:draw,team2}} = game;
console.log(team1,draw,team2);

const printGoals = function(...players) {
    console.log(players);
    console.log(`${players.length} goals were scored`);
}

// printGoals('Erling Haaland','Jack Grealish','Kevin De Bruyne','Phil Foden');
// printGoals('Erling Haaland','Jack Grealish');

printGoals(...game.scored);



team1 < team2 && console.log('team 1 is more likely to win');
team1 > team2 && console.log('team 2 is more likely to win');