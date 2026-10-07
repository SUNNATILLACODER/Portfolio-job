import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const checkWebGLAvailability = () => {
  if (typeof window === 'undefined') return true;
  try {
    const canvas = document.createElement('canvas');
    return Boolean(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
};

export const MiniCity3D = ({ className = "" }) => {
  const containerRef = useRef(null);
  const [webGLSupported] = useState(checkWebGLAvailability);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !webGLSupported) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // SCENE SETUP
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#080A0A');
    scene.fog = new THREE.FogExp2('#080A0A', 0.038);

    // CAMERA
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(12, 11, 14);

    // RENDERER
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    container.appendChild(renderer.domElement);

    // LIGHTING
    const ambientLight = new THREE.AmbientLight('#0b1411', 1.8);
    scene.add(ambientLight);

    // Main Emerald Key Light
    const keyLight = new THREE.DirectionalLight('#00F5A0', 2.4);
    keyLight.position.set(10, 16, 9);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 40;
    keyLight.shadow.bias = -0.0005;
    scene.add(keyLight);

    // Violet Accent Rim Light
    const rimLight = new THREE.DirectionalLight('#8b5cf6', 1.6);
    rimLight.position.set(-10, 8, -10);
    scene.add(rimLight);

    // Cyan Fill Light
    const fillLight = new THREE.PointLight('#35D9FF', 1.4, 25);
    fillLight.position.set(0, 4, 6);
    scene.add(fillLight);

    // CITY GROUP
    const cityGroup = new THREE.Group();
    scene.add(cityGroup);

    // MATERIALS
    const buildingMaterial = new THREE.MeshStandardMaterial({
      color: '#0d1311',
      roughness: 0.25,
      metalness: 0.85
    });

    const windowEmeraldMat = new THREE.MeshBasicMaterial({
      color: '#00F5A0'
    });

    const windowVioletMat = new THREE.MeshBasicMaterial({
      color: '#a78bfa'
    });

    // 1. FLOATING BASE PEDESTAL
    const baseRadius = 8.5;
    const baseSegments = 6; // Hexagonal cyber platform
    const baseGeo = new THREE.CylinderGeometry(baseRadius, baseRadius * 1.05, 0.5, baseSegments);
    const baseMat = new THREE.MeshStandardMaterial({
      color: '#0a0f0d',
      roughness: 0.6,
      metalness: 0.5
    });
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    baseMesh.position.y = -0.3;
    baseMesh.receiveShadow = true;
    cityGroup.add(baseMesh);

    // Hexagonal Edge Glow Ring
    const edgeGeo = new THREE.EdgesGeometry(baseGeo);
    const edgeMat = new THREE.LineBasicMaterial({ color: '#00F5A0', transparent: true, opacity: 0.5 });
    const edgeLine = new THREE.LineSegments(edgeGeo, edgeMat);
    baseMesh.add(edgeLine);

    // Ground Grid Wireframe
    const gridHelper = new THREE.GridHelper(16, 24, '#00F5A0', '#152b22');
    gridHelper.position.y = -0.04;
    cityGroup.add(gridHelper);

    // 2. PROCEDURAL BUILDINGS GENERATION
    const buildingTops = []; // For data bridges

    const gridSize = 7;
    const spacing = 1.8;

    for (let x = -gridSize / 2; x <= gridSize / 2; x++) {
      for (let z = -gridSize / 2; z <= gridSize / 2; z++) {
        const distFromCenter = Math.sqrt(x * x + z * z);
        if (distFromCenter > 3.9) continue;
        if (Math.random() < 0.22) continue;

        const isCenterTower = distFromCenter < 1.2;
        const baseHeight = isCenterTower
          ? 4.5 + Math.random() * 3.5
          : 0.8 + Math.random() * (4.2 - distFromCenter * 0.7);

        const bWidth = 0.9 + Math.random() * 0.4;
        const bDepth = 0.9 + Math.random() * 0.4;

        const bGeo = new THREE.BoxGeometry(bWidth, baseHeight, bDepth);
        const bMesh = new THREE.Mesh(bGeo, buildingMaterial);
        bMesh.castShadow = true;
        bMesh.receiveShadow = true;

        const posX = x * spacing + (Math.random() - 0.5) * 0.3;
        const posZ = z * spacing + (Math.random() - 0.5) * 0.3;
        bMesh.position.set(posX, baseHeight / 2, posZ);

        cityGroup.add(bMesh);
        buildingTops.push(new THREE.Vector3(posX, baseHeight, posZ));

        // Outline Edges
        const bEdgeGeo = new THREE.EdgesGeometry(bGeo);
        const bEdgeMat = new THREE.LineBasicMaterial({
          color: isCenterTower ? '#00F5A0' : '#1d352b',
          transparent: true,
          opacity: isCenterTower ? 0.7 : 0.3
        });
        const bEdgeLines = new THREE.LineSegments(bEdgeGeo, bEdgeMat);
        bMesh.add(bEdgeLines);

        // Glowing Window Strips
        const numBands = Math.floor(baseHeight * 2);
        for (let b = 1; b < numBands; b++) {
          if (Math.random() < 0.45) {
            const bandGeo = new THREE.PlaneGeometry(bWidth * 0.85, 0.08);
            const useViolet = Math.random() < 0.15;
            const bandMesh = new THREE.Mesh(
              bandGeo,
              useViolet ? windowVioletMat : windowEmeraldMat
            );
            bandMesh.position.set(0, -baseHeight / 2 + b * 0.5, bDepth / 2 + 0.01);
            bMesh.add(bandMesh);
          }
        }

        // Tall Spire Antenna on Landmark Towers
        if (isCenterTower || (baseHeight > 3.8 && Math.random() < 0.4)) {
          const spireHeight = 1.2 + Math.random() * 1.5;
          const spireGeo = new THREE.CylinderGeometry(0.02, 0.04, spireHeight, 4);
          const spireMesh = new THREE.Mesh(spireGeo, buildingMaterial);
          spireMesh.position.set(0, baseHeight / 2 + spireHeight / 2, 0);
          bMesh.add(spireMesh);

          const beaconGeo = new THREE.SphereGeometry(0.08, 8, 8);
          const beaconMat = new THREE.MeshBasicMaterial({
            color: Math.random() < 0.3 ? '#a78bfa' : '#00F5A0'
          });
          const beacon = new THREE.Mesh(beaconGeo, beaconMat);
          beacon.position.y = spireHeight / 2;
          spireMesh.add(beacon);
        }
      }
    }

    // 3. NEON DATA HIGHWAYS / CONNECTING BRIDGES
    const dataStreamCount = 7;
    const curveStreams = [];

    for (let i = 0; i < dataStreamCount; i++) {
      if (buildingTops.length < 2) break;
      const idxA = Math.floor(Math.random() * buildingTops.length);
      let idxB = Math.floor(Math.random() * buildingTops.length);
      if (idxA === idxB) idxB = (idxA + 1) % buildingTops.length;

      const pA = buildingTops[idxA];
      const pB = buildingTops[idxB];
      const midPoint = new THREE.Vector3(
        (pA.x + pB.x) / 2,
        Math.max(pA.y, pB.y) + 1.2 + Math.random() * 0.8,
        (pA.z + pB.z) / 2
      );

      const curve = new THREE.QuadraticBezierCurve3(pA, midPoint, pB);
      const points = curve.getPoints(36);
      const curveGeo = new THREE.BufferGeometry().setFromPoints(points);

      const isVioletStream = i % 3 === 0;
      const curveMat = new THREE.LineBasicMaterial({
        color: isVioletStream ? '#8b5cf6' : '#00F5A0',
        transparent: true,
        opacity: 0.5
      });

      const line = new THREE.Line(curveGeo, curveMat);
      cityGroup.add(line);

      const packetGeo = new THREE.SphereGeometry(0.09, 8, 8);
      const packetMat = new THREE.MeshBasicMaterial({
        color: isVioletStream ? '#c4b5fd' : '#82FCD0'
      });
      const packet = new THREE.Mesh(packetGeo, packetMat);
      cityGroup.add(packet);

      curveStreams.push({
        curve,
        packet,
        speed: 0.15 + Math.random() * 0.2,
        progress: Math.random()
      });
    }

    // 4. FLOATING ATMOSPHERIC DATA PARTICLES
    const particleCount = 140;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 16;
      particlePositions[i + 1] = Math.random() * 10;
      particlePositions[i + 2] = (Math.random() - 0.5) * 16;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: '#00F5A0',
      size: 0.08,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    cityGroup.add(particles);

    // MOUSE PARALLAX CONTROLS
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      mouseX = (event.clientX - rect.left) / rect.width - 0.5;
      mouseY = (event.clientY - rect.top) / rect.height - 0.5;
    };

    const handleMouseLeave = () => {
      mouseX = 0;
      mouseY = 0;
    };

    const handleTouchMove = (event) => {
      if (event.touches.length > 0) {
        const touch = event.touches[0];
        const rect = container.getBoundingClientRect();
        mouseX = (touch.clientX - rect.left) / rect.width - 0.5;
        mouseY = (touch.clientY - rect.top) / rect.height - 0.5;
      }
    };

    const handleTouchEnd = () => {
      mouseX = 0;
      mouseY = 0;
    };

    container.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });

    // RESIZE OBSERVER
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // ANIMATION LOOP
    let animationFrameId;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = (performance.now() - startTime) * 0.001;

      if (!prefersReducedMotion) {
        // Slow continuous architectural orbit
        cityGroup.rotation.y += 0.0028;

        // Gentle floating levitation
        cityGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.18;

        // Smooth Mouse Parallax Lerping
        camera.position.x += (12 + mouseX * 4 - camera.position.x) * 0.035;
        camera.position.y += (11 - mouseY * 3 - camera.position.y) * 0.035;
        camera.lookAt(0, 1.8, 0);

        // Animate Data Packets along Highway Curves
        curveStreams.forEach((stream) => {
          stream.progress = (stream.progress + stream.speed * 0.01) % 1.0;
          const pos = stream.curve.getPoint(stream.progress);
          stream.packet.position.copy(pos);
        });

        // Ascending atmospheric particles
        const posAttr = particleGeo.attributes.position;
        for (let i = 1; i < particleCount * 3; i += 3) {
          posAttr.array[i] += 0.012;
          if (posAttr.array[i] > 11) {
            posAttr.array[i] = 0;
          }
        }
        posAttr.needsUpdate = true;

        // Subtle pulsing on building lights
        const pulse = 0.8 + Math.sin(elapsedTime * 2.2) * 0.2;
        windowEmeraldMat.color.setRGB(0, 0.96 * pulse, 0.62 * pulse);
      }

      renderer.render(scene, camera);
    };

    animate();

    // CLEANUP
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);

      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) {
            obj.material.forEach((mat) => mat.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });
      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [webGLSupported]);

  if (!webGLSupported) {
    return (
      <div className={`w-full aspect-square rounded-lg bg-[#080A0A] border border-white/[0.08] flex flex-col items-center justify-center p-6 text-center text-xs font-mono text-[#8E9691] relative overflow-hidden ${className}`}>
        <div className="w-12 h-12 rounded-xl bg-[#00F5A0]/10 border border-[#00F5A0]/30 flex items-center justify-center text-[#00F5A0] mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00F5A0] animate-pulse" />
        </div>
        <span className="text-[#F3F4F0] font-semibold mb-1">Architectural Wireframe Mode</span>
        <span className="text-[11px] text-[#8E9691]">WebGL disabled or unavailable. Static perspective fallback active.</span>
      </div>
    );
  }

  return (
    <div className={`relative w-full aspect-square rounded-lg bg-[#080A0A] border border-white/[0.08] overflow-hidden ${className}`}>
      {/* Three.js Canvas Container */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Futuristic Telemetry HUD Overlays */}
      <div className="absolute top-3 left-3 flex items-center gap-2 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-[#00F5A0] animate-pulse" />
        <span className="text-[10px] font-mono font-semibold tracking-wider text-[#F3F4F0] bg-[#080A0A]/85 backdrop-blur-md px-2 py-0.5 rounded border border-white/[0.08]">
          MINI-CITY // 3D MATRIX
        </span>
      </div>

      <div className="absolute top-3 right-3 text-[9px] font-mono text-[#00F5A0] bg-[#080A0A]/85 backdrop-blur-md px-2 py-0.5 rounded border border-white/[0.08] pointer-events-none">
        60 FPS · REALTIME
      </div>

      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[10px] font-mono pointer-events-none">
        <span className="text-[#8E9691] bg-[#080A0A]/85 backdrop-blur-md px-2 py-0.5 rounded border border-white/[0.08]">
          Move mouse to shift perspective
        </span>
        <span className="text-[#82FCD0] bg-[#080A0A]/85 backdrop-blur-md px-2 py-0.5 rounded border border-white/[0.08] hidden sm:inline">
          Data Packets Active
        </span>
      </div>
    </div>
  );
};
