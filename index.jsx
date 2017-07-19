/**
 * Created by srini on 7/13/2017.
 */

var PLAYERS = [
    {
        name: "Nishanth",
        score: 100,
        id: 1,
    },
    {
        name: "Mouli",
        score: 30,
        id: 2,
    },
    {
        name: "Ramya",
        score: 101,
        id: 3,
    }
]

function Header(props) {
    return(
        <div className="header">
            <h1>{props.title}</h1>
        </div>
    );
}

Header.propTypes = {
    title: React.PropTypes.string.isRequired,
};

// var Counter = React.createClass({
//     propTypes: {
//         initialScore: React.PropTypes.number.isRequired,
//     },
//     getInitialState: function () {
//         return {
//             score: this.props.initialScore,
//         }
//     },
//     decrementScore: function () {
//         this.setState({
//             score: (this.state.score - 1),
//         });
//     },
//     incrementScore: function(){
//         this.setState({
//             score: (this.state.score + 1),
//         });
//     },
//     render: function () {
//         return(
//             <div className="counter">
//                 <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
//                 <div className="counter-score"> {this.state.score} </div>
//                 <button className="counter-action increment" onClick={this.incrementScore}> + </button>
//             </div>
//         );
//     }
// });

function Counter(props) {
    return(
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <div className="counter-score"> {props.score} </div>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

Counter.propTypes = {
    score: React.PropTypes.number.isRequired,
}

function Player(props) {
    return(
        <div className="player">
            <div className="player-name">
                {props.name}
            </div>
            <div className="player-score">
                <Counter initialScore={props.score}/>
            </div>
        </div>
    );
}

Player.propTypes = {
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired
};


var Application = React.createClass({

    propTypes:{
        title: React.PropTypes.string,
        initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            score: React.PropTypes.number.isRequired,
            id: React.PropTypes.number.isRequired,
        })).isRequired,
    },

    getDefaultProps: function () {
        return {
            title: "ScoreBoard"
        }
    },

    getInitialState: function () {
        return{
            players: this.props.initialPlayers,
        };
    },

    render: function(){
        return(
            <div className="scoreboard">
                <Header title={this.props.title}/>
                <div className="players">
                    {this.state.players.map(function (player) {
                        return  <Player name={player.name} score={player.score} key={player.id}/>
                    })}
                </div>
            </div>
        );
    },
});


ReactDOM.render(
    <Application initialPlayers={PLAYERS}/>,
    document.getElementById("root")
);