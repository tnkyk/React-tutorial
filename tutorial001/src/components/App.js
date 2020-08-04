import React,{ useReducer } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'


import Events from './Events'
import EventForm from './EventForm'
import reducer from '../reducers/index'

import AppContext from '../contexts/AppContext'

const App = () => {
  //reducerの使い方,dispatchは状態遷移を行う時に呼ばれる
  const [state,dispatch] = useReducer(reducer,[])

  return (
    <AppContext.Provider value={"Hello.I'm provider"}>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch}/>
        <Events state={state} dispatch={dispatch}/>
      </div>
    </AppContext.Provider>

  );
}

export default App;
