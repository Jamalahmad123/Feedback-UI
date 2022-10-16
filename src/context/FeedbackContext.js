import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is feedback item 1",
      rating: 10,
    },
    {
      id: 2,
      text: "This is feedback item 1",
      rating: 5,
    },
    {
      id: 3,
      text: "This is feedback item 3",
      rating: 7,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    isEdit: false,
  });

  function addFeedback(newFeedback) {
    newFeedback.id = uuidv4();

    setFeedback([newFeedback, ...feedback]);
  }

  function deleteFeedback(id) {
    if (window.confirm("Are You Sure!")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  }

  function editFeedback(item) {
    setFeedbackEdit({
      item,
      isEdit: true,
    });
  }

  function updateFeedback(id, updFeedback) {
    setFeedback(
      feedback.map((item) => {
        // if (item.id === id) {
        //   return { ...item, ...updFeedback };
        // } else {
        //   return item;
        // }
        return item.id === id ? { ...item, ...updFeedback } : item;
      })
    );
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
