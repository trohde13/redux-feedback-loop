import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function ReviewPage() {

    const feedbackReducer = useSelector(state => state.feedbackReducer);
    const history = useHistory();

    console.log('in the ReviewPage');

    const handleSubmit = () => {
        console.log('handleSubmit clicked!');
        axios.post('/feedback', feedbackReducer)
        .then((response) =>{
            console.log('sending feedback', response);
            history.push('/success');
        }).catch(function (error) {
            console.log('Error on Post:', error);
        });
    }; //end handleSubmit

    return (
        <div>
            <h2>REVIEW YOUR FEEDBACK:</h2>
            <div className="reviewMsg">
                
                <p>Feelings: { feedbackReducer.feeling }</p>
                <p>Conceptual Understanding: { feedbackReducer.understanding }</p>
                <p>Support: { feedbackReducer.support }</p>
                <p>{ feedbackReducer.comments }</p>
                <button className="confirmBtn" onClick={handleSubmit}>CONFIRM FEEDBACK</button>
            </div>
            
        </div>
    )
};



export default ReviewPage;