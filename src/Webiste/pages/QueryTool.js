import { QueryTool1 } from "../data/data"
import '../Components/CSS/pagesCSS/querytool.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const QueryTool = () => {
  return (
    <div className="QueryTool">
      <div className="Queryleftdata">
      {['Year', 'Nationality', 'Racecourse', 'Distance', 'Race Type', 'Race Kind', 'Ground', 'Date', 'Win'].map(
        (variant) => (
          <DropdownButton
            as={ButtonGroup}
            key={variant}
            id={`dropdown-variants-${variant}`}
            title={variant}
            className='queryheaderbtn'
          >
           
          </DropdownButton>
        ),
      )}
      </div>
      <div className="Queryrightdata"></div>
    </div>
  )
}
export default QueryTool