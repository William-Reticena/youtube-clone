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

const H4 = styled.h4`
  display: inline-block;
  width: 100%;
`;

const H6 = styled.h6`
// display: block;
color: #0f0;
`;

const variants = {
  'h1': H1,
  'h2': H2,
  'h4': H4,
  'h6': H6,
};

Typograph.defaultProps = {
  variant: 'h1'
};
