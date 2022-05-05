import styled from 'styled-components';

export const DisplayCard = styled.main`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  width: 40rem;
  border: 2px solid #005555;
  border-radius: 7px;
  padding: 1rem;

  h2,
  h3 {
    color: #005555;
  }

  .card-img > .img {
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const CardInfo = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const NameGender = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;

  .other-detail {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`;

export const Locations = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;

  .origin,
  .current {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`;

export const FeaturedIn = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;

  .first,
  .last {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.25rem;
  }
`;
