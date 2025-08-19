import { memo } from 'react';
import logo from "../assets/footer-logo.svg"
import market from "../assets/play-market.svg"
import store from "../assets/app-store.svg"
const Footer = () => {
  return (
    <div className="flex justify-between mx-60 p-5 bg-gray-200">
      <div className="flex-col">
        <img src={`${logo}`} alt="" />
        <img src={`${market}`} alt="" />
        <img src={`${store}`} alt="" />
      </div>
      <div>
        <h3>Info</h3>
        <p>Public offer</p>
        <p>ADS</p>
        <p>F.A.Q</p>
        <p>Contact</p>
      </div>
      <div>
        <h3>Categoriya</h3>
        <p>Movie</p>
        <p>Serial</p>
        <p>Multic</p>
        <p>Anime</p>
      </div>
      <div>
        <h3>Contact Us</h3>
        <p>+998 (95) 897-33-38</p>
        <p>Social Media</p>
        <span>insta facebook youtube</span>
      </div>
    </div>
  );
};

export default memo(Footer);