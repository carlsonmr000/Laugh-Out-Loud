// import { useEffect, useState } from "react";
// // import { AiOutlineSearch } from "react-icons/ai";
// import "./Search.css";

// const Search = (props) => {
//   const { jokes, setJokeList } = props;
//   const [input, setInput] = useState("");

//   useEffect(() => {
//     setJokeList(jokes);
//   }, [setJokeList, jokes]);

//   const handleChange = (e) => {
//     setInput(e.target.value);
//     setJokeList(
//       [...jokes].filter((joke) =>
//         joke.title.toLowerCase().includes(e.target.value.toLowerCase())
//       )
//     );
//   };

//   return (
//     <div className="search-area">
//       <input
//         type="text"
//         placeholder="Search wines by name..."
//         value={input}
//         onChange={handleChange}
//       />
//       {/* <button>
//         <AiOutlineSearch size="50px" />
//       </button> */}
//     </div>
//   );
// };

// export default Search;