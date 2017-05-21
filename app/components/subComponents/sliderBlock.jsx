import React from 'react';
import { Link } from 'react-router';
import './sliderBlock.less';


export default class SliderBlock extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const {
      titlePosition,
      title,
      content,
      index,
      headerArr,
      href,
      blockSize,
      titleOnly,
    } = this.props;
    const isTitleInside = titlePosition == "inside" ? true : false;
    const getHeaderArrDivs = (
      <div className="blockHeaders">
        {headerArr && headerArr.map((header, i) => {
          return (
            <div className="blockHeader" key={`header-${i}`}>{header}</div>
          )
        })}
      </div>
    );
    const blockColSize = blockSize == 6 ? "col-sm-6" : "col-sm-4"
    return (
      <div value={`block-${index}`} className={`sliderBlock block col-8 ${blockColSize}`}>
        <Link to={href}>
          {isTitleInside && !titleOnly &&
            <div className="blockInsideTitle">{title}</div>
          }
          {!isTitleInside && !titleOnly &&
            <div className="blockOutsideTitle">{title}</div>
          }
          {titleOnly &&
            <div className="blockInsideTitleAndTitleOnly">
              {title}
            </div>
          }
          {headerArr && headerArr.length > 0 &&
            getHeaderArrDivs
          }

          {!!content &&
            <div className="blockContent">{content}</div>
          }
        </Link>
      </div>
    );
  }
}
