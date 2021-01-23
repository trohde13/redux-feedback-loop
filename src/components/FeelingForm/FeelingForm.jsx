import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function FeelingForm() {
    
    const history = useHistory();
    const dispatch = useDispatch();

    const handleFeeling = (event) => {
        event.preventDefault();

        console.log('in handleFeeling');

        dispatchEvent();

        history.push('/understanding');
    }

    return (
        <div>
            <h2>How are you feeling today?</h2>
            <form onSubmit={handleFeeling}>
                <select onChange={(event) => setValue(event.target.value)}>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>

            </form>
        </div>
    )
};



export default FeelingForm;