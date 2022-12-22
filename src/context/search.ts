import { Repo } from "../app/services/github";

export function search(
  repos: Repo[] | null | undefined,
  searchText: string | null | undefined
) {
  if (!searchText || "" || !repos || !repos.length) {
    return repos;
  }

  const search = searchText.toLowerCase();

  const array = repos.filter((repo) => {
    return repo.full_name.startsWith(search);
  });

  return array;
}
