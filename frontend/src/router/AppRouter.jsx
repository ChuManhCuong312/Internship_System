import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import PrivateRoute from '../components/Common/PrivateRoute'

// Auth Pages
import LoginPage from '../pages/Auth/LoginPage'
import RegisterPage from '../pages/Auth/RegisterPage'
import ForgotPasswordPage from '../pages/Auth/ForgotPasswordPage'

// Admin Pages
import AdminDashboard from '../pages/Admin/Dashboard'
import ManageUsers from '../pages/Admin/ManageUsers'
import RolePermission from '../pages/Admin/RolePermission'
import Reports from '../pages/Admin/Reports'

// HR Pages
import HRDashboard from '../pages/HR/Dashboard'
import ManageInterns from '../pages/HR/ManageInterns'
import ManagePrograms from '../pages/HR/ManagePrograms'
import ApproveDocs from '../pages/HR/ApproveDocs'
import Allowances from '../pages/HR/Allowances'

// Mentor Pages
import MentorDashboard from '../pages/Mentor/Dashboard'
import ManageTasks from '../pages/Mentor/ManageTasks'
import InternProgress from '../pages/Mentor/InternProgress'
import EvaluateIntern from '../pages/Mentor/EvaluateIntern'

// Intern Pages
import InternDashboard from '../pages/Intern/Dashboard'
import MyProfile from '../pages/Intern/MyProfile'
import MyTasks from '../pages/Intern/MyTasks'
import Attendance from '../pages/Intern/Attendance'
import AllowanceRequest from '../pages/Intern/AllowanceRequest'
import SupportRequest from '../pages/Intern/SupportRequest'

// Shared Pages
import NotFound from '../pages/Shared/NotFound'
import Forbidden from '../pages/Shared/Forbidden'

const AppRouter = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      
      {/* Admin Routes */}
      <Route path="/admin" element={<PrivateRoute allowedRoles={['ADMIN']} />}>
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="users" element={<ManageUsers />} />
        <Route path="roles" element={<RolePermission />} />
        <Route path="reports" element={<Reports />} />
      </Route>

      {/* HR Routes */}
      <Route path="/hr" element={<PrivateRoute allowedRoles={['HR']} />}>
        <Route index element={<Navigate to="/hr/dashboard" replace />} />
        <Route path="dashboard" element={<HRDashboard />} />
        <Route path="interns" element={<ManageInterns />} />
        <Route path="programs" element={<ManagePrograms />} />
        <Route path="approve-docs" element={<ApproveDocs />} />
        <Route path="allowances" element={<Allowances />} />
      </Route>

      {/* Mentor Routes */}
      <Route path="/mentor" element={<PrivateRoute allowedRoles={['MENTOR']} />}>
        <Route index element={<Navigate to="/mentor/dashboard" replace />} />
        <Route path="dashboard" element={<MentorDashboard />} />
        <Route path="tasks" element={<ManageTasks />} />
        <Route path="progress" element={<InternProgress />} />
        <Route path="evaluate" element={<EvaluateIntern />} />
      </Route>

      {/* Intern Routes */}
      <Route path="/intern" element={<PrivateRoute allowedRoles={['INTERN']} />}>
        <Route index element={<Navigate to="/intern/dashboard" replace />} />
        <Route path="dashboard" element={<InternDashboard />} />
        <Route path="profile" element={<MyProfile />} />
        <Route path="tasks" element={<MyTasks />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="allowance" element={<AllowanceRequest />} />
        <Route path="support" element={<SupportRequest />} />
      </Route>

      {/* Shared Routes */}
      <Route path="/forbidden" element={<Forbidden />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter
