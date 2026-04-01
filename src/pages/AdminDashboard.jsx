import { Users, Calendar, Stethoscope, IndianRupee } from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Patients', value: '1,429', change: '+12%', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'Today Appointments', value: '84', change: '+5%', icon: Calendar, color: 'text-emerald-600', bg: 'bg-emerald-100' },
    { label: 'Total Doctors', value: '24', change: '0%', icon: Stethoscope, color: 'text-purple-600', bg: 'bg-purple-100' },
    { label: 'Revenue (Monthly)', value: '₹4.2L', change: '+18%', icon: IndianRupee, color: 'text-orange-600', bg: 'bg-orange-100' },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Admin Overview</h2>
          <p className="text-slate-500 text-sm mt-1">Hello, welcome back. Here is what is happening today.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                  <p className="text-3xl font-bold text-slate-800 mt-2">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className={`font-medium ${stat.change.startsWith('+') ? 'text-emerald-600' : 'text-slate-500'}`}>
                  {stat.change}
                </span>
                <span className="text-slate-400 ml-2">from last month</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recents Placeholder */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="font-bold text-slate-800">Recent Appointments</h3>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All</button>
        </div>
        <div className="px-6 py-4 text-center text-slate-500 italic bg-slate-50/50">
          No appointments to show. Analytics graphs will go here.
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
