import React from 'react';

export default class SearchBar extends React.Component {
  constructor() {
    super()
    this.state = {
      serchTerm: ''
    }
  }
  handleInputChange(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }



  render() {
    return (
      <div className="search-bar-container" >
        <form>
          <input className="search-bar-text" type="text" placeholder="Search for something" onChange={this.handleInputChange.bind(this)} value={this.state.searchTerm}/>
        </form>
        <p className="random-text"><a href="http://en.wikipedia.org/wiki/Special:Random" target="_blank">random article</a></p>
      </div>
    );
  }
}
