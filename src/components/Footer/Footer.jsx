import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex obcaecati quas commodi quisquam dolor magnam voluptatum vel, quia impedit, natus vero nam autem eius perferendis unde expedita itaque? Tempora, culpa!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
                </div>
            
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy & Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+91 9876543210</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copy-right'>Copyright 2024 © Tomato.com - All Rights Reserved with 💗 B A B J I</p>
    </div>
  )
}

export default Footer
