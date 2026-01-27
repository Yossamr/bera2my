import React, { useEffect, useRef } from 'react';

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    
    // Scroll handling for warp speed
    let scrollSpeed = 0;
    let lastScrollY = window.scrollY;

    const config = {
      particleColor: 'rgba(44, 116, 179, 0.5)',
      lineColor: 'rgba(44, 116, 179, 0.15)',
      particleAmount: Math.floor((w * h) / 15000),
      defaultSpeed: 0.5,
      variantSpeed: 0.5,
      linkRadius: 150,
    };

    class Particle {
      x: number;
      y: number;
      speed: number;
      directionAngle: number;
      vector: { x: number; y: number };
      radius: number;

      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.speed = config.defaultSpeed + Math.random() * config.variantSpeed;
        this.directionAngle = Math.floor(Math.random() * 360);
        this.vector = {
          x: Math.cos(this.directionAngle) * this.speed,
          y: Math.sin(this.directionAngle) * this.speed,
        };
        this.radius = Math.random() * 2 + 1;
      }

      update(boost: number) {
        // Apply scroll boost to speed
        const currentSpeed = this.speed + (boost * 0.1); // Sensitivity

        this.x += this.vector.x * (1 + boost * 2);
        this.y += this.vector.y * (1 + boost * 2);

        // Bounce off edges
        if (this.x >= w || this.x <= 0) {
          this.vector.x *= -1;
        }
        if (this.y >= h || this.y <= 0) {
          this.vector.y *= -1;
        }
        
        // Wrap around slightly
        if (this.x > w) this.x = w;
        if (this.x < 0) this.x = 0;
        if (this.y > h) this.y = h;
        if (this.y < 0) this.y = 0;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = config.particleColor;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < config.particleAmount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      
      // Decay scroll speed
      scrollSpeed *= 0.90;
      if (scrollSpeed < 0.1) scrollSpeed = 0;

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(scrollSpeed);
        particles[i].draw();

        for (let j = i; j < particles.length; j++) {
          const distance = 
            (particles[i].x - particles[j].x) * (particles[i].x - particles[j].x) +
            (particles[i].y - particles[j].y) * (particles[i].y - particles[j].y);

          if (distance < config.linkRadius * config.linkRadius) {
            ctx.beginPath();
            ctx.strokeStyle = config.lineColor;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      config.particleAmount = Math.floor((w * h) / 15000);
      init();
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = Math.abs(currentScrollY - lastScrollY);
      scrollSpeed = Math.min(delta, 50); // Cap the boost
      lastScrollY = currentScrollY;
    };

    init();
    animate();

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="block fixed top-0 left-0 w-full h-full transition-opacity duration-1000" />;
};