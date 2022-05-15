import { LinkContainer, EnrollContainer } from "./styles";

const EnrollButton = () => {
  return (
    <LinkContainer to="/enroll">
      <EnrollContainer>회원가입</EnrollContainer>
    </LinkContainer>
  );
};

export default EnrollButton;
