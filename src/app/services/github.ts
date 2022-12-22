import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Owner {
  login: string;
  avatar_url: string;
}

export interface Repo {
  id: number;
  full_name: string;
  html_url: string;
  description: string;
  owner: Owner;
}

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/" }),
  endpoints: (build) => ({
    listRepos: build.query<Repo[], number | void>({
      query: (id = 1) => `repositories?since=${id}`,
    }),
  }),
});

export const { useListReposQuery } = api;
