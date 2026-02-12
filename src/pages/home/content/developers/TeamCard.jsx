import s from "./TeamCard.module.css";
import SocialLinks from "./SocialLinks";
import { Article } from "../../../../components/structGrid/sections/sections";

const TeamCard = ({ name, position, image }) => {
  return (
    <li>
      <Article className={s.developers__teamCard + " " + s.teamCard}>

      <img
        className={s.teamCard__img}
        srcSet={image.srcset}
        src={image.src}
        alt={image.alt}
        />
      <div className={s.teamCard__footer}>
        <p className={s.teamCard__text}>
          <span className={s.teamCard__name}>{name}</span>
          <br />
          {position}
        </p>
        <SocialLinks />
      </div>
        </Article>
    </li>
  );
};

export default TeamCard;
