import { SetStateAction } from "react";
import styled from "styled-components";
import { useSearchContext } from "../context/useSearch";
import Input from "./input";

interface Props {}

const Wrapper = styled.div`
  width: 32%;
  margin-left: 25px;
`;

const SearchBox = (props: Props) => {
  const { searchText, setSearchText } = useSearchContext();

  const handleChange = (event: {
    target: { value: SetStateAction<string | undefined> };
  }) => {
    setSearchText(event.target.value);
  };

  return (
    <Wrapper>
      <Input
        placeholder="Search, type something here"
        value={searchText || ""}
        type="text"
        onChange={(event) => handleChange(event)}
      />
    </Wrapper>
  );
};

export default SearchBox;
