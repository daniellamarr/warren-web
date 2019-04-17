const headerComponent = `
  <header>
    <div class="logo">
      <img src="images/logo1.png" width="100px" />
    </div>
    <nav>
      <ul>
        <li>
          <a href="">About Warren</a>
        </li>
        <li>
          <a href="">Team</a>
        </li>
        <li>
          <a href="">FAQs</a>
        </li>
        <li>
          <a href="">Contact Us</a>
        </li>
      </ul>
    </nav>
  </header>
`

const headerTag = document.getElementById('header');
headerTag.innerHTML = headerComponent;
