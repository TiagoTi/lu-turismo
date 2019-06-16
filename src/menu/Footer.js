import React from 'react';
import './Footer.sass';


function Footer() {
  return (
    <footer className="footer">
        <p className="you-can">Você pode conhecer o mundo!</p>
        <div className="contact-us">
          <div className="row">
            <div className="col-4">
              <p>oi</p>
            </div>
            <div className="col-8">
            <form>
            <div className="row">
              <div className="col-6"><input type="text" className="custom" />
            </div>
              <div className="col-6">
              <textarea className="custom"></textarea>
              </div>
            </div>
          </form>
            </div>
          </div>
          
        </div>
    </footer>
  );
}

export default Footer;
