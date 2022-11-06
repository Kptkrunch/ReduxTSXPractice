import { useState } from "react";
import { useActions } from "../Hooks/useActions";
import { useTypedSelector } from "../Hooks/useTypedSelector";

const RepoList: React.FC = () => {

    const [term, setTerm] = useState('');
    const { searchRepos } = useActions();
    const { data, error, loading } = useTypedSelector((state) => state.repos);
    console.log(data, error, loading);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        searchRepos(term);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    value={ term }
                    onChange={(event) => {setTerm(event.target.value)}}/>
                <button>Search</button>
            </form>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading...</h3>}
            {!error && !loading &&
                data.map((name) => <div key={name}>{name}</div>)}
        </div>
    );
}

export default RepoList;