import {ActionButton} from '../button/index.jsx';
import {BASE_CLASS} from './settings.js';
import PropTypes from "prop-types";

export const PlayerCard = ({track}) => {
    const {title, artCover} = track;
    return (
        <div className={`${BASE_CLASS}Container`}>
            <h1>{title}</h1>
            <img className={`${BASE_CLASS}ArtCover`} src={artCover} alt="player"/>
            <div className={`${BASE_CLASS}Controls`}>
                <ActionButton icon={<i className="fa-solid fa-backward"></i>}/>
                <ActionButton icon={<i className="fa-solid fa-play"></i>}/>
                <ActionButton icon={<i className="fa-solid fa-forward"></i>}/>
            </div>
        </div>
    );
};

PlayerCard.propTypes = {
    track: PropTypes.shape({
        title: PropTypes.string.isRequired,
        artCover: PropTypes.string.isRequired,
    }).isRequired,
}

