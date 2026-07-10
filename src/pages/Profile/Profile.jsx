import { useState, useEffect, useCallback } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import ProfileHeader from "../../components/profile/ProfileHeader";
import PersonalInfo from "../../components/profile/PersonalInfo";
import SkillsSection from "../../components/profile/SkillsSection";
import ExperienceSection from "../../components/profile/ExperienceSection";
import EducationSection from "../../components/profile/EducationSection";
import EditProfileModal from "../../components/profile/EditProfileModal";
import ResumeUpload from "../../components/resume/ResumeUpload";

import SkeletonProfile from "../../components/common/Skeleton/SkeletonProfile";
import ErrorFallback from "../../components/common/Error/ErrorFallback";

const Profile = () => {
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const fetchProfile = useCallback(() => {
    setLoading(true);

    setError(false);

    // Simulated API Call
    setTimeout(() => {
      const success = true;

      if (success) {
        setLoading(false);
      } else {
        setLoading(false);
        setError(true);
      }
    }, 1500);
  }, []);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const handleEditModalOpen = useCallback(() => {
    setIsEditModalOpen(true);
  }, []);

  const handleEditModalClose = useCallback(() => {
    setIsEditModalOpen(false);
  }, []);

  if (loading) {
    return (
      <DashboardLayout>
        <SkeletonProfile />
      </DashboardLayout>
    );
  }

  if (error) {
    return (
      <DashboardLayout>
        <ErrorFallback
          title="Unable to load profile"
          message="Something went wrong while loading your profile."
          onRetry={fetchProfile}
        />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="container py-4">
        <ProfileHeader onEdit={handleEditModalOpen} />

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
          onClose={handleEditModalClose}
        />
      </div>
    </DashboardLayout>
  );
};

export default Profile;
