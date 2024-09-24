## Zustand Store 가이드

### 참고 사이트

https://zustand-demo.pmnd.rs/

### 규칙

- action 함수들은 `actions` 폴더안에 생성하며, 파일 통일성을 위해 `###Store.ts 의 형태로 파일을 생성한다.
- 각각의 action 함수들의 이름은 use###Store 으로 함수명을 작성한다.
- action 함수들은 export default 하지않고 개별 export 한다.

```
export const useTestStroe = () => ...
```

- 완성된 action 함수들은 index.ts에 exoprt 시킨다.
