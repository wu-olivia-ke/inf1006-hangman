import React from "react";

const Images = ({ wrongLetters }) => {
  const errors = wrongLetters.length;

  return (
    <svg
      height="500"
      width="500"
      className="figure-container"
      viewBox="-80 -25 250 400"
    >
      {/* Head and happy face */}
      {errors > 0 && (
        <>
          <circle
            cx="100"
            cy="60"
            r="40"
            stroke="black"
            stroke-width="4"
            fill="#fde9d9"
          />
          <circle
            cx="80"
            cy="60"
            r="3"
            stroke="black"
            stroke-width="2"
            fill="#FFFFFF"
          />
          <circle
            cx="120"
            cy="60"
            r="3"
            stroke="black"
            stroke-width="2"
            fill="#FFFFFF"
          />
        </>
      )}

      {/* { errors >0 && <path d="M 85 75 Q 100 95 115 75" stroke="black" stroke-width="3" fill="none" />} */}

      {/* mouth-1 , -2, -3, -4 */}
      {errors > 0 && errors < 2 && (
        <path
          d="M 85 75 Q 100 95 115 75"
          stroke="black"
          stroke-width="3"
          fill="none"
        />
      )}

      {errors > 1 && errors < 3 && (
        <path
          d="M 85 75 Q 100 85 115 75"
          stroke="black"
          stroke-width="4"
          fill="none"
        />
      )}

      {errors > 2 && errors < 4 && (
        <path
          d="M 85 75 Q 100 75 115 75"
          stroke="black"
          stroke-width="4"
          fill="none"
        />
      )}
      {errors > 3 && errors < 5 && (
        <path
          d="M 85 75 Q 100 65 115 75"
          stroke="black"
          stroke-width="4"
          fill="none"
        />
      )}
      {errors > 4 && errors < 6 && (
        <path
          d="M 85 75 Q 100 55 115 75"
          stroke="black"
          stroke-width="4"
          fill="none"
        />
      )}

      {/* {dead eyes} */}
      {/* <circle cx="80" cy="60" r="6" stroke="black" stroke-width="3" fill="#FF0000" />
      <circle cx="120" cy="60" r="6" stroke="black" stroke-width="3" fill="#FF0000" />
      <circle cx="100" cy="80" r="10" stroke="black" stroke-width="3" fill="#FF0000" /> */}

      {/* Body */}
      {errors > 1 && (
        <rect
          x="80"
          y="100"
          width="40"
          height="80"
          stroke="black"
          stroke-width="4"
          fill="#ffb6c1"
        />
      )}

      {/* Arms */}
      {errors > 2 && (
        <rect
          x="10"
          y="120"
          width="70"
          height="15"
          stroke="black"
          stroke-width="4"
          fill="#ffb6c1"
        />
      )}
      {errors > 3 && (
        <rect
          x="120"
          y="120"
          width="70"
          height="15"
          stroke="black"
          stroke-width="4"
          fill="#ffb6c1"
        />
      )}

      {/* Legs */}
      {errors > 4 && (
        <rect
          x="70"
          y="180"
          width="20"
          height="70"
          stroke="black"
          stroke-width="4"
          fill="#ffb6c1"
        />
      )}
      {errors > 5 && (
        <rect
          x="110"
          y="180"
          width="20"
          height="70"
          stroke="black"
          stroke-width="4"
          fill="#ffb6c1"
        />
      )}

      {/* {dead eyes} */}
      {errors > 5 && (
        <>
          <circle
            cx="80"
            cy="60"
            r="6"
            stroke="black"
            stroke-width="3"
            fill="#FF0000"
          />
          <circle
            cx="120"
            cy="60"
            r="6"
            stroke="black"
            stroke-width="3"
            fill="#FF0000"
          />
          <circle
            cx="100"
            cy="80"
            r="10"
            stroke="black"
            stroke-width="3"
            fill="#FF0000"
          />
        </>
      )}

      {/* hanging structure */}

      <rect
        x="-70"
        y="-25"
        width="170"
        height="10"
        stroke="black"
        stroke-width="4"
        fill="#8B4513"
      />
      <rect
        x="-70"
        y="-25"
        width="10"
        height="320"
        stroke="black"
        stroke-width="4"
        fill="#8B4513"
      />
      <line x1="100" y1="-25" x2="100" y2="20" stroke="black" />
      <rect
        x="-80"
        y="290"
        width="100"
        height="10"
        stroke="black"
        stroke-width="4"
        fill="#8B4513"
      />
      <line
        x1="-60"
        y1="30"
        x2="5"
        y2="-15"
        stroke="black"
        stroke-width="8"
        fill="#8B4513"
      />
      {/* <line x1="140" y1="20" x2="140" y2="50" stroke="black" />
      <line x1="60" y1="20" x2="60" y2="230" stroke="black"/>
      <line x1="20" y1="230" x2="100" y2="230"stroke="black"  />  */}
    </svg>
  );
};

export default Images;
