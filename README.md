# tictactoe

---

## 소개

데모 프로젝트입니다.

간단한 틱택토 게임입니다.


## 구조

- **.storybook**: 스토리북 관련 설정 파일
- **src**
    - **app**: 애플리케이션의 라우팅, 설정, 전역 스타일 등 애플리케이션 구동에 필요한 것들이 있습니다.
    - **pages**: 애플리케이션의 페이지가 포함됩니다.
    - **components**: 페이지에서 사용되는 UI 컴포넌드들입니다. 
    - **types**: 타입 관리
    - **shared**: 상수, 에셋, 헬퍼 함수 등등..

## 시작

```bash
$ pnpm install

$ npm run dev # 서버 시작

$ npm run storybook # 스토리북
```