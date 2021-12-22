const Wedges: React.FC = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          margin: 'auto',
          display: 'block',
          shapeRendering: 'auto',
        }}
        width="250px"
        height="250px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <g transform="translate(50 50)">
          <g transform="scale(0.7)">
            <g transform="translate(-50 -50)">
              <g>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  repeatCount="indefinite"
                  values="0 50 50;360 50 50"
                  keyTimes="0;1"
                  dur="0.7575757575757576s"
                />
                <path fillOpacity="0.8" fill="#93dbe9" d="M50 50L50 0A50 50 0 0 1 100 50Z"></path>
              </g>
              <g>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  repeatCount="indefinite"
                  values="0 50 50;360 50 50"
                  keyTimes="0;1"
                  dur="1.0101010101010102s"
                />
                <path fillOpacity="0.8" fill="#689cc5" d="M50 50L50 0A50 50 0 0 1 100 50Z" transform="rotate(90 50 50)"></path>
              </g>
              <g>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  repeatCount="indefinite"
                  values="0 50 50;360 50 50"
                  keyTimes="0;1"
                  dur="1.5151515151515151s"
                />
                <path fillOpacity="0.8" fill="#5e6fa3" d="M50 50L50 0A50 50 0 0 1 100 50Z" transform="rotate(180 50 50)"></path>
              </g>
              <g>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  repeatCount="indefinite"
                  values="0 50 50;360 50 50"
                  keyTimes="0;1"
                  dur="3.0303030303030303s"
                />
                <path fillOpacity="0.8" fill="#3b4368" d="M50 50L50 0A50 50 0 0 1 100 50Z" transform="rotate(270 50 50)"></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Wedges;
