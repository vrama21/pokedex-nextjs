const Triangles: React.FC = () => {
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
      <g transform="translate(50 42)">
        <g transform="scale(0.8)">
          <g transform="translate(-50 -50)">
            <polygon fill="#93dbe9" points="72.5 50 50 11 27.5 50 50 50">
              <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="1s"
                values="0 50 38.5;360 50 38.5"
                keyTimes="0;1"
              />
            </polygon>
            <polygon fill="#689cc5" points="5 89 50 89 27.5 50">
              <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="1s"
                values="0 27.5 77.5;360 27.5 77.5"
                keyTimes="0;1"
              />
            </polygon>
            <polygon fill="#5e6fa3" points="72.5 50 50 89 95 89">
              <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="1s"
                values="0 72.5 77.5;360 72 77.5"
                keyTimes="0;1"
              />
            </polygon>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Triangles;
