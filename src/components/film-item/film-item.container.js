import React from 'react';
import {withRouter} from 'react-router-dom';
import './film-item.component.scss';

class FilmItem extends React.Component {
    constructor(props) {
        super(props);
        this.showFilmInfo = this.showFilmInfo.bind(this);
    }

    showFilmInfo() {
        this.props.history.push('/film/' + this.props.info.id);
    }

    render() {
        const {poster_path, title, release_date, genres} = this.props.info;
        return (
            <div className="film">
                <div className="film__img" onClick={this.showFilmInfo}>
                    <img alt="poster" src={poster_path}/>
                </div>
                <div className="film__description">
                    <div className="film__title" onClick={this.showFilmInfo}>{title}</div>
                    <div className="film__release">{release_date.slice(0, 4)}</div>
                    <div className="film__genres">{genres.map( genre => <span key={genre}>{genre} </span>)}</div>
                </div>
            </div>
        );
    }
}

export default withRouter(FilmItem);