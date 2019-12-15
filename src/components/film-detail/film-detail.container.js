import React, { Component } from 'react';
import {apiBaseUrl} from '../../infrastructure';
import {withRouter, Link} from 'react-router-dom';

import FilmDetailComponent from './film-detail.component';

class FilmDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            film: {}
        }
    }

    componentDidMount() {
        fetch(`${apiBaseUrl}/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(result => {
                this.setState({film: result});
            })
    }

    render() {
        <FilmDetailComponent film={this.state.film} />
    }
}

export default withRouter(FilmDetail);