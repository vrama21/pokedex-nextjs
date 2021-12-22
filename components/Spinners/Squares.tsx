const Squares: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        margin: 'auto',
        display: 'block',
        shapeRendering: 'auto',
      }}
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <g transform="translate(26.666666666666668,26.666666666666668)">
        <rect x="-20" y="-20" width="40" height="40" fill="#93dbe9">
          <animateTransform
            attributeName="transform"
            type="scale"
            repeatCount="indefinite"
            dur="1s"
            keyTimes="0;1"
            values="1.1500000000000001;1"
            begin="-0.3s"
          />
        </rect>
      </g>
      <g transform="translate(73.33333333333333,26.666666666666668)">
        <rect x="-20" y="-20" width="40" height="40" fill="#689cc5">
          <animateTransform
            attributeName="transform"
            type="scale"
            repeatCount="indefinite"
            dur="1s"
            keyTimes="0;1"
            values="1.1500000000000001;1"
            begin="-0.2s"
          />
        </rect>
      </g>
      <g transform="translate(26.666666666666668,73.33333333333333)">
        <rect x="-20" y="-20" width="40" height="40" fill="#5e6fa3">
          <animateTransform
            attributeName="transform"
            type="scale"
            repeatCount="indefinite"
            dur="1s"
            keyTimes="0;1"
            values="1.1500000000000001;1"
            begin="0s"
          />
        </rect>
      </g>
      <g transform="translate(73.33333333333333,73.33333333333333)">
        <rect x="-20" y="-20" width="40" height="40" fill="#3b4368">
          <animateTransform
            attributeName="transform"
            type="scale"
            repeatCount="indefinite"
            dur="1s"
            keyTimes="0;1"
            values="1.1500000000000001;1"
            begin="-0.1s"
          />
        </rect>
      </g>
    </svg>
  );
};

export default Squares;
