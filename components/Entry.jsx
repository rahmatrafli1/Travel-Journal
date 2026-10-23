import marker from "../images/marker.png";

export default function Entry() {
  return (
    <article className="entry">
      <img
        className="entry-image"
        src="/images/mount-fuji.png"
        alt="Mount Fuji"
      />
      <div className="entry-info">
        <div className="entry-location">
          <img src={marker} alt="Map marker" />
          <span className="country">JAPAN</span>
          <a
            href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z"
            target="_blank"
            rel="noreferrer"
          >
            View on Google Maps
          </a>
        </div>
        <h2>Mount Fuji</h2>
        <p className="dates">12 Jan, 2021 - 24 Jan, 2021</p>
        <p className="entry-text">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </article>
  );
}
