import { RecipeList } from './RecipeList';
import recipes from '../recipes.json';
import GlobalStyle from './GlobalStyle';
import { Layout } from './Layuot';

export const App = () => {
  return (
    <Layout>
      <RecipeList items={recipes} />
      <GlobalStyle />
    </Layout>
  );
};
