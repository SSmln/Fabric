import Image from "next/image";

export default function Home() {
  var canvas = new fabric.Canvas("canvas");

  var rect = new fabric.Rect({
    top: 100,
    left: 100,
    width: 60,
    height: 70,
    fill: "red",
  });

  canvas.add(rect);
  // "add" rectangle onto canvas
  return <div>{}</div>;
}
