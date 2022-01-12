import React from 'react';
import './PlayersDetails.css';
import { connect } from 'react-redux';

import { incrementBattleRound, decreaseBattleRound } from '../redux/actions/actions';

export const PlayersDetails = (props) => {

    const {
        value,
        incrementBattleRound,
        decreaseBattleRound
    } = props;

    return (
        <div className='players_details'>
            <div className='attaker'>
                <div>
                    <input
                        placeholder='Attaker´s Name'
                    >
                    </input>
                </div>
                <div>
                    <input
                        placeholder='Faction'
                    >
                    </input>
                </div>
            </div>
            <div>
                <h1>Battle Round</h1>
                <h1>{value}</h1>
                <button
                    onClick={incrementBattleRound}
                >+
                </button>
                <button
                    onClick={decreaseBattleRound}
                >-
                </button>
            </div>
            <div className='defender'>
                <div>
                    <input
                        placeholder='Defender´s Name'
                    >
                    </input>
                </div>
                <div>
                    <input
                        placeholder='Faction'
                    >
                    </input>
                </div>
            </div>
        </div >
    )
}

const mapStateToProps = (state) => ({
    value: state.value
});

const mapDispatchToProps = (dispatch) => ({
    incrementBattleRound: () => dispatch(incrementBattleRound()),
    decreaseBattleRound: () => dispatch(decreaseBattleRound()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayersDetails)