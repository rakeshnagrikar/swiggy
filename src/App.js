import logo from './logo.svg';
import './App.css';
import parathaImg from './images/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png';
import chineseImg from './images/6ef07bda-b707-48ea-9b14-2594071593d1_Chinese.png';
import northIndianImg from './images/6ef07bda-b707-48ea-9b14-2594071593d1_North Indian.png';
import pizzasImg from './images/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png';
import biryaniImg from './images/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png';
import theobromaImg from './images/qhfw858zccsx8kph6tch.jpg';
import chaayosImg from './images/5116a385bac0548e06c33c08350fbf11.jpg';
import brooklynCreameryImg from './images/4fe8d129-44fd-469e-9eda-a1416a6dffcd_36014.JPG';
import shravanSpecialsImg from './images/e0839ff574213e6f35b3899ebf1fc597.jpg';

function App() {
  return (
    <>
     <div className="App">
      <h2>What's on your mind?</h2>
      <div className="food-items">
        <div className="food-item">
          <img src={parathaImg} alt="Paratha" />
          <p>Paratha</p>
        </div>
        <div className="food-item">
          <img src={chineseImg} alt="Chinese" />
          <p>Chinese</p>
        </div>
        <div className="food-item">
          <img src={northIndianImg} alt="North Indian" />
          <p>North Indian</p>
        </div>
        <div className="food-item">
          <img src={pizzasImg} alt="Pizzas" />
          <p>Pizzas</p>
        </div>
        <div className="food-item">
          <img src={biryaniImg} alt="Biryani" />
          <p>Biryani</p>
        </div>
      </div>

      <h2>Top restaurant chains in Pune</h2>
      <div className="restaurant-items">
        <div className="restaurant-item">
          <img src={theobromaImg} alt="Theobroma" />
          <div className="details">
            <h3>15% OFF</h3>
            <h4>Theobroma</h4>
            <p>4.4 · 25-30 mins</p>
            <p>Desserts, Wakad Road</p>
          </div>
        </div>
        <div className="restaurant-item">
          <img src={chaayosImg} alt="Chaayos" />
          <div className="details">
            <h3>ITEMS AT 3199</h3>
            <h4>Chaayos Chai+Snacks=Relax</h4>
            <p>4.5 · 25-30 mins</p>
            <p>Bakery, Beverages, Chaat, Desserts, Hinjawadi</p>
          </div>
        </div>
        <div className="restaurant-item">
          <img src={brooklynCreameryImg} alt="Brooklyn Creamery" />
          <div className="details">
            <h3>50% OFF UPTO 3100</h3>
            <h4>The Brooklyn Creamery</h4>
            <p>4.2 · 35-40 mins</p>
            <p>Desserts, Ice Cream, Healthy Food, Hinjawadi</p>
          </div>
        </div>
        <div className="restaurant-item">
          <img src={shravanSpecialsImg} alt="Shravan Specials" />
          <div className="details">
            <h3>ITEMS AT 3159</h3>
            <h4>Shravan Specials by XYZ</h4>
            <p>4.4 · 30-35 mins</p>
            <p>Biryani, North Indian, Desserts, Hinjawadi</p>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}

export default App;
