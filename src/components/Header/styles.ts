import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

interface LinkProps {
  active: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        opacity: 0.8;
        transition: opacity 0.2s;

        &.active {
          padding-bottom: 10px;
          border-bottom: 2px solid #ff872c;
          opacity: 1;
        }

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;
