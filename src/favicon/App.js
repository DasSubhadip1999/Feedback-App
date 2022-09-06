import Header from "./components/Header";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import {v4 as uuidv4} from "uuid";
import Footer from "./components/Footer";
function App() {
  const [feedback , setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if(window.confirm("Are you sure you want to delete?")){
      setFeedback( (item) => {
        return item.filter( (i) => {
          return i.id !== id;
        })
      })
    }
  }

  const addFeedback = (fdbk) => {
    fdbk.id = uuidv4();
    setFeedback( (prev) => {
      return [fdbk,...prev]
    })
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} deleteFeedback={deleteFeedback} />
      </div>
      <Footer />
    </>
  );
}

export default App;
