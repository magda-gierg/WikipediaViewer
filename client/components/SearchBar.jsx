import React from 'react'

export default class SearchBar extends React.Component {

  constructor() {
    super()
    this.state = {
      searchTerm: ''
    }
  }

  handleInputChange(event) {
    this.setState({searchTerm: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    let searchTerm = this.state.searchTerm.trim(); // remove whitespace at the beginning and end

    if (!searchTerm) {
      return;
    }

    this.props.onSearch(searchTerm)
    this.setState({searchTerm: ''})
  }

  render() {
    return (<div className="search-box-container">
      <h2>Hi, I'm a Wikipedia Viewer</h2>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input className="search-box-text" type="text" placeholder="search for something..." onChange={this.handleInputChange.bind(this)} value={this.state.searchTerm}/>
      </form>
      <p className="random-text">
        <small>here you can find a <a href="http://en.wikipedia.org/wiki/Special:Random" target="_blank">random article</a></small>
      </p>
    </div>);
  }
}
