import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  LabelList,
} from 'recharts'

const progressData = [
  { name: 'Dribble', percent: 43 },
  { name: 'Instagram', percent: 27 },
  { name: 'Behance', percent: 11 },
  { name: 'Google', percent: 7 },
]

const monthlyData = [
  { month: 'Sep', revenue: 450000, leads: 320, wl: 65 },
  { month: 'Oct', revenue: 490000, leads: 350, wl: 72 },
  { month: 'Nov', revenue: 528976, leads: 390, wl: 80 },
]

function Page() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-12 dark:text-white dark:bg-slate-900">
         
        <div className="w-full md:w-1/4 bg-gray-100 dark:bg-slate-800 p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold mb-4">Dashboard</h2>
          <ul className="menu bg-base-200 rounded-box w-full">
            <li><a>Sales List</a></li>
            <li><a>Goals</a></li>
            <li>
              <a>Dashboard</a>
              <ul>
                <li><a>Codename</a></li>
                <li>
                  <a>Shared with Me</a>
                  <ul>
                    <li><a>Cargo2go</a></li>
                    <li><a>Cloudz3r</a></li>
                    <li><a>Idioma</a></li>
                    <li><a>Syllables</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a>Report</a>
              <ul>
                <li><a>Share with Me</a></li>
                <ul>
                  <li><a>Deal by User</a></li>
                  <li><a>Deal Duration</a></li>
                </ul>
              </ul>
            </li>
          </ul>
        </div>

       
        <div className="w-full md:w-3/4 p-6 bg-white dark:bg-slate-800 rounded-lg shadow">
          
        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="bg-black text-white p-5 rounded-lg shadow hover:scale-105 duration-200 dark:bg-slate-900">
              <p>Revenue</p>
              <h2 className="text-xl font-bold">$528,976</h2>
              <p>vs prev. $501,641.73 Jun 1–Aug 31 2023</p>
            </div>
            <div className="bg-base-100 p-5 rounded-lg shadow hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white">
              <p>Top Sales</p>
              <h2 className="text-xl font-bold">72</h2>
              <p>Mikasa</p>
            </div>
            <div className="bg-black text-white p-5 rounded-lg shadow hover:scale-105 duration-200 dark:bg-slate-900">
              <p>Best Deal</p>
              <h2 className="text-xl font-bold">$42,300</h2>
              <p>Rolf Inc.</p>
            </div>
            <div className="bg-base-100 p-5 rounded-lg shadow hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white">
              <p>Value</p>
              <button className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                528k
              </button>
              <p>7.95%</p>
            </div>
          </div>

          <h1 className="text-2xl font-bold mb-7">Progress Overview</h1>
          <div className="w-full md:w-2/3 h-96 bg-white dark:bg-slate-700 rounded-lg shadow p-4 mb-10">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={progressData}
                layout="vertical"
                margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]} tickFormatter={(tick) => `${tick}%`} />
                <YAxis type="category" dataKey="name" />
                <Tooltip formatter={(value) => `${value}%`} />
                <Bar dataKey="percent" fill="#4F46E5">
                  <LabelList dataKey="percent" position="right" formatter={(value) => `${value}%`} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <h1 className="text-2xl font-bold mb-7">Monthly Performance</h1>
          <div className="w-full h-96 bg-white dark:bg-slate-700 rounded-lg shadow p-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={monthlyData}
                margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#4F46E5" name="Revenue">
                  <LabelList dataKey="revenue" position="top" formatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
                </Bar>
                <Bar dataKey="leads" fill="#10B981" name="Leads">
                  <LabelList dataKey="leads" position="top" />
                </Bar>
                <Bar dataKey="wl" fill="#F59E0B" name="Win/Loss">
                  <LabelList dataKey="wl" position="top" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
             
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Page
