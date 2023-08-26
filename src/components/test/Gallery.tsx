import React, { useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";

const image1 = "/gallery/images/0.jpg";
const image2 = "/gallery/images/1.jpg";
const image3 = "/gallery/images/2.jpg";
const image4 = "/gallery/images/3.jpg";
const image5 = "/gallery/images/4.jpg";
const images = [image1, image2, image3, image4, image5];

const width = 500;

function Gallery({ imageArray = images }: { imageArray: string[] }) {
  const carouselRef = useRef();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<-1 | 0 | 1>(0);

  useLayoutEffect(() => {
    console.log(index);
    const button = document.querySelectorAll("button");
    let ctx = gsap.context(() => {
      function slide(index: number, multiplier: number) {
        gsap.to(`.image${index}`, {
          x: width * multiplier,
        });
      }
      function slideToRight(index: number, width: number) {
        slide(index, -width);
      }

      function set(index: number, position: number) {
        gsap.set(`.image${index}`, {
          x: position * width,
        });
      }
      const n = imageArray.length - 1;
      if (direction === 1) {
        console.log(index);
        if (index === 0) {
          set(n, -n);
          set(0, 1);
          slide(n, -n - 1);
          slide(0, 0);
          return;
        }
        set(index - 1, -index + 1);
        set(index, -index + 1);
        slide(index - 1, -index);
        slide(index, -index);
      }

      if (direction === -1) {
        if (index === n) {
          set(0, 0);
          set(n, -n - 1);
          slide(0, 1);
          slide(n, -n);
        }
        set(index + 1, -index - 1);
        set(index, -index - 1);
        slide(index + 1, -index);
        slide(index, -index);
      }
    }, carouselRef);

    return () => {
      ctx.revert();
    };
  }, [index, direction]);

  function nextSlide() {
    if (index === imageArray.length - 1) {
      setIndex(0);
      setDirection(1);
      return;
    }
    setIndex((index) => index + 1);
    setDirection(1);
  }
  function prevSlide() {
    if (index === 0) {
      setIndex(imageArray.length - 1);
      setDirection(-1);
      return;
    }
    setIndex((index) => index - 1);
    setDirection(-1);
  }

  return (
    <div className="flex flex-row p-8 justify-center items-center">
      <button className="p-4 bg-slate-400 h-fit mr-3" onClick={prevSlide}>
        Prev
      </button>
      <div
        ref={carouselRef}
        className="carousel h-[300px] w-[500px] bg-blue-500 flex flex-row overflow-hidden"
      >
        {imageArray.map((image, index) => (
          <div
            className={`image${index} h-[300px] w-[500px] object-cover flex-shrink-0`}
            key={image}
          >
            <img src={image} alt="" className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
      <button className="p-4 bg-slate-400 h-fit ml-3" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
}

export default Gallery;
