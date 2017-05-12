import React from 'react'
import { initStore, startClock, receiveRepository } from '../store'
import withRedux from 'next-redux-wrapper'
import Page from '../components/Page'
import Counter from '../components/Counter';
import 'isomorphic-fetch'
class Index extends React.Component {
  static async getInitialProps ({ store, isServer, pathname, query }) {
    console.log("index get initial props");
    console.log(query);
    let url = 'http://5915b3cb5e17bd0011f6b89e.mockapi.io/api/reps/' + (query.repId || 1);
    const res = await fetch(url)
    const json = await res.json()
    store.dispatch({ type: 'RECEIVE_REPOSITORY', data : json })
    store.dispatch({ type: 'TICK', light: !isServer, ts: Date.now() });
    //if (query.counter)
    //  store.dispatch({ type: 'INIT_COUNTER', value : +query.counter || 0 });

    return { isServer  }
  }

  componentDidMount () {
    this.timer = this.props.dispatch(startClock())
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <div>
        <Page title='Index Page' linkTo='/other' />
        <Counter />
      </div>
    )
  }
}

export default withRedux(initStore)(Index)
