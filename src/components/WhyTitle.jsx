import './WhyTitle.css';

const WhyTitle = () => {
  return (
    <div className="why-title-pure-code" aria-label="WHY INNOVA X? BECAUSE IDEAS DESERVE A BIGGER TOMORROW">
      {/* 1. Top Subtitle 'WHY' */}
      <div className="why-lead-word">W H Y</div>

      {/* 2. Main 3D Metallic Chrome Title 'INNOVA X?' */}
      <div className="why-3d-title-container">
        {/* Layer 1: 3D Extruded Depth Underlayer */}
        <div className="why-title-3d-extrusion" aria-hidden="true">
          <span className="ext-innova">INNOVA</span>
          <span className="ext-x">X</span>
          <span className="ext-q">?</span>
        </div>

        {/* Layer 2: Front Glossy Metallic Chrome Face */}
        <div className="why-title-3d-front">
          <span className="chrome-innova">INNOVA</span>
          <span className="crystal-x">
            X
            {/* Specular Center Flare */}
            <span className="x-glint" aria-hidden="true"></span>
          </span>
          <span className="chrome-q">?</span>
        </div>
      </div>

      {/* 3. Bottom Tagline Subtitle */}
      <div className="why-sub-tagline">
        BECAUSE IDEAS DESERVE A BIGGER TOMORROW
      </div>
    </div>
  );
};

export default WhyTitle;
