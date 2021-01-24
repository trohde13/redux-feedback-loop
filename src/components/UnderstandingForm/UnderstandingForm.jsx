import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function UnderstandingForm() {

    const [understanding, setUnderstanding] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    const handleUnderstanding = (event) => {
        event.preventDefault();

        console.log('in handleUnderstanding');

        dispatch({
            type: 'SET_FEEDBACK',
            payload: understanding
        });

        history.push('/supported');
    }

    return (
        <div>
            <h2>How well are you understanding the content?</h2>
            <form onSubmit={handleUnderstanding}>
                <select className="selectOpt" onChange={(event) => setUnderstanding(event.target.value)}>
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



export default UnderstandingForm;