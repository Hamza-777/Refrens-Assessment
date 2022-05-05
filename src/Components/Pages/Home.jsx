import React from 'react';
import { useDataProvider } from '../Providers/DataProvider';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from '../Utils/Card';
import { Header } from '../Styles/Header.styled';

const Home = () => {
  //retrieving fetched data from provider
  const { data, results, setNext } = useDataProvider();

  return (
    <>
      <Header>
        <img src='/img/randm.png' alt='rick and morty' className='img' />
        <h1 className='title'>Rick & Morty</h1>
      </Header>
      {/* Using infinite scroll library of react to create infinite scrolling effect */}
      <InfiniteScroll
        dataLength={results.length}
        next={
          data && data.info.next
            ? (window.onscroll = function () {
                if (
                  window.innerHeight + window.scrollY >=
                  document.body.offsetHeight
                ) {
                  // If reached the end of the page code below runs
                  setNext(data.info.next);
                }
              })
            : null
        }
        hasMore={data && data.info.next}
        loader={
          <img
            src='/img/spinner.gif'
            style={{ width: '10rem', margin: 'auto', display: 'block' }}
            alt='Loading...'
          />
          // Shows loader until data loads
        }
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3rem',
          padding: '3rem 5rem',
        }}
      >
        {results.map((result, index) => (
          // Rendering cards for every character recieved
          <Card key={index} character={result} />
        ))}
      </InfiniteScroll>
    </>
  );
};

export default Home;
