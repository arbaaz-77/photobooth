import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { client } from "../client";
import { searchQuery, feedQuery } from "../utils/data";
import MasonryLayout from "./MasonryLayout";
import Spinner from "./Spinner";

const Feed = () => {
  const [pins, setPins] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    if (categoryId) {
      const query = searchQuery(categoryId);

      client.fetch(query).then((data) => {
        setPins(data);
        setIsLoading(false);
      });
    } else {
      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setIsLoading(false);
      });
    }
  }, [categoryId]);

  if (isLoading)
    return <Spinner message="We are adding new ideas to your feed!" />;

  if (!pins?.length)
    return (
      <h2 className="text-center text-bold text-3xl text-purple-400">
        No pins available
      </h2>
    );

  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
};

export default Feed;
