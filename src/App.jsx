import AppStyle, { ScrollContainer } from './styles/styled';
import { BrowserRouter } from 'react-router-dom';
import Routers from './components/routes/Routers';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';

function App() {
  function scrollL() {
    const left = document.querySelector(
      `.${ScrollContainer.styledComponentId}`
    );
    left.scrollBy(-350, 0);
  }
  function scrollR() {
    const right = document.querySelector(
      `.${ScrollContainer.styledComponentId}`
    );
    right.scrollBy(350, 0);
  }

  return (
    <BrowserRouter>
      <AppStyle>
        <Routers />
        <div>
          <button className="icon" onClick={scrollL}>
            &#x21d0;
          </button>
        </div>
        <div className="container">
          <ScrollContainer>
            <div className="child">
              <img className="child-img" src={img3} alt="image" />
            </div>
            <div className="child">
              <img className="child-img" src={img1} alt="image" />
            </div>
            <div className="child">
              <img className="child-img" src={img2} alt="image" />
            </div>
          </ScrollContainer>
        </div>
        <div>
          <button className="icon" onClick={scrollR}>
            &#x21d2;
          </button>
        </div>
      </AppStyle>
    </BrowserRouter>
  );
}

export default App;
