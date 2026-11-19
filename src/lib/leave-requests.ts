// Shared trainer leave requests: Academic sends them, Administration approves them.
import { useEffect, useState } from "react";

export type LeaveStatus = "Pending" | "Approved" | "Rejected";
export type TrainerLeaveRequest = {
  id: string;
  trainerName: string;
  fromDate: string; // yyyy-mm-dd
  toDate: string; // yyyy-mm-dd
  reason: string;
  status: LeaveStatus;
  createdAt: string; // ISO
  decidedAt?: string;
};

const KEY = "app_state:trainer-leave-requests";
const EVENT = "trainer-leave-requests-changed";

export function readLeaveRequests(): TrainerLeaveRequest[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as TrainerLeaveRequest[]) : [];
  } catch {
    return [];
  }
}

function write(list: TrainerLeaveRequest[]) {
  window.localStorage.setItem(KEY, JSON.stringify(list));
  window.dispatchEvent(new Event(EVENT));
}

export function addLeaveRequest(input: Omit<TrainerLeaveRequest, "id" | "status" | "createdAt">): TrainerLeaveRequest {
  const req: TrainerLeaveRequest = {
    ...input,
    id: `LV-${Date.now().toString(36).toUpperCase()}`,
    status: "Pending",
    createdAt: new Date().toISOString(),
  };
  write([req, ...readLeaveRequests()]);
  return req;
}

export function setLeaveStatus(id: string, status: LeaveStatus) {
  write(readLeaveRequests().map((r) => (r.id === id ? { ...r, status, decidedAt: new Date().toISOString() } : r)));
}

/** Live list; empty during SSR, filled after hydration, updates across tabs and pages. */
export function useLeaveRequests(): TrainerLeaveRequest[] {
  const [list, setList] = useState<TrainerLeaveRequest[]>([]);
  useEffect(() => {
    const sync = () => setList(readLeaveRequests());
    sync();
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);
  return list;
}
