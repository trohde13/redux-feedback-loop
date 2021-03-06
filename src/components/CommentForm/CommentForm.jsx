import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function CommentForm() {

    const [comments, setComments] = useState('');
    
    const history = useHistory();
    const dispatch = useDispatch();

    const handleComment = (event) => {
        event.preventDefault();

        console.log('in handleComment');

        dispatch({
            type: 'SET_COMMENTS',
            payload: comments
        });

        history.push('/review');
    }; //end handleComment

    return (
        <div>
            <h2>Any comments you want to leave?</h2>
            <form onSubmit={handleComment}>
                <input
                    type="text"
                    className="commentInput"
                    placeholder="Anything you want to add?"
                    value={comments}
                    onChange={(event) => setComments(event.target.value)}
                ></input>
                <button className="nextBtn" type="submit">NEXT</button>
            </form>
        </div>
    )
};



export default CommentForm;