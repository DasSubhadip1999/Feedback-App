import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm() {
    const [text, setText] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");
    const [rating, setRating] = useState(10)
    const handleChange = (event) => {
        let t = event.target.value;
        if( t === "") {
            setBtnDisabled(true);
            setMessage(null);
        }else if ( t !== "" && text.trim().length <= 10) {
            setBtnDisabled(true);
            setMessage("Review must be ten characters long")
        }else{
            setBtnDisabled(false);
            setMessage(null);
        }
        setText(t);
    }
  return (
    <Card>
        <form>
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