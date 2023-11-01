import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledWrapper = styled.div`
  width: 500px;
  margin-top: 5vh;
  height: 85vh;
  background-color: white;
  border-radius: 40px;
`;

const Wrapper = () => {
  return (
    <Container>
      <StyledWrapper></StyledWrapper>
    </Container>
  );
};

export default Wrapper;
