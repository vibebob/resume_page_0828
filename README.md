# 김도연 포트폴리오 사이트

와디즈 스타일의 크라우드펀딩 컨셉으로 제작된 김도연님의 이력서 웹사이트입니다.

## 🚀 프로젝트 개요

- **컨셉**: "지원자 김도연을 펀딩하세요"
- **디자인**: 와디즈 크라우드펀딩 플랫폼 스타일 참조
- **반응형**: 모바일, 태블릿, 데스크톱 지원
- **애니메이션**: AOS (Animate On Scroll) 라이브러리 활용

## 🎨 주요 특징

### 디자인 요소
- 와디즈 스타일의 그라데이션과 색상 팔레트
- 크라우드펀딩 플랫폼의 카드 기반 레이아웃
- 현대적이고 전문적인 UI/UX

### 기능
- 스크롤 애니메이션
- 반응형 디자인
- 인터랙티브 요소
- 폼 유효성 검사
- 부드러운 스크롤 네비게이션

## 📁 파일 구조

```
wadiz/
├── index.html          # 메인 HTML 파일
├── styles.css          # CSS 스타일시트
├── script.js           # JavaScript 기능
├── vercel.json         # Vercel 배포 설정
├── README.md           # 프로젝트 설명서
└── portfolio.md        # 원본 포트폴리오 내용
```

## 🛠️ 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, 애니메이션
- **JavaScript**: ES6+, DOM 조작, 이벤트 처리
- **AOS**: 스크롤 애니메이션 라이브러리
- **Font Awesome**: 아이콘
- **Google Fonts**: Noto Sans KR

## 🚀 배포 방법

### Vercel 배포

1. **Vercel CLI 설치** (선택사항)
   ```bash
   npm i -g vercel
   ```

2. **GitHub에 코드 푸시**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Vercel 대시보드에서 배포**
   - [Vercel](https://vercel.com)에 로그인
   - "New Project" 클릭
   - GitHub 저장소 연결
   - 자동 배포 완료

### 로컬 개발 서버

```bash
# Python 3
python -m http.server 8000

# Node.js (http-server)
npx http-server

# PHP
php -S localhost:8000
```

## 📱 반응형 브레이크포인트

- **모바일**: 480px 이하
- **태블릿**: 768px 이하
- **데스크톱**: 1024px 이상

## 🎯 주요 섹션

1. **Hero Section**: 메인 타이틀과 핵심 통계
2. **About**: 이중 언어 구사자 소개
3. **Core Competencies**: 핵심 역량 3가지
4. **Projects**: 주요 프로젝트 사례
5. **Achievements**: 성과 요약
6. **Skills**: 보유 기술
7. **Vision**: 와디즈 기여 계획
8. **Contact**: 연락처 및 폼

## 🔧 커스터마이징

### 색상 변경
`styles.css`에서 CSS 변수를 수정하여 색상을 변경할 수 있습니다:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #f39c12;
}
```

### 내용 수정
`index.html`에서 텍스트 내용을 직접 수정할 수 있습니다.

## 📞 연락처

- **이메일**: kimdoyeon@example.com
- **전화**: 010-1234-5678
- **LinkedIn**: linkedin.com/in/kimdoyeon

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 목적으로 제작되었습니다.

---

**김도연님의 B2B/B2G 사업 운영 전문성을 어필하는 현대적이고 전문적인 이력서 웹사이트입니다.**
