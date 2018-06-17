import React from 'react'
import SearchBar from './SearchBar'
import ResultList from './ResultList'
import superagent from 'superagent'
import jsonp from 'superagent-jsonp'

export default class WikipediaViewer extends React.Component {
  constructor() {
    super()
    this.state = {
            results: [
                '', [], [], []
            ]
        }
    }

  // handleSearch(searchTerm) {
  //       superagent.get('https://en.wikipedia.org/w/api.php')
  //           .query({
  //               search: searchTerm,
  //               action: 'opensearch',
  //               format: 'json'
  //           })
  //           .use(jsonp)
  //           .end((error, response) => {
  //              if (error) {
  //                  console.error(error)
  //              } else {
  //                  this.setState({ results: response.body })
  //              }
  //           })
  //   }




    handleSearch(searchTerm) {
        $.ajax({
            type: 'GET',
            url: 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + searchTerm,
            jsonpCallback: 'jsonCallback',
            contentType: "application/json",
            dataType: 'jsonp',
            success: (data) => {
                this.setState({ results: data });
            },
            error: (error) => {
                console.error(error);
            }
        });
    }

    render() {
        return(
            <div className="wrapper">
                <SearchBar onSearch={this.handleSearch.bind(this)}/>
                <ResultList results={this.state.results}/>
            </div>
        );
    }
}
