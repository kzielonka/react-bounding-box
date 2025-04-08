import React, { useRef, useEffect } from "react";

export interface Props {
  src: string;
}

const BoundingBoxImage: React.FC<Props> = ({ src }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) {
      return;
    }
    ctx.strokeStyle = "blue"; 
    ctx.lineWidth = 3;
    ctx.strokeRect(50, 50, 150, 100); 
  }, [canvasRef]);

  return (
    <div>
        <div>Hello World!!!</div>
        <img src={src} />
        <canvas ref={canvasRef} width="1000" height="1000" />
    </div>
  );
};

export default BoundingBoxImage;
