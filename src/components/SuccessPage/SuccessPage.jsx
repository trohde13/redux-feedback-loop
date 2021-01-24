import { useHistory } from 'react-router-dom';

function SuccessPage() {
    console.log('in the SuccessPage');

    const history = useHistory();
    

    const handleReturn = () => {
        

        history.push('/');
    }; //end handleReturn

    return (
        <div className="successMsg">
            <div>
                <h2>You did it!</h2>
                <h3>Your feedback has been submitted!</h3>
                <h3>Please consider submitting feedback again</h3>
            </div>
            <button className="returnBtn" onClick={handleReturn}>Submit More Feedback!</button>
            
        </div>
    )
};



export default SuccessPage;