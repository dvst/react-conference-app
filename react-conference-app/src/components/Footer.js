// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start mt-4">
      <div className="text-center p-3">
      <p>Derechos reservados © {new Date().getFullYear()}</p>
        <a className="text-dark" href="https://github.com/dvst/react-conference-app">https://github.com/dvst/react-conference-app</a>
      </div>
    </footer>
  );
}

export default Footer;