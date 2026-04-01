import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import useAuthStore from '../store/useAuthStore';
import { LayoutDashboard, Users, Calendar, FileText, Settings, LogOut, Menu, Pill, Receipt, Stethoscope } from 'lucide-react';

const DashboardLayout = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getLinksForRole = () => {
    const role = user?.role || 'patient';
    switch (role) {
      case 'admin':
        return [
          { name: 'Overview', path: '/admin/dashboard', icon: LayoutDashboard },
          { name: 'Doctors Mgt', path: '/admin/doctors', icon: Stethoscope },
          { name: 'Staff Mgt', path: '/admin/staff', icon: Users },
          { name: 'All Patients', path: '/admin/patients', icon: Users },
          { name: 'Reports Overview', path: '/admin/reports', icon: FileText }
        ];
      case 'doctor':
        return [
          { name: 'Appointments', path: '/doctor/dashboard', icon: Calendar },
          { name: 'My Patients', path: '/doctor/patients', icon: Users },
          { name: 'Prescriptions', path: '/doctor/prescriptions', icon: Pill },
        ];
      case 'receptionist':
        return [
          { name: 'Schedules', path: '/receptionist/dashboard', icon: Calendar },
          { name: 'Register Patient', path: '/receptionist/register', icon: Users },
          { name: 'Billing', path: '/receptionist/billing', icon: Receipt },
        ];
      case 'patient':
        return [
          { name: 'Dashboard', path: '/patient/dashboard', icon: LayoutDashboard },
          { name: 'Book Appointment', path: '/patient/book', icon: Calendar },
          { name: 'My Prescriptions', path: '/patient/prescriptions', icon: Pill },
          { name: 'Bills', path: '/patient/bills', icon: Receipt },
          { name: 'Lab Reports', path: '/patient/reports', icon: FileText },
        ];
      default:
        return [];
    }
  };

  const links = getLinksForRole();

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col flex-shrink-0 shadow-sm">
        <div className="h-16 flex items-center px-6 border-b border-slate-200">
          <div className="font-bold text-xl text-blue-600 tracking-tight flex items-center gap-2">
            <Stethoscope className="w-6 h-6" />
            SmartCare
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname.startsWith(link.path);
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                {link.name}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-slate-200">
          <button 
            onClick={handleLogout}
            className="flex w-full items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5 text-slate-400 group-hover:text-red-600" />
            Logout Actions
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex flex-shrink-0 items-center justify-between px-6 shadow-sm z-10">
          <div className="flex items-center gap-4">
            <button className="md:hidden text-slate-500 hover:text-slate-700">
               <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-lg font-semibold text-slate-800 capitalize">
              {user?.role || 'Guest'} Panel 
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="text-sm text-right hidden md:block">
               <p className="font-medium text-slate-800 leading-tight">{user?.name || 'Jane Doe'}</p>
               <p className="text-xs text-slate-500 font-medium capitalize">{user?.role || 'User'}</p>
             </div>
            <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold border-2 border-white shadow-sm ring-2 ring-slate-100">
              {user?.name?.charAt(0) || 'U'}
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 p-6 overflow-auto bg-slate-50/50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
