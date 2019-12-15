import React from 'react';
import './search.scss';
import { apiBaseUrl } from "../../infrastructure";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchField: "",
            type: "title"
        };
    }

    handleChangeInput = (event) => {
        this.setState({ searchField: event.target.value });
    };

    handleChangeType = (event) => {
        this.setState({ type: event.target.value });
    };

    handleSubmit = () => {
        fetch(`${apiBaseUrl}?sortBy=release_date&sortOrder=desc&search=${this.state.searchField}&searchBy=${this.state.type}&limit=10`)
            .then(response => response.json())
            .then(result => {
                this.props.changeFilmList(result.data, result.total);
                if (!result.total) {
                    this.setState({ searchField: '' });
                }
            })
    };

    render() {
        return (
            <div className="search-wrapper">
                <div className="search">
                    <div className="search__title">
                        <h1>Find your movie</h1>
                    </div>
                    <div className="search__field">
                        <input type="text" value={this.state.searchField} onChange={this.handleChangeInput} />
                        <button onClick={this.handleSubmit}>Search</button>
                    </div>
                    <div className="search__type">
                        <span>Search by</span>
                        <input type="radio" id="radio-title" name="amount" value="title" defaultChecked={true} onChange={this.handleChangeType} />
                        <label htmlFor="radio-title" className="left-label">Title</label>
                        <input type="radio" id="radio-genre" name="amount" value="genres" onChange={this.handleChangeType} />
                        <label htmlFor="radio-genre" className="right-label">Genre</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;