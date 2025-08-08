import React from "react";
import "./EffortlessSection.css";
import vrPerson from "../assets/vr-person.png";

const features = [
  {
    label: "Tasking",
    color: "#F9C6B0",
    icon: "✓",
  },
  {
    label: "Vendor",
    color: "#E6E6E6",
    icon: "🏪",
  },
  {
    label: "Amenities",
    color: "#C7C7F9",
    icon: "🎮",
  },
  {
    label: "Maintenance",
    color: "#D6F9C7",
    icon: "🔧",
  },
  {
    label: "Developer",
    color: "#E6F0F9",
    icon: "👷",
  },
  {
    label: "Reporting",
    color: "#B0D6F9",
    icon: "📊",
  },
];

export default function EffortlessSection() {
  const radius = 275;

  return (
    <section className="effortless-section">
      <div className="content-wrapper">
        <h1 className="main-title">
          Living should be <span className="highlight">Effortless.</span>
        </h1>
        <p className="subtitle">
          We've eliminated the friction between residents, staff, and service providers.
        </p>
        
        <div className="circle-container">
          <img src={vrPerson} alt="Person with VR headset" className="vr-person" />
          
          <div className="features-circle">
            <div className="circle-ring"></div>
            {features.map((feature, i) => {
              const angle = (i / features.length) * 2 * Math.PI;
              const x = radius * Math.cos(angle - Math.PI / 2);
              const y = radius * Math.sin(angle - Math.PI / 2);
              // Calculate the rotation needed to keep the box upright
              const circleRotation = (i / features.length) * 360;
              
              return (
                <div
                  key={feature.label}
                  className={`feature feature-${i + 1}`}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    backgroundColor: feature.color,
                    '--circle-rotation': `${circleRotation}deg`,
                  }}
                >
                  <div className="feature-content">
                    <div className="icon">{feature.icon}</div>
                    <span className="label">{feature.label}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pulse rings for enhanced visual effect */}
          <div className="pulse-ring pulse-ring-1"></div>
          <div className="pulse-ring pulse-ring-2"></div>
        </div>
      </div>
    </section>
  );
}