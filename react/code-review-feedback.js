//Question: Code Review Feedback


import React from "react";

const FeedbackSystem = () => {
  const [upvoteRead, setUpvoteRead] = React.useState(0)
  const [downvoteRead, setDownvoteRead] = React.useState(0)
  const [upvotePer, setUpvotePer] = React.useState(0)
  const [downvotePer, setDownvotePer] = React.useState(0)
  const [upvoteSec, setUpvoteSec] = React.useState(0)
  const [downvoteSec, setDownvoteSec] = React.useState(0)
  const [upvoteDoc, setUpvoteDoc] = React.useState(0)
  const [downvoteDoc, setDownvoteDoc] = React.useState(0)
  const [upvoteTest, setUpvoteTest] = React.useState(0)
  const [downvoteTest, setDownvoteTest] = React.useState(0)


  const data = [
    { title: "Readablity", upvote: upvoteRead, setUpvote: setUpvoteRead, downvote: downvoteRead, setDownvote: setDownvoteRead },

    { title: "Performance", upvote: upvotePer, setUpvote: setUpvotePer, downvote: downvotePer, setDownvote: setDownvotePer },

    { title: "Security", upvote: upvoteSec, setUpvote: setUpvoteSec, downvote: downvoteSec, setDownvote: setDownvoteSec },

    { title: "Documentation", upvote: upvoteDoc, setUpvote: setUpvoteDoc, downvote: downvoteDoc, setDownvote: setDownvoteDoc },

    { title: "Testing", upvote: upvoteTest, setUpvote: setUpvoteTest, downvote: downvoteTest, setDownvote: setDownvoteTest },
  ]
  return (
    <>
      <div className="my-0 mx-auto text-center w-mx-1200">
        <div className="flex wrap justify-content-center mt-30 gap-30">

          {data.map((obj, index) => (

            <div key={index} className="pa-10 w-300 card">
              <h2>{obj.title}</h2>
              <div className="flex my-30 mx-0 justify-content-around">
                <button className="py-10 px-15"
                  onClick={() => obj.setUpvote(obj.upvote + 1)} data-testid={`upvote-btn-${index}`}>
                  👍 Upvote
                </button>
                <button className="py-10 px-15 danger"
                  onClick={() => obj.setDownvote(obj.downvote + 1)} data-testid={`downvote-btn-${index}`}>
                  👎 Downvote
                </button>
              </div>
              <p className="my-10 mx-0" data-testid={`upvote-count-${index}`}>
                Upvotes: <strong>{obj.upvote}</strong>
              </p>
              <p className="my-10 mx-0" data-testid={`downvote-count-${index}`}>
                Downvotes: <strong>{obj.downvote}</strong>
              </p>
            </div>
          ))}
        </div>
      </div>

    </>

  );
};

export default FeedbackSystem;
