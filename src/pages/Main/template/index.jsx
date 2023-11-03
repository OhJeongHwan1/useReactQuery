import {Wrapper, Todo} from '../../../components';

const MainTemplate = () => {
  return (
    <Wrapper>
      <Todo text="리액트 쿼리를 이용한 todo" checked={true} />
      <Todo text="리액트 쿼리를 이용한 todo2" checked={false} />
    </Wrapper>
  );
};

export default MainTemplate;
