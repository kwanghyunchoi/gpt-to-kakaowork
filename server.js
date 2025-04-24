
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const USER_ID = process.env.USER_ID;

app.use(bodyParser.json());

app.post('/gpt-to-kakaowork', async (req, res) => {
  const message = req.body.message || "기본 메시지입니다.";

  try {
    await axios.post('https://www.kakaowork.com/api/v1/messages.send', {
      conversation_id: USER_ID,
      text: message
    }, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    res.status(200).send({ success: true });
  } catch (error) {
    console.error('카카오워크 전송 실패:', error.response?.data || error.message);
    res.status(500).send({ error: '카카오워크 전송 실패' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 서버 실행 중: http://localhost:${PORT}`);
});
