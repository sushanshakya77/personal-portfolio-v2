"use client";
import { useEffect } from "react";
import Navbar from "../../components/shared/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const canvas = document.getElementById("noise") as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext("2d", {
        willReadFrequently: true,
      });

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const drawNoise = () => {
        if (ctx) {
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const data = imageData.data;
          for (let i = 0; i < data.length; i += 4) {
            const color = Math.random() * 255;
            data[i] = color;
            data[i + 1] = color;
            data[i + 2] = color;
            data[i + 3] = 255;
          }
          ctx.putImageData(imageData, 0, 0);
          requestAnimationFrame(drawNoise);
        }
      };

      drawNoise();

      setTimeout(() => {
        canvas.classList.add("noise-animate");
      }, 0);
    }
  }, []);
  return (
    <>
      <canvas
        id="noise"
        className="fixed inset-0 w-full h-full pointer-events-none z-[9999] opacity-[0.03]"
      ></canvas>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
