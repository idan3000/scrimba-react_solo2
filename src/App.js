import React from "react";
import NavBar from "./components/NavBar";
import AllLocals from "./components/AllLocals";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <AllLocals />
    </React.Fragment>
  );
};

// const App = () => {
//   return (
//     <React.Fragment>
//       <Local {...data[0]} />
//     </React.Fragment>
//   );
// };

export default App;
