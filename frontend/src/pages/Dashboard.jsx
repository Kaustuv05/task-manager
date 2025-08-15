import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, AreaChart, Area } from 'recharts';
import { TrendingUp, CheckCircle, Clock, AlertTriangle, Target, Activity, Calendar, Users } from 'lucide-react';

const Dashboard = () => {
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    setAnimationClass('animate-in');
  }, []);

  // Enhanced static data
  const taskStats = {
    total: 42,
    completed: 28,
    pending: 10,
    overdue: 4,
    completionRate: 67,
    productivity: 85,
    teamMembers: 12,
    avgCompletionTime: 3.2
  };

  const monthlyData = [
    { month: 'Jan', completed: 20, pending: 8, overdue: 2 },
    { month: 'Feb', completed: 25, pending: 6, overdue: 3 },
    { month: 'Mar', completed: 30, pending: 10, overdue: 1 },
    { month: 'Apr', completed: 28, pending: 12, overdue: 4 },
    { month: 'May', completed: 35, pending: 8, overdue: 2 },
    { month: 'Jun', completed: 28, pending: 10, overdue: 4 }
  ];

  const pieData = [
    { name: 'Completed', value: taskStats.completed, color: '#10B981' },
    { name: 'Pending', value: taskStats.pending, color: '#F59E0B' },
    { name: 'Overdue', value: taskStats.overdue, color: '#EF4444' }
  ];

  const productivityData = [
    { day: 'Mon', productivity: 85 },
    { day: 'Tue', productivity: 90 },
    { day: 'Wed', productivity: 78 },
    { day: 'Thu', productivity: 92 },
    { day: 'Fri', productivity: 88 },
    { day: 'Sat', productivity: 75 },
    { day: 'Sun', productivity: 82 }
  ];

  const priorityData = [
    { priority: 'High', count: 8, color: '#EF4444' },
    { priority: 'Medium', count: 18, color: '#F59E0B' },
    { priority: 'Low', count: 16, color: '#10B981' }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        opacity: animationClass ? 1 : 0,
        transform: animationClass ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>
        {/* Header */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          borderRadius: '24px',
          padding: '30px',
          marginBottom: '30px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #fff 0%, #f0f0f0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: '0 0 10px 0',
            textAlign: 'center',
            letterSpacing: '-0.02em'
          }}>
            Task Analytics Dashboard
          </h1>
          <p style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '1.2rem',
            textAlign: 'center',
            margin: 0
          }}>
            Real-time insights into your team's productivity
          </p>
        </div>

        {/* Stats Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '30px'
        }}>
          {[
            { 
              title: 'Total Tasks', 
              value: taskStats.total, 
              icon: Target,
              gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              change: '+12%'
            },
            { 
              title: 'Completed', 
              value: taskStats.completed, 
              icon: CheckCircle,
              gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
              subtitle: `${taskStats.completionRate}% completion rate`,
              change: '+8%'
            },
            { 
              title: 'Pending', 
              value: taskStats.pending, 
              icon: Clock,
              gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
              change: '-5%'
            },
            { 
              title: 'Overdue', 
              value: taskStats.overdue, 
              icon: AlertTriangle,
              gradient: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
              change: '-2%'
            },
            { 
              title: 'Team Productivity', 
              value: `${taskStats.productivity}%`, 
              icon: TrendingUp,
              gradient: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
              change: '+15%'
            },
            { 
              title: 'Team Members', 
              value: taskStats.teamMembers, 
              icon: Users,
              gradient: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',
              change: '+3%'
            },
            { 
              title: 'Avg. Completion', 
              value: `${taskStats.avgCompletionTime}d`, 
              icon: Activity,
              gradient: 'linear-gradient(135deg, #EC4899 0%, #DB2777 100%)',
              change: '-0.5d'
            },
            { 
              title: 'This Month', 
              value: '156', 
              icon: Calendar,
              gradient: 'linear-gradient(135deg, #84CC16 0%, #65A30D 100%)',
              change: '+22%'
            }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px',
                padding: '28px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '100px',
                  height: '100px',
                  background: stat.gradient,
                  borderRadius: '50%',
                  opacity: 0.1,
                  transform: 'translate(30px, -30px)'
                }} />
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{
                    background: stat.gradient,
                    borderRadius: '12px',
                    padding: '12px',
                    marginRight: '16px'
                  }}>
                    <IconComponent size={24} color="white" />
                  </div>
                  <div>
                    <h3 style={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      margin: '0 0 4px 0',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {stat.title}
                    </h3>
                    <div style={{
                      color: '#10B981',
                      fontSize: '0.8rem',
                      fontWeight: '600'
                    }}>
                      {stat.change}
                    </div>
                  </div>
                </div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  color: 'white',
                  marginBottom: '8px',
                  lineHeight: 1
                }}>
                  {stat.value}
                </div>
                {stat.subtitle && (
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '0.85rem',
                    margin: 0
                  }}>
                    {stat.subtitle}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Charts Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '24px',
          marginBottom: '30px'
        }}>
          {/* Monthly Progress Chart */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: '30px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
          }}>
            <h2 style={{
              color: 'white',
              fontSize: '1.5rem',
              fontWeight: '700',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <TrendingUp size={24} style={{ marginRight: '12px', color: '#10B981' }} />
              Monthly Task Progress
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyData}>
                <defs>
                  <linearGradient id="completedGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="pendingGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="month" stroke="rgba(255,255,255,0.8)" />
                <YAxis stroke="rgba(255,255,255,0.8)" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    border: 'none',
                    borderRadius: '12px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                  }}
                />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="completed" 
                  stroke="#10B981" 
                  fill="url(#completedGradient)"
                  strokeWidth={3}
                />
                <Area 
                  type="monotone" 
                  dataKey="pending" 
                  stroke="#F59E0B" 
                  fill="url(#pendingGradient)"
                  strokeWidth={3}
                />
                <Line 
                  type="monotone" 
                  dataKey="overdue" 
                  stroke="#EF4444" 
                  strokeWidth={3}
                  dot={{ fill: '#EF4444', strokeWidth: 2, r: 6 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Task Distribution Pie Chart */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: '30px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
          }}>
            <h2 style={{
              color: 'white',
              fontSize: '1.5rem',
              fontWeight: '700',
              marginBottom: '24px'
            }}>
              Task Distribution
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    border: 'none',
                    borderRadius: '12px'
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bottom Charts Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px'
        }}>
          {/* Weekly Productivity */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: '30px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
          }}>
            <h2 style={{
              color: 'white',
              fontSize: '1.5rem',
              fontWeight: '700',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <Activity size={24} style={{ marginRight: '12px', color: '#8B5CF6' }} />
              Weekly Productivity
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={productivityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="day" stroke="rgba(255,255,255,0.8)" />
                <YAxis stroke="rgba(255,255,255,0.8)" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    border: 'none',
                    borderRadius: '12px'
                  }}
                />
                <Bar dataKey="productivity" fill="url(#productivityGradient)" radius={[4, 4, 0, 0]} />
                <defs>
                  <linearGradient id="productivityGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={1}/>
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.6}/>
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Priority Distribution */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: '30px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
          }}>
            <h2 style={{
              color: 'white',
              fontSize: '1.5rem',
              fontWeight: '700',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <AlertTriangle size={24} style={{ marginRight: '12px', color: '#F59E0B' }} />
              Task Priority
            </h2>
            <div style={{ height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {priorityData.map((item, index) => (
                <div key={index} style={{
                  textAlign: 'center',
                  margin: '0 20px',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}DD 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: '800',
                    color: 'white',
                    margin: '0 auto 12px',
                    boxShadow: `0 8px 24px ${item.color}40`
                  }}>
                    {item.count}
                  </div>
                  <div style={{
                    color: 'white',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}>
                    {item.priority}
                  </div>
                  <div style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '0.8rem'
                  }}>
                    Priority
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          borderRadius: '20px',
          padding: '20px',
          marginTop: '30px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          textAlign: 'center'
        }}>
          <p style={{
            color: 'rgba(255, 255, 255, 0.6)',
            margin: 0,
            fontSize: '0.9rem'
          }}>
            Dashboard updates every 5 minutes • Last updated: {new Date().toLocaleTimeString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;