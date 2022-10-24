import { Box } from 'components/Box';

export const NotFound = ({ error }) => {
  return (
    <Box
      display="flex"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection='column'
    >
      <h1>Page Not Found! Please check URL!!</h1>
      {error && (
        <>
          <br />
          <p>error code: {error.code}</p>
          <br />
          <p>error message: {error.message}</p>
        </>
      )}
    </Box>
  );
};
