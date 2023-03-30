randomGif = document.getElementById("randomGif");
randomImg = document.getElementById("randomImg");
fetch(
  "https://api.giphy.com/v1/gifs/random?api_key=TmglxmUdyz8XzpmoUS3IIrZYs7N1hnp0&tag=middle+finger&rating=pg-13"
)
  .then((res) => {
    if (res.ok !== true) {
      throw new Error("erreur du fetch");
    }
    console.log("RESPONSE", res);
    return res.json();
  })
  .then((data) => {
    randomGif.src = data.data.embed_url;
    randomImg.src = data.data.ember_url;
    console.log("randomGif", randomGif.src);
  })
  .catch((error) => console.log(error));
