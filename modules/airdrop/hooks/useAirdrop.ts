import { useQuery } from "react-query";

export const useAirdrop = (address: string | undefined) => {
  // const [value, setValue] = useState(null);

  const query = useQuery(["airdrop", 1], async () => {
    const res = await fetch("/airdrop/airdrop.json");
    return res.json();
  });

  const query2 = useQuery(["airdrop", 2], async () => {
    const res = await fetch("/airdrop/airdrop2.json");
    return res.json();
  });

  const query3 = useQuery(["airdrop", 3], async () => {
    const res = await fetch("/airdrop/airdrop3.json");
    return res.json();
  });

  // TODO: change to api call
  if (query.isLoading || query2.isLoading || query3.isLoading) {
    return {
      isLoading: true,
      data: null,
    };
  }

  const data = [...query.data, ...query2.data, ...query3.data].find((item) => {
    return item.address === address;
  });

  // useEffect(() => {
  //   if (data != null) {
  //   }
  // }, [data]);

  return {
    isLoading: false,
    data,
  };
};

export default useAirdrop;
