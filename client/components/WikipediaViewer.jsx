import React from 'react'
import SearchBar from './SearchBar'
import superagent from 'superagent'
import jsonp from 'superagent-jsonp'

export default class WikipediaViewer extends React.Component {
  constructor() {
    super()
    this.state={
      results: []
    }
  }

    handleSearch(searchTerm) {

    }

    render() {
        return(
            <div className="wrapper">
                <SearchBar onSearch={this.handleSearch.bind(this)}/>
                <ul>
                    <li>Result 1</li>
                    <li>Result 2</li>
                    <li>Result 3</li>
                    <li>...</li>
                </ul>
            </div>
        );
    }
}
