import React, { useState } from 'react';
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
  
  // Sample data for psychologist advice tracking
  const [adviceTracking, setAdviceTracking] = useState({
    shortTerm: [
      { id: 1, advice: "5-minute meditation twice daily", completed: false, adherenceRate: 75 },
      { id: 2, advice: "Use breathing technique during stress", completed: false, adherenceRate: 60 },
      { id: 3, advice: "Take a 15-minute walk after lunch", completed: true, adherenceRate: 90 },
      { id: 4, advice: "Journal emotions before bed", completed: false, adherenceRate: 45 },
    ],
    longTerm: [
      { id: 1, advice: "Build consistent sleep schedule", completed: false, adherenceRate: 70 },
      { id: 2, advice: "Develop social support network", completed: false, adherenceRate: 65 },
      { id: 3, advice: "Practice weekly mindfulness session", completed: false, adherenceRate: 50 },
      { id: 4, advice: "Reduce screen time before bed", completed: false, adherenceRate: 40 },
    ]
  });

  // Handle checkbox change
  const handleCheckboxChange = (type, id) => {
    setAdviceTracking(prev => ({
      ...prev,
      [type]: prev[type].map(item => 
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    }));
  };

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

  // Sample psychologist report sections with verification status
  const [expandedSections, setExpandedSections] = useState({
    clinicalAssessment: true,
    historyAndSymptoms: false,
    diagnosis: false,
    treatmentPlan: false,
    medications: false,
    recommendations: false
  });

  // Toggle section expansion
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  
  return (
    <div className="dashboard">
      {/* <h1 className="dashboard-header"><span>Mental Health Dashboard</span></h1> */}
      
      <div className="card-grid">

        {/* Psychologist Report - Full Width */}
        <section className="card full-width" id="psychologist-report">
          <h2 className="card-header">
            <i className="fas fa-file-medical-alt"></i> Psychologist Report
          </h2>
          <div className="report-container">
            <div className="report-header">
              <div className="report-clinic-info">
                <h3>MINDWELL PSYCHIATRIC CLINIC</h3>
                <p>555 Wellness Avenue, Suite 302</p>
                <p>Serenity, CA 94123</p>
              </div>
              <div className="report-title">
                <h4>Comprehensive Evaluation</h4>
                <div className="report-date-info">
                  <div><strong>Date:</strong> June 12, 2023</div>
                  <div><strong>Time:</strong> 2:45 PM</div>
                </div>
              </div>
              <div className="report-patient-info">
                <div><strong>Patient:</strong> Alex Johnson</div>
                <div><strong>Patient ID:</strong> MH-78902135</div>
                <div><strong>DOB:</strong> 04/15/1988</div>
              </div>
            </div>
            
            <div className="report-section-toggle">
              <div className="toggle-label">Quick Navigation:</div>
              <div className="toggle-buttons">
                <button 
                  className={expandedSections.clinicalAssessment ? 'active' : ''} 
                  onClick={() => toggleSection('clinicalAssessment')}
                >
                  Assessment
                </button>
                <button 
                  className={expandedSections.historyAndSymptoms ? 'active' : ''} 
                  onClick={() => toggleSection('historyAndSymptoms')}
                >
                  History
                </button>
                <button 
                  className={expandedSections.diagnosis ? 'active' : ''} 
                  onClick={() => toggleSection('diagnosis')}
                >
                  Diagnosis
                </button>
                <button 
                  className={expandedSections.treatmentPlan ? 'active' : ''} 
                  onClick={() => toggleSection('treatmentPlan')}
                >
                  Treatment
                </button>
                <button 
                  className={expandedSections.medications ? 'active' : ''} 
                  onClick={() => toggleSection('medications')}
                >
                  Medications
                </button>
                <button 
                  className={expandedSections.recommendations ? 'active' : ''} 
                  onClick={() => toggleSection('recommendations')}
                >
                  Recommendations
                </button>
              </div>
            </div>
            
            {/* Clinical Assessment Section */}
            <div className={`report-section ${expandedSections.clinicalAssessment ? 'expanded' : ''}`}>
              <div className="section-header" onClick={() => toggleSection('clinicalAssessment')}>
                <h3>
                  <i className="fas fa-clipboard-check"></i> 
                  Clinical Assessment
                  <i className={`fas fa-chevron-${expandedSections.clinicalAssessment ? 'up' : 'down'}`}></i>
                </h3>
              </div>
              <div className="section-content">
                <div className="content-block verified">
                  <div className="verification-badge">
                    <i className="fas fa-user-md"></i> Psychologist Verified
                  </div>
                  <p>
                    Patient presents with symptoms consistent with moderate anxiety and depressive disorder. Initial assessment indicates significant improvement in mood regulation and stress management compared to three months ago. Patient has been compliant with recommended therapy sessions and medication regimen.
                  </p>
                  <p>
                    Current mental status examination reveals appropriate affect, coherent thought process, and no evidence of suicidal ideation. Cognitive function tests show normal results with slight improvement in attention metrics compared to previous evaluation.
                  </p>
                </div>
                
                <div className="content-block ai-generated">
                  <div className="verification-badge">
                    <i className="fas fa-robot"></i> AI Analysis
                  </div>
                  <p>
                    Based on self-reported data through the application, patient has shown consistent improvement in daily mood scores over the past 6 weeks, with average scores increasing from 5.2 to 7.4 on a 10-point scale. Sleep patterns show stabilization with an average of 7.2 hours per night (up from 5.8 hours). 
                  </p>
                  <p>
                    Social engagement metrics indicate increased participation in community forum discussions, with positive sentiment analysis results increasing by 23% over the evaluation period.
                  </p>
                </div>
              </div>
            </div>
            
            {/* History and Symptoms */}
            <div className={`report-section ${expandedSections.historyAndSymptoms ? 'expanded' : ''}`}>
              <div className="section-header" onClick={() => toggleSection('historyAndSymptoms')}>
                <h3>
                  <i className="fas fa-history"></i> 
                  History & Presenting Symptoms
                  <i className={`fas fa-chevron-${expandedSections.historyAndSymptoms ? 'up' : 'down'}`}></i>
                </h3>
              </div>
              <div className="section-content">
                <div className="content-block verified">
                  <div className="verification-badge">
                    <i className="fas fa-user-md"></i> Psychologist Verified
                  </div>
                  <p><strong>Chief Complaint:</strong> <em>"I've been feeling overwhelmed with work and have trouble focusing on tasks."</em></p>
                  <p>
                    Patient reports onset of symptoms approximately 8 months ago following increased responsibilities at work. Describes persistent worry, difficulty concentrating, and occasional panic-like episodes during high-stress situations. Reports improvement since beginning treatment but continued challenges with work-life balance.
                  </p>
                  <p>
                    Family history reveals maternal history of anxiety disorder. No previous psychiatric hospitalizations. Patient denies suicidal ideation, self-harm behaviors, or substance abuse issues.
                  </p>
                </div>
                
                <div className="content-block ai-generated">
                  <div className="verification-badge">
                    <i className="fas fa-robot"></i> AI Analysis
                  </div>
                  <p>
                    Application data indicates patient has logged 32 instances of elevated stress (7+ on 10-point scale) over the past 90 days, most frequently on weekdays between 2-5PM, suggesting work-related triggers. 
                  </p>
                  <p>
                    Text sentiment analysis of journal entries shows correlation between reported stress levels and keywords related to workplace responsibilities (correlation coefficient: 0.78). Sleep tracking data shows disruption pattern consistent with anxiety symptomatology, particularly difficulty falling asleep on high-stress days.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Diagnosis */}
            <div className={`report-section ${expandedSections.diagnosis ? 'expanded' : ''}`}>
              <div className="section-header" onClick={() => toggleSection('diagnosis')}>
                <h3>
                  <i className="fas fa-diagnoses"></i> 
                  Diagnosis
                  <i className={`fas fa-chevron-${expandedSections.diagnosis ? 'up' : 'down'}`}></i>
                </h3>
              </div>
              <div className="section-content">
                <div className="content-block verified">
                  <div className="verification-badge">
                    <i className="fas fa-user-md"></i> Psychologist Verified
                  </div>
                  <div className="diagnosis-list">
                    <div className="diagnosis-item primary">
                      <div className="code">F41.1</div>
                      <div className="description">Generalized Anxiety Disorder</div>
                      <div className="status">Primary, Active</div>
                    </div>
                    <div className="diagnosis-item">
                      <div className="code">F32.1</div>
                      <div className="description">Major Depressive Disorder, Single Episode, Moderate</div>
                      <div className="status">Secondary, Improving</div>
                    </div>
                    <div className="diagnosis-item">
                      <div className="code">Z73.3</div>
                      <div className="description">Work-related Stress</div>
                      <div className="status">Contributing Factor</div>
                    </div>
                  </div>
                </div>
                
                <div className="content-block ai-generated">
                  <div className="verification-badge">
                    <i className="fas fa-robot"></i> AI Analysis
                  </div>
                  <p>
                    Symptom pattern analysis from application data supports clinical diagnosis of GAD with 92% confidence based on validated assessment algorithms. Depression scores have shown consistent improvement (PHQ-9 scores declining from 14 to 8 over treatment period), suggesting positive response to current intervention strategy.
                  </p>
                  <p>
                    Wellness radar mapping indicates particular improvement in social functioning and sleep quality domains, while stress management and work-life balance remain areas requiring continued intervention.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Treatment Plan */}
            <div className={`report-section ${expandedSections.treatmentPlan ? 'expanded' : ''}`}>
              <div className="section-header" onClick={() => toggleSection('treatmentPlan')}>
                <h3>
                  <i className="fas fa-tasks"></i> 
                  Treatment Plan
                  <i className={`fas fa-chevron-${expandedSections.treatmentPlan ? 'up' : 'down'}`}></i>
                </h3>
              </div>
              <div className="section-content">
                <div className="content-block verified">
                  <div className="verification-badge">
                    <i className="fas fa-user-md"></i> Psychologist Verified
                  </div>
                  <ol className="treatment-list">
                    <li>Continue weekly cognitive-behavioral therapy sessions focusing on:
                      <ul>
                        <li>Stress management techniques</li>
                        <li>Cognitive restructuring for negative thought patterns</li>
                        <li>Progressive exposure to anxiety-provoking work situations</li>
                      </ul>
                    </li>
                    <li>Maintain current medication regimen with monthly evaluation</li>
                    <li>Incorporate mindfulness practice (15 minutes daily) into daily routine</li>
                    <li>Develop boundary-setting strategies for workplace stressors</li>
                  </ol>
                  <p><strong>Treatment Goals:</strong></p>
                  <ul>
                    <li>Reduce anxiety symptoms by 40% within 3 months (as measured by GAD-7)</li>
                    <li>Improve work-life balance through implementation of boundary-setting techniques</li>
                    <li>Reduce frequency of panic episodes by 75% within treatment period</li>
                  </ul>
                </div>
                
                <div className="content-block ai-generated">
                  <div className="verification-badge">
                    <i className="fas fa-robot"></i> AI Analysis
                  </div>
                  <p>
                    Application data shows 68% adherence to recommended daily mindfulness practice with higher adherence rates on weekends (82%) versus weekdays (61%).
                  </p>
                  <p>
                    Suggested AI-guided modules based on user engagement patterns:
                  </p>
                  <ul>
                    <li>Brief workplace meditation practices (5-minute sessions)</li>
                    <li>Evening wind-down routine optimization</li>
                    <li>Cognitive defusion techniques for work-related worry</li>
                  </ul>
                  <p>
                    Predictive analysis suggests focusing on weekday afternoon stress management will yield highest improvement potential based on current data patterns.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Medications */}
            <div className={`report-section ${expandedSections.medications ? 'expanded' : ''}`}>
              <div className="section-header" onClick={() => toggleSection('medications')}>
                <h3>
                  <i className="fas fa-pills"></i> 
                  Medications
                  <i className={`fas fa-chevron-${expandedSections.medications ? 'up' : 'down'}`}></i>
                </h3>
              </div>
              <div className="section-content">
                <div className="content-block verified">
                  <div className="verification-badge">
                    <i className="fas fa-user-md"></i> Psychologist Verified
                  </div>
                  <div className="medication-list">
                    <div className="medication-item">
                      <div className="med-name">Sertraline (Zoloft)</div>
                      <div className="med-dosage">50mg</div>
                      <div className="med-instructions">1 tablet daily in the morning</div>
                      <div className="med-notes">Continue current dose, well-tolerated with minimal side effects</div>
                    </div>
                    <div className="medication-item">
                      <div className="med-name">Propranolol</div>
                      <div className="med-dosage">10mg</div>
                      <div className="med-instructions">As needed for acute anxiety symptoms, not to exceed 3 doses per week</div>
                      <div className="med-notes">Patient reports effective for managing physical symptoms of anxiety during presentations</div>
                    </div>
                  </div>
                  <p><strong>Medication Compliance:</strong> Excellent. No missed doses reported in past 30 days.</p>
                  <p><strong>Side Effects:</strong> Initial mild nausea with sertraline has resolved. No current significant side effects reported.</p>
                </div>
                
                <div className="content-block ai-generated">
                  <div className="verification-badge">
                    <i className="fas fa-robot"></i> AI Analysis
                  </div>
                  <p>
                    Medication tracking through app shows 97% adherence rate for sertraline. Propranolol usage has decreased from average 2.4 doses/week to 0.8 doses/week over the past month, indicating possible reduction in acute anxiety episodes.
                  </p>
                  <p>
                    Mood tracking patterns show stabilization approximately 3 weeks after medication initiation with continued gradual improvement. Morning mood scores show most significant improvement (42% increase), potentially correlating with medication efficacy.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Recommendations */}
            <div className={`report-section ${expandedSections.recommendations ? 'expanded' : ''}`}>
              <div className="section-header" onClick={() => toggleSection('recommendations')}>
                <h3>
                  <i className="fas fa-lightbulb"></i> 
                  Recommendations
                  <i className={`fas fa-chevron-${expandedSections.recommendations ? 'up' : 'down'}`}></i>
                </h3>
              </div>
              <div className="section-content">
                <div className="content-block verified">
                  <div className="verification-badge">
                    <i className="fas fa-user-md"></i> Psychologist Verified
                  </div>
                  <ol>
                    <li>Continue current medication regimen and weekly therapy sessions</li>
                    <li>Consider workplace accommodations:
                      <ul>
                        <li>Scheduled short breaks during high-focus tasks</li>
                        <li>Noise-canceling headphones for open office environment</li>
                        <li>Discussion with supervisor regarding workload management strategies</li>
                      </ul>
                    </li>
                    <li>Increase physical activity to minimum 30 minutes, 4x weekly</li>
                    <li>Implement digital boundaries (no work email after 7PM)</li>
                    <li>Follow-up appointment in 4 weeks to reassess progress</li>
                  </ol>
                  <div className="signature-block">
                    <p>Electronically signed by:</p>
                    <p className="doctor-signature">Sarah Reynolds, Ph.D.</p>
                    <p>Clinical Psychologist, License #PSY20217</p>
                    <p>Date: June 12, 2023</p>
                  </div>
                </div>
                
                <div className="content-block ai-generated">
                  <div className="verification-badge">
                    <i className="fas fa-robot"></i> AI Analysis
                  </div>
                  <p>
                    Based on application usage patterns and therapy progress, recommended digital interventions include:
                  </p>
                  <ul>
                    <li>Activation of work-hours boundary notifications (68% effectiveness rating among similar users)</li>
                    <li>Morning routine optimization module (suggested start time: 7:15 AM based on user chronotype analysis)</li>
                    <li>Guided breathing exercises timed to user's peak stress periods (2:30-3:45 PM based on historical data)</li>
                    <li>Sleep hygiene protocol adjustments to address weekend sleep pattern disruptions</li>
                  </ul>
                  <p>
                    Projected recovery trajectory suggests continued improvement with potential for 30% reduction in anxiety symptoms by next evaluation if current adherence rates maintained.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="report-footer">
              <p><i className="fas fa-info-circle"></i> This report contains both clinician-verified information and AI-assisted analysis. Content marked with <i className="fas fa-robot"></i> is generated by AI based on application data and should be reviewed by a healthcare professional.</p>
            </div>
          </div>
        </section>


        {/* Psychologist Advice Section */}
        <section className="card full-width">
          <h2 className="card-header">
            <i className="fas fa-comments-medical"></i> Psychologist Advice
          </h2>
          <div className="flex-container">
            <div className="flex-item">
              <h3 className="advice-header">
                <i className="fas fa-bolt" style={{color: primaryColor}}></i> 
                Short-term Advice
                <span className="advice-subtitle">Daily actions for immediate benefit</span>
              </h3>
              <div className="advice-list">
                {adviceTracking.shortTerm.map(item => (
                  <div key={item.id} className="advice-item">
                    <div className="advice-checkbox">
                      <input 
                        type="checkbox" 
                        id={`short-${item.id}`} 
                        checked={item.completed}
                        onChange={() => handleCheckboxChange('shortTerm', item.id)}
                      />
                      <label htmlFor={`short-${item.id}`}>{item.advice}</label>
                    </div>
                    <div className="adherence-bar-container">
                      <div className="adherence-label">Previous adherence:</div>
                      <div className="adherence-bar">
                        <div 
                          className="adherence-fill" 
                          style={{
                            width: `${item.adherenceRate}%`,
                            backgroundColor: item.adherenceRate > 70 
                              ? '#22c55e' 
                              : item.adherenceRate > 40 
                                ? '#f59e0b' 
                                : '#ef4444'
                          }}
                        ></div>
                      </div>
                      <div className="adherence-percentage">{item.adherenceRate}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-item">
              <h3 className="advice-header">
                <i className="fas fa-road" style={{color: secondaryColor}}></i> 
                Long-term Advice
                <span className="advice-subtitle">Building sustainable habits</span>
              </h3>
              <div className="advice-list">
                {adviceTracking.longTerm.map(item => (
                  <div key={item.id} className="advice-item">
                    <div className="advice-checkbox">
                      <input 
                        type="checkbox" 
                        id={`long-${item.id}`} 
                        checked={item.completed}
                        onChange={() => handleCheckboxChange('longTerm', item.id)}
                      />
                      <label htmlFor={`long-${item.id}`}>{item.advice}</label>
                    </div>
                    <div className="adherence-bar-container">
                      <div className="adherence-label">Previous adherence:</div>
                      <div className="adherence-bar">
                        <div 
                          className="adherence-fill" 
                          style={{
                            width: `${item.adherenceRate}%`,
                            backgroundColor: item.adherenceRate > 70 
                              ? '#22c55e' 
                              : item.adherenceRate > 40 
                                ? '#f59e0b' 
                                : '#ef4444'
                          }}
                        ></div>
                      </div>
                      <div className="adherence-percentage">{item.adherenceRate}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
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
            </div>
            <div className="flex-item">
              <div className="chart-container">
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
                    maintainAspectRatio: false,
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
              </div>
            </div>
          </div>
          
          <div className="legend-container">
            <div className="modern-legend">
              <div className="gradient-bar">
                <div className="gradient-segment" style={{backgroundColor: '#ef4444'}}></div>
                <div className="gradient-segment" style={{backgroundColor: '#f97316'}}></div>
                <div className="gradient-segment" style={{backgroundColor: '#f59e0b'}}></div>
                <div className="gradient-segment" style={{backgroundColor: '#22c55e'}}></div>
                <div className="gradient-segment" style={{backgroundColor: '#10b981'}}></div>
              </div>
              <div className="gradient-labels">
                <span>0</span>
                <span>40</span>
                <span>60</span>
                <span>75</span>
                <span>90</span>
                <span>100</span>
              </div>
              <div className="gradient-descriptions">
                <span>Critical</span>
                <span>Poor</span>
                <span>Average</span>
                <span>Good</span>
                <span>Excellent</span>
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
              <div className="chart-container">
                <Line data={moodData} options={{
                  responsive: true,
                  maintainAspectRatio: false,
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
              </div>
            </div>
            <div className="flex-item">
              <h3 style={{color: secondaryColor, fontSize: '1.1rem', marginTop: '0'}}>Emotion Frequency</h3>
              <div className="chart-container">
                <Bar data={emotionsData} options={{
                  responsive: true,
                  maintainAspectRatio: false,
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
          </div>
          
          <div className="legend-container">
            <div className="modern-legend">
              <div className="gradient-bar">
                <div className="gradient-segment" style={{backgroundColor: '#ef4444'}}></div>
                <div className="gradient-segment" style={{backgroundColor: '#f97316'}}></div>
                <div className="gradient-segment" style={{backgroundColor: '#f59e0b'}}></div>
                <div className="gradient-segment" style={{backgroundColor: '#22c55e'}}></div>
                <div className="gradient-segment" style={{backgroundColor: '#10b981'}}></div>
              </div>
              <div className="gradient-labels">
                <span>0</span>
                <span>2</span>
                <span>4</span>
                <span>6</span>
                <span>8</span>
                <span>10</span>
              </div>
              <div className="gradient-descriptions">
                <span>Very Low</span>
                <span>Low</span>
                <span>Neutral</span>
                <span>Good</span>
                <span>Great</span>
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
              <div className="chart-container">
                <Bar 
                  data={counselingAttendanceData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
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
                <p>Patient shows improvement in anxiety management. Discussed work stressors and implemented new coping strategies.</p>
              </div>
              
              <div className="info-box" style={{marginTop: '10px'}}>
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
              <div className="chart-container">
                <Line 
                  data={testScoresData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
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
              
              <div className="info-box" style={{marginTop: '10px'}}>
                <div className="info-box-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="info-box-content">
                  <h4>Progress Analysis</h4>
                  <p>Your PHQ-9 score has decreased by 60% over 6 months.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Forum Engagement
        <section className="card">
          <h2 className="card-header">
            <i className="fas fa-users"></i> Forum Engagement
          </h2>
          <div className="flex-container">
            <div className="flex-item">
              <h3 style={{color: secondaryColor, fontSize: '1.1rem', marginTop: '0'}}>Post Sentiment Analysis</h3>
              <div className="chart-container">
                <Pie data={sentimentData} options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false
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
              </div>
              <div className="legend" style={{marginTop: '10px'}}>
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
                <span style={{fontSize: '15px', color: primaryColor}}>Anxiety</span>
                <span style={{fontSize: '14px', color: secondaryColor}}>Meditation</span>
                <span style={{fontSize: '13px', color: lightPrimary}}>Sleep</span>
                <span style={{fontSize: '15px', color: lightSecondary}}>Stress</span>
                <span style={{fontSize: '14px', color: primaryColor}}>Relationships</span>
                <span style={{fontSize: '12px', color: secondaryColor}}>Work</span>
                <span style={{fontSize: '16px', color: lightPrimary}}>Mindfulness</span>
                <span style={{fontSize: '13px', color: lightSecondary}}>Depression</span>
                <span style={{fontSize: '12px', color: primaryColor}}>Exercise</span>
                <span style={{fontSize: '14px', color: secondaryColor}}>Self-care</span>
                <span style={{fontSize: '13px', color: lightPrimary}}>Nutrition</span>
                <span style={{fontSize: '12px', color: lightSecondary}}>Therapy</span>
                <span style={{fontSize: '14px', color: primaryColor}}>Breathing</span>
                <span style={{fontSize: '13px', color: secondaryColor}}>Social</span>
              </div>
              
              <div className="flex-container" style={{marginTop: '10px'}}>
                <div className="info-box">
                  <div className="info-box-icon">
                    <i className="fas fa-file-alt"></i>
                  </div>
                  <div className="info-box-content">
                    <h4>Posts this month</h4>
                    <p>17 posts (↑ 15%)</p>
                  </div>
                </div>
                <div className="info-box">
                  <div className="info-box-icon">
                    <i className="fas fa-comment-alt"></i>
                  </div>
                  <div className="info-box-content">
                    <h4>Comments this month</h4>
                    <p>43 comments (↑ 22%)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        

        {/* Assistant Interaction */}
        <section className="card">
          <h2 className="card-header">
            <i className="fas fa-robot"></i> Assistant Interaction
          </h2>
          <div className="flex-container">
            <div className="flex-item">
              <div className="chart-container">
                <Bar 
                  data={aiInteractionData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
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
              </div>
              
              <div className="info-box" style={{marginTop: '10px'}}>
                <div className="info-box-icon">
                  <i className="fas fa-info-circle"></i>
                </div>
                <div className="info-box-content">
                  <h4>AI Engagement Insight</h4>
                  <p>Your AI chat usage has increased by 140% in the last month.</p>
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
                  <p>Try our guided anxiety reduction modules.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        

        {/* Social Interaction Graph
        <section className="card">
          <h2 className="card-header">
            <i className="fas fa-user-friends"></i> Social Interaction Graph
          </h2>
          <div className="chart-container" style={{padding: '10px'}}>
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
                maintainAspectRatio: false,
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
          
          <div className="info-box" style={{margin: '10px'}}>
            <div className="info-box-icon">
              <i className="fas fa-bullseye"></i>
            </div>
            <div className="info-box-content">
              <h4>Social Connection Goal</h4>
              <p>Current: 5 connections/month | Target: 8 connections/month</p>
            </div>
          </div>
        </section> */}
        
        {/* Wellness Radar */}
        <section className="card">
          <h2 className="card-header">
            <i className="fas fa-balance-scale"></i> Wellness Radar
          </h2>
          <div className="chart-container" style={{padding: '10px'}}>
            <Radar 
              data={wellnessRadarData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
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
          
          <div className="legend-container">
            <div className="modern-legend">
              <div className="gradient-bar">
                <div className="gradient-segment" style={{backgroundColor: '#ef4444'}}></div>
                <div className="gradient-segment" style={{backgroundColor: '#f97316'}}></div>
                <div className="gradient-segment" style={{backgroundColor: '#f59e0b'}}></div>
                <div className="gradient-segment" style={{backgroundColor: '#22c55e'}}></div>
                <div className="gradient-segment" style={{backgroundColor: '#10b981'}}></div>
              </div>
              <div className="gradient-labels">
                <span>0</span>
                <span>2</span>
                <span>4</span>
                <span>6</span>
                <span>8</span>
                <span>10</span>
              </div>
              <div className="gradient-descriptions">
                <span>Poor</span>
                <span>Fair</span>
                <span>Average</span>
                <span>Good</span>
                <span>Excellent</span>
              </div>
            </div>
          </div>
        </section>
        
      </div>
    </div>
  );
};

export default Dashboard;
