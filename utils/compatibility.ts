import type { QuizAnswers } from "@/types/travel";

export function getCompatibilityResult(answers: QuizAnswers) {
  const isAdventure = answers.adventure === "High" || answers.energy === "High energy";
  const isPremium = answers.budget === "Premium" || answers.budget === "Luxury";
  const isCouple = answers.travelType === "Couple";
  const isFamily = answers.travelType === "Family";
  const isSenior = answers.ageGroup === "55+";
  const wantsWomenOnly = answers.womenOnly === "Yes";

  if (wantsWomenOnly) {
    return {
      vibe: isAdventure ? "Women-Only Adventure Explorer" : "Women-Only Comfort Explorer",
      score: 96,
      groups: ["Women Only Sikkim Group Trip", "Darjeeling Tea Trail for Women", "Gangtok Safe Social Escape"]
    };
  }

  if (isSenior) {
    return {
      vibe: "Senior Comfort Scenic Traveler",
      score: 90,
      groups: ["Senior Comfort Darjeeling Tour", "Mirik Easy Pace Group", "Gangtok Comfort Viewpoints"]
    };
  }

  if (isCouple) {
    return {
      vibe: isPremium ? "Premium Couple Escape Traveler" : "Romantic Scenic Explorer",
      score: 93,
      groups: ["Romantic Darjeeling Couple Escape", "Luxury North-East Escape", "Gangtok Couple Cafe Trail"]
    };
  }

  if (isFamily) {
    return {
      vibe: "Family Comfort Explorer",
      score: 91,
      groups: ["Family Friendly Gangtok Tour", "Mirik Family Lake Escape", "Darjeeling Family Heritage Trip"]
    };
  }

  if (isAdventure || answers.photography === "High") {
    return {
      vibe: "Gen Z Adventure Explorer",
      score: 92,
      groups: ["Gen Z Sikkim Adventure Trip", "Zero Point Snow Squad", "Nathula High Energy Group"]
    };
  }

  return {
    vibe: isPremium ? "Luxury Social Traveler" : "Balanced Social Explorer",
    score: 89,
    groups: ["Luxury North-East Escape", "Gangtok Balanced Group", "Darjeeling Cafe and Viewpoints Trip"]
  };
}
