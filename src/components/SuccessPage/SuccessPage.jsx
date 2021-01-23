import { useHistory } from 'react-router-dom';

function SuccessPage() {
    console.log('in the SuccessPage');

    const history = useHistory();
    

    const handleReturn = () => {
        

        history.push('/');
    }

    return (
        <div>
            <h2>You did it! Your feedback has been submitted!</h2>

            <button onClick={handleReturn}>Submit more Feedback!</button>
            
        </div>
    )
};



export default SuccessPage;