import React from 'react';
import useFetch from '../../hooks/useFetch';
import Loading from '../Loading';

export default function Dashboard() {
  const { data } = useFetch('dashboard');

  if (!data) {
    return <Loading />;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Receitas</th>
            <th>Barracas</th>
            <th>Artigos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {data.recipes.map((recipe) => (
                <p>{recipe.name}</p>
              ))}
            </td>
            <td>
              {data.barracas.map((barraca) => (
                <p>{barraca.barracaName}</p>
              ))}
            </td>
            <td>
              {data.articles.map((article) => (
                <p>{article.title}</p>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
