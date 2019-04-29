const sidenavComponent = `
  <div class="nav">
    <ul>
      <li>
        <a href="#about">About Warren</a>
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
  </div>
`;

const asideTag = document.getElementById('sidenav');
asideTag.innerHTML = sidenavComponent;

$('.mobile-menu').click(function(){
  $('#sidenav').toggleClass('active');
})

$('#sidenav a').click(function(){
  $('#sidenav').toggleClass('active');
})
