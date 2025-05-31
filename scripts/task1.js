function updateStatus(message) {
  document.getElementById("status").textContent = message;
}

function windowDemo() {
  updateStatus("Створюємо нове вікно 300x300...");

  const newWindow = window.open(
    "",
    "_blank",
    "width=300,height=300,left=100,top=100"
  );

  if (!newWindow) {
    updateStatus("Не вдалося створити вікно. Можливо, заблоковано браузером.");
    return;
  }

  newWindow.document.write(`
        <html>
            <head>
                <title>Демо вікно</title>
                <style>
                    body { 
                        font-family: Arial, sans-serif; 
                        text-align: center; 
                        padding: 20px; 
                        background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
                        color: white;
                    }
                </style>
            </head>
            <body>
                <h2>Демонстраційне вікно</h2>
                <p>Розмір: 300x300</p>
            </body>
        </html>
    `);

  setTimeout(() => {
    updateStatus("Змінюємо розмір на 500x500...");
    newWindow.resizeTo(500, 500);
    newWindow.document.body.innerHTML = `
            <h2>Демонстраційне вікно</h2>
            <p>Розмір: 500x500</p>
        `;

    setTimeout(() => {
      updateStatus("Переміщуємо вікно в точку (200, 200)...");
      newWindow.moveTo(200, 200);
      newWindow.document.body.innerHTML = `
                <h2>Демонстраційне вікно</h2>
                <p>Розмір: 500x500</p>
                <p>Позиція: (200, 200)</p>
            `;

      setTimeout(() => {
        updateStatus("Закриваємо вікно...");
        newWindow.close();
        updateStatus("Демонстрацію завершено! Можете запустити знову.");
      }, 2000);
    }, 2000);
  }, 2000);
}

document.getElementById("startDemo").addEventListener("click", windowDemo);
