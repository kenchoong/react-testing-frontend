import { useEffect, useState } from "react";
import styled from "styled-components";
import { Repo, useListReposQuery } from "../app/services/github";
import Button from "../components/button";
import RepoContainer from "../components/repoContainer";
import SearchBox from "../components/searchBox";

import { search } from "../context/search";
import { useSearchContext } from "../context/useSearch";

const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  padding: 10px;
  overflow: hidden;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin-left: 25px;
  overflow: hidden;
`;

const RepoList = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [page, setPage] = useState(1);
  const { data: apiResponse, isLoading } = useListReposQuery(page);
  const [repos, setRepos] = useState<Repo[] | undefined | null>(apiResponse);
  const { searchText } = useSearchContext();

  useEffect(() => {
    if (apiResponse) {
      setRepos(apiResponse);
    }
  }, [apiResponse]);

  useEffect(() => {
    if (searchText !== "") {
      const result = search(repos, searchText);
      setRepos(result);
    } else {
      setRepos(apiResponse);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  // page number for pagination
  const [pageNumber, setPageNumber] = useState(1);
  const [postNumber] = useState(5);

  if (isLoading) {
    return <div>Loading</div>;
  }

  // to disable the prev and next button
  const currentPageNumber = pageNumber * postNumber - postNumber;
  const isLastPage = repos
    ? repos.length / postNumber === pageNumber
      ? true
      : false
    : false;

  // splice the response for pagination
  const paginatedRepos =
    repos && [...repos].splice(currentPageNumber, postNumber);

  const handlePrev = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };

  const handleNext = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <Wrapper>
      <SearchBox />

      {!repos?.length ? (
        <p style={{ marginLeft: "25px", padding: "10px" }}>Nothing here</p>
      ) : (
        paginatedRepos?.map(
          ({ full_name, html_url, description, owner, id }) => {
            const { avatar_url, login } = owner;

            return (
              <RepoContainer
                key={id}
                ownerName={login}
                repoName={full_name}
                description={description}
                repoUrl={html_url}
                ownerProfileImage={avatar_url}
              />
            );
          }
        )
      )}

      <ButtonWrapper>
        <Button onClick={handlePrev} disabled={pageNumber === 1 ? true : false}>
          Previous
        </Button>
        <Button
          onClick={handleNext}
          disabled={isLastPage || !apiResponse?.length || !repos?.length}
        >
          Next
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default RepoList;
