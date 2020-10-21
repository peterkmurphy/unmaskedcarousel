import React, { Component } from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

export default class App extends Component {
  render() {
    const testFolder = "/unmasked/";
    const unmaskedFiles = [
      "IMG_0049.jpg",
      "IMG_0305.jpg",
      "IMG_0365.jpg",
      "IMG_2466.jpg",
      "Megan 2.jpg",
      "IMG_0120.jpg",
      "IMG_0321.jpg",
      "IMG_0380.jpg",
      "IMG_9323.jpg",
      "Megan.jpg",
      "IMG_0142.jpg",
      "IMG_0339.jpg",
      "IMG_0400.jpg",
      "IMG_9751.JPG",
      "Paul copy.jpg",
      "IMG_0155.jpg",
      "IMG_0341.jpg",
      "IMG_0433.jpg",
      "IMG_9925.JPG",
      "text.jpg",
      "IMG_0296.jpg",
      "IMG_0352.jpg",
      "IMG_0441.jpg",
      "Megan 1.jpg",
    ];

    const items = []

    for (const [index, value] of unmaskedFiles.entries()) {
      items.push(<img key={index} src={`/unmasked/${value}`} height="800" alt={value} />)
    }


    return (
      <Carousel autoPlay={3000} animationSpeed={1000} infinite={true}>
        {items}
      </Carousel>
    );
  }
}
