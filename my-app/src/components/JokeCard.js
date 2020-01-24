import React from 'react';
import { connect } from 'react-redux';
import { fetchActivity } from '../actions';
import Loader from 'react-loader-spinner';


const JokeCard = (props) =>{
    console.log(props)
    return(
        <div className='content'>
          <button onClick={props.fetchActivity}>Click</button>
          {/* {!props.joke && !props.isLoading && (
            <h2>Get a joke</h2>
            )} */}
            {props.joke && !props.isLoading && (
            <h2>Click to get a joke</h2>
            )}
            {/* <p>Type of Joke: {props.joke.type}</p> */}
            <p>{props.joke.setup}</p>
            <p>{props.joke.punchline}</p>
          {props.isLoading && (
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          )}
          {props.joke && !props.isLoading && <h2>{props.joke.activity}</h2>}
      </div>
    );
};
const mapStateToProps = (state) =>{
  console.log(state)
    return {
      isLoading: state.isLoading,
      joke: state.joke,
      error: state.error,
      // type: state.joke.type,
      // setup: state.joke.setup,
      // punchline: state.joke.punchline
    };
};
export default connect(mapStateToProps, { fetchActivity })(JokeCard); 