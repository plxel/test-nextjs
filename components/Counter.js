import React from 'react';
import { connect } from 'react-redux'
import { addCounter, fetchRepository } from '../store';
import Router from 'next/router'

export default connect(state => state)(({ counter, repository, dispatch }) => {
  return (
    <div>
      <h1>Counter</h1>
      
      <div>
        Current: {counter}
      </div>
      <div>
        Repository:
        <div>
            {repository.full_name}
        </div>
      </div>

      <div>
        <select value={repository.id} onChange={
            (e) => {
                dispatch(fetchRepository(e.target.value));
                const href = window.location.origin + window.location.pathname + '?counter=' + (counter) + "&repId=" + e.target.value;
                const as = href
                Router.push(href, as)
            }}>
            <option value="1">First</option>
            <option value="2">Second</option>
        </select>
      </div>

      <div>
        <button onClick={() => {
            dispatch(addCounter()) 
            const href = window.location.origin + window.location.pathname + '?counter=' + (counter + 1) + "&repId=" + repository.id;
            const as = href
            Router.push(href, as)
           
        }}>Add</button>
      </div>
    </div>
  )
})
