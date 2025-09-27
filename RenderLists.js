import React from 'react';
import logo from './logo.svg';

function RenderLists({ fruits, vegetables, animals }) {
  const banner = {
    background: '#000',
    color: '#fff',
    fontWeight: 900,
    fontSize: 42,
    padding: '20px 12px',
    borderRadius: 8,
    letterSpacing: 2,
    margin: '0 auto',
    width: '100%',
    lineHeight: 1.2,
    position: 'relative',
    textAlign: 'center'
  };

  const logoStyle = {
    height: '50px',
    width: '50px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
  };

  const cyanHeader = {
    background: 'cyan',
    border: '2px solid black',
    borderRadius: 8,
    fontSize: 24,
    fontWeight: 700,
    textAlign: 'center',
    padding: '8px 12px',
    marginBottom: 8
  };

  const twoColTable = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 18,
    alignItems: 'start',
    marginBottom: 20,
    marginTop: 20
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse'
  };

  const tdStyle = {
    textAlign: 'center',
    padding: '4px 0'
  };

  const animalsTable = {
    width: '100%',
    maxWidth: 900,
    margin: '0 auto',
    borderCollapse: 'collapse',
    tableLayout: 'fixed'
  };

  const h3Style = {
    textAlign: 'left',
    margin: 0
  };

  const h4Style = {
    textAlign: 'left',
    margin: 0
  };

  const dietStyle = {
    textAlign: 'left',
    fontSize: '0.85rem',
    margin: 0
  };

  // Padding adjustments for each column
  const columnPadding = {
    Lion: { paddingLeft: '2px' },
    Gorilla: { paddingLeft: '22px' }, // more shift
    Zebra: { paddingLeft: '40px' }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      {/* Banner with logos */}
      <div style={banner}>
        <img src={logo} alt="React Logo Left" style={{ ...logoStyle, left: '10px' }} />
        RENDER
        <br />
        LISTS
        <img src={logo} alt="React Logo Right" style={{ ...logoStyle, right: '10px' }} />
      </div>

      {/* Fruits & Vegetables tables */}
      <div style={twoColTable}>
        <div>
          <div style={cyanHeader}>Fruits</div>
          <table style={tableStyle}>
            <tbody>
              {fruits.map((f) => (
                <tr key={f.name}>
                  <td style={tdStyle}>
                    {f.name.toLowerCase()}: <strong>{f.quantity}</strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <div style={cyanHeader}>Vegetables</div>
          <table style={tableStyle}>
            <tbody>
              {vegetables.map((v) => (
                <tr key={v.name}>
                  <td style={tdStyle}>
                    {v.name.toLowerCase()}: <strong>{v.quantity}</strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Animals Section */}
      <h2 style={{ margin: '10px 0 12px' }}>Animals</h2>
      <table style={animalsTable}>
        <thead>
          <tr>
            {animals.map((a) => (
              <th key={a.name} style={columnPadding[a.name] || {}}>
                <h3 style={h3Style}>{a.name}</h3>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {animals.map((a) => (
              <td key={a.name + '-sci'} style={columnPadding[a.name] || {}}>
                <h4 style={h4Style}>{a.scientificName}</h4>
              </td>
            ))}
          </tr>
          <tr>
            {animals.map((a) => (
              <td key={a.name + '-weight'} style={columnPadding[a.name] || {}}>
                <h4 style={h4Style}>
                  {a.name === 'Gorilla' ? '205 kg' : a.weight}
                </h4>
              </td>
            ))}
          </tr>
          <tr>
            {animals.map((a) => (
              <td key={a.name + '-diet'} style={columnPadding[a.name] || {}}>
                <p style={dietStyle}>{a.diet}</p>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RenderLists;
