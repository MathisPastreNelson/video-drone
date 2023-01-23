import "../src/style/index.css"
import Header from './components/Header';
import VideoCarousel from './components/VideoCarousel'
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <VideoCarousel />
      <Footer />
    </div>
  );
}

export default App;
