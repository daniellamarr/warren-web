const headerComponent = `
  <header>
    <div class="logo">
      <img src="images/logo-small-dark.png" width="100px" />
    </div>
    <div class="mobile-menu">
      <i class="ti ti-menu"></i>
    </div>
    <nav class="nav">
      <ul>
        <li>
          <a href="#about">About Warren</a>
        </li>
        <li>
          <a href="#partners">Partners</a>
        </li>
        <li>
          <a href="#team">FAQs</a>
        </li>
        <li>
          <a href="#download">Download</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  </header>
`;

const footerComponent = `
  <footer>
    <div class="footer-logo">
      <img src="images/logo-small-dark.png" width="100px" />
    </div>
    <div class="footer-bars">
      <div class="bars footer-about-warren">
        <p>
          Warren is a property of Warren Financial Technologies, A company duly registered<br /> with
          CAC with RC Number: 1583084.
        </p>
        <p>
          Warren makes it easier for users to invest in a range of assets, from money market funds<br />
          to physical assets. Users can invest, monitor your investments and redeem rewards on<br />
          your investments easily from our app.
        </p>
      </div>
      <div class="bars">
        <h1>Contact Us</h1>
        <ul>
          <li>
            37b Ladoke Akintola Street,<br />
            Ikeja Lagos, Nigeria
          </li>
          <li>
            08129195074
          </li>
          <li>
            <a href="mailto:hello@warrenapp.xyz">hello@warrenapp.xyz</a>
          </li>
        </ul>
      </div>
      <div class="bars">
        <h1>Company</h1>
        <ul>
          <li><a href="">About</a></li>
          <li><a href="./faq.html">FAQs</a></li>
          <li><a href="./termsandconditions.html">Terms and Conditions</a></li>
          <li><a href="./policy.html">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
    <div class="clear"></div>
    <div class="footer-end">
      <p>
        Copyright 2019 Warren Financial Technologies Limited.<br /> All rights reserved
      </p>
    </div>
  </footer>
`

const headerTag = document.getElementById('header');
headerTag.innerHTML = headerComponent;

const footerTag = document.getElementById('footer');
footerTag.innerHTML = footerComponent;
