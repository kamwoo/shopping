import styled from 'styled-components';

const ControlButtonBox = styled.div`
  display: flex;
  gap: 10px;
`;

const ControlButton = styled.button`
  width: 50px;
  height: 50px;
  font-size: 30px;
  border: none;
  border-radius: 50%;
  background-color: ${props => (props.clicked ? 'skyblue' : 'transparent')};
  color: ${props => (props.clicked ? 'white' : 'black')};
  cursor: pointer;
`;

function PageController({ pageLength, currentPage, onClickButton }) {
  return (
    <ControlButtonBox>
      {Array.from({ length: pageLength }).map((_, index) => (
        <ControlButton
          key={index}
          name={index + 1}
          clicked={index + 1 === currentPage}
          onClick={onClickButton}
        >
          {index + 1}
        </ControlButton>
      ))}
    </ControlButtonBox>
  );
}

export default PageController;