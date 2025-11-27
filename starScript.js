const navButtons = document.querySelectorAll('nav button');

navButtons.forEach(button => {
    button.addEventListener('click', function() {
        
        navButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        this.classList.add('active');

        // ⭐ 클릭 이펙트 추가 시작 ⭐
        
        const numberOfStars = 3;
        const starEmoji = '⭐'; 
        const burstDistance = 50; 
        // 1. 마우스 클릭된 정확한 좌표를 얻습니다. (뷰포트 기준)
        const startX = event.clientX; 
        const startY_viewport = event.clientY; // 뷰포트 기준 Y 좌표

        // 2. ⭐ 별의 시작 Y 좌표를 스크롤 위치로 보정합니다. ⭐
        // window.scrollY 또는 window.pageYOffset을 사용합니다.
        const scrollOffset = window.scrollY || window.pageYOffset;
        const startY = startY_viewport + scrollOffset;

        for (let i = 0; i < numberOfStars; i++) {
            const star = document.createElement('span');
            star.textContent = starEmoji;
            star.classList.add('star-effect');
            
            star.style.left = `${startX}px`;
            star.style.top = `${startY}px`;

            const randomAngle = Math.random() * Math.PI * 2; // 0에서 2파이 (360도) 사이의 랜덤 각도
            const randomX = Math.cos(randomAngle) * burstDistance * (0.8 + Math.random() * 0.4); // 튕겨나가는 X 거리
            const randomY = Math.sin(randomAngle) * burstDistance * (0.8 + Math.random() * 0.4); // 튕겨나가는 Y 거리

            star.style.setProperty('--x', `${randomX}px`);
            star.style.setProperty('--y', `${randomY}px`);

            document.body.appendChild(star);

            star.addEventListener('animationend', () => {
                star.remove();
            });
    }

        // (선택 사항) 페이지 이동 로직을 여기에 추가할 수 있습니다.
        // 예: const targetPage = this.textContent.toLowerCase();
        //     location.href = targetPage + '.html';
    });
});

if (navButtons.length > 0) {
    navButtons[0].classList.add('active');
}