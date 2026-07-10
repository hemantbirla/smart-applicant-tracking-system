import { useState, useEffect } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import ProfileHeader from "../../components/profile/ProfileHeader";
import PersonalInfo from "../../components/profile/PersonalInfo";
import SkillsSection from "../../components/profile/SkillsSection";
import ExperienceSection from "../../components/profile/ExperienceSection";
import EducationSection from "../../components/profile/EducationSection";
import EditProfileModal from "../../components/profile/EditProfileModal";
import ResumeUpload from "../../components/resume/ResumeUpload";

import SkeletonProfile from "../../components/common/Skeleton/SkeletonProfile";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Simulate API loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <DashboardLayout>
        <SkeletonProfile />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="container py-4">
        <ProfileHeader onEdit={() => setIsEditModalOpen(true)} />

        <div className="mt-4">
          <PersonalInfo />
        </div>

        <div className="mt-4">
          <SkillsSection />
        </div>

        <div className="mt-4">
          <ExperienceSection />
        </div>

        <div className="mt-4">
          <EducationSection />
        </div>

        <div className="mt-4">
          <ResumeUpload />
        </div>

        <EditProfileModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
        />
      </div>
    </DashboardLayout>
  );
};

export default Profile;
