import "../styles/Information.css";
import starRegular from "../assets/star-solid-grey.svg";
import starSolid from "../assets/star-solid-red.svg"
import { useParams } from 'react-router-dom';
import data from '../Data.json';


function Information() {

    const { id } = useParams();
    const foundItem = data.find(item => item.id === id);

    const { title, location, tags, host} = foundItem;
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
               
            </div>

            <div>
                
            </div>
            </div>
        </div>
    )
}

export default Information;