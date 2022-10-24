import { Box } from "components/Box"
import { PagesLink } from './Movies.styled';



export const AppBar = () => {
    return (
      <Box as="header" borderBottom='normal' mb={3}>
        <Box as="nav" display="flex" gridGap={4} p={4}>
          <PagesLink to="home">Home</PagesLink>
          <PagesLink to="movies">Movies</PagesLink>
        </Box>
      </Box>
    );
}