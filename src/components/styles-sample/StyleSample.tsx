import styled, { css } from 'styled-components'

type ButtonProps = {
  primary?: boolean
}

const Button = styled.button<ButtonProps>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor: pointer;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

type StyleProps = {
  styles: React.CSSProperties;
}

export const StyleSample = ({ styles }: StyleProps) => {
  return (
    <div style={styles}>
      <Button>Normal Button</Button>
      <Button primary>Button with props</Button>
    </div>
  )
}
