import { useState } from 'react';
import { CopyIcon } from '../Networks/CopyIcon';

export default function UserIdChecker() {
  const [userSeed, setUserSeed] = useState('user_123');
  const [userId, setUserId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const API_BASE = 'https://nillion-storage-apis-v0.onrender.com';

  const getUserId = async () => {
    if (!userSeed) return;
    
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE}/api/user`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nillion_seed: userSeed }),
      });
      const data = await response.json();
      setUserId(data.nillion_user_id);
    } catch (error) {
      console.error('Error fetching user ID:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <label>User Seed</label>
        <input
          type="text"
          placeholder="Enter your user seed"
          value={userSeed}
          onChange={(e) => setUserSeed(e.target.value)}
          style={{ 
            flex: 1, 
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        />
        <button 
          onClick={getUserId} 
          disabled={!userSeed || isLoading}
          style={{ 
            padding: '8px 16px',
            backgroundColor: !userSeed || isLoading ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: !userSeed || isLoading ? 'not-allowed' : 'pointer'
          }}
        >
          {isLoading ? 'Loading...' : 'Get my Nillion User ID'}
        </button>
      </div>
      
      {userId && (
        <div style={{ padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '4px', wordBreak: 'break-all' }}>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '4px' }}>User ID:</p>
          <CopyIcon value={userId}  />
        </div>
      )}
    </div>
  );
}