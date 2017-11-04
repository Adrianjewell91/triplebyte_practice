import React from "react";

import BoardContainer from "./boards/board_container";

const App = () => {
  return (
    <div className='app'>
      <BoardContainer priority='one' title="Urgent"/>
      <BoardContainer priority='two' title="Today"/>
      <BoardContainer priority='three' title="Tomorrow"/>
    </div>
  )
}

export default App;
