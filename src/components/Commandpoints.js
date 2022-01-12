import React from "react";
import { connect } from 'react-redux'
import './Commandpoints.css';

import {
    incrementCpPlayer1Action,
    decreaseCpPlayer1Action,
    incrementCpPlayer2Action,
    decreaseCpPlayer2Action
} from '../redux/actions/actions';

const Commandpoints = (props) => {

    const {
        value1,
        value2,
        incrementCpPlayer1Action,
        decreaseCpPlayer1Action,
        incrementCpPlayer2Action,
        decreaseCpPlayer2Action
    } = props

    return (
        <div className="players_cp" >
            <div>
                <button
                    onClick={incrementCpPlayer1Action}
                >+ CP </button>
                <h1>
                    {value1}
                </h1>
                <button
                    onClick={decreaseCpPlayer1Action}
                >- CP </button>
            </div>
            <div>
                <button
                    onClick={incrementCpPlayer2Action}
                >+ CP </button>
                <h1>
                    {value2}
                </h1>
                <button
                    onClick={decreaseCpPlayer2Action}
                >- CP </button>
            </div>
        </div >
    )
}

//vincula la store con las props que le llegan al componente
const mapStateToProps = (state) => ({
    value1: state.value1,
    value2: state.value2
});

// hace que ejecute las acciones mediante el dispatch
const mapDispatchToProps = (dispatch) => ({
    incrementCpPlayer1Action: () => dispatch(incrementCpPlayer1Action()),
    decreaseCpPlayer1Action: () => dispatch(decreaseCpPlayer1Action()),
    incrementCpPlayer2Action: () => dispatch(incrementCpPlayer2Action()),
    decreaseCpPlayer2Action: () => dispatch(decreaseCpPlayer2Action()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Commandpoints)