import React from 'react';
import HeaderMenu from './subComponents/headerMenu.jsx';
import ImageHeader from './subComponents/imageHeader.jsx';
import NavFrame from './NavFrame';
import InfoCardRow from './subComponents/infoCardRow.jsx';
import TextUnderHeaderImageRow from './subComponents/textUnderHeaderImageRow.jsx';
import './strategy.less';

const preventData = {
  title: "解决方案",
  headerTitle: "预防解决方案",
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
  currentIndex: 1,
  headerImage: "../images/solution/prevent/header-image.jpeg",
  infoDataArr: [
    {
      title: "三维度规章制度提升与再造",
      content: "以合法、灵活、和谐为劳动关系管理目标，从企业管理制度、管理流程、管理习惯三个维度出发，通过访谈诊断、修改共识、沟通培训、民主送达程序设计、落地生效培训五个阶段，帮助企业制定一套既满足管理需求和业务需求，又获得员工理解与支持的、合规、灵活、可操作性强的规章制度体系。",
      imageUrl: "../images/solution/prevent/infoCards/1.jpg"
    },
    {
      title: "灵活用工机制搭建",
      content: "在合法的前提下，通过以下一个或多个机制的搭建，帮助企业实现成本节约、风险降低、组织效率提升，实现“员工能进能出、工资能高能低、岗位能上能下”的“三能够”灵活管理目标。绩效考核结果的灵活运用.多元化用工形式的搭建.劳动合同双管制.特殊工时制度运用与管理等",
      imageUrl: "../images/solution/prevent/infoCards/2.jpg"
    },
    {
      title: "薪酬绩效体系设计及对接融合解决方案",
      content: "帮助企业设计科学的人力资源体系（岗位体系、薪酬体系、绩效考核体系），同时将西方科学的人力资源管理体系与中国的劳动法律和人文环境对接与融合,完善制度的合法性、灵活性，并通过沟通解决方案保障新制度的平顺落地及员工满意度的提升。",
      imageUrl: "../images/solution/prevent/infoCards/3.jpg",
    },
    {
      title: "兼并收购人力资源尽职调查",
      content: "根据收购方对被收购方业务整合的目标，针对被收购方的合法合规情况、人力资源管理体系历史沿革、员工对整合后关注点等问题进行调查，为收购方提供整合后双方人力资源管理体系对接情况分析与人力资源历史欠账预算报告，帮助收购方对收购成本与管理挑战做出更准确的判断。",
      imageUrl: "../images/solution/prevent/infoCards/4.jpg"
    },
    {
      title: "特殊工时管理与审批",
      content: "针对企业申报的岗位特性，进行岗位梳理，根据所需材料编写申报材料信息并与政府有关部门进行沟通。根据申报结果，协助企业完成送达程序，同时帮助企业就特殊工时岗位配套管理制度进行梳理与完善，系统性解决企业特殊工时审批与管理问题。",
      imageUrl: "../images/solution/prevent/infoCards/5.jpg"
    },
    {
      title: "集体协商谈判",
      content: "基于企业战略目标设计集体合同，并代表公司与工会代表的员工进行沟通，就集体合同关键条款与工会达成共识，完成政府备案流程，配合企业目标实现，员工满意度提升。",
      imageUrl: "../images/solution/prevent/infoCards/6.jpg"
    },
    {
      title: "定制化年度咨询",
      content: "针对公司在日常劳动关系管理中遇到的劳动法律问题、劳动关系管理问题，提供法律政策咨询、法律法规解读、法律风险分析、预防性解决建议等定制化咨询服务。",
      imageUrl: "../images/solution/prevent/infoCards/7.jpg"
    },
    {
      title: "其他预防解决方案",
      content: "内训与公开课,工会组建等",
      imageUrl: "../images/solution/prevent/infoCards/8.jpg"
    },
  ]
}
export default class Prevent extends React.Component {
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
    } = preventData;
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
                    key = {i}
                    title ={infoData.title}
                    content = {infoData.content}
                    imageUrl = {infoData.imageUrl}
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
