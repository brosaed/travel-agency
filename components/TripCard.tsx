import {Link} from "react-router";
const TripCard = ({id, name, location, imageUrl, tags, price}:
TripCardProps) => {
    return (
        <Link to ={path.pathname === '/' || path.pathname.startsWith(searchString:'/travel') ? `/travel/${id}` : `/trips/${id}`} className="trip-card">
            <img src={imageUrl} alt={name} />
        </Link>
    )
}
export default TripCard
