import { Provider } from "react-redux";
import { store } from "../State";
import RepoList from '../Components/repoList';

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <h1>Search for Package</h1>
                <RepoList />
            </div>
        </Provider>
    );
};

export default App;