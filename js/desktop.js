window.onload = () => {
  document.querySelector(".start-menu-open").onclick = (_) => { // when button is clicked
    document.querySelector('.start-menu').classList.toggle('open'); // get the start menu and open it
  };

  // add this after the last code
  var span = document.querySelector('.time');
  function time() {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    span.textContent =
      // uncomment below for normal time
      // ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
      (h > 12 ? h - 12 : (h < 1 ? '12' : h)) + ":" + ("0" + m).substr(-2) + ' ' + (h > 11 ? 'PM' : 'AM');
  }
  time();
  setInterval(time, 1000);

  // Create and display the settings window
  let wbSettings = WinBox({
    title: 'System Settings',
    html: document.querySelector('[data-wintemplate="settings"]').innerHTML,
    class: ['no-full'],
    x: "center",
    y: "center",
    minwidth: '700',
    minheight: '460',
    width: '895',
    height: '580',
    
  });
  
}