import styled from 'styled-components';
import theme from '../../styles/theme';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const Wrapper = styled.div`
  display: flex;
  border: 1px solid ${theme.colors.grey9};
  width: 350px;
  height: 45px;
  padding: 0 10px;
  align-items: center;
  border-radius: 10px;
  > * {
    margin-right: 10px;
  }
`;

const Todo = ({text, checked}) => {
  return (
    <Wrapper>
      <Checkbox
        checked={checked}
        sx={{
          color: '#DF0174',
          '&.Mui-checked': {
            color: '#DF0174',
          },
        }}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
      />
      <p>{text}</p>
    </Wrapper>
  );
};
export default Todo;
