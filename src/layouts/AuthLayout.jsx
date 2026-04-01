import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">SmartCare HMS</h1>
          <p className="text-slate-500 mt-2">Sign in to your account</p>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
