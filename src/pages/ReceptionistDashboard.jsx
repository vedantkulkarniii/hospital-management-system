import { Calendar, Users, ClipboardList } from 'lucide-react';

const ReceptionistDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Receptionist Panel</h2>
          <p className="text-slate-500 text-sm mt-1">Manage walk-ins and appointments efficiently.</p>
        </div>
        <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-medium shadow-sm hover:bg-blue-700 transition flex items-center gap-2">
          <Users className="w-4 h-4" /> Register New Patient
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition">
          <div className="p-4 bg-blue-100 text-blue-600 rounded-2xl mb-4"><Calendar className="w-8 h-8"/></div>
          <h3 className="font-bold text-slate-800">Book Appointment</h3>
          <p className="text-sm text-slate-500 mt-2 mb-4">Schedule a slot for an existing patient</p>
          <button className="w-full py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100">Open Calendar</button>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition">
          <div className="p-4 bg-indigo-100 text-indigo-600 rounded-2xl mb-4"><ClipboardList className="w-8 h-8"/></div>
          <h3 className="font-bold text-slate-800">Today's Queue</h3>
          <p className="text-sm text-slate-500 mt-2 mb-4">Track checked-in and waiting patients</p>
          <button className="w-full py-2 text-sm font-medium text-indigo-700 bg-indigo-50 rounded-lg hover:bg-indigo-100">View Queue (12)</button>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition">
           <div className="p-4 bg-emerald-100 text-emerald-600 rounded-2xl mb-4"><Users className="w-8 h-8"/></div>
           <h3 className="font-bold text-slate-800">Billing & Checkout</h3>
           <p className="text-sm text-slate-500 mt-2 mb-4">Process payments and clear invoices</p>
           <button className="w-full py-2 text-sm font-medium text-emerald-700 bg-emerald-50 rounded-lg hover:bg-emerald-100">Go to Billing</button>
        </div>
      </div>
    </div>
  );
};
export default ReceptionistDashboard;
