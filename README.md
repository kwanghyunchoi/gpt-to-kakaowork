
# GPT to KakaoWork Bridge Server

이 Node.js 서버는 ChatGPT 또는 외부 시스템에서 보낸 알림을 카카오워크 Bot으로 전송하고,
OAuth 인증과 Webhook 수신까지 모두 지원합니다.

## 실행 방법

```bash
npm install
node server.js
```

## 주요 라우트

- `GET /callback`: 인증 코드 수신 (redirect_uri 용)
- `POST /request`: 카카오워크 Webhook 요청 수신
- `POST /gpt-to-kakaowork`: ChatGPT 알림 수신 → 카카오워크로 푸시 전송

## 환경 변수 (Render에 설정)

- `ACCESS_TOKEN`: 카카오워크에서 발급받은 Bot Access Token
- `USER_ID` 또는 `CONVERSATION_ID`: 메시지를 보낼 대상의 ID
