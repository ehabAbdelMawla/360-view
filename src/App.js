import React, { useState } from 'react';
export default function App() {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [lastPageX, setLastPageX] = useState(0);
	const [isPress, setIsPress] = useState(false);
	const images = [
		'car-images/1705501437585-scene00001.png',
		'car-images/1705501437585-scene00061.png',
		'car-images/1705501437585-scene00121.png',
		'car-images/1705501437585-scene00181.png',
		'car-images/1705501437585-scene00241.png',
		'car-images/1705501437585-scene00301.png',
		'car-images/1705501437585-scene00361.png',
		'car-images/1705501437585-scene00421.png',
		'car-images/1705501437585-scene00481.png',
		'car-images/1705501437585-scene00541.png',
		'car-images/1705501437585-scene00601.png',
		'car-images/1705501437585-scene00661.png',
		'car-images/1705501437585-scene00721.png',
		'car-images/1705501437585-scene00781.png',
		'car-images/1705501437585-scene00841.png',
		'car-images/1705501437585-scene00901.png',
		'car-images/1705501437585-scene00961.png',
		'car-images/1705501437585-scene01021.png',
		'car-images/1705501437585-scene01081.png',
		'car-images/1705501437585-scene01141.png',
		'car-images/1705501437585-scene01201.png',
		'car-images/1705501437585-scene01261.png',
		'car-images/1705501437585-scene01321.png',
		'car-images/1705501437585-scene01381.png',
		'car-images/1705501437585-scene01441.png',
		'car-images/1705501437585-scene01501.png',
		'car-images/1705501437586-scene01561.png',
		'car-images/1705501437586-scene01621.png',
		'car-images/1705501437586-scene01681.png',
		'car-images/1705501437586-scene01741.png',
		'car-images/1705501437586-scene01801.png',
		'car-images/1705501437586-scene01861.png',
		'car-images/1705501437586-scene01921.png',
		'car-images/1705501437586-scene01981.png',
		'car-images/1705501437586-scene02041.png',
		'car-images/1705501437586-scene02101.png',
		'car-images/1705501437586-scene02161.png',
		'car-images/1705501437586-scene02221.png',
		'car-images/1705501437586-scene02281.png',
		'car-images/1705501437586-scene02341.png',
		'car-images/1705501437586-scene02401.png',
	];

	return (
		<div className="image-container">
			<img
				src={images[currentImageIndex]}
				draggable={false}
				onMouseDown={() => {
					setIsPress(true);
				}}
				onMouseUp={() => {
					setIsPress(false);
				}}
				onMouseMove={(e) => {
					if (!isPress) return;
					const delta = lastPageX - e.clientX;
					console.log({ delta });
					if (Math.abs(delta) > 10) {
						const newIndex = (currentImageIndex + Math.sign(delta) + images.length) % images.length;
						setCurrentImageIndex(() => newIndex);
						setLastPageX(e.pageX);
					}
				}}
			/>
		</div>
	);
}
