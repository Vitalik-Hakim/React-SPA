import "./App.css";
import React from "react";

const App = () => {
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) => 
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Stories</h1>
      <hr />
      <Search />
      <List list={stories} />
    </div>
  ); // Declare them here
};

// const Apple = () => {
//   return <div>...</div>;
// };
const List = (props) => {
  // We use the props to use data or vars from other functions
  return props.list.map((item) => {
    return (
      <div key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </div>
    );
  });
};

const Search = (props) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  // B

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={props.onSearch} />

      <p>
        Searching for <strong>{searchTerm}</strong>.
      </p>
    </div>
  );
};

export default App;
