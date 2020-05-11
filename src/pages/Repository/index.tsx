import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/dashboard">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/26586585?s=460&u=83f08b2c6f060fb198d32b78cb0eb87184e56aa5&v=4"
            alt="shark"
          />
          <div>
            <strong>Shark/repo</strong>
            <p>description</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1000</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>1000</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>1000</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="aaa">
          <div>
            <strong>a</strong>
            <p>a</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
