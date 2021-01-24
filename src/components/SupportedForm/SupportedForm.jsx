import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function SupportedForm() {

    const [support, setSupport] = useState('');
    
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSupported = (event) => {
        event.preventDefault();

        console.log('in handleSupported');

        dispatch({
            type: 'SET_SUPPORT',
            payload: support
        });

        history.push('/comment');
    }

    return (
        <div>
            <h2>How well are you being supported?</h2>
            <form onSubmit={handleSupported}>
                <select className="selectOpt" onChange={(event) => setSupport(event.target.value)}>
                <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>
                <button className="nextBtn" type="submit">NEXT</button>
            </form>
        </div>
    )
};



export default SupportedForm;