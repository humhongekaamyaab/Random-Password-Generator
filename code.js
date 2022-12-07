 
<html>
  
<head>
    <title>
        Generate a Random Password
        using JavaScript
    </title>
</head>
  
<body style="text-align:center;">
      
    <h1 style="color: green"> 
        Java Script Math Function 
    </h1>
      
    <h3>
        Click on the button to
        generate random password.
    </h3>
      
    <button onclick="gfg_Run()">
        Click Here
    </button>
    <br>
      
    <div>
        <p id="geeks"></p>
    </div>
      
    <script>
        var el_down = document.getElementById("geeks");
  
        /* Function to generate combination of password */
        function generateP() {
            var pass = '';
            var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
                    'abcdefghijklmnopqrstuvwxyz0123456789@#$';
              
            for (let i = 1; i <= 8; i++) {
                var char = Math.floor(Math.random()
                            * str.length + 1);
                  
                pass += str.charAt(char)
            }
              
            return pass;
        }
  
        function gfg_Run() {
            el_down.innerHTML = generateP();
        }
    </script>
</body>
  
</html>
