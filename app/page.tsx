import BannerSlideshow from '../components/BannerSlideshow';

export default function Home() {
  return (
    <div style={{ 
      backgroundColor: '#FFDD55', 
      minHeight: '100vh', 
      padding: '0'
    }}>
      {/* ① トップバナー（スライドショー） */}
      <div style={{ 
        position: 'relative',
        width: '100%',
        maxWidth: '963px',
        margin: '30px auto 0 auto',
        aspectRatio: '963 / 550',
        overflow: 'hidden',
        backgroundColor: '#000'
      }}>
        <BannerSlideshow />
      </div>

      <div style={{ maxWidth: '963px', margin: '0 auto', padding: '40px 20px' }}>
        {/* ② ウェルカムテキスト */}
        <div style={{ 
          textAlign: 'center', 
          margin: '40px 0', 
          lineHeight: '1.8',
          padding: '20px',
          backgroundColor: 'rgba(255,255,255,0.7)',
          borderRadius: '8px'
        }}>
          <p style={{ marginBottom: '20px' }}>
            <strong style={{ fontSize: '20px' }}>帯広市の麻雀サロンかっぱの<br />
            ホームページへようこそ！</strong><br />
            当店は初心者から上級者まで、<br />どなたでも楽しめるような<br />
            アットホームな帯広市の麻雀店です！<br />
            日本プロ麻雀連盟公式ルールの勉強会などの<br />イベントを
            定期的に開催していますので、<br />皆様のご来店を<br />
            スタッフ一同、心よりお待ちしております！
          </p>
        </div>
        
{/* ③ 漫画掲載紹介 */}
<div className="section" style={{
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  marginBottom: '30px'
}}>
  <h2 className="section-title" style={{ textAlign: 'center' }}>漫画掲載紹介</h2>
  
  {/* manga1.jpg と紹介文 */}
  <div style={{
    display: 'flex',
    gap: '20px',
    marginBottom: '20px',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  }}>
    <div style={{ flex: '1 1 300px', minWidth: '250px' }}>
      <img 
        src="/images/manga1.jpg" 
        alt="十勝ひとりぼっち農園 表紙" 
        style={{ 
          width: '100%', 
          height: 'auto',
          borderRadius: '4px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }} 
      />
    </div>
    <div style={{ flex: '1 1 400px', minWidth: '300px' }}>
      <p style={{ lineHeight: '1.8', fontSize: '23px' }}>
        北海道音更町在住の漫画家<br />
 横山裕二先生の<br /><br />
        少年サンデー<strong style={{ fontSize: '22px', color: '#007736' }}>「十勝ひとりぼっち農園」14巻</strong><br /><br />
        第3章　～お久しぶりです、あだち先生～<br />
        第272話/第273話に<br />
        なんと!当店が登場しております！<br /><br />
        是非ご覧ください！<br />
      </p>
    </div>
  </div>
  
  {/* manga2.jpg */}
  <div style={{ marginBottom: '20px' }}>
    <img 
      src="/images/manga2.jpg" 
      alt="十勝ひとりぼっち農園 掲載ページ1" 
      style={{ 
        width: '100%', 
        height: 'auto',
        borderRadius: '4px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }} 
    />
  </div>
  
  {/* manga3.jpg */}
  <div style={{ marginBottom: '15px' }}>
    <img 
      src="/images/manga3.jpg" 
      alt="十勝ひとりぼっち農園 掲載ページ2" 
      style={{ 
        width: '100%', 
        height: 'auto',
        borderRadius: '4px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }} 
    />
  </div>
</div>

        {/* ④ STAFF紹介 */}
        <div className="section" style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          <h2 className="section-title">STAFF紹介</h2>
          <p style={{ marginBottom: '20px', fontWeight: 'bold' }}>
            日本プロ麻雀連盟 北海道本部所属の<br />
            2名をご紹介！
          </p>
          
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '30px',
            marginTop: '30px'
          }}>
            {/* プロ1: 植田稔宏 */}
            <div style={{ 
              width: '280px',
              backgroundColor: '#f9f9f9',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <div style={{ marginBottom: '15px' }}>
                <img 
                  src="/images/pro1.jpg" 
                  alt="植田稔宏プロ" 
                  style={{ 
                    width: '150px', 
                    height: '150px', 
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '3px solid #007736'
                  }} 
                />
              </div>
              <h3 style={{ color: '#007736', marginBottom: '10px' }}>植田 稔宏</h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '15px' }}>
                日本プロ麻雀連盟所属<br />
                北海道本部所属<br /><br />
                
                たくさんの方々に麻雀の楽しさを伝えていけたらと思います！<br/>
                麻雀初心者の方にも親切・丁寧にご指導いたしますので、<br/>
                気軽に遊びに来てくださいね！
              </p>
              <a 
                href="https://x.com/2corosuce2" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '8px',
                  backgroundColor: '#e8e8e8',
                  borderRadius: '50%',
                  transition: 'background-color 0.3s'
                }}
              >
                <img 
                  src="/images/twitter-x.svg" 
                  alt="X" 
                  style={{ 
                    width: '20px', 
                    height: '20px',
                    filter: 'brightness(0)'
                  }} 
                />
              </a>
            </div>

            {/* プロ2: 髙橋聡志 */}
            <div style={{ 
              width: '280px',
              backgroundColor: '#f9f9f9',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <div style={{ marginBottom: '15px' }}>
                <img 
                  src="/images/pro2.jpg" 
                  alt="髙橋聡志プロ" 
                  style={{ 
                    width: '150px', 
                    height: '150px', 
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '3px solid #007736'
                  }} 
                />
              </div>
              <h3 style={{ color: '#007736', marginBottom: '10px' }}>髙橋 聡志</h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '15px' }}>
                日本プロ麻雀連盟所属<br />
                北海道本部所属<br /><br />
                麻雀店にまだ足を踏み入れたことがない…<br/>
                ひとりで行くのは不安…<br/>
                大丈夫です！！<br/>かっぱはそんなあなたをスタッフ一同笑顔でお迎えいたしますので<br/>是非一度遊びに来てみてください！

              </p>
              <a 
                href="https://x.com/satoshi19840502" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '8px',
                  backgroundColor: '#e8e8e8',
                  borderRadius: '50%',
                  transition: 'background-color 0.3s'
                }}
              >
                <img 
                  src="/images/twitter-x.svg" 
                  alt="X" 
                  style={{ 
                    width: '20px', 
                    height: '20px',
                    filter: 'brightness(0)'
                  }} 
                />
              </a>
            </div>
          </div>
        </div>

       {/* ⑤ Instagram */}
<div className="section" style={{
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  marginBottom: '30px',
  textAlign: 'center'
}}>
  <h2 className="section-title">Instagram</h2>
  <p style={{ 
    fontSize: '18px', 
    marginBottom: '20px',
    lineHeight: '1.8',
    fontWeight: 'bold',
    color: '#007736'
  }}>
    今月の営業日やイベント情報はこちら！
  </p>
  
  {/* Instagram埋め込み */}
  <div style={{
    maxWidth: '500px',
    margin: '0 auto'
  }}>
    <blockquote 
      className="instagram-media" 
      data-instgrm-permalink="https://www.instagram.com/majan_saronkappa/?utm_source=ig_embed&amp;utm_campaign=loading" 
      data-instgrm-version="14"
      style={{
        background: '#FFF',
        border: 0,
        borderRadius: '3px',
        boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
        margin: '1px',
        maxWidth: '540px',
        minWidth: '326px',
        padding: 0,
        width: 'calc(100% - 2px)'
      }}
    >
      <a 
        href="https://www.instagram.com/majan_saronkappa/" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ 
          color: '#007736', 
          textDecoration: 'none',
          fontSize: '16px',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          padding: '20px'
        }}
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: '#E4405F' }}
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
        @majan_saronkappa をチェック
      </a>
    </blockquote>
  </div>
