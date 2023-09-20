<!DOCTYPE html>
<html>
<head>
    <title>Tablero de Bingo</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1 style="text-align: center;">B I N G O</h1>
    <div id="generador" class="generador">
        <div class="container">
            <div class="vlgnd"><h1 id="valorGenerado" ></h1></div>
            <div class="shadow"></div>
        </div>
        <!-- <div class="btns">
            <button id="activarGenerador" onclick="mostrarValor()">Gen</button>
            <button id="gen" onclick="autoGen()">AutoGen</button>
        </div> -->

    <nav>
        <ul class="nav">
            <li>
            <a href="#" id="activarGenerador" onclick="mostrarValor()">
                <span class="icon-plus-circle" ></span>
                <span class="screen-reader-text" >Home</span>
            </a>
            </li>
            <li>
            <a href="#" id="gen" onclick="autoGen()">
                <span class="icon-loop"></span>
                <span class="screen-reader-text">Settings</span>
            </a></li>
        </ul>
    </nav>




    </div>
    <br>
    <table class="bg">
        <tr id="fila1">
            <th class="bgg">B</th>
        </tr>
        <tr id="fila2">
            <th class="bgg">I</th>
        </tr>
        <tr id="fila3">
            <th class="bgg">N</th>
        </tr>
        <tr id="fila4">
            <th class="bgg">G</th>
        </tr>
        <tr id="fila5">
            <th class="bgg">O</th>
        </tr>
    </table>
    <script src="script.js"></script>
</body>
</html>