import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportedForm from '../SupportedForm/SupportedForm';
import CommentForm from '../CommentForm/CommentForm';


import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function ReviewPage() {

    const feedbackReducer = useSelector(state => state.feedbackReducer);
    const history = useHistory();

    console.log('in the ReviewPage');

    return (
        <div>
            <h2>REVIEW YOUR FEEDBACK:</h2>
            <p>{ feedbackReducer.feeling }</p>
            <p>{ feedbackReducer.understanding }</p>
            <p>{ feedbackReducer.support }</p>
            <p>{ feedbackReducer.comments }</p>
        </div>
    )
};



export default ReviewPage;