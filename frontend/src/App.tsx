import Calendar from "./components/Calendar";
import Header from "./components/Header";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <Calendar />
            <Table />

          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
