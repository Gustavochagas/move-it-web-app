import { useCallback } from "react";
import "./styles.css";

const MIN_EXPERIENCE = 0;
const MAX_EXPERIENCE = 600;

type PropTypes = {
  currentExperience?: number;
};

export function ExperienceBar({ currentExperience = 0 }: PropTypes) {
  const calcExperience = useCallback((current: number) => {
    return (current / MAX_EXPERIENCE) * 100;
  }, []);

  return (
    <header className="experience-bar">
      <span>{MIN_EXPERIENCE} xp</span>
      <div>
        <div style={{ width: `${calcExperience(currentExperience)}%` }} />

        <span
          className="current-experience"
          style={{ left: `${calcExperience(currentExperience)}%` }}
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{MAX_EXPERIENCE} xp</span>
    </header>
  );
}
