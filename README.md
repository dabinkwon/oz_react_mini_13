# MOVIES - 영화 정보 서비스

> **TMDB API를 활용한 실시간 영화 정보 탐색 및 선호 영화 관리 서비스입니다.**
> 사용자가 최신 인기 영화를 탐색하고, 검색하며, 원하는 영화를 '찜'할 수 있는 기능을 제공합니다.

---

## 프로젝트 링크
- **배포 URL**: [서비스 바로가기](https://oz-react-mini-13-blush.vercel.app/)

---

## 기술 스택

### Frontend
- ![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)
- ![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?logo=vite&logoColor=white)
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?logo=tailwind-css&logoColor=white)
- ![Zustand](https://img.shields.io/badge/Zustand-5.0-443E38?logo=react&logoColor=white)
- ![React Router](https://img.shields.io/badge/React_Router-7.0-CA4245?logo=react-router&logoColor=white)

### Backend & API
- ![TMDB API](https://img.shields.io/badge/TMDB_API-00d2ff?style=flat&logo=themoviedatabase&logoColor=white)
- ![Supabase](https://img.shields.io/badge/Supabase-Auth-3ECF8E?logo=supabase&logoColor=white)

---

## 핵심 기능

### 1. 메인 페이지 (Main)
- **상단 베스트 영화 슬라이드**: `Swiper` 라이브러리를 활용하여 평점이 높은 영화를 시각적으로 강조합니다.
- **인기 영화 무한 스크롤**: `Intersection Observer`를 사용하여 사용자가 스크롤할 때마다 실시간으로 데이터를 불러오는 무한 스크롤을 구현했습니다.
- **영화 카드 인터랙션**: 영화 카드에서 즉시 '좋아요'를 누르거나 상세 페이지로 이동할 수 있습니다.


### 2. 영화 상세 정보 (Detail)
- **상세 데이터 시각화**: 영화 줄거리, 출연진, 제작진 정보를 깔끔하게 배치했습니다.

### 3. 검색 기능 (Search)
- **실시간 검색**: TMDB API의 Search Endpoint를 사용하여 원하는 영화를 제목으로 검색할 수 있습니다.
  
### 4. 회원가입 및 로그인 (Auth)
- **폼 유효성 검사**: 이메일 형식, 비밀번호 복잡도, 비밀번호 확인 등 실시간 유효성 검사를 적용했습니다.
- **Supabase 연동**: Supabase Auth를 활용한 사용자 인증 로직이 준비되어 있습니다.

---

## 프로젝트 구조

```text
src/
├── api/          # TMDB API 요청 설정 및 경로 관리
├── component/    # 재사용 가능한 공통 컴포넌트 (Layout, Navbar, MovieCard 등)
├── context/      # 전역 데이터 관리를 위한 Context API
├── hooks/        # 커스텀 훅 (useFetch, useDebounce 등)
├── pages/        # 주요 페이지 구성 (Main, Detail, Search, Login, Signup)
├── store/        # Zustand 전역 상태 관리 (LikeMovie)
├── style/        # Tailwind CSS 및 스타일 정의
└── validation/   # 폼 유효성 검사 로직
```

---

## 시작하기

### 패키지 설치 및 실행
```bash
# 의존성 설치
npm install

# 로컬 개발 서버 실행
npm run dev
```

---

## 💡 주요 고민 및 해결 과정
- **무한 스크롤 최적화**: 매번 새로운 데이터를 불러올 때 중복된 데이터를 필터링하고, 페이지 번호를 상태로 관리하여 안정적인 스크롤 경험을 제공했습니다.
- **상태 관리 선택**: 복잡한 Props Drilling을 피하기 위해, '좋아요' 기능은 전역 상태 관리 라이브러리인 `Zustand`를 사용하여 코드의 가독성을 높였습니다.
- **반응형 UI**: `Tailwind CSS 4`의 새로운 기능을 활용하여 모바일, 태블릿, 데스크탑 환경에서 최적화된 레이아웃을 구성했습니다.

