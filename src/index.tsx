import React, { useRef, useEffect, useState } from "react";

export interface Props {
  src: string;
}

const BoundingBoxImage: React.FC<Props> = ({ src }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [drawing, setDrawing] = useState(false);
  const [mouseDownCoords, setMouseDownCoords] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) {
      return;
    }
    ctx.strokeStyle = "blue"; 
    ctx.lineWidth = 3;
    ctx.strokeRect(50, 50, 150, 100); 
  }, [canvasRef]);

  const handleMouseDown = (event: React.MouseEvent<HTMLCanvasElement>) => {
    console.log('MOUSE DOWN');
    if (!canvasRef.current) {
      return;
    }
    const canvasRect = canvasRef.current.getBoundingClientRect();
    setDrawing(true);
    setMouseDownCoords([event.clientX - canvasRect.x, event.clientY - canvasRect.y]);
  }

  const handleMouseUp = (event: React.MouseEvent<HTMLCanvasElement>) => {
    console.log('MOUSE UP');
    if (!canvasRef.current) {
      return;
    }
    const canvasRect = canvasRef.current.getBoundingClientRect();
    const [x1, y1] = mouseDownCoords;
    const [x2, y2] = [event.clientX - canvasRect.x, event.clientY - canvasRect.y];
    const [w, h] = [x2 - x1, y2 - y1];
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) {
      return;
    }
    ctx.clearRect(0, 0, canvasRect.width, canvasRect.height);
    ctx.strokeStyle = "blue"; 
    ctx.lineWidth = 3;
    ctx.strokeRect(x1, y1, w, h); 
    setDrawing(false);
  }

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) {
      return;
    }
    if (!drawing) {
      return;
    }
    const canvasRect = canvasRef.current.getBoundingClientRect();
    const [x1, y1] = mouseDownCoords;
    const [x2, y2] = [event.clientX - canvasRect.x, event.clientY - canvasRect.y];
    const [w, h] = [x2 - x1, y2 - y1];
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) {
      return;
    }
    ctx.clearRect(0, 0, canvasRect.width, canvasRect.height);
    ctx.strokeStyle = "blue"; 
    ctx.lineWidth = 3;
    ctx.strokeRect(x1, y1, w, h);
  }

  return (
    <div>
        <div>Hello World!!!</div>
        <img src={src} />
        <canvas 
          ref={canvasRef} 
          width="1000" 
          height="1000" 
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        />
    </div>
  );
};

export default BoundingBoxImage;
