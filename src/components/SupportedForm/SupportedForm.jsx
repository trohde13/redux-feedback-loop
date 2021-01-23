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

        dispatchEvent({
            type: 'SET_FEEDBACK',
            payload: {support: support}
        });

        history.push('/comment');
    }

    return (
        <div>
            <h2>How well are you being supported?</h2>
            <form onSubmit={handleSupported}>
                <select onChange={(event) => setSupport(event.target.value)}>
                    <option value="support">5</option>
                    <option value="support">4</option>
                    <option value="support">3</option>
                    <option value="support">2</option>
                    <option value="support">1</option>
                </select>
                <button type="submit">NEXT</button>
            </form>
        </div>
    )
};



export default SupportedForm;