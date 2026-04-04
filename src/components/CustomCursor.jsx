import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    let ringX = 0, ringY = 0;
    let mouseX = 0, mouseY = 0;

    const moveMouse = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      requestAnimationFrame(animateRing);
    };

    const handleHoverIn = () => {
      setIsHovering(true);
      ring.style.width = '56px';
      ring.style.height = '56px';
      ring.style.borderColor = 'rgba(155, 89, 245, 0.8)';
      dot.style.transform = 'translate(-50%, -50%) scale(1.5)';
    };

    const handleHoverOut = () => {
      setIsHovering(false);
      ring.style.width = '36px';
      ring.style.height = '36px';
      ring.style.borderColor = 'rgba(79, 142, 247, 0.6)';
      dot.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    document.addEventListener('mousemove', moveMouse);
    animateRing();

    const interactables = document.querySelectorAll('button, a, .project-card, .stop-dot, input, textarea');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', handleHoverIn);
      el.addEventListener('mouseleave', handleHoverOut);
    });

    // Re-run when DOM updates
    const observer = new MutationObserver(() => {
      const els = document.querySelectorAll('button, a, .project-card, .stop-dot, input, textarea');
      els.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverIn);
        el.removeEventListener('mouseleave', handleHoverOut);
        el.addEventListener('mouseenter', handleHoverIn);
        el.addEventListener('mouseleave', handleHoverOut);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', moveMouse);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
