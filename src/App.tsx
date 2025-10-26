import { useState, useEffect } from 'react';
import './App.css';

// EOQ calculation function
const calculateEOQ = (demand: number, orderCost: number, holdingCost: number) => {
  const eoq = Math.sqrt((2 * demand * orderCost) / holdingCost);
  const ordersPerYear = demand / eoq;
  const totalCost = (ordersPerYear * orderCost) + ((eoq / 2) * holdingCost);
  
  return {
    eoq: eoq,
    ordersPerYear: ordersPerYear,
    totalCost: totalCost
  };
};

function App() {
  // State for input values
  const [demand, setDemand] = useState<number>(12000);
  const [orderCost, setOrderCost] = useState<number>(200000);
  const [holdingCost, setHoldingCost] = useState<number>(5000);
  
  // State for results
  const [results, setResults] = useState({
    eoq: 0,
    ordersPerYear: 0,
    totalCost: 0
  });
  
  // Calculate results whenever inputs change
  useEffect(() => {
    const calculatedResults = calculateEOQ(demand, orderCost, holdingCost);
    setResults(calculatedResults);
  }, [demand, orderCost, holdingCost]);

  // Format currency
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  // Format numbers with thousands separator
  const formatNumber = (value: number): string => {
    return new Intl.NumberFormat('id-ID', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Kalkulator EOQ</h1>
        <p>Kalkulator Kuantitas Pesanan Ekonomis untuk Manajemen Inventaris Optimal</p>
      </header>
      
      <div className="container">
        <div className="calculator-card">
          <h2>Parameter Input</h2>
          
          <div className="input-group">
            <label htmlFor="demand">Permintaan Tahunan (unit/tahun):</label>
            <input
              id="demand"
              type="number"
              value={demand}
              onChange={(e) => setDemand(Number(e.target.value))}
              min="0"
              step="100"
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="orderCost">Biaya Pemesanan (Rp per pesanan):</label>
            <input
              id="orderCost"
              type="number"
              value={orderCost}
              onChange={(e) => setOrderCost(Number(e.target.value))}
              min="0"
              step="1000"
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="holdingCost">Biaya Penyimpanan (Rp per unit/tahun):</label>
            <input
              id="holdingCost"
              type="number"
              value={holdingCost}
              onChange={(e) => setHoldingCost(Number(e.target.value))}
              min="0"
              step="100"
            />
          </div>
        </div>
        
        <div className="results-card">
          <h2>Hasil EOQ</h2>
          
          <div className="result-item">
            <span className="result-label">Kuantitas Pesanan Optimal (EOQ):</span>
            <span className="result-value">{formatNumber(results.eoq)} unit</span>
          </div>
          
          <div className="result-item">
            <span className="result-label">Jumlah Pesanan per Tahun:</span>
            <span className="result-value">{formatNumber(results.ordersPerYear)} kali</span>
          </div>
          
          <div className="result-item">
            <span className="result-label">Total Biaya Tahunan:</span>
            <span className="result-value">{formatCurrency(results.totalCost)}</span>
          </div>
          
          <div className="eoq-formula">
            <h3>Rumus EOQ:</h3>
            <p>EOQ = √[(2 × D × Co) / Ch]</p>
            <p>Dimana:</p>
            <ul>
              <li>D = Permintaan Tahunan</li>
              <li>Co = Biaya Pemesanan per Pesanan</li>
              <li>Ch = Biaya Penyimpanan per Unit per Tahun</li>
            </ul>
          </div>
        </div>
        
        <div className="results-card">
          <h2>Analisis Biaya</h2>
          
          <div className="result-item">
            <span className="result-label">Biaya Pemesanan Tahunan:</span>
            <span className="result-value">{formatCurrency(orderCost * results.ordersPerYear)}</span>
          </div>
          
          <div className="result-item">
            <span className="result-label">Biaya Penyimpanan Tahunan:</span>
            <span className="result-value">{formatCurrency(holdingCost * results.eoq / 2)}</span>
          </div>
          
          <div className="eoq-formula">
            <h3>Penjelasan:</h3>
            <p>EOQ adalah titik optimal di mana biaya pemesanan dan biaya penyimpanan seimbang untuk meminimalkan total biaya persediaan.</p>
          </div>
        </div>
      </div>
      
      <footer className="footer">
        <p>Kuantitas Pesanan Ekonomis (EOQ) adalah model manajemen inventaris fundamental yang menentukan kuantitas pesanan optimal yang meminimalkan total biaya inventaris.</p>
      </footer>
    </div>
  );
}

export default App;