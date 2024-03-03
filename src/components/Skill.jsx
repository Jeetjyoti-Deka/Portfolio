/* eslint-disable react/prop-types */
import Badge from "./Badge";

const Skill = ({ skill, isActive, setActive }) => {
  return (
    <div onClick={() => setActive(skill)}>
      <Badge isActive={isActive} value={skill} />
    </div>
  );
};
export default Skill;
