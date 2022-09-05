import React from 'react';
import FeedbackItem from './FeedbackItem';

function FeedbackList({feedback, deleteFeedback}) {
    if ( !feedback || feedback.length === 0) {
        return <p>No Review yet</p>
    }
  return (
    <div className='feedback-list'>
        {
            feedback.map( (item) => {
                return <FeedbackItem deleteFeedback={deleteFeedback} key={item.id} item={item} />
            })
        }
    </div>
  )
}

export default FeedbackList