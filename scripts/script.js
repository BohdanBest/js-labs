function upperCase(str) {
  if (!str || str.length === 0) {
    return "String's not starts with uppercase character";
  }

  const firstChar = str.charAt(0);
  if (firstChar >= "A" && firstChar <= "Z") {
    return "String's starts with uppercase character";
  } else {
    return "String's not starts with uppercase character";
  }
}

function testTask1() {
  const input = document.getElementById("task1-input").value;
  const result = upperCase(input);
  const resultDiv = document.getElementById("task1-result");

  if (result.includes("starts with uppercase")) {
    resultDiv.className = "result success";
  } else {
    resultDiv.className = "result info";
  }
  resultDiv.textContent = result;
}

function checkEmailSimple(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function testTask2() {
  const input = document.getElementById("task2-input").value;
  const result = checkEmailSimple(input);
  const resultDiv = document.getElementById("task2-result");

  if (result) {
    resultDiv.className = "result success";
    resultDiv.textContent = "true";
  } else {
    resultDiv.className = "result error";
    resultDiv.textContent = "false";
  }
}

function findDbdPattern(str) {
  const regex = /d(b+)(d)/gi;
  const matches = [];
  let match;

  while ((match = regex.exec(str)) !== null) {
    matches.push([match[0], match[1], match[2]]);
  }

  return matches;
}

function testTask3() {
  const input = document.getElementById("task3-input").value;
  const matches = findDbdPattern(input);
  const resultDiv = document.getElementById("task3-result");

  if (matches.length > 0) {
    resultDiv.className = "result success";
    let resultText = "Знайдені збіги:\n";
    matches.forEach((match, index) => {
      resultText += `Збіг ${index + 1}: [${match
        .map((m) => `"${m}"`)
        .join(", ")}]\n`;
    });
    resultDiv.innerHTML = "<pre>" + resultText + "</pre>";
  } else {
    resultDiv.className = "result info";
    resultDiv.textContent = "Збігів не знайдено";
  }
}

function swapWords(str) {
  const regex = /(\w+)\s+(\w+)/;
  return str.replace(regex, "$2, $1");
}

function testTask4() {
  const input = document.getElementById("task4-input").value;
  const result = swapWords(input);
  const resultDiv = document.getElementById("task4-result");

  resultDiv.className = "result success";
  resultDiv.textContent = `Результат: "${result}"`;
}

function validateCardNumber(cardNumber) {
  const cardRegex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
  return cardRegex.test(cardNumber);
}

function testTask5() {
  const input = document.getElementById("task5-input").value;
  const result = validateCardNumber(input);
  const resultDiv = document.getElementById("task5-result");

  if (result) {
    resultDiv.className = "result success";
    resultDiv.textContent = "Номер карти валідний!";
  } else {
    resultDiv.className = "result error";
    resultDiv.textContent =
      "Номер карти невалідний! Формат: 9999-9999-9999-9999";
  }
}

function checkEmail(email) {
  if (email.startsWith("_") || email.startsWith("-")) {
    return false;
  }

  if (email.includes("--")) {
    return false;
  }

  const emailRegex = /^[a-zA-Z0-9][a-zA-Z0-9_-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const localPart = email.split("@")[0];
  const allowedCharsRegex = /^[a-zA-Z0-9_-]+$/;

  return emailRegex.test(email) && allowedCharsRegex.test(localPart);
}

function testTask6() {
  const input = document.getElementById("task6-input").value;
  const result = checkEmail(input);
  const resultDiv = document.getElementById("task6-result");

  if (result) {
    resultDiv.className = "result success";
    resultDiv.textContent = "Email is correct!";
  } else {
    resultDiv.className = "result error";
    resultDiv.textContent = "Email is not correct!";
  }
}

function checkLogin(login) {
  const loginRegex = /^[a-zA-Z][a-zA-Z0-9]{1,9}$/;
  const isValidLogin = loginRegex.test(login);

  const numberRegex = /\d+(?:\.\d+)?/g;
  const numbers = login.match(numberRegex) || [];

  return {
    valid: isValidLogin,
    numbers: numbers,
  };
}

function testTask7() {
  const input = document.getElementById("task7-input").value;
  const result = checkLogin(input);
  const resultDiv = document.getElementById("task7-result");

  let resultText = `${result.valid}\n`;
  if (result.numbers.length > 0) {
    resultText += `Знайдені числа: ${result.numbers.join(", ")}`;
  } else {
    resultText += "Числа не знайдені";
  }

  if (result.valid) {
    resultDiv.className = "result success";
  } else {
    resultDiv.className = "result error";
  }

  resultDiv.innerHTML = "<pre>" + resultText + "</pre>";
}

document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll('input[type="text"]');
  inputs.forEach((input, index) => {
    input.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        const taskNumber = index + 1;
        switch (taskNumber) {
          case 1:
            testTask1();
            break;
          case 2:
            testTask2();
            break;
          case 3:
            testTask3();
            break;
          case 4:
            testTask4();
            break;
          case 5:
            testTask5();
            break;
          case 6:
            testTask6();
            break;
          case 7:
            testTask7();
            break;
        }
      }
    });
  });
});
