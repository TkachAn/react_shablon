
import s from "./Developers.module.css";
import TeamCard from "./TeamCard";
import { developersData } from "./data"; // Импортируем данные команды

const Developers = () => {
  return (
    <ul className={s.developers__list}>
        {developersData.map((developer) => (
          <TeamCard
            key={developer.id}
            name={developer.name}
            position={developer.position}
            image={developer.image}
          />
        ))}
      </ul>
    
  );
};

export default Developers;
