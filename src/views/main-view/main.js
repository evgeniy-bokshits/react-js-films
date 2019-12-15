import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './main.scss';
import { apiBaseUrl } from "../../infrastructure";
import { ErrorBoundary, Search} from '../'
import { FilmContainer, FilmDetail }  from '../../components/';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films : [],
            total : 0
        };
    }

    componentDidMount() {
        fetch(`${apiBaseUrl}?sortBy=release_date&sortOrder=desc&searchBy=title&limit=10`)
            .then(response => response.json())
            .then(result => {
                this.setState({films: result.data, total: result.total});
            })
    }

    changeFilmContainer = (films, total) => {
        this.setState({films: films, total: total});
    };

    findFilmsByGenre(genre) {
        fetch(`${apiBaseUrl}?sortBy=release_date&sortOrder=desc&search=${genre}&searchBy=genres&limit=10`)
            .then(response => response.json())
            .then(result => {
                this.setState({films: result.data, total: result.total});
            })
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/film/:id">
                        <FilmDetail  />
                    </Route>
                    <Route path="/" exact>
                        <Search changeFilmContainer={this.changeFilmContainer}/>
                    </Route>
                </Switch>
                <ErrorBoundary>
                    <FilmContainer films={this.state.films} total={this.state.total}/>
                </ErrorBoundary>
            </Router>
        )
    }
}

export default Main;