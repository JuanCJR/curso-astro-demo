import { type ApiSpaceXResponse, type Doc } from "../types/api";

export const getLastestLaunches = async () => {
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          data_unix: "asc",
        },
        limit: 12,
      },
    }),
  });
  return (await res.json()) as ApiSpaceXResponse;
};

export const getLaunchById = async ({ id }: { id: string }) => {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
  const launch = (await res.json()) as Doc;
  return launch;
};
