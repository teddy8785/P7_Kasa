import "../styles/Information.css";
import starRegular from "../assets/star-solid-grey.svg";
import starSolid from "../assets/star-solid-red.svg"
import { useParams } from 'react-router-dom';
import data from '../Data.json';


function Information() {

    const { id } = useParams();
    const foundItem = data.find(item => item.id === id);

    const { title, location, tags, host, rating} = foundItem;
    const { name: hostName, picture: hostPicture } = host;

    return (
        <div className="information">
            <div className="information__content">
                <h1 className="information__title">{title}</h1>
                <p className="information__location">{location}</p>
                <div className="information__filters--content">
                    {tags.map((tag, index) => (
                        <p key={`${tag}-${index}`} className="information__filters">{tag}</p>
                    ))}
                </div>
            </div>
            <div className="information__portrait">
            <div className="information__host">
                <p className="information__name">{hostName}</p>
                <img className="information__photo" src={hostPicture} alt={`portrait de ${hostName}`} />
            </div>
            <div className="information__rating">
                {Array.from({ length: rating }).map((_, index) => (
                    <img key={`star-${index}`} src={starSolid} alt="Étoile pleine" className="information__star" />
                ))}
                {Array.from({ length: 5 - rating }).map((_, index) => (
                    <img key={`empty-star-${index}`} src={starRegular} alt="Étoile vide" className="information__star" />
                ))}
            </div>
            </div>
        </div>
    )
}

export default Information;