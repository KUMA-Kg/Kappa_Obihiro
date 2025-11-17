export default function System() {
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
        }}>料金システム</h1>
        
        {/* 料金プラン */}
        <div className="section">
          <h2 className="section-title">セット料金</h2>
          
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
                880円<span style={{ fontSize: '0.8rem', fontWeight: 'normal' }}> (税込)</span>
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
                7,040円<span style={{ fontSize: '0.8rem', fontWeight: 'normal' }}> (税込)</span>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '20px', padding: '15px', backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: '5px', maxWidth: '600px', margin: '20px auto 0' }}>
            <p style={{ fontSize: '0.9rem', textAlign: 'center' }}>
              ※ 初めてのお客様も大歓迎！お気軽にご来店ください。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}