"use client";

import { useEffect, useRef, useState } from 'react';

interface VantaEffect {
  destroy: () => void;
}

interface VantaNetOptions {
  el: HTMLElement;
  mouseControls?: boolean;
  touchControls?: boolean;
  gyroControls?: boolean;
  minHeight?: number;
  minWidth?: number;
  scale?: number;
  scaleMobile?: number;
}

declare global {
  interface Window {
    VANTA: {
      NET: (options: VantaNetOptions) => VantaEffect;
    };
    THREE: unknown;
  }
}

let globalVantaInstance: VantaEffect | null = null;

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<VantaEffect | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Ensure this only runs on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Only run on client side
    if (!isClient || typeof window === 'undefined') return;

    // Cleanup any existing global instance
    if (globalVantaInstance) {
      try {
        globalVantaInstance.destroy();
      } catch (e) {
        console.warn('Error destroying previous Vanta instance:', e);
      }
      globalVantaInstance = null;
    }

    // Load Three.js and Vanta.js scripts
    const loadScripts = async () => {
      try {
        // Load Three.js
        if (!window.THREE) {
          const threeScript = document.createElement('script');
          threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
          threeScript.async = true;
          document.head.appendChild(threeScript);
          
          await new Promise((resolve, reject) => {
            threeScript.onload = resolve;
            threeScript.onerror = reject;
            setTimeout(reject, 10000); // 10s timeout
          });
        }

        // Load Vanta NET effect
        if (!window.VANTA) {
          const vantaScript = document.createElement('script');
          vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js';
          vantaScript.async = true;
          document.head.appendChild(vantaScript);
          
          await new Promise((resolve, reject) => {
            vantaScript.onload = resolve;
            vantaScript.onerror = reject;
            setTimeout(reject, 10000); // 10s timeout
          });
        }

        // Initialize Vanta effect
        if (vantaRef.current && window.VANTA && window.THREE) {
          vantaEffect.current = window.VANTA.NET({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00
          });
          
          globalVantaInstance = vantaEffect.current;
        }
      } catch (error) {
        console.warn('Failed to load or initialize Vanta.js:', error);
      }
    };

    loadScripts();

    // Cleanup function
    return () => {
      if (vantaEffect.current) {
        try {
          vantaEffect.current.destroy();
        } catch (e) {
          console.warn('Error destroying Vanta instance:', e);
        }
        vantaEffect.current = null;
      }
      if (globalVantaInstance === vantaEffect.current) {
        globalVantaInstance = null;
      }
    };
  }, [isClient]);

  // Return null during SSR
  if (!isClient) {
    return null;
  }

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
}