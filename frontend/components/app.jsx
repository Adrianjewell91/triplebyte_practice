import React from "react";

import Board from "./boards/board";
import NewTask from './boards/new_task';

export const App = () => {
  return (
    <div>
      <div className='kanban'>
      <Board title="Urgent" className="one"/>
      <Board title="Tomorrow" className="two"/>
      <Board title="This Week" className="three"/>
      </div>
      <NewTask title="Urgent"/>
      <NewTask title="Tomorrow"/>
      <NewTask title="This Week"/>
    </div>
  )

}
