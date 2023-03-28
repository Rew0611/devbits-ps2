import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroller";

function News(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [articleEnd, setArticleEnd] = useState(6);
  const [section, setSection] = useState("Home");

  const handleNextClick = () => {
    if (page < Math.ceil(articles.length / 6)) {
      setPage(page + 1);
      setArticleEnd(articleEnd + 6);
      renderNews(0, articleEnd);
    }
  };

  const renderNews = (start, end) => {
    return articles.slice(start, end).map((e) => {
      if (e.title === "" || e.abstract === "" || e.section === "admin") {
        return "";
      } else {
        let imgUrl = e.banner_image;

        let formattedDate = new Date(e.time_published).toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          timeZone: "America/New_York",
        });
        return (
          <div className="col-md-4" style={{ padding: "10px" }} key={e.uri}>
            <NewsCard
              title={e.title}
              abstract={e.abstract}
              newsUrl={e.url}
              imgUrl={imgUrl}
              author={e.byline}
              date={formattedDate}
            />
          </div>
        );
      }
    });
  };

  useEffect(() => {
    document.title = `${
      props.section === "home" ? "" : section
    } Headlines - News Wallah`;
    async function fetchData() {
      console.log("HI");
      try {
        let url = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&topics=earnings&time_from=20220410T0130&limit=10&apikey=${props.apiKey}`;
        let data = await fetch(url);
        console.log(data);
        let parsedData = await data.json();
        console.log(parsedData);
        setArticles(parsedData.feed);
        setSection(parsedData.section);

        document.title = `News Wallah - ${
          props.section === "home" ? "" : section
        } Headlines`;
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {articles.length === 0 ? (
        <Spinner />
      ) : (
        <div className="w-[100%] m-0 bg-black" style={{ padding: "4rem" , marginTop:"2rem"}}>
          <div
            className="text-3xl text-center pb-10 text-white"
            style={{
              fontFamily: "Montserrat",
            }}
          >
            TRENDY FINANCE HEADLINES
          </div>
          {
            <InfiniteScroll
              pageStart={0}
              loadMore={handleNextClick}
              hasMore={Math.ceil(articles.length / 6) === page ? false : true}
              loader={<Spinner key={Math.floor(Math.random() * 51)} />}
              threshold={-10}
            >
              <div
                className="row my-3 flex flex-wrap justify-evenly"
                key={Math.random() + 1}
              >
                {renderNews(0, articleEnd)}
              </div>
            </InfiniteScroll>
          }
        </div>
      )}
    </>
  );
}

export default News;
