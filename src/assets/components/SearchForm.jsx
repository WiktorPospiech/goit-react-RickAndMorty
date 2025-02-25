export default function SearchForm({ getCharacter }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const { name } = form.elements;
    console.log(name.value);
    getCharacter(name.value);
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <button>Search</button>
    </form>
  );
}
