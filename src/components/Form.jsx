export default function Form() {
  return (
    <section className="form-section">
      <div>
        <p>Number of Travellers</p>
        <div className="input-sec-style">
          <button className="math-btn">-</button>
          <span>1</span>
          <button className="math-btn">+</button>
        </div>
      </div>
      <form>
        <label htmlFor="city-from-name">
          Flying from
          <input type="text" name="city-from" />
        </label>
        <label htmlFor="city-to-name">
          Flying to
          <input type="text" name="city-to" />
        </label>
        <label htmlFor="from-date">
          From Date
          <input type="date" name="from-date" />
        </label>
        <label htmlFor="to-date">
          To Date
          <input type="date" name="to-date" />
        </label>
        <label htmlFor="budget">
          Budget
          <input type="number" name="budget" />
        </label>
        <button className="submit-btn">Plan my trip!</button>
      </form>
    </section>
  );
}
