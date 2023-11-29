1. Node.js란?
    - 자바스크립트 엔진
    - 자바스크립트 런타임

    (1) 엔진의 종류 (참고만)
    - V8 : Chrome
    - SpiderMonkey : Firefox
    - JavascriptCore : Safari
    - Chakra : IE

    (2) Browser API & Node.js API
    - 모두 사용할 수 있는 API
        console.log(), ...
        
    - Browser API
        window, ...

    - Node.js API
        process, ...

    - convention 규칙에 따른 함수명
        - url, setTimeout

2. 모듈 시스템
    
    (1) 모듈의 종류
    
    1) Core Module
        
    - 기본적으로 내장되어 있는 모듈
    - https://nodejs.org/dist/latest-v20.x/docs/api/modules.html
    
    2) Local Module
    - 로컬로 생성된 모듈
    3) Third Party Module
    - npm(Node Package Manager)을 사용하여 온라인에서 사용할 수 있는 모듈
    
    (2) 모듈을 사용하는 법
    
    const 변수 = requires("모듈명");

    1) CommonJS module
        - 전통적인 방식
    2) ES module
        - mjs 확장자를 사용하여 파일 단위로 적용
        - package.json에 명시하여 프로젝트 단위로 적용

    (3) NPM 모듈
        - Node.js 오픈 소스의 생태계의 핵심
        - 개발에 필요로 하는 모든 기능이 이미 NPM에 있을 가능성이 99.9%
        - 온라인 레포지토리
        - https://www.npmjs.com/

3. 파일 모듈
    - https://nodejs.org/api/fs.html

4. 동기, 비동기

5. 패키지 관리 : npm
    - node modules
    - package.json
    - package-lock.json

    (1) Semantics Version
        
    1) 버전 번호의 증가 : Major.Minor.Patch
        - 호환되지 않는 api 변경 시 major 버전 증가
        - 이전 버전과 호환되는 방식으로 기능을 추가하는 minor 버전 증가
        - 이전 버전과 호환되는 버그 수정 시 patch 버전 증가

    2) Semantics : 자동 버전 업
        - ~
            patch 버전까지만 설치 또는 업데이트
            ~0.1.1 : >=01.1 < 0.2.0
        - ^ 
            minor 버전까지만 설치 또는 업데이트
            ^1.0.5 : >= 1.0.5 < 2.0
            ^0.1 : >= 0.1.0 < 0.2 (예외사항 major가 1이 안될경우)

    (2) package-lock.json

    1) package-lock.json이 생성되는 시점의 node_modules에 대한 정보를 가지고 있는 파일
    2) 소스 레포지토리에 커밋하기 위한 것이며 다양한 용도로 사용된다.
    3) 배포 및 지속적 통합이 정확히 동일한 종속성을 설치하도록 보장
    4) 디렉토리 자체를 커밋하지 않고도 node_modules의 이전 상태로
        "시간 여행" 할 수 있는 기능 제공
    5) 트리 변경 사항을 쉽게 볼 수 있게 한다.

    (3) npm audit
        취약점에 대한 보고서를 요청하고 취약점이 발견되면 영향과 적절한 교정이 계산된다.
        npm audit fix --force

6. 웹 서버

7. Express
    npm install express