import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Script from 'next/script';

export const metadata: Metadata = {
  title: '麻雀サロンかっぱ',
  description: '帯広市の麻雀サロン「かっぱ」の公式ウェブサイト。初心者から上級者まで楽しめるアットホームな麻雀店です。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body style={{ margin: 0, padding: 0, fontFamily: 'sans-serif' }}>
        <Header />

        <main>
          {children}
        </main>

        <footer style={{
          backgroundColor: '#007736',
          color: 'white',
          padding: '30px 0',
          marginTop: '50px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            maxWidth: '963px',
            margin: '0 auto',
            padding: '0 20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
            zIndex: 2,
          }}>
            {/* 麻雀牌の装飾 - 4枚 */}
            <img src="/images/tile1.png" alt="麻雀牌" style={{ position: 'absolute', top: '10px', left: '10px', width: '60px', opacity: 0.6, zIndex: 1 }} />
            <img src="/images/tile2.png" alt="麻雀牌" style={{ position: 'absolute', top: '10px', right: '10px', width: '60px', opacity: 0.6, zIndex: 1 }} />
            <img src="/images/tile3.png" alt="麻雀牌" style={{ position: 'absolute', bottom: '10px', left: '10px', width: '60px', opacity: 0.6, zIndex: 1 }} />
            <img src="/images/tile4.png" alt="麻雀牌" style={{ position: 'absolute', bottom: '10px', right: '10px', width: '60px', opacity: 0.6, zIndex: 1 }} />
            
            <h2 style={{ marginBottom: '20px', fontSize: '24px' }}>麻雀サロン かっぱ</h2>
            
            <div style={{ lineHeight: '1.8', fontSize: '15px' }}>
              <p style={{ marginBottom: '8px' }}>
                <strong>住　　所</strong>　北海道帯広市西二条南11丁目1　清水ビル3F
              </p>
              <p style={{ marginBottom: '8px' }}>
                <strong>電　　話</strong>　0155-27-7337
              </p>
              <p style={{ marginBottom: '8px' }}>
                <strong>営業時間</strong>　11:00～24:00
              </p>
              <p style={{ marginBottom: '20px' }}>
                <strong>交通手段</strong>　JR帯広駅 北口より徒歩3分
              </p>
            </div>
            
            <div style={{ marginTop: '20px' }}>
              <a href="https://x.com/mahjong_kappa" target="_blank" rel="noopener noreferrer" style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                color: 'white',
                textDecoration: 'none'
              }}>
                <img src="/images/twitter-x.svg" alt="X" style={{ height: '20px', marginRight: '8px' }} />
                @mahjong_kappa
              </a>
            </div>
            
            <p style={{ marginTop: '30px', fontSize: '0.8rem' }}>© 2024 麻雀サロンかっぱ All Rights Reserved.</p>
          </div>
        </footer>

        {/* Instagram埋め込みスクリプト */}
        <Script src="//www.instagram.com/embed.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}