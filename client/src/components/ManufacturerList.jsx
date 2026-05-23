// React
import { useEffect } from "react";

// Components
import SeriesList from "./SeriesList";

export default function ManufacturerList({ manufacturers }) {
  // Automatically scrolls to the top of the page
  useEffect(() => {
    document
      .querySelector(".main-page-title")
      .scrollIntoView({ behavior: "smooth" });
  }, []);

  if (!Array.isArray(manufacturers)) {
    return (
      <h2>Loading manufacturers</h2>
    )
  }

  return (
    <>
      <h1 className="main-page-title">Graphics Cards Catalog</h1>
      <div className="gpu-tables">
        {manufacturers.map(manufacturer => (
          <div
            key={manufacturer.id}
            className={manufacturer.id}
          >
            <ul>
              <h2>{manufacturer.name}</h2>
            </ul>
            {manufacturer.series.map(s => (
              <SeriesList key={s.id} series={s} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}