</div>

       {/* ⑥ 料金システム */}
<div className="section" style={{
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  marginBottom: '30px',
  textAlign: 'center'
}}>
  <h2 className="section-title">料金システム</h2>
  
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '8px',
    maxWidth: '600px',
    margin: '0 auto'
  }}>
    {/* 1時間料金 */}
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 25px',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      borderLeft: '5px solid #007736'
    }}>
      <div>
        <h3 style={{ fontSize: '1.1rem', color: '#007736', marginBottom: '5px' }}>1時間</h3>
        <p style={{ fontSize: '0.8rem', color: '#666' }}>（お一人様 220円）</p>
      </div>
      <div style={{ 
        fontSize: '1.4rem', 
        fontWeight: 'bold'
      }}>
        880円<br /><span style={{ fontSize: '0.8rem', fontWeight: 'normal' }}> (税込)</span>
      </div>
    </div>
    
    {/* 打ち放題 */}
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 25px',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      borderLeft: '5px solid #007736'
    }}>
      <div>
        <h3 style={{ fontSize: '1.1rem', color: '#007736', marginBottom: '5px' }}>打ち放題</h3>
        <p style={{ fontSize: '0.8rem', color: '#666' }}>（1日フリータイム）</p>
      </div>
      <div style={{ 
        fontSize: '1.4rem', 
        fontWeight: 'bold'
      }}>
        7,040円<br /><span style={{ fontSize: '0.8rem', fontWeight: 'normal' }}> (税込)</span>
      </div>
    </div>
  </div>
</div>

        {/* ⑦ アクセスマップ */}
        <div className="section" style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          <h2 className="section-title">アクセス</h2>
          <div style={{ marginTop: '20px' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2921.763398030771!2d143.19690938701194!3d42.92003069674938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f739940c6ef37df%3A0xaf5e40d26f880125!2z6bq76ZuA44K144Ot44Oz44GL44Gj44Gx!5e0!3m2!1sja!2sjp!4v1763386143001!5m2!1sja!2sjp"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '8px' }}
              loading="lazy"
            />
          </div>
          <div style={{ marginTop: '20px', textAlign: 'left' }}>
            <p><strong>住所:</strong> 〒0155-27-7337 北海道帯広市西二条南11丁目1　清水ビル3F</p>
            <p><strong>営業時間:</strong> 11:00～24:00</p>
            <p><strong>定休日:</strong> 不定休</p>
          </div>
        </div>
      </div>
    </div>
  );
}
