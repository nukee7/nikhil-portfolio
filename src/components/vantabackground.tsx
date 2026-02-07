import React, { useEffect, useRef } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

type Props = {
  children: React.ReactNode;
};

const VantaBackground: React.FC<Props> = ({ children }) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      vantaEffect.current = NET({
        el: vantaRef.current,
        THREE,

        mouseControls: true,
        touchControls: true,
        gyroControls: false,

        color: 0x4f46e5,
        backgroundColor: 0x050505,

        maxDistance: 22,
        spacing: 18,

        points: 12,        // 👈 Important
        showDots: true,    // 👈 Important
      });
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 300);
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <>
      <div
        ref={vantaRef}
        className="fixed inset-0 -z-10 w-full h-full"
      />
      <div className="relative z-0">
        {children}
      </div>
    </>
  );
};

export default VantaBackground;