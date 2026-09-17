/**
 * JS File for UL Springshare Theme
 * Needs to reside at https://library.indianapolis.iu.edu/themes/custom/iui_libraries/js/iui-libguides.js
 */

// Set today's hours in header
$(document).ready(function() {
  // Set Today's Hours
//   var hours_url = 'https://iu.libcal.com/api_hours_today.php?iid=4073&lid=6922&format=json&systemTime=0&callback=?';
//   $.getJSON(hours_url, function (json){
//     var status = json['locations'][0]['times']['status'];
//     if(status == 'open'){
//       var from = json['locations'][0]['times']['hours'][0]['from'];
//       var to = json['locations'][0]['times']['hours'][0]['to']
//       $('#hours_today').text(from + ' - ' + to);
//     }else{
//       var display = status[0].toUpperCase() + status.substring(1);
//       $('#hours_today').text(display);
//     }
//   });
//   // Other Libraries click
//   $("#other-libraries-link").click(function(){
//     if($(this).hasClass("open")){
//       $(this).removeClass("open");
//     }else{
//       $(this).addClass('open');
//     }
//     $('#other-libraries-drop').toggle();
//     return false;
//   });

  const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");

  // Set Color mode toggle switch
  mode = getCookie('color-mode');
  if(mode === 'light') {
    toggleDarkModeSwitch(mode);
  } else if(mode === 'dark' || window.matchMedia("(prefers-color-scheme: dark)").matches){
    toggleDarkModeSwitch(mode);
  } else {
    toggleDarkModeSwitch('light');
  }

  // Add color preference change listener  
  darkModePreference.addEventListener("change", (e) => {
    const newColorScheme = e.matches ? "dark" : "light";
    if(newColorScheme === 'dark'){
      enableDarkMode();
    }else if(newColorScheme === 'light'){
      disableDarkMode();
    }
  });
});

/**
 * Dark Mode Toggle
 */
function enableDarkMode(mode = 'dark'){
  var html_tag = document.getElementsByTagName('html')[0];
  html_tag.classList.remove('light_mode');
  html_tag.classList.add('dark_mode');
  setCookie("color-mode", mode);
  toggleDarkModeSwitch(mode);
}
function disableDarkMode(mode = 'light'){
  var html_tag = document.getElementsByTagName('html')[0];
  html_tag.classList.remove('dark_mode');
  html_tag.classList.add('light_mode');
  setCookie("color-mode", mode);
  toggleDarkModeSwitch(mode);
}

function toggleDarkModeSwitch(mode){
  if(mode == 'dark'){
    document.getElementById('dark-mode-on-btn').classList.add('btn-red');
    document.getElementById('dark-mode-off-btn').classList.remove('btn-red');
  }else{
    document.getElementById('dark-mode-off-btn').classList.add('btn-red');
    document.getElementById('dark-mode-on-btn').classList.remove('btn-red');
  }
}

/*
 * Cookie Functions
 */
function setCookie(cname, cvalue, exdays=1) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}