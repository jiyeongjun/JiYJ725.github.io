import styled from 'styled-components';
import {Text} from "../../style/Text";
import {fontSizes} from "../../style/theme";

const UserProfile = () => {
  return (
    <StyledUserProfile>
      <Text fontSize="xl" fontWeight="semiBold">
        Welcome :)
      </Text>
    </StyledUserProfile>
  );
};

export default UserProfile;

const StyledUserProfile = styled.main`
  margin: 2rem auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 40rem;

  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background-color: ${({theme}) => theme.mode.background};
  border: 1px solid ${({theme}) => theme.mode.border};

  h2 {
    font-size: 30px;
    font-weight: bold;
  }
`
