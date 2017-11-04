import React from "react";

import BoardContainer from "./boards/board_container";

const App = () => {
  return (
    <div className='app'>
      <BoardContainer title="Urgent"/>
      <BoardContainer title="Today"/>
      <BoardContainer title="Tomorrow"/>
    </div>
  )
}

export default App;
