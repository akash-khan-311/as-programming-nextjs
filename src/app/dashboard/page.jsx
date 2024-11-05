"use client";
import AdminStatistics from "@/components/Dashboard/Statistics/AdminStatistics";
import InstructorStatistics from "@/components/Dashboard/Statistics/InstructorStatistics";
import UserStatistics from "@/components/Dashboard/Statistics/UserStatistics";
import Loader from "@/components/Shared/Loader";
import useRole from "@/hooks/useRole";

import { Suspense } from "react";

const Dashboard = () => {
  const [role, loading] = useRole();

  if (loading) {
    return <Loader />;
  } else if (role === "admin") {
    return (
      <Suspense fallback={<Loader />}>
        <AdminStatistics />
      </Suspense>
    );
  } else if (role === "instructor") {
    return (
      <Suspense fallback={<Loader />}>
        <InstructorStatistics />
      </Suspense>
    );
  }

  if (role === "user") {
    return (
      <Suspense fallback={<Loader />}>
        <UserStatistics />
      </Suspense>
    );
  }
};
export default Dashboard;
