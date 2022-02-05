import styled from "styled-components";

export const Grid = (props) => {
  // console.log(props);

  return (
    <GridWrapper {...props}>{props.children}</GridWrapper>
  );
};

const GridWrapper = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  height: 100%;
  // width: 100%;
`;
