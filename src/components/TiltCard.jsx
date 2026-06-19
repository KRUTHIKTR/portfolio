import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function TiltCard({ children, className = '', isZeroG = false }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for X & Y mouse position (normalized from -0.5 to 0.5)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for smooth rotation return
  const springConfig = { damping: 20, stiffness: 120, mass: 0.8 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), springConfig);
  
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

  // Antigravity drift configurations
  const driftY = isZeroG 
    ? [-12, 12, -12] 
    : [-4, 4, -4];
    
  const driftX = isZeroG
    ? [-8, 8, -8]
    : [0, 0, 0];

  const driftRotate = isZeroG
    ? [-1.5, 1.5, -1.5]
    : [0, 0, 0];

  const transitionDuration = isZeroG ? 7 : 5;

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
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: 'preserve-3d',
      }}
      className={`relative rounded-2xl bg-glassBg/20 border border-[#1F193B]/60 backdrop-blur-md p-6 text-left transition-all duration-300 ${className} group`}
    >
      {/* 3D Glass Glow effect */}
      <div 
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden"
        style={{
          background: `radial-gradient(circle 200px at ${glowX.get()} ${glowY.get()}, rgba(139, 92, 246, 0.15), transparent)`
        }}
      />
      
      {/* Glowing Border Hover Highlight */}
      <div className="absolute inset-0 rounded-2xl border border-purple-500/0 group-hover:border-purple-500/20 transition-colors duration-500 pointer-events-none" />

      {/* Internal Content (can apply translateZ for 3D layered effect) */}
      <div style={{ transform: 'translateZ(10px)' }} className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
