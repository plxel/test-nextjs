import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import 'isomorphic-fetch'
export const reducer = (state = { lastUpdate: 0, light: false, counter : 0, repository : {} }, action) => {
  switch (action.type) {
    case 'TICK': return { ...state, lastUpdate: action.ts, light: !!action.light }
    case 'ADD_COUNTER': return { ...state, counter : state.counter + 1 }
    case 'INIT_COUNTER': return { ...state, counter : action.value }
    case 'RECEIVE_REPOSITORY': return {...state, repository : action.data}
    default: return state
  }
}

export const startClock = () => dispatch => {
  return setInterval(() => dispatch({ type: 'TICK', light: true, ts: Date.now() }), 800)
}

export const initCounter = (value) => dispatch => {
  return dispatch({ type : 'INIT_COUNTER', value })
}

export const addCounter = () => dispatch => {
  return dispatch({ type : 'ADD_COUNTER' })
}

export const fetchRepository = (repId) => dispatch => {
  //return (dispatch) => {
    let url = 'http://5915b3cb5e17bd0011f6b89e.mockapi.io/api/reps/' + repId;
    
    fetch(url).then(response => response.json())
    .then((json) => {
      dispatch(receiveRepository(json))
    })
 // }
}

export const receiveRepository = (data) => dispatch => {
  return dispatch({ type: 'RECEIVE_REPOSITORY', data })
}

export const initStore = (initialState) => {
  return createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
}
