import styled from 'styled-components';

const NavWrapper =  styled.a`
  color: #3498db; /* Синий цвет для текста ссылок */
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #2980b9; /* Синий цвет для текста ссылок при наведении */
  }
`
export const S = {
    NavWrapper
}
