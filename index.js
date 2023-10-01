var quote = document.querySelector("#quote");

document.querySelector("#gen").addEventListener("click", function () {
  fetch("https://api.quotable.io/random")
    .then(function (response) {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      var author = data["author"];
      var text = data["content"];
      console.log(`${text} - ${author}`);
      quote.innerHTML = `${text}`;
      quote.setAttribute("class", "blockquote mb-0");
    });
});
