import styled from 'styled-components';

export const Container = styled.section`
  border: 1px solid black;
  padding: 8px;
  height: 100%;
  border-radius: 4px;
  
  display: flex;
  flex-direction: column;  
  justify-content: space-between;
  `;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

export const RecipeInfo = styled.div`
  display: flex;
  gap: 8px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  /* svg {
    color: red;
  } */
`;

export const RecipeDifficulty = styled.div``;

export const BadgeList = styled.div`
  display: flex;
  gap: 8px;
`;

export const Badge = styled.span`
  padding: 8px 16px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: ${props => {
    // console.log(props);
    if (!props.isActive) {
      return 'white';      
    }
    
    switch (props.value) {
      case 'easy':
        return 'green';
      case 'medium':
        return 'blue'; 
      case 'hard':
        return 'red';
      default:
        return 'white';
    }
  }};
  color: ${props => {
    return props.isActive ? 'white' : 'black';
  }}
`;

// export const Badge = styled.span`
//   padding: 8px 16px;
//   border: 1px solid black;
//   border-radius: 4px;
//   background-color: ${props => {
//      return props.isActive ? 'orangered' : 'white';
//   }};
//   color: ${props => {
//     return props.isActive ? 'white' : 'black';
//   }}
// `;
