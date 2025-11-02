export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '2rem'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '1rem',
        padding: '3rem',
        maxWidth: '800px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#0f766e',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          LaunchFast
        </h1>
        
        <p style={{
          fontSize: '1.5rem',
          color: '#64748b',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          Amazon FBA Product Research Tool
        </p>

        <div style={{
          borderTop: '2px solid #e2e8f0',
          paddingTop: '2rem',
          marginTop: '2rem'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#0f766e',
            marginBottom: '1rem'
          }}>
            Product Research Made Easy
          </h2>
          
          <p style={{
            fontSize: '1.1rem',
            color: '#475569',
            lineHeight: '1.8',
            marginBottom: '1.5rem'
          }}>
            Find your next Amazon winner with comprehensive market analysis, 
            profit validation, and supplier connections in one clear workflow.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            marginTop: '2rem'
          }}>
            <div style={{
              padding: '1.5rem',
              background: '#f1f5f9',
              borderRadius: '0.5rem'
            }}>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: 'bold',
                color: '#0f766e',
                marginBottom: '0.5rem'
              }}>
                📊 Market Analysis
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b' }}>
                Grade, risk, velocity, and margin data
              </p>
            </div>

            <div style={{
              padding: '1.5rem',
              background: '#f1f5f9',
              borderRadius: '0.5rem'
            }}>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: 'bold',
                color: '#0f766e',
                marginBottom: '0.5rem'
              }}>
                💰 Profit Validation
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b' }}>
                ROI calculator with real-time data
              </p>
            </div>

            <div style={{
              padding: '1.5rem',
              background: '#f1f5f9',
              borderRadius: '0.5rem'
            }}>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: 'bold',
                color: '#0f766e',
                marginBottom: '0.5rem'
              }}>
              🏭 Supplier CRM
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b' }}>
                Manage suppliers and track samples
              </p>
            </div>
          </div>
        </div>

        <div style={{
          marginTop: '2rem',
          paddingTop: '2rem',
          borderTop: '2px solid #e2e8f0',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '0.9rem',
            color: '#94a3b8'
          }}>
            © 2025 LaunchFast. Amazon FBA Product Research Tool.
          </p>
          <p style={{
            fontSize: '0.85rem',
            color: '#cbd5e1',
            marginTop: '0.5rem'
          }}>
            Currently in development
          </p>
        </div>
      </div>
    </div>
  );
}

