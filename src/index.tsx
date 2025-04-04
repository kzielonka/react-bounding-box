import React from "react";

export interface Props {
  src: string;
}

const BoundingBoxImage: React.FC<Props> = ({ src }: Props) => {
  return <div><div>Hello World!!!</div><img src={src} /></div>;
};

export default BoundingBoxImage;
