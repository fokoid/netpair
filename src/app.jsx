import React, { Component } from 'react'
import { render } from 'react-dom'
import AceEditor from 'react-ace'
import Title from './title.jsx'
import StatusBar from './status-bar.jsx'
import ToolBox from './toolbox.jsx'

class App extends Component {
  constructor() {
    super()

    this.state = {
      message: 'Hello, Net::Pair!',
      tools: {
        'timer': true,
        'news': true,
        'chat': false,
        'video': false,
      },
    }
  }

  render() {
    return (
      <div>
        <Title title="Net::Pair" />
        <div>
          <AceEditor />
          <ToolBox tools={this.state.tools} />
        </div>
        <StatusBar message={this.state.message} />
      </div>
    )
  }
}

render(<App />, document.getElementById('main'))
