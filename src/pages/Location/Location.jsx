import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Rating from "../../components/Rating/Rating";
import Details from "../../components/Details/Details";
import { Link } from "react-router-dom";

export default function Location() {
  const [location, setLocation] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch("/logements.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const location = data.find((location) => location.id === id);
        setLocation(location);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <div key={location.id}>
        <h1 className="Location__title">{location.title}</h1>
        <p className="Location__location">{location.location}</p>
        <div className="Location__tags">
          {location.tags.map((tag) => (
            <span key={tag} className="Location__tags__tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="Location__host">
          <h2 className="Location__host__name">{location.host.name}</h2>
          <img
            className="Location__host__avatar"
            src={location.host.picture}
            alt=""
          />
        </div>
        <div className="Location__rating">
          <Rating score={location.rating} />
        </div>
        <Details summary="Description" content={location.description} />
        <Details summary="Équipements" content={location.equipments} />
      </div>
    </>
  );
}
