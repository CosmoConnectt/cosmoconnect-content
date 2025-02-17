import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create Starfield with Proper Geometry
const starGeometry = new THREE.BufferGeometry();
const starVertices = [];
for (let i = 0; i < 6000; i++) {
  const x = (Math.random() - 0.5) * 2000;
  const y = (Math.random() - 0.5) * 2000;
  const z = (Math.random() - 0.5) * 2000;
  starVertices.push(x, y, z);
}
starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));

const starMaterial = new THREE.PointsMaterial({ color: 0x00FFFF, size: 0.7 });
const starField = new THREE.Points(starGeometry, starMaterial);
scene.add(starField);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  starField.rotation.y += 0.0005;
  renderer.render(scene, camera);
}
animate();

/* === GSAP ENHANCEMENTS === */
gsap.from(".header-title", {
    duration: 1.5,
    y: -50,
    opacity: 0,
    ease: "power3.out",
    delay: 0.5
});