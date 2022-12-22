import styled from "styled-components";
import { string } from "prop-types";

const Wrapper = styled.div`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin: 25px;
  padding: 10px;
  overflow: hidden;
`;

interface ImageProps {
  src: string;
  width: string;
  height: string;
}

const Image = styled("img")<ImageProps>((props) => {
  return `
    width: ${props.width}
    height: ${props.height}
    float: left;
    margin-right: 10px;
  `;
});

interface Props {
  repoName: string;
  ownerName: string;
  description: string;
  repoUrl: string;
  ownerProfileImage: string;
}

const OwnerContainer = styled.div`
  display: flex;
`;

const NavLink = styled("a")`
  color: blue;
  text-decoration: underline;
`;

const RepoContainer = (props: Props) => {
  return (
    <Wrapper>
      <OwnerContainer>
        <Image src={props.ownerProfileImage} width="100" height="100" />
        <h4>{props.ownerName}</h4>
      </OwnerContainer>

      <div>
        <h4>{props.repoName}</h4>
        <p>{props.description}</p>
        <NavLink href={props.repoUrl} target="_blank" rel="noopener noreferrer">
          Github repo link
        </NavLink>
      </div>
    </Wrapper>
  );
};

RepoContainer.propTypes = {
  ownerProfileImage: string.isRequired,
  ownerName: string.isRequired,
  repoName: string.isRequired,
  description: string,
  repoUrl: string.isRequired,
};

export default RepoContainer;
