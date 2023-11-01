import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledWrapper = styled.div`
  width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  margin-top: 5vh;
  height: 85vh;
  background-color: white;
  border-radius: 30px;
  > * {
    margin-bottom: 15px;
  }
`;

const Wrapper = ({children}) => {
  return (
    <Container>
      <StyledWrapper>{children}</StyledWrapper>
    </Container>
  );
};

export default Wrapper;
