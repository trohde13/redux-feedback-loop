import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function FeelingForm() {

    const [feeling, setFeeling] = useState('');
    
    const history = useHistory();
    const dispatch = useDispatch();

    // const options = [
    //     {value: 5, label: 5 },
    //     {value: 4, label: 4 },
    //     {value: 3, label: 3 },
    //     {value: 2, label: 2 },
    //     {value: 1, label: 1 },
    // ]

    const handleFeeling = (event) => {
        event.preventDefault();

        console.log('in handleFeeling', {feeling} );
        if(feeling === ''){
            alert('Please select a number from the list')
            return false;
        } else {
            dispatch({
                type: 'SET_FEELING',
                payload: feeling
        });

        history.push('/understanding');
        }
    }; //end handleFeeling

    return (
        <div>
            <h2>How are you feeling today?</h2>
            <form onSubmit={handleFeeling}>
                
                <select className="selectOpt" onChange={(event) => setFeeling(event.target.value)}>
                    <option value="0">Please Select</option>
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



export default FeelingForm;