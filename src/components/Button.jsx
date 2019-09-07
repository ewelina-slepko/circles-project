import styled from 'styled-components'

const Button = styled.button`
  background: #7c8494;
  color: #d7dade;
  border-radius: 5px;
  border: unset;
  width: 140px;
  height: 40px;
  color: white;
  margin: 10px;
  padding: 10px;
  outline: none;
  text-transform: uppercase;

  &:active{
        transform: translateY(1px);
    }
  &:hover{
    background: #747b8a
}
`

export default Button;
