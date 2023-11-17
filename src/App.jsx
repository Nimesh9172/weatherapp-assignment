import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import "./App.css";
import CardTitle from "./components/CardTitle/CardTitle";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="body-wrapper">
        <Header />
        <div className="weather-title-card-wrapper">
          <CardTitle />
          <div className="weather-card-wrapper">
            <Card weatherType="snowy" />
            <Card weatherType="rainy" />
            <Card weatherType="windy" />
            <Card weatherType="sunny" />
            <Card weatherType="snowy" />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
