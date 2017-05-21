import React from 'react';
import HeaderMenu from './subComponents/headerMenu.jsx';
import ImageHeader from './subComponents/imageHeader.jsx';
import InfoCard from './subComponents/infoCard.jsx';
import TextUnderHeaderImageRow from './subComponents/textUnderHeaderImageRow.jsx';
import NavFrame from './NavFrame';
import WhiteIcon from './subComponents/whiteIcon.jsx';
import './brief.less';


const briefData = {
  title: "认识赉擘斯",
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
  currentIndex: 0,
  headerImage: "../images/intro/strategy/header-image.jpeg",
  introTextArr: [
    "赉擘斯成立于1995年，是中国第一家专门从事劳动法律事务咨询的机构。赉擘斯专注于企业战略劳动关系管理领域，始终以全局观与立体化思维，帮助企业在动态发展与管理中建立合法、灵活、和谐的员工关系，在协助企业达成战略目标的同时，提升员工满意度（敬业度）和雇主品牌形象。",
    "赉擘斯深谙企业所处的中国劳动法律环境和社会人文环境，从雇主、员工、社会、政府、媒体等多个视角，紧贴企业战略管理目标，凭借领先的方法论、卓越的项目管控能力，以及实践经验丰富的团队成员，为企业提供战略劳动关系管理专业化咨询服务和落地沟通解决方案，建立合法、公平、高效、健康的用工环境。",
    "赉擘斯已为数千家全球在华企业提供：规模性劳动关系调整、疑难个案调整、企业并购整合期制度与人员融合落地沟通、绩效考核结果灵活运用、三维度立体合法制度改造、企业高中层管理团队制度应用与员工关系管理领导力提升、特殊工时审批与管理、企业社会责任创新等多种定制化战略劳动关系管理咨询及落地沟通解决方案。",
    "2009年，赉擘斯经人社部授牌成为全国第一批“劳动争议预防与调解中心”，经过二十多年追求卓越的理念与三类型专家团队的协同努力，先后多年获得年度优秀劳动法顾问机构，及优秀人力资源供应商等荣誉。"
  ]
}
export default class Brief extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      title,
      headerImage,
      subtitles,
      currentIndex,
      introTextArr,
    } = briefData;
    return (
      <div className="brief">
        <NavFrame
          currentIndex={0}
        >
          <ImageHeader
            backgroundColor={'rgb(34, 36, 35)'}
            withTitleNavOnIt = {true}
          />
          <HeaderMenu
            title = {title}
            subtitles = {subtitles}
            currentIndex = {currentIndex}
            fontColor = {'white'}
          />
          <WhiteIcon />
          {introTextArr && introTextArr.length > 0 &&
            <TextUnderHeaderImageRow
              introTextArr = {introTextArr}
            />
          }
        </NavFrame>
      </div>
    );
  }
}
