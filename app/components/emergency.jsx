import React from 'react';
import HeaderMenu from './subComponents/headerMenu.jsx';
import ImageHeader from './subComponents/imageHeader.jsx';
import NavFrame from './NavFrame';
import InfoCardRow from './subComponents/infoCardRow.jsx';
import TextUnderHeaderImageRow from './subComponents/textUnderHeaderImageRow.jsx';
import './strategy.less';

const emergencyData = {
  title: "解决方案",
  headerTitle: "急救解决方案",
  subtitles: [
    {
      name: "急救解决方案",
      path: "/solution/emergency"
    },
    {
      name: "预防解决方案",
      path: "/solution/prevent"
    }
  ],
  currentIndex: 0,
  headerImage: "../images/solution/emergency/header-image.jpeg",
  infoDataArr: [
    {
      title: "规模性劳动关系调整",
      content: "针对企业关闭、经营方式调整、收并购、组织结构调整、人员精简、人员成本压缩、搬迁、停产、用工形式转换等一系列战略变革所引发的10人以上规模性劳动关系解除/终止/变更等需求，提供方案设计、员工一对一沟通、政府沟通、内部团队沟通共识、战略咨询等全链条解决方案。",
      imageUrl: "../images/solution/emergency/infoCards/1.jpg"
    },
    {
      title: "疑难个案劳动关系调整",
      content: "就企业个别疑难劳动关系调整事宜(如员工存在合规问题、绩效不佳、岗位调整等特殊个案或疑难高管个案) 提供方案设计及员工一对一沟通解决方案，实现企业目标达成和员工平顺调整。",
      imageUrl: "../images/solution/emergency/infoCards/2.jpg"
    },
    {
      title: "劳动争议调解及诉讼代理",
      content: "二十年来，赉擘斯为近千家企业战略目标的实现提供人力资源解决方案，涉及行业从传统制造业到高科技互联网行业，与行业内的龙头企业建立了长久的合作关系。",
      imageUrl: "../images/solution/emergency/infoCards/3.jpg"
    },
    {
      title: "群体性事件及危机劳动关系处理",
      content: "我们率先提出通过三类型专家团队帮助企业的战略人力资源管理。我们的顾问均是各个领域的佼佼者。劳动关系管理专家，人力资源管理专家，劳动法律专业律师三类型专家形成合力，保障我们的产品和咨询方案具备全局观和立体思维，并能有效执行，充分应对战略劳动关系管理领域的广泛性和综合性，避免片面和偏颇。",
      imageUrl: "../images/solution/emergency/infoCards/4.jpg"
    },
  ]
}
export default class Emergency extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      title,
      headerImage,
      headerTitle,
      subtitles,
      currentIndex,
      infoDataArr,
    } = emergencyData;
    return (
      <div className="strategy">
        <NavFrame
          currentIndex={1}
        >
          <HeaderMenu
            hasHeaderLogo
            title = {title}
            subtitles = {subtitles}
            currentIndex= {currentIndex}
            fontColor = {'#333'}
          />
          <ImageHeader
            backgroundColor={'rgb(34, 36, 35)'}
          />
          {!!headerTitle &&
            <div className="titleOnImage">{headerTitle}</div>
          }
          {infoDataArr && infoDataArr.length > 0 &&
            <div className="row">
              {infoDataArr.map((infoData, i) => {
                return (
                  <InfoCardRow
                    key={i}
                    title ={ infoData.title}
                    content = {infoData.content}
                    imageUrl = {infoData.imageUrl}
                    imagePosition= "left"
                  />
                )
              })}
            </div>
          }
        </NavFrame>
      </div>
    );
  }
}
