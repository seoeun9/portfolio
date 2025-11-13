import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';



// typing effect
// const text = document.querySelector('.text');
// const content = "Hi, I'm Seoeun.";
// const cursor = document.querySelector('.blink');
// let i = 0;
// let speed = 200;

// function typing() {
//     if (i < content.length) {
//         let txt = content.charAt(i);
//         text.innerHTML += txt;
//         i++;
//     }
//     else{
//         cursor.style.display = 'none';
//     }
// }
// setInterval(typing, speed);

// 3d scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setClearColor(0xffffff, 1); 
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// OrbitControls 추가
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true // 부드럽게 회전

// light 추가
// 부드럽고 약한 주변광 (전체 조명)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

// 특정 방향에서 오는 강한 빛 (반짝임 / 그림자 느낌)
const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
directionalLight.position.set(5, 10, 7); // 위쪽 대각선에서 비추게
scene.add(directionalLight);

// 네온 느낌 조명들 (핑크, 파랑, 보라)
const pinkLight = new THREE.PointLight(0xff00ff, 4, 20);
pinkLight.position.set(5, 3, 2);
scene.add(pinkLight);

const blueLight = new THREE.PointLight(0x00ffff, 3, 15);
blueLight.position.set(-5, 2, -3);
scene.add(blueLight);

const purpleLight = new THREE.PointLight(0x6600ff, 2, 10);
purpleLight.position.set(0, 4, 5);
scene.add(purpleLight);

// 배경 어둡게
renderer.setClearColor(0x000000, 1); // 어두운 회색~검정 계열 배경

const loader = new GLTFLoader();
let model;
let targetChild;


loader.load('./city.glb', (gltf) => {
    model = gltf.scene;
    model.scale.set(0.5, 0.5, 0.5);
    model.position.set(0, 0, 0);
    model.rotation.y = Math.PI*1.2; 
    // 재질을 약간 반짝이게
    model.traverse((child) => {
        if (child.isMesh && child.material && child.material.color) {
                const color = child.material.color
                // 밝은 색이면 (예: 흰색, 연한 회색, 노랑 등)
                if ((color.r + color.g + color.b) / 3 > 0.6) {
                child.material.emissive = color.clone()
                child.material.emissiveIntensity = 1.8
            }

                if (child.isMesh && child.name.startsWith("Object_")) {
                targetChild = child;
            }
        }

    });

    scene.add(model);
}, (xhr) => {
    console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
}, (error) => {
    console.log('An error happened' + error)
})

// 1. Composer 만들기
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1.2, // 강도
    0.4, // 반경
    0.85 // threshold
);
composer.addPass(bloomPass);

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener('click', (event) => {
    // 화면 좌표 -> NDC 좌표
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    // mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    // mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects([targetChild]);
    if (intersects.length > 0) {
        console.log("버튼 클릭됨!");
    }
});

camera.position.z =5; //살짝 뒤로 가기
camera.position.y = 2; //살짝 위로 가기
camera.lookAt(0, 0, 0); //원점 바라보기
controls.target.set(0, 0, 0); // 회전 중심
controls.update(); 

function animate() {
    // if (model) {
    //     model.rotation.y += 0.01 // 계속 회전
    // }
   // renderer.render(scene, camera);
    controls.update(); // 부드럽게 회전
    composer.render(); // renderer.render 대신
}


renderer.setAnimationLoop(animate);