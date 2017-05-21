import React from 'react';
import HeaderMenu from './subComponents/headerMenu.jsx';
import ImageHeader from './subComponents/imageHeader.jsx';
import InfoCard from './subComponents/infoCard.jsx';
import NavFrame from './NavFrame';
import TextUnderHeaderImageRow from './subComponents/textUnderHeaderImageRow.jsx';
import './strategy.less';

const strategyData = {
  title: "认识赉擘斯",
  headerTitle: "战略劳动关系管理理念",
  subtitles: [
    {
      name: "简介",
      path: "/intro/brief"
    },
    {
      name: "成长历程",
      path: "/intro/timeline"
    },
    {
      name: "理念",
      path: "/intro/strategy"
    },
    // {
    //   name: "成员",
    //   path: ""
    // }
  ],
  currentIndex: 2,
  headerImage: "../images/intro/strategy/header-image.jpeg",
  introTextArr: [
    "劳动关系是劳资双方在劳动过程中构成的一种社会关系。劳动关系管理不是单一的员工关系管理，劳动关系管理的视角也远远超过了合同订立/ 变更/ 解除/ 终止相关的法律问题。劳动关系管理领域涵盖法律、社会、经济、传播、管理等诸多领域。",
    "基于企业战略目标实现所采取的一系列具有全局观、立体思维和战略意义的行动，被我们定义为战略劳动关系管理。战略劳动关系管理的特点在于企业劳动关系管理的行为以支撑战略和业务目标为前提，同时需要对企业所处的社会环境、法律环境、员工特点有全面而深刻的了解，并能够通过沟通解决方案将劳动关系管理策略贯彻执行、落地实施。",
    "对企业而言，以全局观和立体思维处理劳动关系问题，才能避免陷入劳动法律政策解读上的不一致与无规可循的困境。构建合法、灵活、和谐的劳动关系是一个系统性的、持续不断的、需要创新思维的，但对企业乃至社会具有重要意义的战略工程。"
  ],
  infoDataArr: [
    {
      title: "观点",
      content: "通过大量实践积累，我们不断总结和提出创新的观点。这些大胆的、独一无二的观点，让我们在研究企业战略劳动关系管理解决方案的道路上成就卓越，并始终保持领先。",
      imageUrl: "../images/intro/strategy/infoCards/communication.jpg"
    },
    {
      title: "方法论",
      content: "二十年来，赉擘斯为近千家企业战略目标的实现提供人力资源解决方案，涉及行业从传统制造业到高科技互联网行业，与行业内的龙头企业建立了长久的合作关系。",
      imageUrl: "../images/intro/strategy/infoCards/method.jpg"
    },
    {
      title: "我们的团队",
      content: "我们率先提出通过三类型专家团队帮助企业的战略人力资源管理。我们的顾问均是各个领域的佼佼者。劳动关系管理专家，人力资源管理专家，劳动法律专业律师三类型专家形成合力，保障我们的产品和咨询方案具备全局观和立体思维，并能有效执行，充分应对战略劳动关系管理领域的广泛性和综合性，避免片面和偏颇。",
      imageUrl: "../images/intro/strategy/infoCards/team.jpg"
    },
    {
      title: "经验",
      content: "二十年来，赉擘斯为近千家企业战略目标的实现提供人力资源解决方案，涉及行业从传统制造业到高科技互联网行业，与行业内的龙头企业建立了长久的合作关系。",
      imageUrl: "../images/intro/strategy/infoCards/experience.jpg"
    },
  ]
}
export default class Strategy extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      title,
      headerImage,
      headerTitle,
      subtitles,
      hasHeaderLogo,
      currentIndex,
      introTextArr,
      infoDataArr,
    } = strategyData;
    return (
      <div className="strategy">
        <NavFrame
          currentIndex={0}
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
          {introTextArr && introTextArr.length > 0 &&
            <TextUnderHeaderImageRow
              introTextArr = {introTextArr}
            />
          }
          {infoDataArr && infoDataArr.length > 0 &&
            <div className="row">
              {infoDataArr.map((infoData, i) => {
                if (i % 2 == 0) {
                  return (
                    <InfoCard
                      key={`left-${i}`}
                      title ={ infoData.title}
                      content = {infoData.content}
                      imageUrl = {infoData.imageUrl}
                      position= "left"
                    />
                  )
                } else {
                  return (
                    <InfoCard
                      key={`right-${i}`}
                      title ={ infoData.title}
                      content = {infoData.content}
                      imageUrl = {infoData.imageUrl}
                      position= "right"
                    />
                  )
                }
              })}
            </div>
          }
        </NavFrame>
      </div>
    );
  }
}
