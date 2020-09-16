// write your createStore function here
function createStore(reducer){
//need to pass a reducer placeholder in here, sets it up to reeive a reducer must pass in an argument
  let state;

function dispatch(action){//take in an action
  state = reducer(state, action);//updating the variable state by calling reducer and render
  render()
}

function getState(){

  return state;
}

return {
  dispatch,
  getState
}
}


function candyReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}
//this is where you pass in the specific reducer
let store = createStore(candyReducer);
// assign it to whatever is returned by the createStore function you've written when it is passed the candyReducer function.
function render() {
  let container = document.getElementById('container');
  if(store.getState()) {
    container.textContent = store.getState().join(' ')
  } else {
    console.log(store.getState())
    throw new Error("the store's state has not been defined yet")
  }
};

store.dispatch({type: "default"})
//change state by sending the reducer objects which represents action
//every reducer is expected to have a type property
//type is a property that represents the action name
//default is returning an empty array since this was in line 23

// use your createStore function and the functions provided here to create a store
// once the store is created, call an initial dispatch


