function isNumb(fld) {
  var t = fld.value;
  for (var i = 0; i < t.length; i++) {
    var ch = t.charAt(i);
    if ((ch < "0" || ch > "9") && !(ch == "," || ch == "." || ch == "-")) {
      alert("Не цифра");
      fld.focus();
      fld.select();
      return false;
    }
  }
  return true;
}

function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function calculate() {
  var functionType = document.getElementById("function").value;
  var startAngle = parseFloat(
    document.getElementById("startAngle").value.replace(",", ".")
  );
  var endAngle = parseFloat(
    document.getElementById("endAngle").value.replace(",", ".")
  );
  var step = parseFloat(
    document.getElementById("step").value.replace(",", ".")
  );

  if (isNaN(startAngle) || isNaN(endAngle) || isNaN(step)) {
    alert("Будь ласка, введіть коректні числові значення");
    return;
  }

  if (step <= 0) {
    alert("Крок повинен бути більше 0");
    return;
  }

  if (startAngle > endAngle) {
    alert("Початковий кут не може бути більше кінцевого");
    return;
  }

  var resultWindow = window.open(
    "",
    "results",
    "width=800,height=600,scrollbars=yes"
  );

  var html = `
        <!DOCTYPE html>
        <html lang="uk">
        <head>
            <meta charset="UTF-8">
            <title>Результати обчислень</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 20px;
                    background-color: #f5f5f5;
                }
                .container {
                    background-color: white;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }
                h1 {
                    text-align: center;
                    color: #333;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 20px;
                }
                th, td {
                    border: 1px solid #ddd;
                    padding: 10px;
                    text-align: center;
                }
                th {
                    background-color: #4CAF50;
                    color: white;
                    font-weight: bold;
                }
                tr:nth-child(even) {
                    background-color: #f9f9f9;
                }
                .close-btn {
                    margin-top: 20px;
                    padding: 10px 20px;
                    background-color: #f44336;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                }
                .close-btn:hover {
                    background-color: #da190b;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Таблиця значень функції ${functionType}(x)</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Кут в градусах</th>
                            <th>Кут в радіанах</th>
                            <th>${functionType}(x)</th>
                        </tr>
                    </thead>
                    <tbody>
    `;

  for (var angle = startAngle; angle <= endAngle; angle += step) {
    var radians = degreesToRadians(angle);
    var result;

    switch (functionType) {
      case "sin":
        result = Math.sin(radians);
        break;
      case "cos":
        result = Math.cos(radians);
        break;
      case "tan":
        result = Math.tan(radians);
        break;
    }

    html += `
            <tr>
                <td>${angle.toFixed(0)}</td>
                <td>${radians.toFixed(4)}</td>
                <td>${result.toFixed(4)}</td>
            </tr>
        `;
  }

  html += `
                    </tbody>
                </table>
                <button class="close-btn" onclick="window.close()">Закрити вікно</button>
            </div>
        </body>
        </html>
    `;

  resultWindow.document.write(html);
  resultWindow.document.close();
}
