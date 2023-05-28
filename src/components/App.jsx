import { RecipeList } from './RecipeList/RecipeList';
import recipes from '../recipes.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';

import PaintingList from '../components/PaintingList/PaintingList';
import Section from '../components/Section/Section';
import paintings from '../../src/paintings.json';

export const App = () => {
  return (
    <Layout>
      <RecipeList items={recipes} />
      <GlobalStyle />
      <Section title="Топ недели">
        <PaintingList items={paintings} />
        {/* <PaintingList items={paintings} /> */}
      </Section>
      <Section title="Лучшее">
        <PaintingList items={paintings} />
      </Section>
    </Layout>
  );
};

// import PaintingList from '../components/PaintingList';
// import Section from '../components/Section';
// import paintings from '../../src/paintings.json';

// export const App = () => {
//   return (
//     <div>
//       <Section title="Топ недели">
//         <PaintingList items={paintings} />
//         {/* <PaintingList items={paintings} /> */}
//       </Section>
//       <Section title="Лучшее">
//         <PaintingList items={paintings} />
//       </Section>
//     </div>
//   );
// };
