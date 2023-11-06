import { useQuery } from "@tanstack/react-query";

const useFeaturedFoods = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["featureds foods in home page"],
    queryFn: async () => {
      const dataa = await fetch("http://localhost:5000/");
      return await dataa.json();
    },
  });

  return { data, isLoading, isError, refetch };
};

export default useFeaturedFoods;
