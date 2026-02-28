import React from "react";

function Input({title,setTitle,description,setDescription}) {

  return (
    <div className="layout-column justify-content-center align-items-center">
      <input className="w-100" type="text" placeholder="Enter Title" value={title} onChange={(e)=>setTitle(e.target.value)} data-testid="title-input" />
      <textarea className="mt-10 w-100" placeholder="Enter Description" value={description} onChange={(e)=>setDescription(e.target.value)} data-testid="description-input" />
    </div>
  );
}

export default Input;


function PostDisplay({ data, setData }) {

  const handleDelete = (id) => {
    setData(data.filter((d, index) => index !== id))
  }
  return (
    <>

      <div data-testid="posts-container" className="flex wrap gap-10">
        {data.map((d, index) => (
          <div className="post-box" key={index}>
            <h3>{d.title}</h3>
            <p>{d.description}</p>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>

    </>
  );
}
export default PostDisplay;

import React from "react";
import Input from "./Input";
import PostDisplay from "./PostDisplay";

function Home() {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const [data, setData] = React.useState([]);

  const handleCreatePost = (e) => {
    e.preventDefault();
   if(!title.trim() || !description.trim()) {
    console.log("All fields required.")
    return
   }
      setData(data => [...data, { title, description }]);
      console.log(data);
      setTitle("");
      setDescription("");
    
    
  }
  return (
    <div className="text-center ma-20">
      <div className="mb-20">
        <Input title={title} description={description} setTitle={setTitle} setDescription={setDescription} />
        <button onClick={(e) => handleCreatePost(e)} data-testid="create-button" className="mt-10">
          Create Post
        </button>
      </div>
      <div className="posts-section">
        <PostDisplay data={data} setData={setData} />
      </div>
    </div>
  );
}

export default Home;

