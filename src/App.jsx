import Peace from "./peace"
function App() {
  const quote = "Just do it."

  return (
    <>
      <h1>Hello, React</h1>
      <Peace />
      <>{quote}</> {/* Evaluated Javascript(means do not use if else) */}
    </>
  )
}

export default App
