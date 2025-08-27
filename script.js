// 페이지 로드 완료 시 실행
document.addEventListener('DOMContentLoaded', function() {
    console.log('김도연 포트폴리오 사이트가 로드되었습니다.');
});

// 스크롤 시 헤더 스타일 변경 (선택사항)
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.opacity = '0.95';
    } else {
        header.style.opacity = '1';
    }
});
