import { Calendar, Users, FileText, Pill } from 'lucide-react';

const DoctorDashboard = () => {
  const stats = [
    { label: 'Pending Appointments', value: '12', change: '+2', icon: Calendar, color: 'text-orange-600', bg: 'bg-orange-100' },
    { label: 'Completed Today', value: '8', change: '', icon: FileText, color: 'text-emerald-600', bg: 'bg-emerald-100' },
    { label: 'Total Patients', value: '340', change: '+5%', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'New Prescriptions', value: '15', change: '', icon: Pill, color: 'text-purple-600', bg: 'bg-purple-100' },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Doctor Panel</h2>
          <p className="text-slate-500 text-sm mt-1">Hello Dr. Smith, here are your appointments for today.</p>
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
             </div>
          );
        })}
      </div>

      {/* Appointments List */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
         <div className="p-6 border-b border-slate-100 flex justify-between items-center">
           <h3 className="font-bold text-slate-800">Today's Schedule</h3>
         </div>
         <div className="p-6">
           <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 mb-3">
              <div>
                <p className="font-bold text-slate-800">Sam Wilson</p>
                <p className="text-sm text-slate-500 mt-1 flex items-center gap-1"><Calendar className="w-4 h-4"/> 10:00 AM - 10:30 AM</p>
              </div>
              <div className="flex items-center gap-3">
                 <button className="px-4 py-2 bg-emerald-50 text-emerald-600 font-medium text-sm rounded-lg hover:bg-emerald-100">Approve</button>
                 <button className="px-4 py-2 bg-blue-50 text-blue-600 font-medium text-sm rounded-lg hover:bg-blue-100">Write Prescription</button>
              </div>
           </div>
         </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
