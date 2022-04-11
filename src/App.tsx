import './App.scss';

function App() {

  const pointCount = 7;
  const circleRadius = 160;
  const startAnimDelta = 5;
  const circumference = Math.PI * circleRadius * 2;

  let selectedItemIndex = -1;
  let circlePath = document.getElementById('mask-circle');

  /**
   * @description On Mouse Leave event handler for points
   */
  const onMouseLeave = () => {
    let index = (selectedItemIndex !== -1) ? selectedItemIndex : 0;
    calculateOffset(index);
  };

  /**
   * @description On Click event handler for points
   * @param {Number} index - Index of list item
   */
  const onClick = (index: number) => {
    console.log('number', index)
    //If already selected, deselect
    selectedItemIndex = (selectedItemIndex === index) ? -1 : index;
    calculateOffset(index);
    
    //Find active item, deselect
    let activeListItem = document.querySelectorAll('.navigation-circle-list-item.active');
    if (activeListItem.length > 0) activeListItem[0].classList.remove('active');
    
    //Find new item by index, select
    let listItem = document.querySelectorAll('.navigation-circle-list-item:nth-of-type(' + selectedItemIndex + ')');
    if (listItem.length > 0) listItem[0].classList.add('active');
  };

  /**
   * @description - Calculate offset for circle path by index of list item
   * @param {Number} index - Index of list item
   */
  const calculateOffset = (index=0) => {
     console.log('calculateOFsset')
    let offset = 0;

    if (index !== 0) offset = (circumference / pointCount) * (pointCount - index);
    const maskCircle = document.getElementById('mask-circle');
    if (maskCircle) maskCircle.style.strokeDashoffset = `${offset}px`;
  };

  // INTRO

  let buffer = 500;
  let delay = 1000 * (1 + (pointCount / startAnimDelta) - (1 / startAnimDelta)) + buffer;

  setTimeout(() => onClick(1), delay);

  return (
    <div className="App">
      <div className='cover-container'>
        <div className='nav'>
          <h3>bushido</h3><h3 className='dot'>.</h3><h3>guide</h3>
        </div>
        <div className='content'>
          <div className="main">
            <div className="navigation-circle">
              <svg className="navigation-circle-svg navigation-circle-svg--opaque" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 320 320">
                <circle cx="160" cy="160" r="158" fill="none" strokeWidth="1" stroke="#edc898" strokeLinecap="round" strokeMiterlimit="10"></circle>
              </svg>
              <svg className="navigation-circle-svg navigation-circle-svg--mask" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 320 320">
                <circle id="mask-circle" cx="160" cy="160" r="158" fill="none" strokeWidth="2" stroke="#e6942c" strokeLinecap="round" strokeMiterlimit="10"></circle>
              </svg>
              <div className="navigation-circle__inner">
                <ul className="navigation-circle__list">
                  <li className="navigation-circle-list-item" onClick={() => onClick(1)} onMouseEnter={() => calculateOffset(1)} onMouseLeave={() => onMouseLeave()}>
                    <a className="navigation-circle-list-item__point" id="rule-1">
                      <div className="navigation-circle-list-item__meta">
                        <h3 className="navigation-circle-list-item__title">Integrity - GI</h3>
                        <h4 className="navigation-circle-list-item__subtitle">Warriors make a full commitment to their decisions</h4>
                      </div>
                    </a>
                  </li>
                  <li className="navigation-circle-list-item" onClick={() => onClick(2)} onMouseEnter={() => calculateOffset(2)} onMouseLeave={() => onMouseLeave()}>
                    <a className="navigation-circle-list-item__point" id="rule-2">
                      <div className="navigation-circle-list-item__meta">
                        <h3 className="navigation-circle-list-item__title">Respect - REI</h3>
                        <h4 className="navigation-circle-list-item__subtitle">The true strength of a warrior becomes apparent during difficult times</h4>
                      </div>
                    </a>
                  </li>
                  <li className="navigation-circle-list-item" onClick={() => onClick(3)} onMouseEnter={() => calculateOffset(3)} onMouseLeave={() => onMouseLeave()}>
                    <a className="navigation-circle-list-item__point" id="rule-3">
                      <div className="navigation-circle-list-item__meta">
                        <h3 className="navigation-circle-list-item__title">Courage - YU</h3>
                        <h4 className="navigation-circle-list-item__subtitle">Heroic courage is not blind. It is inteligent and strong</h4>
                      </div>
                    </a>
                  </li>
                  <li className="navigation-circle-list-item" onClick={() => onClick(4)} onMouseEnter={() => calculateOffset(4)} onMouseLeave={() => onMouseLeave()}>
                    <a className="navigation-circle-list-item__point" id="rule-4">
                      <div className="navigation-circle-list-item__meta">
                        <h3 className="navigation-circle-list-item__title">Honor - MEIYO</h3>
                        <h4 className="navigation-circle-list-item__subtitle">You cannot hide from yourself</h4>
                      </div>
                    </a>
                  </li>
                  <li className="navigation-circle-list-item" onClick={() => onClick(5)} onMouseEnter={() => calculateOffset(5)} onMouseLeave={() => onMouseLeave()}>
                    <a className="navigation-circle-list-item__point" id="rule-5">
                      <div className="navigation-circle-list-item__meta">
                          <h3 className="navigation-circle-list-item__title">Compassion - JIN</h3>
                          <h4 className="navigation-circle-list-item__subtitle">If an opportunity does not arise, they go out of their way to find one</h4>
                      </div>
                    </a>
                  </li>
                  <li className="navigation-circle-list-item" onClick={() => onClick(6)} onMouseEnter={() => calculateOffset(6)} onMouseLeave={() => onMouseLeave()}>
                    <a className="navigation-circle-list-item__point" id="rule-6">
                      <div className="navigation-circle-list-item__meta">
                        <h3 className="navigation-circle-list-item__title">Honesty - MAKOTO</h3>
                        <h4 className="navigation-circle-list-item__subtitle">Speaking and doing are the same action</h4>
                      </div>
                    </a>
                  </li>
                  <li className="navigation-circle-list-item" onClick={() => onClick(7)} onMouseEnter={() => calculateOffset(7)} onMouseLeave={() => onMouseLeave()}>
                    <a className="navigation-circle-list-item__point" id="rule-7">
                      <div className="navigation-circle-list-item__meta">
                        <h3 className="navigation-circle-list-item__title">Loyalty - CHUUGI</h3>
                        <h4 className="navigation-circle-list-item__subtitle">To everyone that they are responsible for, they remain fiercely true</h4>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;

/*
<button>名誉</button>
*/