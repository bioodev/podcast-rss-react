import React from "react";

const FeedList = ({ rssData, isLoading }) => {
  const handleClickItem = (link) => {
    console.log(link);
  };
  return (
    <div>
      {isLoading ? (
        <p>cargando... </p>
      ) : (
        <div className="gap-2">
          <img
            className="m-auto rounded-full lg:max-w-xs p-8"
            src={rssData.image}
            alt={rssData.title}
          />
          <h3 className="text-xl font-black p-2">{rssData.title}</h3>
          {rssData.items === undefined ? (
            <p>cargando</p>
          ) : (
            <div className="listado-pods grid grid-cols-2 gap-4 p-4">
              {rssData.items.map((res, i) => (
                <a className="border-2 p-4 hover:shadow-lg ease-in-out hover:ease-in-out" target="_blank" href={res.link} key={i}>
                  <button className="">{res.title}</button>
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FeedList;
