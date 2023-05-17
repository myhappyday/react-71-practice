import PropTypes from 'prop-types';
import { BsAlarm } from 'react-icons/bs';
import { AiOutlinePieChart } from 'react-icons/ai';
import { HiOutlineChartBar } from 'react-icons/hi';
import {
  Container,
  Image,
  RecipeInfo,
  InfoItem,
  RecipeDifficulty,
  BadgeList,
  Badge,
} from './Recipe.styled';

export const Recipe = ({ item: { name, image, time, servings, calories } }) => {
  return (
    <Container>
      <Image src={image} alt={name} />
      <h2>{name}</h2>
      <RecipeInfo>
        <InfoItem>
          <BsAlarm />
          {time} min
        </InfoItem>
        <InfoItem>
          <AiOutlinePieChart />
          {servings} servings
        </InfoItem>
        <InfoItem>
          <HiOutlineChartBar />
          {calories} calories
        </InfoItem>
      </RecipeInfo>
      <RecipeDifficulty>
        <h3>Difficulty</h3>
        <BadgeList>
          <Badge>Easy</Badge>
          <Badge>Medium</Badge>
          <Badge>Hard</Badge>
        </BadgeList>
      </RecipeDifficulty>
    </Container>
  );
};

Recipe.protoTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    // difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
  }).isRequired,
};
