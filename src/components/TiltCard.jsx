import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function TiltCard({ children, className = '', isZeroG = false }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for X & Y mouse position (normalized from -0.5 to 0.5)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for smooth rotation and translation
  const springConfig = { damping: 25, stiffness: 120, mass: 0.6 };
  
  // Rotation levels (3D Tilt)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);
  
  // Translation (Magnet effect)
  const translateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  const translateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-8, 8]), springConfig);

  // Parallax glow effect coordinates
  const glowX = useSpring(useTransform(mouseX, [-0.5, 0.5], ['0%', '100%']), springConfig);
  const glowY = useSpring(useTransform(mouseY, [-0.5, 0.5], ['0%', '100%']), springConfig);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Normalized position from -0.5 to 0.5
    const width = rect.width;
    const height = rect.height;
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    
    const x = (clientX / width) - 0.5;
    const y = (clientY / height) - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  // Antigravity drift configurations (4px drift over 6s for standard, 8px drift over 7s for Zero-G)
  const driftY = isZeroG 
    ? [-8, 8, -8] 
    : [-4, 4, -4];
    
  const driftX = isZeroG
    ? [-6, 6, -6]
    : [0, 0, 0];

  const driftRotate = isZeroG
    ? [-1, 1, -1]
    : [0, 0, 0];

  const transitionDuration = isZeroG ? 7 : 6;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        y: driftY,
        x: driftX,
        rotateZ: driftRotate,
      }}
      transition={{
        y: {
          repeat: Infinity,
          duration: transitionDuration,
          ease: 'easeInOut',
        },
        x: {
          repeat: Infinity,
          duration: transitionDuration + 1,
          ease: 'easeInOut',
        },
        rotateZ: {
          repeat: Infinity,
          duration: transitionDuration + 2,
          ease: 'easeInOut',
        }
      }}
      className={`relative ${className}`}
    >
      {/* Inner Magnet Card */}
      <motion.div
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          x: isHovered ? translateX : 0,
          y: isHovered ? translateY : 0,
          scale: isHovered ? 1.02 : 1,
          transformStyle: 'preserve-3d',
        }}
        className="w-full h-full rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#06b6d4]/50 backdrop-blur-xl p-6 text-left transition-all duration-500 group shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(29,185,84,0.12)]"
      >
        {/* Glass Glow Spotlight (Lime Green glow on hover) */}
        <div 
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden"
          style={{
            background: `radial-gradient(circle 200px at ${glowX.get()} ${glowY.get()}, rgba(6, 182, 212, 0.12), transparent)`
          }}
        />

        {/* 3D Content Wrapper */}
        <div style={{ transform: 'translateZ(10px)' }} className="relative z-10 h-full w-full">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}
