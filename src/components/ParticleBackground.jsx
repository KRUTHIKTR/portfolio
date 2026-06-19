import React, { useEffect, useRef } from 'react';

export default function ParticleBackground({ isZeroG }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Star Class
    class Star {
      constructor() {
        this.reset();
        // Distribute stars randomly across screen on initial load
        this.x = Math.random() * width;
        this.y = Math.random() * height;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.8 + 0.4;
        this.speed = Math.random() * 0.05 + 0.01;
        // Deep space colors
        const colors = [
          'rgba(255, 255, 255, ',
          'rgba(139, 92, 246, ', // Purple
          'rgba(59, 130, 246, ',  // Blue
          'rgba(147, 197, 253, ', // Light Blue
        ];
        this.colorPrefix = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.8 + 0.2;
        this.alphaSpeed = Math.random() * 0.01 + 0.002;
        this.driftX = (Math.random() - 0.5) * 0.15;
        this.driftY = -this.speed - (Math.random() * 0.02);
      }

      update(dx, dy, speedMultiplier) {
        // Apply drift
        this.x += this.driftX * speedMultiplier + dx * this.size * 0.5;
        this.y += this.driftY * speedMultiplier + dy * this.size * 0.5;

        // Twinkle
        this.alpha += this.alphaSpeed;
        if (this.alpha > 1 || this.alpha < 0.1) {
          this.alphaSpeed = -this.alphaSpeed;
        }

        // Wrap around screen
        if (this.x < 0) {
          this.x = width;
        } else if (this.x > width) {
          this.x = 0;
        }

        if (this.y < 0) {
          this.y = height;
        } else if (this.y > height) {
          this.y = 0;
        }
      }

      draw() {
        ctx.fillStyle = `${this.colorPrefix}${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add a subtle outer glow to larger stars
        if (this.size > 1.4) {
          ctx.shadowBlur = 4;
          ctx.shadowColor = 'rgba(139, 92, 246, 0.4)';
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.shadowBlur = 0; // Reset shadow
        }
      }
    }

    // Nebula dust details
    class NebulaCloud {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = Math.random() * 150 + 100;
        this.color = Math.random() > 0.5 
          ? 'rgba(139, 92, 246, 0.02)' // Violet
          : 'rgba(59, 130, 246, 0.02)'; // Blue
      }

      draw() {
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const starCount = Math.floor((width * height) / 8000);
    const stars = Array.from({ length: Math.min(starCount, 150) }, () => new Star());
    const clouds = Array.from({ length: 4 }, () => new NebulaCloud());

    const handleMouseMove = (e) => {
      // Calculate normalized mouse coordinate (-0.5 to 0.5)
      mouseRef.current.targetX = (e.clientX / width) - 0.5;
      mouseRef.current.targetY = (e.clientY / height) - 0.5;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      stars.forEach(s => s.reset());
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw space background color gradient
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, '#05030A'); // Void black
      bgGrad.addColorStop(1, '#0C091A'); // Deep space
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw soft nebulae
      clouds.forEach(cloud => cloud.draw());

      // Interpolate mouse coordinates for smooth parallax
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const dx = -mouseRef.current.x;
      const dy = -mouseRef.current.y;

      // Adjust speed of star drifting when in Zero-G state
      const speedMultiplier = isZeroG ? 3.0 : 0.8;

      // Draw and update stars
      stars.forEach((star) => {
        star.update(dx, dy, speedMultiplier);
        star.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [isZeroG]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
