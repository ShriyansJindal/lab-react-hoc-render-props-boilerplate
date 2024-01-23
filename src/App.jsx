import './App.css';
import LikePostHoc from './components/HOC/LikePostHoc';
import Likeimagehoc from './components/HOC/Likeimagehoc';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import LikeImageRender from './components/Renderprops/LikeImageRender';

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
        <h1>Using code duplicity</h1>
        <LikePost/>
        <LikeImage/>
        <h1>Using HOC</h1>
        <Likeimagehoc/>
        <LikePostHoc/>
        <h1>Using Renderprops</h1>
        <LikeImageRender/>
        <LikePost/>
        
    </div>
  );
}

export default App;
