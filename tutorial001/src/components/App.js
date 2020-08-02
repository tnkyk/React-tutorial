import React,{ useState,useReducer } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

import Event from './Event'
import reducer from '../reducers/index'

const App = () => {
  //reducerの使い方,dispatchは状態遷移を行う時に呼ばれる
  const [state,dispatch] = useReducer(reducer,[])
  const [title,setTitle] = useState('')
  const [body,setBody] = useState('')


  const addEvent = e => {
    e.preventDefault()
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body,
    })

    setTitle('')
    setBody('')
  }

  const deleteAllEvents = e => {
    e.preventDefault()
    const result  = window.confirm('全てのイベントを本当に削除しても良いですか？')
    if (result) dispatch({type:'DELETE_ALL_EVENTS'})
  }


  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)}></input>
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)}></textarea>
        </div>

        <button className="btn btn-primary" onClick={addEvent} disabled={title === '' || body === ''}>イベントを作成</button>
        <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0}>全てイベントを削除する</button>
      </form>

      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
          </tr>
        </thead>
        <tbody>
        {state.map((event,index) => (<Event key={index} event={event} dispatch={dispatch}/>))}

        </tbody>
      </table>
    </div>
  );
}

export default App;
