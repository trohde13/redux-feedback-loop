import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function FeelingForm() {

    const [feeling, setFeeling] = useState('');
    
    const history = useHistory();
    const dispatch = useDispatch();

    const handleFeeling = (event) => {
        event.preventDefault();

        console.log('in handleFeeling');

        dispatchEvent({
            type: 'SET_FEEDBACK',
            payload: {feeling: feeling}
        });

        history.push('/understanding');
    }

    return (
        <div>
            <h2>How are you feeling today?</h2>
            <form onSubmit={handleFeeling}>
                <select onChange={(event) => setFeeling(event.target.value)}>
                    <option value="feeling">5</option>
                    <option value="feeling">4</option>
                    <option value="feeling">3</option>
                    <option value="feeling">2</option>
                    <option value="feeling">1</option>
                </select>
                <button type="submit">NEXT</button>
            </form>
        </div>
    )
};



export default FeelingForm;