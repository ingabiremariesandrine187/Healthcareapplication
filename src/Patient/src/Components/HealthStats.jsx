import React from 'react';

// Custom CSS styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '24px',
    backgroundColor: 'white',
    gap: '48px'
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  progressContainer: {
    position: 'relative',
    width: '128px',
    height: '128px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  percentageText: {
    position: 'absolute',
    fontSize: '16px',
    fontWeight: '500'
  },
  label: {
    marginTop: '12px',
    fontSize: '16px',
    fontWeight: '500',
    color: '#333333'
  }
};

const CircularProgressBar = ({ percentage, color, size = 120 }) => {
  // Calculate the circle's properties
  const radius = 45;
  const strokeWidth = 12;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  const viewBoxSize = radius * 2 + strokeWidth;

  return (
    <div style={styles.progressContainer}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        style={{ transform: 'rotate(-90deg)' }}
      >
        <circle
          stroke="#F5F5F5"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius + strokeWidth / 2}
          cy={radius + strokeWidth / 2}
        />
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="butt"
          r={normalizedRadius}
          cx={radius + strokeWidth / 2}
          cy={radius + strokeWidth / 2}
        />
      </svg>
      <div style={styles.percentageText}>
        {percentage}%
      </div>
    </div>
  );
};

const HealthStats = () => {
  // Sample values matching your image
  const generalHealth = 48;
  const waterBalance = 73;
  
  return (
    <div style={styles.container}>
      <div style={styles.column}>
        <CircularProgressBar 
          percentage={generalHealth} 
          color="#0B3779" 
        />
        <div style={styles.label}>General Health</div>
      </div>
      
      <div style={styles.column}>
        <CircularProgressBar 
          percentage={waterBalance} 
          color="#40D5CF" 
        />
        <div style={styles.label}>Water Balance</div>
      </div>
    </div>
  );
};

export default HealthStats;