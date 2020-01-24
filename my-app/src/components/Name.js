import React, { useEffect} from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
// import Loader from 'react-loader-spinner';
import { fetchName } from '../actions';
// import { initialState } from '../reducers';

const Name = (props, fetchName) => {
    console.log(props);
    const { name } = useParams();
    const { country } = useParams();
    
    useEffect(() => {
        const userName = name ? name : 'John'
        const countryCode = country ? country : 'us'
        fetchName(userName, countryCode)
    }, [name, country])
    return (
        <div>
            <h2>Search by Name and Country</h2>
            <form>
                <input
                name='name'
                className='name'
                placeholder='Enter a Name'
                type='text'
                 />
                 {/* <input
                 name='country'
                 className='country'
                 placeholder='Enter Country Code'
                 type='text' 
                 /> */}
                    <select>
                    <option value='at'>Austria</option>
                    <option value='hr'>Croatia</option>
                    <option value='cz'>Czechia</option>
                    <option value='dk'>Denmark</option>
                    <option value='fi'>Finland</option>
                    <option value='fr'>France</option>
                    <option value='de'>Germany</option>
                    <option value='hu'>Hungary</option>
                    <option value='it'>Italy</option>
                    <option value='pl'>Poland</option>
                    <option value='sk'>Slovakia</option>
                    <option value='es'>Spain</option>
                    <option value='se'>Sweden</option>
                    <option value='us'>United States of America</option>
                    </select>
                 <button>Enter</button>
            </form>
            <div>
                <h3>Month: {props.results.month}</h3>
                <p>Day: {props.results.day}</p>
                <p>Names: {props.results.name}</p>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state.getName)
    return {
        countryName: state.getName,
        countryCode: state.getCountry,
        results: state.results,
        nameday: state.nameday
    };
  };
  
  export default connect(
    mapStateToProps,
    { fetchName }
  )(Name);