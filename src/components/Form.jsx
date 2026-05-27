export default function Form() {
  return (
    <section className="form-section">
      <p>Number of Travellers</p>
      <form>
        <label htmlFor="city-from-name">
          Flying from
          <input type="text" name="city-from" />
        </label>
        <label htmlFor="city-to-name">
          Flying to
          <input type="text" name="city-to" />
        </label>
        <label htmlFor="budget">
          Budget
          <input type="number" name="budget" />
        </label>
        <button>Plan my trip</button>
      </form>
    </section>
  );
}
