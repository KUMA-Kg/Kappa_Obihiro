'use client';

import { useState, useEffect } from 'react';

export default function MonthlyEvent() {
  const [currentMonth, setCurrentMonth] = useState('');
  const [imageExists, setImageExists] = useState(false);

  useEffect(() => {
    // 現在の年月を取得（YYYY-MM形式）
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const monthStr = `${year}-${month}`;
    setCurrentMonth(monthStr);

    // 画像の存在確認
    const img = new window.Image();
    img.src = `/events/${monthStr}.jpg`;
    img.onload = () => setImageExists(true);
    img.onerror = () => setImageExists(false);
  }, []);

  if (!imageExists || !currentMonth) {
    return null; // 画像がない場合は非表示
  }

  return (
    <div style={{ marginTop: '30px' }}>
      <h3 style={{
        color: '#007736',
        fontSize: '20px',
        marginBottom: '15px',
        textAlign: 'center',
        fontWeight: 'bold'
      }}>
        今月のイベント情報
      </h3>
      <div style={{
        maxWidth: '100%',
        margin: '0 auto'
      }}>
        <img
          src={`/events/${currentMonth}.jpg`}
          alt={`${currentMonth}のイベント情報`}
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}
        />
      </div>
    </div>
  );
}
