import type { ReactElement } from 'react';

const Grid = (): ReactElement => {
  const rows = 48;
  const columns = 48;

  return (
    <div className="pointer-events-none absolute -top-4 left-1/2 -z-50 h-full -translate-x-1/2 bg-gradient-radial-hero from-rusty-600/25 to-transparent">
      {/* 3D effect */}
      {/* <div className="origin-[50%_100%] [transform:perspective(5000px)rotateX(20deg)]"> */}
      {/* Rows */}
      {Array.from({ length: rows }, (_, index) => (
        <div key={index} className="flex">
          {/* Columns */}
          {Array.from({ length: columns }, (_, index) => (
            <div
              key={index}
              className="m-px h-[calc(4rem-2px)] w-[calc(4rem-2px)] flex-initial bg-rusty-950"
            />
          ))}
        </div>
      ))}
      {/* </div> */}
    </div>
  );
};

export default Grid;
