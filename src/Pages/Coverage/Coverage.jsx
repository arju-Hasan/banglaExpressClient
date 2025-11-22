import React, { useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import Container from "../../Components/Container";

const Coverage = () => {
  const position = [23.81, 90.37];
  const serviceCentars = useLoaderData();

  const mapRef = useRef(null);

  const [searchText, setSearchText] = useState("");
  const [filtered, setFiltered] = useState(serviceCentars);

  // 🔥 Realtime Search Function
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchText(value);

    if (!value) {
      setFiltered(serviceCentars);
      return;
    }

    // Match district
    const match = serviceCentars.filter((c) =>
      c.district.toLowerCase().includes(value.toLowerCase())
    );

    setFiltered(match);

    // Auto FlyTo first matched area  
    if (match.length > 0) {
      const coord = [match[0].latitude, match[0].longitude];
      mapRef.current.flyTo(coord, 12);
    }
  };

  return (
    <Container>
      <div>
        <h2 className="text-2xl text-primary">We are available in 64 districts</h2>

        {/* Search Bar */}
        <form className="border-2">
          <label className="flex justify-center items-center gap-4 ">
            <svg
              className="h-[1em] pl-10 opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>

            <input
              type="search"
              className="pl-8 grow"
              name="locations"
              placeholder="Search"
              value={searchText}
              onChange={handleSearchChange} // 👈🔥 Realtime search
            />
          </label>
        </form>
      </div>

      <div className="border w-full h-[600px] rounded-4xl m-4">
        <MapContainer
          center={position}
          zoom={7}
          scrollWheelZoom={false}
          className="h-[600px] rounded-4xl"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {filtered.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>{center.district}</strong> <br />
                Service Area: {center.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </Container>
  );
};

export default Coverage;
