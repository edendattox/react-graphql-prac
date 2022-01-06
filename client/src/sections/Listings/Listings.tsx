import * as React from "react";

interface Props {
  title: string;
}

export const Listings: React.FC<Props> = ({title}) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}

 
