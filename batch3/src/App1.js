const fruits = ["Apple", "Banana", "Orange"];
function App() {
  return (
    <div>
      {fruits.map((fruit) => (
        <p key={fruit}>{fruit}</p>
      ))}
    </div>
  );
}