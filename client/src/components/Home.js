import axios from "axios";
import React, { useState } from "react";

export default function Home() {
  const [link, setLink] = useState("");
  let input = document.querySelector(".gif-input");

  //   when user clicks search, find the gif they want
  function Api() {
    let gifInput = document.querySelector(".gif-input").value;
    if (gifInput.includes(" ")) {
      gifInput = gifInput.replace(" ", "+");
    }
    axios
      .get(
        "https://api.giphy.com/v1/gifs/random?api_key=w15WD7FHy2rE7T6gooRflQqykXuC7GYF&tag=" +
          gifInput +
          "&rating=g"
      )
      .then(function (res) {
        let src = res.data.data.images.downsized.url;
        setLink(src);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //   when page loads, grab a gif with cute cats
  window.onload = function () {
    axios
      .get(
        "https://api.giphy.com/v1/gifs/random?api_key=w15WD7FHy2rE7T6gooRflQqykXuC7GYF&tag=cute+cat&rating=g"
      )
      .then(function (res) {
        let src = res.data.data.images.downsized.url;
        setLink(src);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      document.querySelector("button").click();
    }
  });

  return (
    <div>
      <h1>Gif Search Engine</h1>
      <input
        type="text"
        className="gif-input"
        placeholder="Search a GIF"
      ></input>
      <br />
      <button onClick={Api}>Find Gif</button>
      <img src={link}></img>
    </div>
  );
}
