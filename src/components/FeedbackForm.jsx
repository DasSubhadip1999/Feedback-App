import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm({handleAdd}) {
    const [text, setText] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");
    const [rating, setRating] = useState(10);
    //input change fn
    const handleChange = (event) => {
        let t = event.target.value;
        if( t === "") {
            setBtnDisabled(true);
            setMessage(null);
        }else if ( t !== "" && text.trim(" ").length <= 10) {
            setBtnDisabled(true);
            setMessage("Review must be ten characters long")
        }else{
            setBtnDisabled(false);
            setMessage(null);
        }
        setText(t);
    }
    //form submit fn
    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length > 10) {
            const newFeedback = {text,rating};
            handleAdd(newFeedback)
        }
        setText("");
    }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How do you rate your service with us</h2>
            <RatingSelect select={ rat => setRating(rat)} />
            <div className='input-group'>
                <input onChange={handleChange} value={text} type="text" placeholder="Write your review"></input>
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm