1. 프로젝트 생성

- npm init
- package.json 생성

2. 프로젝트 명령어 (scripts)

- 쉘 스크립트 모음
- npm 정의한 명령어
- echo 명령어 사용하여 추가
- npm run command

3. 패키지 설치

CDN

- 장애 발생시 웹 어플리케이션 장애

직접 다운로드

- 버전 관리가 어려움

NPM

- npm install 라이브러리
- dependencies 정의된 라이브러리 설치

- package.json
- dependencies 노드 생성
- "이름":"버전" 프로퍼티 생성

- 유의적 버전(Sementic Version)

  Major - 기존 버전과 호환되지 않게 변경
  Minor - 기존 버전과 호환되면서 기능 추가
  Patch - 기존 버전과 호환되면서 버그 수정

- 범위

  틸트(~)

  - 마이너 버전 명시 -> 패치버전만 변경
  - ~1.2.3 -> 1.2.3 ~ 1.3.0 미만

  - 마이너 버전 없으면 마이너 버전 갱신
  - ~0 -> 0.0.0 ~ 1.0.0 미만

  캐럿(^)

  - 정식버전 -> 마이너와 패치버전 변경
  - ^1.2.3 -> 1.2.3 ~ 2.0.0 미만

  - 정식버전 미만 -> 패치버전만 갱신
  - ^0 -> 0.0.0 ~ 0.1.0 미만

- 정리
- 정식 릴리즈 전 패키지 버전 빈번하게 변경
- 유의적 버전을 지키지 않는 경우 발생
- 정식 버전 미만은 패치 버전만 업데이트하는 캐럿을 기본으로 사용
