import { Article } from "../components/article";
import { SearchBar } from "../components/search";
import { Footer } from '../components/footer'
import { Badge } from '../components/badge'
import {Hero} from '../components/hero'
export const News = ({ news }) => {
  console.log(news.articles[0].urlToImage);
  console.log(news.articles[0].content);
  let value = news.articles.map((article, index) => (
    <Article
      image={article.urlToImage}
      title={article.title}
      alink={article.url}
      key={index}
    ></Article>
  ));
  console.log(news.articles[0].urlToImage);
  return (
    <>
      <html data-theme="cupcake">
        <Hero
          src={"https://static01.nyt.com/images/2021/01/30/business/29musk-print/29musk-1-mediumSquareAt3X.jpg"}
          title={news.articles[0].title}
          content={news.articles[0].content}
        />
        <div className="text-center font-extrabold text-5xl m-6	">
          <h1>NewsPaper</h1>
        </div>

        <div className="divider"></div>
        <div className=" grid grid-cols-4  justify-items-center">
          <Badge text={"local"} />
          <Badge text={"sports"} />
          <Badge text={"weather"} />
          <Badge text={"tech"} />
        </div>
        <div className="flex">
          <SearchBar />
        </div>

        <div className="grid grid-cols-3 gap-5  justify-items-center m-10">
          {value}
        </div>
        <div>
          <Footer />
        </div>
      </html>
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const apiResponse = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=70de6ad1624f4edd926aa015d4313668"
  );

  const final = await apiResponse.json();
  let lastfinal = final;
  let news = lastfinal;
  return {
    props: {
      news,
    },
  };
};

export default News;
