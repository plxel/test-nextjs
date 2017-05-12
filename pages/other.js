import React from 'react'
import { initStore, startClock } from '../store'
import withRedux from 'next-redux-wrapper'
import Page from '../components/Page'
import Counter from '../components/Counter';
class Other extends React.Component {
  static getInitialProps ({ store, isServer }) {
    store.dispatch({ type: 'TICK', light: !isServer, ts: Date.now() })
    return { isServer }
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
      <Page title='Other Page' linkTo='/' />
      <Counter />
      </div>
    )
  }
}

export default withRedux(initStore)(Other)
