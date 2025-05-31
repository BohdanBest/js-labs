let server = {
  data: 0,
  convertToString: function (callback) {
    callback(() => {
      return this.data + "";
    });
  },
};

let client = {
  server: server,
  result: "",
  calc: function (data) {
    this.server.data = data;
    this.server.convertToString(this.notification());
  },
  notification: function () {
    return (callback) => {
      this.result = callback();
    };
  },
};

document.addEventListener("DOMContentLoaded", function () {
  client.calc(123);

  const resultElement = document.getElementById("result");
  resultElement.textContent = `client.result: "${client.result}"`;

  const typeElement = document.getElementById("type");
  typeElement.textContent = `typeof client.result: "${typeof client.result}"`;
});
