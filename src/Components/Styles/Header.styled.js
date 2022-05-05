import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  .img {
    width: 22rem;
    height: 22rem;
  }

  .title {
    font-size: 7rem;
    font-weight: 300;
    color: #005555;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    gap: 0.5rem;

    .title {
      font-size: 5rem;
    }
  }
`;
