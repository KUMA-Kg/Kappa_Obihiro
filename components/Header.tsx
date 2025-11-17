'use client';

export default function Header() {
  return (
    <header style={{
      backgroundColor: '#007736',
      color: 'white',
      padding: '10px 20px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease'
    }}>
      <div style={{
        maxWidth: '963px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '15px'
      }}>
        {/* ロゴ - 文字のサイズに合わせる */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '15px',
          cursor: 'pointer'
        }}
        onClick={(e) => {
          const img = e.currentTarget.querySelector('img');
          if (img) {
            img.style.transform = 'rotate(90deg) translateY(-5px)';
            setTimeout(() => {
              img.style.transform = 'rotate(0deg) translateY(0)';
            }, 300);
          }
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '8px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '40px',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <img 
              src="/images/logo.png" 
              alt="かっぱロゴ" 
              style={{ 
                height: '74px',
                width: 'auto',
                display: 'block',
                transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            />
          </div>
          <h1 style={{ 
            margin: 0, 
            fontSize: '24px',
            fontWeight: 'bold'
          }}>
            麻雀サロン かっぱ
          </h1>
        </div>
        
        {/* ナビゲーション */}
        <nav>
          <ul style={{
            listStyle: 'none',
            display: 'flex',
            gap: '20px',
            margin: 0,
            padding: 0,
            flexWrap: 'wrap'
          }}>
            <li>
              <a href="/" style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '16px',
                transition: 'all 0.3s ease',
                display: 'inline-block',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.textShadow = '0 4px 8px rgba(255,255,255,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.textShadow = 'none';
              }}>
                ホーム
              </a>
            </li>
            <li>
              <a href="/shop" style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '16px',
                transition: 'all 0.3s ease',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.textShadow = '0 4px 8px rgba(255,255,255,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.textShadow = 'none';
              }}>
                店舗紹介
              </a>
            </li>
            <li>
              <a href="/system" style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '16px',
                transition: 'all 0.3s ease',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.textShadow = '0 4px 8px rgba(255,255,255,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.textShadow = 'none';
              }}>
                料金システム
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}