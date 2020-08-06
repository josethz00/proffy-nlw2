import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

interface PageHeaderProps {
  title: string;
  description ?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={require('../../assets/images/icons/back.svg')} alt="Voltar" />
        </Link>
        <img src={require('../../assets/images/logo.svg')} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>
        {props.description && <p>{props.description}</p>}

        {props.children}
      </div>
    </header>
  );
};

export default PageHeader;