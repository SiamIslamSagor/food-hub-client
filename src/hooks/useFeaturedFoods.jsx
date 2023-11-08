import { useQuery } from "@tanstack/react-query";

const useFeaturedFoods = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["featureds foods in home page"],
    queryFn: async () => {
      const dataa = await fetch("https://food-hub-server-hazel.vercel.app/");
      return await dataa.json();
    },
  });

  return { data, isLoading, isError, refetch };
};

export default useFeaturedFoods;
