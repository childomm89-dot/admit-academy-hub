import React from 'react';
import { Bell, RotateCcw, Calendar } from 'lucide-react';
import { Link, useRouterState } from '@tanstack/react-router';
import { useTrainer } from '../../context/TrainerContext';
import { getCurrentDateISO, formatReadableDate } from '../../utils/dateTimeUtils';

export const Header: React.FC = () => {
  const { activeRemindersCount, resetAllMockData } = useTrainer();
  const pathname = useRouterState({ select: state => state.location.pathname.replace(/^\/academic/, '') || '/' });

  const getPageTitle = (pathname: string): { title: string; subtitle: string } => {
    if (pathname.startsWith('/notes/')) {
      return { title: 'Notes Management', subtitle: 'Prepare and manage notes for assigned module topics' };
    }

    switch (pathname) {
      case '/':
        return { title: 'Dashboard Overview', subtitle: "Monitor today's sessions and pending syllabus actions" };
      case '/schedule':
        return { title: 'My Class Schedule', subtitle: 'Review assigned teaching schedules and request changes' };
      case '/syllabus':
        return { title: 'My Class Schedule', subtitle: 'Review batch schedules and track topic progress' };
      case '/notes':
        return { title: 'Notes Management', subtitle: 'Prepare and manage notes for assigned module topics' };
      case '/attendance':
        return { title: 'Attendance', subtitle: 'Review batch-wise biometric attendance records' };
      case '/history':
        return { title: 'Session History', subtitle: 'Archive of conducted and documented academic sessions' };
      case '/notifications':
        return { title: 'Notifications & Reminders', subtitle: 'Syllabus overdue alerts and schedule actions' };
      case '/examinations':
        return { title: 'Examinations', subtitle: 'Review Admin schedules and submit examination marks' };
      case '/profile':
        return { title: 'Trainer Profile', subtitle: 'Faculty credentials, assigned batches, and mock configuration' };
      default:
        return { title: 'Trainer Portal', subtitle: 'Faculty Management System' };
    }
  };

  const { title, subtitle } = getPageTitle(pathname);
  const todayFormatted = formatReadableDate(getCurrentDateISO());

  return (
    <header className="portal-header bg-white border-b border-slate-200 p-4 flex items-center justify-between">
      {/* Left: Rolled-mat navigation trigger & page title */}
      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight truncate">
              {title}
            </h1>
            <span className="hidden xl:inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-indigo-50 text-indigo-700 border border-indigo-200/60 truncate">
              Advanced Python & Database Foundation
            </span>
          </div>
          <p className="hidden md:block text-xs text-slate-500 truncate -mt-0.5">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Right: Date, Reset, Notification, Profile */}
      <div className="flex items-center gap-2 sm:gap-3.5 shrink-0">
        {/* Live Academic Date */}
        <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs text-slate-600 font-mono-numbers">
          <Calendar className="w-3.5 h-3.5 text-slate-400" />
          <span>{todayFormatted}</span>
        </div>

        {/* Reset Mock Data Button */}
        <button
          onClick={resetAllMockData}
          title="Reset local mock state to initial data"
          className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors flex items-center gap-1.5 text-xs font-medium"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden lg:inline">Reset Mock Data</span>
        </button>

        {/* Notification Bell */}
        <Link
          to="/academic/notifications"
          className="relative p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          aria-label="View notifications"
          title="Notifications"
        >
          <Bell className="w-5 h-5" />
          {activeRemindersCount > 0 && (
            <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center font-mono-numbers ring-2 ring-white">
              {activeRemindersCount}
            </span>
          )}
        </Link>

      </div>
    </header>
  );
};
