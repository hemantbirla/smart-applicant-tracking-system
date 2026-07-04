export const calculateProfileCompletion = (profile) => {
  if (!profile) return 0;

  const weights = [
    { value: !!profile.profileImage, weight: 10 },
    { value: !!profile.phone, weight: 15 },
    { value: Array.isArray(profile.skills) && profile.skills.length > 0, weight: 20 },
    { value: Array.isArray(profile.experience) && profile.experience.length > 0, weight: 25 },
    { value: Array.isArray(profile.education) && profile.education.length > 0, weight: 20 },
    { value: !!profile.resumeUploaded, weight: 10 },
  ];

  const totalWeight = weights.reduce((sum, item) => sum + item.weight, 0);
  const achievedWeight = weights
    .filter((item) => item.value)
    .reduce((sum, item) => sum + item.weight, 0);

  return Math.round((achievedWeight / totalWeight) * 100);
};