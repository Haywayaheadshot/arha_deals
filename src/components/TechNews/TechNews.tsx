import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTechNews } from "../../redux/news/News";
import { ThunkDispatch } from "redux-thunk";
import LoadingAnimation from "../Shared/LoadingAnimation";

interface Props {
  data?: any[];
}

interface RootState {
  news: {
    data: any[];
    loading: boolean;
  };
}

const TechNews: React.FC<Props> = () => {
  const news = useSelector((state: RootState) => state.news);
  const { data: newsArr, loading } = news;

  const dispatch: ThunkDispatch<any, any, any> = useDispatch();
  useEffect(() => {
    dispatch(getTechNews());
  }, [dispatch]);

  return (
    <div className="text-black py-10 px-5">
      <h1 className="mt-2 text-center text-2xl py-3">
        Welcome to the Tech News Page.
      </h1>
      <p className="text-center">
        Check out the latest events happening in the technological world.
      </p>
      {(newsArr.length === 0 && <LoadingAnimation />) ||
        (loading && <LoadingAnimation />)}
      <section className="flex flex-col justify-center items-center gap-4 mt-3">
        {newsArr.map((article) => (
          <div
            className="flex flex-col justify-center items-center p-4 border-2 rounded-lg gap-2"
            key={article.id}
          >
            <h1 className="py-3 text-center text-xl underline underline-offset-4">
              {article.title}
            </h1>
            <img src={article.imageUrl} alt="Article Image" />
            <p>{article.content}</p>
            {article.readMoreUrl ? (
              <h5>
                Click{" "}
                <a
                  href={article.readMoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="text-blue-100">here</i>
                </a>{" "}
                to view article.
              </h5>
            ) : null}
          </div>
        ))}
      </section>
    </div>
  );
};


export default TechNews;
