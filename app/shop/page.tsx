export default function Shop() {
  return (
    <div style={{ 
      backgroundColor: '#FFDD55', 
      minHeight: '100vh', 
      padding: '40px 20px'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ 
          textAlign: 'center', 
          marginBottom: '30px',
          color: '#007736',
        }}>店舗紹介</h1>
        
        {/* 店舗概要 */}
        <div className="section">
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <img 
              src="/images/shop-image.jpg" 
              alt="麻雀サロンかっぱ 店内" 
              style={{ 
                maxWidth: '100%', 
                borderRadius: '8px',
                border: '1px solid #ddd' 
              }} 
            />
          </div>
          
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h2 style={{ color: '#007736', marginBottom: '15px' }}>麻雀サロン かっぱ</h2>
            <p style={{ lineHeight: '1.8' }}>
              初心者から上級者まで、どなたでも楽しめる<br />
              アットホームな雰囲気が自慢です。<br />
              一人での来店も大歓迎！スタッフがご案内します。
            </p>
          </div>
          
          {/* 店舗情報テーブル */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            overflow: 'hidden',
            marginBottom: '30px',
            border: '1px solid #eee'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <th style={{ 
                    backgroundColor: '#f5f5f5', 
                    padding: '15px', 
                    textAlign: 'left',
                    width: '120px'
                  }}>住所</th>
                  <td style={{ padding: '15px' }}>〒080-0011 北海道帯広市西二条南11丁目1　清水ビル3F</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <th style={{ 
                    backgroundColor: '#f5f5f5', 
                    padding: '15px', 
                    textAlign: 'left'
                  }}>電話番号</th>
                  <td style={{ padding: '15px' }}>0155-27-7337</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <th style={{ 
                    backgroundColor: '#f5f5f5', 
                    padding: '15px', 
                    textAlign: 'left'
                  }}>営業時間</th>
                  <td style={{ padding: '15px' }}>11:00-24:00</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
        
        {/* 店内写真 */}
        <div className="section">
          <h2 className="section-title">店内写真</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '15px',
            marginBottom: '30px'
          }}>
            {/* 店内写真1 */}
            <div style={{ borderRadius: '8px', overflow: 'hidden' }}>
              <img
                src="/images/shop-interior1.jpg"
                alt="店内写真1"
                style={{
                  width: '100%',
                  aspectRatio: '1',
                  objectFit: 'cover'
                }}
              />
            </div>
            
            {/* 店内写真2 */}
            <div style={{ borderRadius: '8px', overflow: 'hidden' }}>
              <img
                src="/images/shop-interior2.jpg"
                alt="店内写真2"
                style={{
                  width: '100%',
                  aspectRatio: '1',
                  objectFit: 'cover'
                }}
              />
            </div>
            
            {/* 店内写真3 */}
            <div style={{ borderRadius: '8px', overflow: 'hidden' }}>
              <img
                src="/images/shop-interior3.jpg"
                alt="店内写真3"
                style={{
                  width: '100%',
                  aspectRatio: '1',
                  objectFit: 'cover'
                }}
              />
            </div>
            
            {/* 店内写真4 */}
            <div style={{ borderRadius: '8px', overflow: 'hidden' }}>
              <img
                src="/images/shop-interior4.jpg"
                alt="店内写真4"
                style={{
                  width: '100%',
                  aspectRatio: '1',
                  objectFit: 'cover'
                }}
              />
            </div>
            
            {/* 店内写真5 */}
            <div style={{ borderRadius: '8px', overflow: 'hidden' }}>
              <img
                src="/images/shop-interior5.jpg"
                alt="店内写真5"
                style={{
                  width: '100%',
                  aspectRatio: '1',
                  objectFit: 'cover'
                }}
              />
            </div>
            
            {/* 店内写真6 */}
            <div style={{ borderRadius: '8px', overflow: 'hidden' }}>
              <img
                src="/images/shop-interior6.jpg"
                alt="店内写真6"
                style={{
                  width: '100%',
                  aspectRatio: '1',
                  objectFit: 'cover'
                }}
              />
            </div>
            

          </div>
          
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <p>清潔で快適な店内で、ごゆっくりお楽しみください。</p>
          </div>
        </div>
        
        {/* スタッフ紹介 */}
        <div className="section">
          <h2 className="section-title">日本プロ麻雀連盟 北海道本部所属の ２名をご紹介！</h2>
          
          <div style={{ marginBottom: '40px' }}>
            {/* プロ雀士1 */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '30px',
              padding: '20px',
              backgroundColor: '#f5f5f5',
              borderRadius: '8px'
            }}>
              <div style={{ marginBottom: '15px', textAlign: 'center' }}>
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
                <div style={{ marginTop: '10px' }}>
                  <h3 style={{ color: '#007736', marginBottom: '5px' }}>植田 稔宏 プロ</h3>
                  <p style={{ fontSize: '0.9rem', marginBottom: '5px' }}>日本プロ麻雀連盟</p>
                  <p style={{ fontSize: '0.8rem', color: '#666' }}>日本プロ麻雀連盟　第34期　北海道本部所属</p>
                </div>
              </div>
              
              <p style={{ textAlign: 'center', lineHeight: '1.6', marginBottom: '15px' }}>
                たくさんの方々に麻雀の楽しさを伝えていけたらと思います！麻雀初心者の方にも親切・丁寧にご指導いたしますので、気軽に遊びに来てくださいね！
              </p>
              
              <a 
                href="https://x.com/2corosuce2" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: '#1DA1F2',
                  textDecoration: 'none'
                }}
              >
                <img src="/images/twitter-x.svg" alt="Twitter/X" style={{ height: '20px', marginRight: '5px' }} />
                Twitter/X
              </a>
            </div>
            
            {/* プロ雀士2 */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '20px',
              backgroundColor: '#f5f5f5',
              borderRadius: '8px'
            }}>
              <div style={{ marginBottom: '15px', textAlign: 'center' }}>
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
                <div style={{ marginTop: '10px' }}>
                  <h3 style={{ color: '#007736', marginBottom: '5px' }}>髙橋 聡志 プロ</h3>
                  <p style={{ fontSize: '0.9rem', marginBottom: '5px' }}>日本プロ麻雀連盟</p>
                  <p style={{ fontSize: '0.8rem', color: '#666' }}>日本プロ麻雀連盟　第39期後期　北海道本部所属</p>
                </div>
              </div>
              
              <p style={{ textAlign: 'center', lineHeight: '1.6', marginBottom: '15px' }}>
                麻雀店にまだ足を踏み入れたことがない…<br/>
                ひとりで行くのは不安…<br/>
                大丈夫です！！かっぱはそんなあなたをスタッフ一同笑顔でお迎えいたしますので是非一度遊びに来てみてください！
              </p>
              
              <a 
                href="https://x.com/satoshi19840502" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: '#1DA1F2',
                  textDecoration: 'none'
                }}
              >
                <img src="/images/twitter-x.svg" alt="Twitter/X" style={{ height: '20px', marginRight: '5px' }} />
                Twitter/X
              </a>
            </div>
          </div>
        </div>
        

tsx{/* Googleマップ */}
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
      allowFullScreen
    />
  </div>
  <div style={{ marginTop: '20px', textAlign: 'left' }}>
    <p><strong>住所:</strong> 北海道帯広市西二条南11丁目1　清水ビル3F</p>
    <p><strong>電話:</strong> 0155-27-7337</p>
    <p><strong>営業時間:</strong> 11:00～24:00</p>
    <p><strong>交通手段:</strong> JR帯広駅 北口より徒歩3分</p>
  </div>
</div>
      </div>
    </div>
  );
}
