import React from 'react';
import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar, Pie, Radar } from 'react-chartjs-2';
import '../styles/Dashboard.css';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Style variables using the specified colors
  const primaryColor = '#82b647';
  const secondaryColor = '#245168';
  const lightPrimary = '#a3d065';
  const lightSecondary = '#3a7a99';
  
  // Sample data for charts
  const moodData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Mood Score',
      data: [7, 6, 8, 5, 6, 7, 9],
      borderColor: primaryColor,
      backgroundColor: 'rgba(130, 182, 71, 0.2)',
      tension: 0.4,
    }]
  };
  
  const emotionsData = {
    labels: ['Happy', 'Sad', 'Anxious', 'Calm', 'Angry', 'Tired'],
    datasets: [{
      label: 'Frequency',
      data: [12, 5, 8, 15, 3, 7],
      backgroundColor: [
        lightPrimary,
        '#ff6384',
        '#ffce56',
        primaryColor,
        '#ff9f40',
        lightSecondary
      ],
    }]
  };
  
  const sentimentData = {
    labels: ['Positive', 'Negative', 'Neutral'],
    datasets: [{
      data: [65, 15, 20],
      backgroundColor: [
        primaryColor,
        '#ff6384',
        '#e0e0e0',
      ],
    }]
  };
  
  const aiInteractionData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{
      label: 'AI Chat Sessions',
      data: [5, 8, 6, 12],
      backgroundColor: secondaryColor,
    }]
  };
  
  const counselingAttendanceData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Sessions Attended',
      data: [4, 3, 4, 2, 4, 3],
      backgroundColor: primaryColor,
    }, {
      label: 'Sessions Missed',
      data: [0, 1, 0, 2, 0, 1],
      backgroundColor: '#ff6384',
    }]
  };
  
  const testScoresData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'PHQ-9 Score',
      data: [15, 12, 10, 9, 7, 6],
      borderColor: '#ff6384',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
    }, {
      label: 'GAD-7 Score',
      data: [12, 11, 9, 7, 8, 5],
      borderColor: '#36a2eb',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
    }]
  };
  
  const wellnessRadarData = {
    labels: ['Sleep', 'Activity', 'Nutrition', 'Social', 'Stress', 'Mindfulness'],
    datasets: [{
      label: 'Current Week',
      data: [8, 6, 7, 5, 4, 7],
      backgroundColor: 'rgba(130, 182, 71, 0.2)',
      borderColor: primaryColor,
      pointBackgroundColor: primaryColor,
    }, {
      label: 'Previous Week',
      data: [6, 5, 6, 4, 6, 5],
      backgroundColor: 'rgba(36, 81, 104, 0.2)',
      borderColor: secondaryColor,
      pointBackgroundColor: secondaryColor,
    }]
  };
  
  // Helper function to determine status based on score range
  const getScoreStatus = (score, max = 100) => {
    const percentage = (score / max) * 100;
    
    if (percentage >= 90) return { class: 'status-excellent', text: 'Excellent', icon: '★' };
    if (percentage >= 75) return { class: 'status-good', text: 'Good', icon: '✓' };
    if (percentage >= 60) return { class: 'status-average', text: 'Average', icon: '○' };
    if (percentage >= 40) return { class: 'status-poor', text: 'Poor', icon: '⚠' };
    return { class: 'status-critical', text: 'Critical', icon: '!' };
  };
  
  // Get mental health score status
  const overallScore = 76;
  const overallStatus = getScoreStatus(overallScore);
  
  // Get color based on mental health score
  const getScoreColor = (score) => {
    if (score >= 90) return '#10b981'; // Excellent - Green
    if (score >= 75) return '#22c55e'; // Good - Light Green
    if (score >= 60) return '#f59e0b'; // Average - Amber
    if (score >= 40) return '#f97316'; // Poor - Orange
    return '#ef4444'; // Critical - Red
  };
  
  const scoreColor = getScoreColor(overallScore);
  
  return (
    <div className="dashboard">
      <h1 className="dashboard-header"><span>Mental Health Dashboard</span></h1>
      
      {/* Overall Mental Health Score */}
      <section className="card">
        <h2 className="card-header">
          <i className="fas fa-heart"></i> Overall Mental Health Score
        </h2>
        <div className="flex-container">
          <div className="flex-item score-container">
            <div className="score-circle" style={{backgroundColor: scoreColor}}>
              <div>{overallScore}</div>
              <div className="score-label">out of 100</div>
            </div>
            <div className="score-info">
              <div className={`status-indicator ${overallStatus.class}`}>
                <i>{overallStatus.icon}</i> {overallStatus.text}
              </div>
            </div>
            
            <div className="score-range-legend">
              <div className="range-item">
                <div className="range-color" style={{backgroundColor: '#ef4444'}}></div>
                <span className="range-text">0-40<br/>Critical</span>
              </div>
              <div className="range-item">
                <div className="range-color" style={{backgroundColor: '#f97316'}}></div>
                <span className="range-text">41-60<br/>Poor</span>
              </div>
              <div className="range-item">
                <div className="range-color" style={{backgroundColor: '#f59e0b'}}></div>
                <span className="range-text">61-75<br/>Average</span>
              </div>
              <div className="range-item">
                <div className="range-color" style={{backgroundColor: '#22c55e'}}></div>
                <span className="range-text">76-89<br/>Good</span>
              </div>
              <div className="range-item">
                <div className="range-color" style={{backgroundColor: '#10b981'}}></div>
                <span className="range-text">90-100<br/>Excellent</span>
              </div>
            </div>
          </div>
          <div className="flex-item">
            <Line 
              data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                  label: 'Overall Score Trend',
                  data: [65, 68, 70, 72, 74, 76],
                  borderColor: primaryColor,
                  backgroundColor: 'rgba(130, 182, 71, 0.2)',
                  tension: 0.4,
                  fill: true,
                }]
              }} 
              options={{
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 1.8,
                plugins: {
                  legend: {
                    position: 'top',
                    labels: {
                      boxWidth: 12,
                      font: {
                        size: 11
                      }
                    }
                  },
                  tooltip: {
                    callbacks: {
                      afterLabel: function(context) {
                        const score = context.raw;
                        const status = getScoreStatus(score).text;
                        return `Status: ${status}`;
                      }
                    }
                  }
                },
                scales: {
                  y: {
                    min: 50,
                    max: 100,
                    title: {
                      display: true,
                      text: 'Score',
                      font: {
                        size: 11
                      }
                    },
                    grid: {
                      display: true,
                      color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                      font: {
                        size: 10
                      }
                    }
                  },
                  x: {
                    grid: {
                      display: false
                    },
                    ticks: {
                      font: {
                        size: 10
                      }
                    }
                  }
                }
              }}
            />
            <div className="legend">
              <div className="legend-item">
                <div className="legend-color" style={{backgroundColor: '#10b981'}}></div>
                <span>90-100: Excellent</span>
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{backgroundColor: '#22c55e'}}></div>
                <span>76-89: Good</span>
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{backgroundColor: '#f59e0b'}}></div>
                <span>61-75: Average</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mood Tracking */}
      <section className="card">
        <h2 className="card-header">
          <i className="fas fa-smile"></i> Mood Tracking
        </h2>
        <div className="flex-container">
          <div className="flex-item">
            <h3 style={{color: secondaryColor, fontSize: '1.1rem', marginTop: '0'}}>Daily Mood</h3>
            <Line data={moodData} options={{
              responsive: true,
              maintainAspectRatio: true,
              aspectRatio: 1.8,
              plugins: {
                legend: {
                  labels: {
                    boxWidth: 12,
                    font: {
                      size: 11
                    }
                  }
                },
                tooltip: {
                  callbacks: {
                    afterLabel: function(context) {
                      const score = context.raw;
                      let status = '';
                      if (score >= 8) status = "Great";
                      else if (score >= 6) status = "Good";
                      else if (score >= 4) status = "Neutral";
                      else if (score >= 2) status = "Low";
                      else status = "Very Low";
                      return `Status: ${status}`;
                    }
                  }
                }
              },
              scales: {
                y: {
                  min: 0,
                  max: 10,
                  title: {
                    display: true,
                    text: 'Mood (0-10)',
                    font: {
                      size: 11
                    }
                  },
                  grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                  },
                  ticks: {
                    font: {
                      size: 10
                    }
                  }
                },
                x: {
                  grid: {
                    display: false
                  },
                  ticks: {
                    font: {
                      size: 10
                    }
                  }
                }
              }
            }} />
            <div className="score-range-legend">
              <div className="range-item">
                <div className="range-color" style={{backgroundColor: '#ef4444'}}></div>
                <span className="range-text">0-2<br/>Very Low</span>
              </div>
              <div className="range-item">
                <div className="range-color" style={{backgroundColor: '#f97316'}}></div>
                <span className="range-text">3-4<br/>Low</span>
              </div>
              <div className="range-item">
                <div className="range-color" style={{backgroundColor: '#f59e0b'}}></div>
                <span className="range-text">5-6<br/>Neutral</span>
              </div>
              <div className="range-item">
                <div className="range-color" style={{backgroundColor: '#22c55e'}}></div>
                <span className="range-text">7-8<br/>Good</span>
              </div>
              <div className="range-item">
                <div className="range-color" style={{backgroundColor: '#10b981'}}></div>
                <span className="range-text">9-10<br/>Great</span>
              </div>
            </div>
          </div>
          <div className="flex-item">
            <h3 style={{color: secondaryColor, fontSize: '1.1rem', marginTop: '0'}}>Emotion Frequency</h3>
            <Bar data={emotionsData} options={{
              responsive: true,
              maintainAspectRatio: true,
              aspectRatio: 1.8,
              plugins: {
                legend: {
                  display: false
                }
              },
              scales: {
                y: {
                  beginAtZero: true,
                  grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                  },
                  ticks: {
                    font: {
                      size: 10
                    }
                  }
                },
                x: {
                  grid: {
                    display: false
                  },
                  ticks: {
                    font: {
                      size: 10
                    }
                  }
                }
              }
            }} />
          </div>
        </div>
      </section>
      
      {/* Forum Engagement */}
      <section className="card">
        <h2 className="card-header">
          <i className="fas fa-users"></i> Forum Engagement
        </h2>
        <div className="flex-container">
          <div className="flex-item">
            <h3 style={{color: secondaryColor, fontSize: '1.1rem', marginTop: '0'}}>Post Sentiment Analysis</h3>
            <Pie data={sentimentData} options={{
              responsive: true,
              maintainAspectRatio: true,
              aspectRatio: 1.5,
              plugins: {
                legend: {
                  display: false,
                  position: 'right',
                  labels: {
                    boxWidth: 12,
                    font: {
                      size: 11
                    }
                  }
                },
                tooltip: {
                  callbacks: {
                    label: function(context) {
                      const label = context.label || '';
                      const value = context.formattedValue;
                      return `${label}: ${value}%`;
                    }
                  }
                }
              }
            }} />
            <div className="legend" style={{marginTop: '20px'}}>
              <div className="legend-item">
                <div className="legend-color" style={{backgroundColor: primaryColor}}></div>
                <span>Positive: 65%</span>
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{backgroundColor: '#ff6384'}}></div>
                <span>Negative: 15%</span>
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{backgroundColor: '#e0e0e0'}}></div>
                <span>Neutral: 20%</span>
              </div>
            </div>
          </div>
          <div className="flex-item">
            <h3 style={{color: secondaryColor, fontSize: '1.1rem', marginTop: '0'}}>Most Discussed Topics</h3>
            <div className="tag-cloud">
              <span style={{fontSize: '26px', color: primaryColor, margin: '0 10px'}}>Anxiety</span>
              <span style={{fontSize: '22px', color: secondaryColor, margin: '0 10px'}}>Meditation</span>
              <span style={{fontSize: '18px', color: lightPrimary, margin: '0 10px'}}>Sleep</span>
              <span style={{fontSize: '24px', color: lightSecondary, margin: '0 10px'}}>Stress</span>
              <span style={{fontSize: '20px', color: primaryColor, margin: '0 10px'}}>Relationships</span>
              <span style={{fontSize: '16px', color: secondaryColor, margin: '0 10px'}}>Work</span>
              <span style={{fontSize: '28px', color: lightPrimary, margin: '0 10px'}}>Mindfulness</span>
            </div>
            
            <div className="flex-container" style={{marginTop: '20px'}}>
              <div className="info-box">
                <div className="info-box-icon">
                  <i className="fas fa-file-alt"></i>
                </div>
                <div className="info-box-content">
                  <h4>Posts this month</h4>
                  <p>17 posts (↑ 15% from last month)</p>
                </div>
              </div>
              <div className="info-box">
                <div className="info-box-icon">
                  <i className="fas fa-comment-alt"></i>
                </div>
                <div className="info-box-content">
                  <h4>Comments this month</h4>
                  <p>43 comments (↑ 22% from last month)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* AI Chatbot Interaction Data */}
      <section className="card">
        <h2 className="card-header">
          <i className="fas fa-robot"></i> AI Chatbot Interaction
        </h2>
        <div className="flex-container">
          <div className="flex-item">
            <Bar 
              data={aiInteractionData}
              options={{
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 1.8,
                plugins: {
                  legend: {
                    display: false
                  }
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    title: {
                      display: true,
                      text: 'Number of Sessions',
                      font: {
                        size: 11
                      }
                    },
                    grid: {
                      color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                      font: {
                        size: 10
                      }
                    }
                  },
                  x: {
                    grid: {
                      display: false
                    },
                    ticks: {
                      font: {
                        size: 10
                      }
                    }
                  }
                }
              }}
            />
            
            <div className="info-box" style={{marginTop: '20px'}}>
              <div className="info-box-icon">
                <i className="fas fa-info-circle"></i>
              </div>
              <div className="info-box-content">
                <h4>AI Engagement Insight</h4>
                <p>Your AI chat usage has increased by 140% in the last month, which is strongly correlated with improved mood scores.</p>
              </div>
            </div>
          </div>
          <div className="flex-item">
            <h3 style={{color: secondaryColor}}>Common Topics with AI Assistant</h3>
            <ul className="metric-list">
              <li>
                <span className="metric-pill" style={{backgroundColor: primaryColor}}>32%</span>
                Anxiety management
              </li>
              <li>
                <span className="metric-pill" style={{backgroundColor: secondaryColor}}>27%</span>
                Sleep issues
              </li>
              <li>
                <span className="metric-pill" style={{backgroundColor: lightPrimary}}>18%</span>
                Work-related stress
              </li>
              <li>
                <span className="metric-pill" style={{backgroundColor: lightSecondary}}>14%</span>
                Relationship advice
              </li>
              <li>
                <span className="metric-pill" style={{backgroundColor: '#8e8e8e'}}>9%</span>
                Other topics
              </li>
            </ul>
            
            <div className="info-box">
              <div className="info-box-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <div className="info-box-content">
                <h4>Personalized Suggestion</h4>
                <p>Based on your chat patterns, you might benefit from our guided anxiety reduction modules.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Counseling Sessions */}
      <section className="card">
        <h2 className="card-header">
          <i className="fas fa-user-md"></i> Counseling Sessions
        </h2>
        <div className="flex-container">
          <div className="flex-item">
            <h3 style={{color: secondaryColor, fontSize: '1.1rem', marginTop: '0'}}>Session Attendance</h3>
            <Bar 
              data={counselingAttendanceData}
              options={{
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 1.8,
                plugins: {
                  legend: {
                    labels: {
                      boxWidth: 12,
                      font: {
                        size: 11
                      }
                    }
                  },
                  tooltip: {
                    callbacks: {
                      footer: (tooltipItems) => {
                        const item = tooltipItems[0];
                        const datasetIndex = item.datasetIndex;
                        const index = item.dataIndex;
                        const datasets = counselingAttendanceData.datasets;
                        
                        if (datasetIndex === 0) {
                          const attended = datasets[0].data[index];
                          const missed = datasets[1].data[index];
                          const total = attended + missed;
                          const percent = Math.round((attended / total) * 100);
                          return `Attendance Rate: ${percent}%`;
                        }
                      }
                    }
                  }
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    grid: {
                      color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                      font: {
                        size: 10
                      }
                    }
                  },
                  x: {
                    grid: {
                      display: false
                    },
                    ticks: {
                      font: {
                        size: 10
                      }
                    }
                  }
                }
              }}
            />
            
            <div className="score-range-legend">
              <div className="range-item">
                <div className="range-color" style={{backgroundColor: '#ef4444'}}></div>
                <span className="range-text">0-20%<br/>Very Poor</span>
              </div>
              <div className="range-item">
                <div className="range-color" style={{backgroundColor: '#f97316'}}></div>
                <span className="range-text">21-50%<br/>Poor</span>
              </div>
              <div className="range-item">
                <div className="range-color" style={{backgroundColor: '#f59e0b'}}></div>
                <span className="range-text">51-70%<br/>Average</span>
              </div>
              <div className="range-item">
                <div className="range-color" style={{backgroundColor: '#22c55e'}}></div>
                <span className="range-text">71-90%<br/>Good</span>
              </div>
              <div className="range-item">
                <div className="range-color" style={{backgroundColor: '#10b981'}}></div>
                <span className="range-text">91-100%<br/>Excellent</span>
              </div>
            </div>
          </div>
          <div className="flex-item">
            <h3 style={{color: secondaryColor}}>Latest Session Notes</h3>
            <div className="session-notes">
              <p><strong>Date:</strong> June 15, 2023</p>
              <p>
                <strong>Self-rated mood before:</strong> 5/10
                <span className="status-indicator status-average" style={{marginLeft: '10px'}}>
                  <i>○</i> Average
                </span>
              </p>
              <p>
                <strong>Self-rated mood after:</strong> 7/10
                <span className="status-indicator status-good" style={{marginLeft: '10px'}}>
                  <i>✓</i> Good
                </span>
              </p>
              <p><strong>Psychologist Notes Summary:</strong></p>
              <p>Patient shows improvement in anxiety management. Discussed work stressors and implemented new coping strategies. Homework assigned: daily mindfulness practice.</p>
            </div>
            
            <div className="info-box" style={{marginTop: '20px'}}>
              <div className="info-box-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <div className="info-box-content">
                <h4>Next scheduled session</h4>
                <p>June 29, 2023 at 3:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Self-assessment Tests */}
      <section className="card">
        <h2 className="card-header">
          <i className="fas fa-clipboard-check"></i> Self-assessment Tests
        </h2>
        <div className="flex-container">
          <div className="flex-item">
            <Line 
              data={testScoresData}
              options={{
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 1.8,
                plugins: {
                  legend: {
                    labels: {
                      boxWidth: 12,
                      font: {
                        size: 11
                      }
                    }
                  },
                  tooltip: {
                    callbacks: {
                      afterLabel: function(context) {
                        const dataset = context.dataset.label;
                        const score = context.raw;
                        let severity = '';
                        
                        if (dataset === 'PHQ-9 Score') {
                          if (score >= 20) severity = 'Severe depression';
                          else if (score >= 15) severity = 'Moderately severe depression';
                          else if (score >= 10) severity = 'Moderate depression';
                          else if (score >= 5) severity = 'Mild depression';
                          else severity = 'Minimal or none';
                        } else if (dataset === 'GAD-7 Score') {
                          if (score >= 15) severity = 'Severe anxiety';
                          else if (score >= 10) severity = 'Moderate anxiety';
                          else if (score >= 5) severity = 'Mild anxiety';
                          else severity = 'Minimal or none';
                        }
                        
                        return `Severity: ${severity}`;
                      }
                    }
                  }
                },
                scales: {
                  y: {
                    min: 0,
                    max: 20,
                    title: {
                      display: true,
                      text: 'Score',
                      font: {
                        size: 11
                      }
                    },
                    grid: {
                      color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                      font: {
                        size: 10
                      }
                    }
                  },
                  x: {
                    grid: {
                      display: false
                    },
                    ticks: {
                      font: {
                        size: 10
                      }
                    }
                  }
                }
              }}
            />
            
            <div className="legend" style={{marginTop: '20px', flexDirection: 'column', alignItems: 'flex-start'}}>
              <p style={{fontWeight: 'bold', marginBottom: '5px'}}>PHQ-9 (Depression) Score Ranges:</p>
              <div className="legend-item">
                <div className="legend-color" style={{backgroundColor: '#10b981'}}></div>
                <span>0-4: Minimal or none</span>
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{backgroundColor: '#22c55e'}}></div>
                <span>5-9: Mild depression</span>
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{backgroundColor: '#f59e0b'}}></div>
                <span>10-14: Moderate depression</span>
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{backgroundColor: '#f97316'}}></div>
                <span>15-19: Moderately severe depression</span>
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{backgroundColor: '#ef4444'}}></div>
                <span>20+: Severe depression</span>
              </div>
              
              <p style={{fontWeight: 'bold', marginTop: '10px', marginBottom: '5px'}}>GAD-7 (Anxiety) Score Ranges:</p>
              <div className="legend-item">
                <div className="legend-color" style={{backgroundColor: '#10b981'}}></div>
                <span>0-4: Minimal anxiety</span>
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{backgroundColor: '#22c55e'}}></div>
                <span>5-9: Mild anxiety</span>
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{backgroundColor: '#f59e0b'}}></div>
                <span>10-14: Moderate anxiety</span>
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{backgroundColor: '#ef4444'}}></div>
                <span>15+: Severe anxiety</span>
              </div>
            </div>
          </div>
          <div className="flex-item">
            <h3 style={{color: secondaryColor}}>Current Risk Assessment</h3>
            <table className="assessment-table">
              <thead>
                <tr>
                  <th>Test</th>
                  <th>Score</th>
                  <th>Range</th>
                  <th>Risk Level</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>PHQ-9 (Depression)</td>
                  <td>6</td>
                  <td>5-9</td>
                  <td className="risk-low">Low</td>
                </tr>
                <tr>
                  <td>GAD-7 (Anxiety)</td>
                  <td>5</td>
                  <td>5-9</td>
                  <td className="risk-low">Low</td>
                </tr>
                <tr>
                  <td>Stress Scale</td>
                  <td>12</td>
                  <td>10-14</td>
                  <td className="risk-moderate">Moderate</td>
                </tr>
              </tbody>
            </table>
            
            <div className="info-box" style={{marginTop: '25px'}}>
              <div className="info-box-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="info-box-content">
                <h4>Progress Analysis</h4>
                <p>Your PHQ-9 score has decreased by 60% over 6 months, indicating significant improvement in depressive symptoms.</p>
              </div>
            </div>
            
            <div className="info-box">
              <div className="info-box-icon">
                <i className="fas fa-tasks"></i>
              </div>
              <div className="info-box-content">
                <h4>Recommended Focus Areas</h4>
                <p>Based on your assessment results, focusing on stress management techniques would be most beneficial.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Social Interaction Graph and Wellness Radar */}
      <div className="flex-container">
        <section className="card flex-item">
          <h2 className="card-header">
            <i className="fas fa-user-friends"></i> Social Interaction Graph
          </h2>
          <div style={{textAlign: 'center'}}>
            <Bar 
              data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                  label: 'Connections Made',
                  data: [2, 3, 2, 4, 3, 5],
                  backgroundColor: primaryColor,
                }, {
                  label: 'Messages Exchanged',
                  data: [12, 15, 20, 25, 30, 42],
                  backgroundColor: secondaryColor,
                }]
              }}
              options={{
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 1.8,
                plugins: {
                  legend: {
                    labels: {
                      boxWidth: 12,
                      font: {
                        size: 11
                      }
                    }
                  }
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    grid: {
                      color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                      font: {
                        size: 10
                      }
                    }
                  },
                  x: {
                    grid: {
                      display: false
                    },
                    ticks: {
                      font: {
                        size: 10
                      }
                    }
                  }
                }
              }}
            />
          </div>
          
          <div className="info-box" style={{marginTop: '15px'}}>
            <div className="info-box-icon">
              <i className="fas fa-bullseye"></i>
            </div>
            <div className="info-box-content">
              <h4>Social Connection Goal</h4>
              <p>Current: 5 connections/month | Target: 8 connections/month</p>
            </div>
          </div>
        </section>
        
        <section className="card flex-item">
          <h2 className="card-header">
            <i className="fas fa-balance-scale"></i> Wellness Radar
          </h2>
          <div style={{padding: '10px', display: 'flex', justifyContent: 'center'}}>
            <Radar 
              data={wellnessRadarData}
              options={{
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 1.5,
                plugins: {
                  legend: {
                    labels: {
                      boxWidth: 12,
                      font: {
                        size: 11
                      }
                    }
                  }
                },
                scales: {
                  r: {
                    min: 0,
                    max: 10,
                    ticks: {
                      stepSize: 2,
                      font: {
                        size: 9
                      }
                    },
                    pointLabels: {
                      font: {
                        size: 10,
                        weight: 'bold'
                      }
                    },
                    grid: {
                      color: 'rgba(0, 0, 0, 0.1)'
                    },
                    angleLines: {
                      color: 'rgba(0, 0, 0, 0.1)'
                    }
                  }
                }
              }}
            />
          </div>
          
          <div className="score-range-legend">
            <div className="range-item">
              <div className="range-color" style={{backgroundColor: '#ef4444'}}></div>
              <span className="range-text">0-2<br/>Poor</span>
            </div>
            <div className="range-item">
              <div className="range-color" style={{backgroundColor: '#f97316'}}></div>
              <span className="range-text">3-4<br/>Fair</span>
            </div>
            <div className="range-item">
              <div className="range-color" style={{backgroundColor: '#f59e0b'}}></div>
              <span className="range-text">5-6<br/>Average</span>
            </div>
            <div className="range-item">
              <div className="range-color" style={{backgroundColor: '#22c55e'}}></div>
              <span className="range-text">7-8<br/>Good</span>
            </div>
            <div className="range-item">
              <div className="range-color" style={{backgroundColor: '#10b981'}}></div>
              <span className="range-text">9-10<br/>Excellent</span>
            </div>
          </div>
        </section>
      </div>
      
      {/* Alert Systems */}
      <section className="card">
        <h2 className="card-header">
          <i className="fas fa-exclamation-triangle"></i> Alert System
        </h2>
        <div className="alert">
          <h4><i className="fas fa-exclamation-circle"></i> Moderate Stress Level Detected</h4>
          <p>User reported high stress levels (8/10) for 3 days in the past week, primarily related to work.</p>
          <p style={{marginTop: '10px'}}><strong>Recommendation:</strong> Try the "5-minute mindfulness break" exercise whenever stress peaks.</p>
        </div>
        <div className="alert">
          <h4><i className="fas fa-exclamation-circle"></i> Sleep Pattern Alert</h4>
          <p>User reported less than 6 hours of sleep for 4 consecutive nights.</p>
          <p style={{marginTop: '10px'}}><strong>Recommendation:</strong> Review sleep hygiene module and enable sleep time reminders.</p>
        </div>
        
        <div className="info-box" style={{marginTop: '20px', backgroundColor: 'rgba(130, 182, 71, 0.1)'}}>
          <div className="info-box-icon" style={{backgroundColor: 'rgba(130, 182, 71, 0.2)'}}>
            <i className="fas fa-comment-medical"></i>
          </div>
          <div className="info-box-content">
            <h4>Note for Psychologist</h4>
            <p>Consider discussing stress management techniques focused on work-life balance in your next session.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
