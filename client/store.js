import { createStore } from 'redux';
import { composerWithDevTools } from 'reduc-devtools-extension';
import reducers from './reducers/index';


// adding composeWithDevTools here to get easy access to the Redux dev tools
const store = createStore(
  reducers, // reducers object
  composeWithDevTools() // middleware function 
)

export default store;