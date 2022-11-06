import { bushidoVirtutes } from '~/constants/bushido';
import '../styles/others/description.virtutes.scss';

export default function Virtutes() {

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
  const virtuteSelected = (index: number) => {
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

  setTimeout(() => virtuteSelected(1), delay);

  const renderBushidoVirtutes = () => {
    return bushidoVirtutes.map(({ title, subtitle} , index) => {
      const virtuteNumber = index + 1;
      return (
        <li 
          className="navigation-circle-list-item" 
          key={`virtute_${index}`} 
          onClick={() => virtuteSelected(virtuteNumber)} 
          onMouseEnter={() => calculateOffset(virtuteNumber)} 
          onMouseLeave={() => onMouseLeave()}
        >
          <a className="navigation-circle-list-item__point" id={`rule-${index+1}`}>
            <div className="navigation-circle-list-item__meta">
              <h3 className="navigation-circle-list-item__title">{ title }</h3>
              <h4 className="navigation-circle-list-item__subtitle">{ subtitle }</h4>
            </div>
          </a>
        </li>
      )
    })
  }


  return (
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
              { renderBushidoVirtutes() }
            </ul>
          </div>
        </div>
      </div>
  )
}