import balloon from '../../images/bulb.svg';
import '../../styles/loading.scss';

// eslint-disable-next-line
import createElement from '../../utils/jsxHelper';

export default function createLoadingScreen() {
  return (
    <div id="loading">
      
      <img src={balloon} id="balloon" />
      <p className="loading-text">Loading...</p>
    </div>
  );
}
