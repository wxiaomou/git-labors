import React from 'react';
import Timeline from 'react-dual-timeline';
import { StyleRoot } from 'radium';
import HeaderMenu from './subComponents/headerMenu.jsx';
import ImageHeader from './subComponents/imageHeader.jsx';
import NavFrame from './NavFrame';
import WhiteIcon from './subComponents/whiteIcon.jsx';
import './timelineComponent.less';

import './timelessComponent.less';
const blackIconNoTitle="../images/logo-black.png";

const timelineData = {
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
    {
      name: "成员",
      path: ""
    }
  ],
  currentIndex: 1,
  historyStories: [
    {
      date: '1995',
      title: '成为劳动法律咨询行业最早践行者',
      content: ['赉擘斯的前身—北京市劳动局所属劳动咨询事务所正式成立。作为全国第一家专业从事劳动咨询服务的机构，为市属以上外商投资企业提供劳动法律咨询等相关服务。隶属于原北京市劳动局的我们，成为我国劳动关系管理领域和劳动法律领域最早的践行者。'],
      subtitle: null,
      listContent: [],
    },
    {
      date: '2003',
      title: '创建依据-程序-沟通经典模型，实现法律活用',
      content: ['北京市劳动咨询事务所脱钩转制，同样的团队，不同的体制与角色，让我们拥有了不同的视野和更多的能量，从劳动法律咨询延伸到基于企业管理需求，借助和活用中国法律，处理企业变革期引发的大规模员工调整或高管个案处理，帮助企业实现战略目标，并形成了独有的处理企业员工劳动关系调整的“依据-程序- 沟通”方法论，从此赉擘斯跨入了一个新的时代。'],
      subtitle: '典型案例',
      listContent: ['长江实业与和记黄埔下属关联公司 ---- 并购后人员调整',
        '可口可乐高管离职沟通',
        '飞利浦工厂由北京迁至东莞，396名员工遣散',
        '上海大电器1500 名员工裁员',
        '杭州百事中国杭州公司关闭人员调整',
        '英国BBC 收购贝塔斯曼后，12 个城市，600 名员工劳动关系调整等'
      ],
    },
    {
      date: '2005',
      title: '推出为企业量身定制的劳动关系管理培训课程',
      content: ['培训团队成立，开始进行课程研发和讲授，针对企业HR 从业者和业务线负责人提供劳动关系管理公开课培训及企业内训。充分运用各种实操案例, 系统梳理员工入职、在职、离职各管理环节中的法律风险，提高企业HR 从业者的劳动关系管理技能，促成业务线团队与人力资源团队的协同作用。85% 的赉擘斯客户同时也参与过赉擘斯的培训课程。'],
      subtitle: null,
      listContent: [],
    },
    {
      date: '2006',
      title: '成立首家劳动争议诉讼代理律师事务所',
      content: ['北京市莱博律师事务所成立，成为全国首批专门从事劳动争议诉讼代理的律师事务所。1995 年《劳动法》颁布以来，企业完全胜诉率不足15%，不胜任员工解除胜诉率几乎为零，赉擘斯甄选卓越的律师合作伙伴成立劳动争议代理律师事务所，专为雇主方提供非诉与诉讼代理服务。'],
      subtitle: null,
      listContent: [],
    },
    {
      date: '2007',
      title: '推出三维度立体合法解决方案',
      content:["《劳动合同法》颁布在即，企业所面临的法律环境和社会环境从此迈入新时代。在新法的颁布下，我们不停留于帮助企业解读新颁布的劳动合同法，更选择了六大行业二十二家企业，从制度、流程、管理习惯三个维度进行系统性梳理和完善人力资源规章制度，打破传统，打造三维度立体合法解决方案。"],
      subtitle: '三维度合法用工诊断和预防项目典型案例',
      listContent: [
        "微软 - 施耐德",
        "NEC - 住友中国",
        "玛氏中国 - 新浪",
        "佳能 - 软通动力",
        "苏黎世等"
      ],
    },
    {
      date: "2009",
      title: "成立全国首批劳动争议预防与调解中心",
      content: ["人力资源和社会保障部、海淀区人力资源和社会保障局授牌赉擘斯成立全国第一批劳动争议预防与调解中心。作为民间调解组织的我们，运用我们丰富的经验与方法，践行“大调解、广预防”的理念，帮助更多的企业和社会构建和谐劳动关系。"],
      subtitle: null,
      listContent: [],
    },
    {
      date: "2010",
      title: "推出人力资源管理体系与劳动法律对接与融合解决方案",
      content: ["西方科学的人力资源管理体系与中国的劳动法律和人文环境的不匹配是我们看到的诸多企业的通病，为此我们拓展出对接融合业务板块，并成立来贝管理咨询有限公司，运用人力资源管理体系与劳动关系管理体系对接融合的理念和方法，帮助客户完善薪酬与绩效考核等制度的科学性、合法性和灵活性，同时通过沟通解决方案及教练式引导，协助企业在新制度推行过程中获得业务部门和员工的理解与支持，实现和谐用工。"],
      subtitle: '对接与融合项目典型案例',
      listContent: [
        "银峰铸造搬厂及薪酬绩效管理体系的梳理和再造",
        "央视网年终绩效考核与企业依法终止解除的对接融合",
        "某外资快消公司薪酬改革项目沟通落地"
      ],
    },
    {
      date: "2012",
      title: "推出灵活用工解决方案",
      content: ["我们提出灵活用工的理念及系列解决方案，以解决企业在日常管理中遇到的来自法律与社会环境的掣肘。在以合法为出发点的前提下，我们从绩效考核结果的灵活运用、多元化用工形式的搭建、劳动合同双管制及特殊工时制度的管理等多个维度出发，帮助企业实现成本节约、组织效率提升、员工能进能出、工资能高能低、岗位能上能下的灵活管理目标。"],
      subtitle: null,
      listContent: [],
    },
    {
      date: "2015",
      title: "卓越领先提出战略劳动关系管理解决思路",
      content: ["经过多年的实践积累及与市场的紧密对焦，针对企业所面临的经济全球化和我国十三五规划、供给侧改革，创新改变成为企业发展新常态的趋势下，赉擘斯将现有劳动法律咨询解决方案提升到一个新的高度。基于企业战略目标实现所采取的一系列具有全局观、立体思维和战略意义的战略劳动关系管理解决方案，将成为企业应对未来市场竞争，提高组织效率，降低成本，建立和谐劳动关系的必经之路。"],
      subtitle: null,
      listContent: [],
    },
    {
      date: "至今",
      title: "卓越领先 ",
      content: [''],
      subtitle: null,
      listContent: [],
    }

  ]
}
export default class TimelineComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      title,
      headerTitle,
      subtitles,
      currentIndex,
      historyStories,
    } = timelineData;
    return (
      <div className="timelineComponent">
        <NavFrame currentIndex={0} >
          <ImageHeader
            backgroundColor = {'#222423'}
            withTitleNavOnIt = {true}
          />
          <HeaderMenu
            title = {title}
            subtitles = {subtitles}
            currentIndex = {currentIndex}
            fontColor = {'white'}
          />
          <WhiteIcon />
          {!!headerTitle &&
            <div className="titleOnImage">{headerTitle}</div>
          }
          <div className="timelineContainer">
            <StyleRoot>
              <Timeline
                lineColor="#262827"
                circleWidth={50}
                activeColor="#54C5B9"
                paddingToItem={50}
                evenItemOffset={-40}
                itemWidth={400}
              >
                {historyStories && historyStories.map((story, index) => {
                  return (
                    <div icon={story.date} key={index}>
                    <h5 className="title">{story.title}</h5>
                      {story.content && story.content.map((con, i) => {
                        return (
                          <div className="content" key={`content-${i}`}>{con}</div>
                        )
                      })}
                      {story.subtitle && 
                        <div className="subtitle">
                          <h6>{story.subtitle}</h6>
                        </div>
                      }
                      {story.listContent && story.listContent.map((list, i) => {
                        return (
                          <div className="listItem" key={`listItem-${i}`}>
                            <img className="titleIcon" src={blackIconNoTitle}></img>
                            <span className="listContent">{list}</span>
                          </div>
                        )
                      })}
                    </div>
                  )
                })}
              </Timeline>
            </StyleRoot>
          </div>
        </NavFrame>
      </div>
    );
  }
}
