const headerComponent = `
  <header>
    <div class="logo">
      <img src="images/logo1.png" width="100px" />
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
          <a href="#team">Team</a>
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
`

const headerTag = document.getElementById('header');
headerTag.innerHTML = headerComponent;
