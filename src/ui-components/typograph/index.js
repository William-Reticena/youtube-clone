import styled from "styled-components";

export const Typograph = ({ children, variant }) => {
  const Variant = variants[variant];

  return (
    <Variant>
      {children}
    </Variant>
  );
};

const H1 = styled.h1`
  display: inline-block;
  color: #000;
`;

const H2 = styled.h2`
  display: inline-block;
  color: #00f;
`;

const variants = {
  'h1': H1,
  'h2': H2
}

Typograph.defaultProps = {
  variant: 'h1'
}
