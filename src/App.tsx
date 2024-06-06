import './App.css';
import { Post } from './components/post/post';
import { SideBar } from './components/sidebar/sidebar';
import { Timeline } from './components/timeline/timeline';

export const App = () => {
  return (
    <>
      <div className="container">
        <SideBar />
        <main className="main">
          <h1 className="page-title">Cvrlikání</h1>
          <Post />
          <Timeline />
        </main>
      </div>
    </>
  );
};

export default App;
