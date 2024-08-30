import { ErrorCode, ErrorContainer, ErrorMessage, ErrorTitle, HomeLink } from "../styles/Error.style";

const ErrorPage = () => {
  return (
    <ErrorContainer>
      <ErrorCode>404</ErrorCode>
      <ErrorTitle>Page Not Found</ErrorTitle>
      <ErrorMessage>Oops! The page you're looking for doesn't exist.</ErrorMessage>
      <HomeLink href="/">Go Home</HomeLink>
    </ErrorContainer>
  );
};

export default ErrorPage;