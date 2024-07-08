import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addComment, movieCommentsState } from '../features/movieCommentsSlice';
import { RootState } from '../app/store';

const Comments: React.FC = ()=>{

    const movieCmnts = useSelector((state: RootState) => (state.movieComments.movieComments));
    console.log(movieCmnts);
    console.log('hey');
    console.log(movieCmnts);

    return(
        <div>
            {

                movieCmnts.map((current)=>(
                    <div>
                        <h3>{current.id}</h3>
                        <ul>
                            {                    
                                current.comments.map((comment) => (<li>{comment.user} {comment.rating}/5: {comment.comment}</li>))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    );
}

export default Comments;