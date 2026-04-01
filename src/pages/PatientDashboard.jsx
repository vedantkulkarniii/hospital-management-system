import { Calendar, FileText, Pill, CreditCard } from 'lucide-react';

const PatientDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Patient Dashboard</h2>
          <p className="text-slate-500 text-sm mt-1">Welcome back. Manage your health records here.</p>
        </div>
        <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-medium shadow-sm hover:bg-blue-700 transition flex items-center gap-2">
          <Calendar className="w-4 h-4" /> Book Appointment
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-xl"><Pill className="w-6 h-6"/></div>
            <div>
               <h3 className="font-bold text-slate-800">Active Prescriptions</h3>
               <p className="text-sm text-slate-500">2 Items</p>
            </div>
          </div>
          <button className="w-full py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100">View Details</button>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl"><FileText className="w-6 h-6"/></div>
            <div>
               <h3 className="font-bold text-slate-800">Lab Reports</h3>
               <p className="text-sm text-slate-500">Last updated: 2 days ago</p>
            </div>
          </div>
          <button className="w-full py-2 text-sm font-medium text-emerald-700 bg-emerald-50 rounded-lg hover:bg-emerald-100">Download Report</button>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-red-100 text-red-600 rounded-xl"><CreditCard className="w-6 h-6"/></div>
            <div>
               <h3 className="font-bold text-slate-800">Pending Bills</h3>
               <p className="text-sm text-slate-500">1 Unpaid Invoice</p>
            </div>
          </div>
          <button className="w-full py-2 text-sm font-medium text-red-700 bg-red-50 rounded-lg hover:bg-red-100">Pay Now</button>
        </div>
      </div>
      
      {/* History */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h3 className="font-bold text-slate-800">Past Appointments</h3>
        </div>
        <div className="p-6 text-center text-slate-500 text-sm">
          No past history found.
        </div>
      </div>
    </div>
  );
};
export default PatientDashboard;
