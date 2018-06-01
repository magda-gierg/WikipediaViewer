import React from 'react';
import SearchBar from './SearchBar'

export default class WikipediaViewer extends React.Component {
    render() {
        return(
            <div className="wrapper">
                <input type="text" placeholder="Search for something!"/>
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
