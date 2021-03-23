import { Fragment, useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
  const [term, steTerm] = useState('');
  const { searchRepositories } = useActions();
  // getting the state
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(term);
  };

  return (
    <Fragment>
      <form className="ui fluid action input" onSubmit={onSubmit}>
        <input
          placeholder="Search..."
          onChange={(e) => steTerm(e.target.value)}
          value={term}
        />
        <button className="button ui ">Search</button>
      </form>
    </Fragment>
  );
};

export default RepositoriesList;
