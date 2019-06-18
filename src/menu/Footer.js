import React from 'react';
import './Footer.sass';


function Footer() {
  return (
    <footer className="footer" id="contact">
      <p className="you-can">Você pode conhecer o mundo!</p>
      <div className="contact-us">
        <div className="row">
          <div className="col-md-4">
            <p className="address">
              Rua General Telles, 1041<br />
              Centro - Franca-SP<br />
              CEP: 14405-090
            </p>
          </div>
          <div className="col-md-8">
            <form>
              <div className="row-form">
                <div className="item-row">
                  <div className="form-group">
                    <input type="text" className="custom form-control" placeholder="Nome" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="custom form-control" placeholder="Email" />                                                                                                                                                
                  </div>
                  <div className="form-group">
                    <input type="text" className="custom form-control" placeholder="Titulo" />
                  </div>
                </div>
                <div className="item-row">
                  <div className="form-group">
                    <textarea className="custom form-control" rows="5" placeholder="Mensagem"></textarea>
                  </div>
                  <div className="form-group">
                    <input type="submit" className="btn btn-primary" placeholder="Titulo" value="Enviar" />
                  </div>
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
