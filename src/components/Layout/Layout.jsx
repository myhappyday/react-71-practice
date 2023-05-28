import { Container } from './Layout.styled';

export const Layout = ({ children }) => {
  return (
    <Container>
      <header>header</header>
      <main>
        <h1>Module 1 Lessons 1-2</h1>
        {children}
      </main>
      <footer>footer</footer>
    </Container>
  );
};
