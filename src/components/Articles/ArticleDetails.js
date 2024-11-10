// Page de détails (ArticleDetail.js)
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Article1 from './article3';
import Article2 from '../Articles/article2';
import Article3 from './article3';

const ArticleDetail = () => {
  const { id } = useParams(); // Récupérer l'ID depuis l'URL

  let articleContent;

  // Choisir le contenu de l'article en fonction de l'ID
  switch (id) {
    case '1':
      articleContent = <Article1 />;
      break;
    case '2':
      articleContent = <Article2 />;
      break;
    case '3':
      articleContent = <Article3 />;
      break;
    default:
      articleContent = <p>Article non trouvé.</p>;
      break;
  }

  return (
    <div className="container">
      {articleContent} {/* Afficher l'article correspondant */}
    </div>
  );
};

export default ArticleDetail;