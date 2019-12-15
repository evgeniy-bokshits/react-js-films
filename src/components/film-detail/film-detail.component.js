import React, { Component } from 'react';
import './film-detail.component.scss';
import {Link} from 'react-router-dom';

class FilmDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            film: {}
        }
    }

    render() {
        const {poster_path, title, vote_average, genres, release_date, runtime, overview} = this.state.film;
        return (
            <div className="film-detail__wrapper">
                <div className="film-detail__header">
                    <span><b>netflix</b>roulette</span>
                    <Link to={'/'}>Search</Link>
                </div>
                <div className="film-detail">
                    <div className="film-detail__img">
                       <img alt="poster" src={poster_path}/>
                    </div>
                    <div className="film-detail__description">
                        <div className="title-wrapper">
                            <div className="film-detail__title">
                                {title}
                            </div>
                            <div className="film-detail__rating">
                                {vote_average}
                            </div>
                        </div>
                        <div className="film-detail__genres">
                            {genres && genres.map( genre => <span key={genre}>{genre} </span>)}
                        </div>
                        <div className="release-wrapper">
                            <div className="film-detail__release">
                                <span>{release_date && release_date.slice(0, 4)}</span> year
                            </div>
                            <div className="film-detail__runtime">
                                {runtime ? <span>{runtime}<span> min</span></span> : ''}
                            </div>
                        </div>
                        <div className="film-detail__overview">
                            {overview}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FilmDetailComponent;