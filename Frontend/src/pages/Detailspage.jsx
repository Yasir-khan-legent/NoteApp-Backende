import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function DetailsPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/auth/note/${id}`)
      .then(res => res.json())
      .then(result => setData(result));
  }, []);

  if (!data) return <h2>Loading...</h2>;

  return (
    <div className="details-page">
      <h1>{data.title}</h1>
      <p>{data.note}</p>
      <p>Status: {data.status}</p>
    </div>
  );
}
