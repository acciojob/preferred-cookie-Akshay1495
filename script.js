//your JS code here. If required.
 const preferencesForm = document.getElementById("preferences-form");
      const fontsizeInput = document.getElementById("fontsize");
      const fontcolorInput = document.getElementById("fontcolor");

      // Get saved preferences
      const fontsize = getCookie("fontsize");
      const fontcolor = getCookie("fontcolor");
      if (fontsize) {
        document.documentElement.style.setProperty("--fontsize", fontsize);
        fontsizeInput.value = fontsize;
      }
      if (fontcolor) {
        document.documentElement.style.setProperty("--fontcolor", fontcolor);
        fontcolorInput.value = fontcolor;
      }

      // Save preferences on form submit
      preferencesForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Set cookies
        setCookie("fontsize", fontsizeInput.value, 365);
        setCookie("fontcolor", fontcolorInput.value, 365);

        // Update page styles
        document.documentElement.style.setProperty(
          "--fontsize",
          fontsizeInput.value + "px"
        );
        document.documentElement.style.setProperty(
          "--fontcolor",
          fontcolorInput.value
        );
      });

      // Functions to set and get cookies
      function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
      }

      function getCookie(name) {
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookies = decodedCookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i];
          while (cookie.charAt(0) === " ") {
            cookie = cookie.substring(1);
          }
          if (cookie.indexOf(name + "=") === 0) {
            return cookie.substring(name.length + 1, cookie.length);
          }
        }
        return "";
      }