"use client";

import { useState } from "react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  label?: string;
}

export default function WhatsAppButton({
  phoneNumber,
  message = "Hola, me gustaría obtener más información.",
  label = "¿Necesitas ayuda?",
}: WhatsAppButtonProps) {
  const [hovered, setHovered] = useState(false);

  const cleanNumber = phoneNumber.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);
  const href = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        textDecoration: "none",
      }}
    >
      {/* Label tooltip */}
      <span
        style={{
          background: "#fff",
          color: "#111",
          fontSize: "13px",
          fontWeight: 500,
          padding: "8px 14px",
          borderRadius: "8px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
          whiteSpace: "nowrap",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0)" : "translateX(6px)",
          transition: "opacity 0.2s ease, transform 0.2s ease",
          pointerEvents: "none",
        }}
      >
        {label}
      </span>

      {/* Button */}
      <span
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "#25D366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 16px rgba(37,211,102,0.45)",
          transform: hovered ? "scale(1.08)" : "scale(1)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          flexShrink: 0,
        }}
      >
        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="28"
          height="28"
          fill="white"
          aria-hidden="true"
        >
          <path d="M16.003 2.667C8.637 2.667 2.667 8.637 2.667 16c0 2.363.632 4.573 1.733 6.488L2.667 29.333l7.061-1.707A13.28 13.28 0 0 0 16.003 29.333c7.363 0 13.33-5.97 13.33-13.333S23.366 2.667 16.003 2.667zm0 24.222a11.0 11.0 0 0 1-5.611-1.535l-.402-.238-4.19 1.012 1.055-3.987-.263-.41A10.978 10.978 0 0 1 5.001 16c0-6.072 4.93-11.001 11.002-11.001S27.003 9.928 27.003 16s-4.928 10.889-11 10.889zm6.04-8.215c-.33-.165-1.952-.964-2.254-1.073-.302-.11-.522-.165-.742.165-.22.33-.852 1.073-1.045 1.293-.192.22-.385.248-.715.083-.33-.165-1.394-.514-2.657-1.639-.982-.875-1.645-1.956-1.838-2.286-.192-.33-.02-.508.145-.672.148-.147.33-.385.495-.578.165-.192.22-.33.33-.55.11-.22.055-.413-.027-.578-.083-.165-.742-1.789-1.017-2.45-.268-.643-.54-.556-.742-.566l-.633-.011c-.22 0-.578.083-.88.413-.302.33-1.155 1.128-1.155 2.752 0 1.623 1.182 3.192 1.347 3.412.165.22 2.327 3.554 5.638 4.984.788.34 1.402.543 1.88.695.79.25 1.508.215 2.076.13.633-.094 1.952-.799 2.227-1.57.275-.77.275-1.43.192-1.57-.082-.137-.302-.22-.632-.385z" />
        </svg>

        {/* Pulse ring */}
        <span
          style={{
            position: "absolute",
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            border: "2px solid #25D366",
            animation: "wa-pulse 2s ease-out infinite",
            pointerEvents: "none",
          }}
        />
      </span>

      <style>{`
        @keyframes wa-pulse {
          0%   { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(1.7); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes wa-pulse { from, to { opacity: 0; } }
        }
      `}</style>
    </a>
  );
}