import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import Approval from "./Approval";
import Faker from "faker";


const App = () => {
    return (
      <div className=" ui container comments">
        <Approval>
          <CommentDetail
          author="Sam"
          time="Today at 4:00AM"
          content="what"
          image={Faker.image.avatar()}
          />
        </Approval>
        <CommentDetail
          author="Tom"
          time="Today at 5:00PM"
          content="when"
          image={Faker.image.avatar()}
          />
        <CommentDetail
          author="Ant"
          time="Today at 2:00PM"
          content="why"
          image={Faker.image.avatar()}
          />
      </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));

// https://semantic-ui.com/
// cdn - https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css
// https://github.com/marak/Faker.js/
// -> stage 2 proposal class properties
// intersection observers - image loading


