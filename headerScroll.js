const header = document.querySelector('header'); 

function handleScroll() {
    const scrollPosition = window.scrollY;
    
    const startPoint = 50; 
    
    const endPoint = 300; 
    
    let opacityValue;

    if (scrollPosition < startPoint) {
        opacityValue = 1;
    } else if (scrollPosition > endPoint) {
        opacityValue = 0;
    } else {
        const scrolledDistance = scrollPosition - startPoint;
        const totalDistance = endPoint - startPoint;
        
        opacityValue = 1 - (scrolledDistance / totalDistance);
    }
    
    header.style.opacity = opacityValue;
}

window.addEventListener('scroll', handleScroll);
handleScroll();