"use client";
import React, { useContext } from "react";
import WelcomeBanner from "./_components/WelcomeBanner";
import CourseList from "./_components/CourseList";
import PageTransition from "../_context/PageTransition";
import DashboardStats from "./_components/DashboardStats";
import { CourseCountContext } from "../_context/CourseCountContext";

function Dashboard() {
  const { totalCourse } = useContext(CourseCountContext);

  return (
      <PageTransition>
        <div
            className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#121212] text-gray-200 px-4 py-8"
        >
          <div className="container mx-auto">
            <WelcomeBanner />
            <DashboardStats courseCount={totalCourse || 0} />
            <div className="mt-6">
              <CourseList />
            </div>
          </div>
        </div>
      </PageTransition>
  );
}

export default Dashboard;