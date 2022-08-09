import React, { Component } from 'react'
import SpeechService from '../services/SpeechService'

class Speech extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       said: ''
    }
    this.getSpeechList = this.getSpeechList.bind(this)
  }
  async getSpeechList () {
    try {
      const response = await SpeechService.getSpeechList()
      console.log(response.data)
      this.setState({
        said: response.data[Math.floor(Math.random() * response.data.length)].speech
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
        <div>Speech</div>
        <button onClick={this.getSpeechList}>Get Speech</button>
        <p>{this.state.said}</p>
      </div>
    )
  }
}

export default Speech