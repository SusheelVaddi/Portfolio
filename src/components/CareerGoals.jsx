import { careerGoalsData } from "../data/portfolioData";
import { GoalIcon } from "./Icons";

export default function CareerGoals() {
  return (
    <section id="goals" className="section" aria-label="Career and learning goals">
      <div className="container">
        {/* Career Goals */}
        <div className="section-header fade-in">
          <span className="section-label">Goals</span>
          <h2 className="section-title">Career Goals</h2>
          <p className="section-subtitle">
            Professional paths I am working towards
          </p>
        </div>

        <div className="goals-cards fade-in">
          {careerGoalsData.map((goal, i) => (
            <div key={i} className="goal-card">
              <div className="goal-icon">
                <GoalIcon icon={goal.icon} />
              </div>
              <h3 className="goal-title">{goal.title}</h3>
              <p className="goal-description">{goal.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
