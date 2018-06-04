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
  handleSubmit(event) {
       event.preventDefault()
       let searchTerm = this.state.searchTerm.trim() // trim() method removes whitespace from both ends of a string
            
       this.props.onSearch(searchTerm)
   }

  render() {
    return (
      <div className="search-box-container" >
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input className="search-bar-text" type="text" placeholder="Search for something" onChange={this.handleInputChange.bind(this)} value={this.state.searchTerm}/>
        </form>
        <p className="random-text"><a href="http://en.wikipedia.org/wiki/Special:Random" target="_blank">random article</a></p>
      </div>
    );
  }
}
