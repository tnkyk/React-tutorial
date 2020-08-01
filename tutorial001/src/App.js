import React, {useState} from 'react';


const App = props => {
  // const initialStates = {
  //   name: '',
  //   price: 1000,
  // }

  const [state,setState] = useState(props)
  const {name,price} = state

  const reset = () => setState(props)


  return (
    <React.Fragment>
      <p>現在の{name}、現在の{price}</p>
      <button onClick={()=>setState({...state,price:state.price+1})}>+1</button>
      <button onClick={()=>setState({...state,price:state.price-1})}>-1</button>
      <button onClick={reset}>Reset</button>
      {/* ...stateはオブジェクトを展開する */}
      <input value={state.name} onChange={e => setState({...state,name: e.target.value})}/>

    </React.Fragment>
  );
}

App.defaultProps = {
  name: '',
  price: 1000
}

export default App;
