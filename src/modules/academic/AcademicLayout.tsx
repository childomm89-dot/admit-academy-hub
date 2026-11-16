import { useEffect, useState } from 'react';
import { Link, Navigate, Outlet } from '@tanstack/react-router';
import { TrainerProvider, useTrainer } from './context/TrainerContext';
import { Header } from './components/layout/Header';
import { ToastContainer } from './components/common/Toast';

const pages = [
  { to: '/academic', label: 'Dashboard', exact: true },
  { to: '/academic/schedule', label: 'Schedule', exact: false },
  { to: '/academic/syllabus', label: 'Syllabus', exact: false },
  { to: '/academic/notes', label: 'Notes', exact: false },
  { to: '/academic/attendance', label: 'Attendance', exact: false },
  { to: '/academic/history', label: 'History', exact: false },
  { to: '/academic/notifications', label: 'Notifications', exact: false },
  { to: '/academic/examinations', label: 'Examinations', exact: false },
  { to: '/academic/profile', label: 'Profile', exact: false },
] as const;

function Portal() {
  const { toasts, removeToast } = useTrainer();
  return (
    <>
      <Header />
      <nav aria-label="Academic pages" className="academic-subnav flex flex-wrap gap-1.5 border-b border-slate-200 bg-white px-3 py-2">
        {pages.map((page) => (
          <Link
            key={page.to}
            to={page.to}
            activeOptions={{ exact: page.exact }}
            activeProps={{ className: 'bg-indigo-100 text-indigo-800 font-semibold', 'aria-current': 'page' }}
            inactiveProps={{ className: 'text-slate-600 hover:bg-slate-100 hover:text-slate-900' }}
            className="rounded-lg px-3 py-2 text-sm transition-colors"
          >
            {page.label}
          </Link>
        ))}
      </nav>
      <main className="mx-auto w-full max-w-7xl p-4 sm:p-6">
        <Outlet />
      </main>
      <ToastContainer toasts={toasts} onDismiss={removeToast} />
    </>
  );
}

export function AcademicLayout() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return (
    <div className="academic-module overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 text-slate-900">
      {hydrated ? (
        <TrainerProvider>
          <Portal />
        </TrainerProvider>
      ) : (
        <p role="status" className="p-6 text-sm text-slate-500">Loading academic portal…</p>
      )}
    </div>
  );
}

export function AcademicNotFound() {
  return <Navigate to="/academic" replace />;
}
