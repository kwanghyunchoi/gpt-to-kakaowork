
# GPT to KakaoWork Bridge

이 프로젝트는 외부 시스템(ChatGPT 등)에서 전송된 알림을 카카오워크로 푸시 메시지로 전달하는 간단한 Node.js 브릿지 서버입니다.

## 실행 방법

```bash
npm install
node server.js
```

## 환경변수 설정 (.env 또는 Render 환경변수 설정)

- ACCESS_TOKEN: 카카오워크 Bot 인증 토큰
- USER_ID: 메시지를 보낼 사용자 또는 채팅방 ID

## 엔드포인트

- POST `/gpt-to-kakaowork`
```json
{
  "message": "보낼 메시지 내용"
}
```
