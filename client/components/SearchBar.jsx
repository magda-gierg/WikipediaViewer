import React from 'react';

export default class SearchBar extends React.Component {
    render() {
        return (
            <div className="search-box-container" >
                <form>
                    <input className="search-box-text" type="text" placeholder="Search for something..."/>
                </form>
                <p className="random-text"><a href="http://en.wikipedia.org/wiki/Special:Random" target="_blank">random article</a></p>
            </div>
        );
    }
}
