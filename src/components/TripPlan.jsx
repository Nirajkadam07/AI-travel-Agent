export default function TripPlan() {
  return (
    <section className="trip-section">
      <h1>Your Trip</h1>
      <div className="trip-dates">
        <div className="blue-bg">30th May 26</div>
        <div className="blue-bg">5th Jun 26</div>
      </div>
      <div className="blue-bg">New York City → Paris</div>
      <h3>Weather</h3>
      <p className="blue-bg light-font">
        You can expect the weather to be quite mild. Low will be 19° and high
        will be 25°
      </p>
      <h3>Flights</h3>
      <section className="blue-bg">
        <p className="light-font">
          The best option for you is with Delta Airlines with a layover in Oslo
        </p>
        <button className="submit-btn">Book</button>
      </section>
      <h3>Hotel</h3>
      <section className="blue-bg">
        <p className="light-font">
          We recommend you stay at the Premiere Inn hotel in central Paris
        </p>
        <button className="submit-btn">Book</button>
      </section>
    </section>
  );
}
