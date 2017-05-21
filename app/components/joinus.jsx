import React from 'react';
import { Link } from 'react-router';
import HeaderMenu from './subComponents/headerMenu.jsx';
import ImageHeader from './subComponents/imageHeader.jsx';
import InfoCard from './subComponents/infoCard.jsx';
import NavFrame from './NavFrame';
import WhiteIcon from './subComponents/whiteIcon.jsx';
import Footer from './subComponents/Footer.jsx';
import './joinus.less';


const briefData = {
  title: "加入我们",
  currentIndex: 0,
  headerImage: "../images/slide-4.jpg",
  introTextArr: [
    "我们是中国战略劳动关系管理的开拓者和实践家，在研究合法用工、灵活用工、和谐用工的解决方案上，始终保持领先，以创新和落地性帮助全球顶级客户应对在中国的挑战。",
    "赉擘斯从事的工作以及服务的客户决定我们的工作非常具有挑战性，而我们提供的职业成长和专业技术的学习机会实用而独特。赉擘斯是中国第一家专门从事劳动法律事务咨询的机构和整体解决方案的提供者，自1995年起为包括150余家500强企业在内的众多在华企业、央企、国企、上市民企提供服务；并以我们的专业性陪伴新一代的独角兽公司们快速成长。"
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
      currentIndex,
    } = briefData;
    return (
      <div className="joinus">
        <NavFrame
          currentIndex={5}
        >
          <ImageHeader
            imageUrl={headerImage}
            withTitleNavOnIt = {true}
          />
          <HeaderMenu
            title = {title}
            fontColor = {'white'}
          />
          <WhiteIcon />
          <div className="row-div">
            <h5 className="row-padding">
              为何选择赉擘斯
            </h5>
            <p>我们是中国战略劳动关系管理的开拓者和实践家，在研究合法用工、灵活用工、和谐用工的解决方案上，始终保持领先，以创新和落地性帮助全球顶级客户应对在中国的挑战。</p>
            <p>赉擘斯从事的工作以及服务的客户决定我们的工作非常具有挑战性，而我们提供的职业成长和专业技术的学习机会实用而独特。赉擘斯是中国第一家专门从事劳动法律事务咨询的机构和整体解决方案的提供者，自1995年起为包括150余家500强企业在内的众多在华企业、央企、国企、上市民企提供服务；并以我们的专业性陪伴新一代的独角兽公司们快速成长。</p>
            <div className="row row-padding">
              <div className="col-sm-4 why-div">
                <h6 className="text-center">我们的专家团队</h6>
                <img className="image-card" src="../images/joinus/1.jpg" />
                <p>赉擘斯的顾问均是各领域的佼佼者。劳动关系管理专家、人力资源管理专家，劳动法律专业律师三类型专家形成合力，保障我们的产品和咨询方案具备全局观和立体思维，并能有效执行；我们的专家们普遍具有20年以上从业经验，曾担任过企业高级人力资源管理者或政府官员</p>
              </div>
              <div className="col-sm-4 why-div">
                <h6 className="text-center">我们的项目小组</h6>
                <img className="image-card" src="../images/joinus/2.jpg" />
                <p>为我们的客户解决实际问题、陪伴客户共同成长是每个赉擘斯顾问的使命与价值。你将在资深顾问带领的小组中共同帮助企业高级管理者应对劳动关系的挑战，从项目中学习赉擘斯的方法、路径和观点，应用法律知识、人力资源科学管理理念和沟通技巧，达成客户目标</p>
              </div>
              <div className="col-sm-4 why-div">
                <h6 className="text-center">我们的职业发展</h6>
                <img className="image-card" src="../images/joinus/3.jpg" />
                <p>对法律的深度理解和灵活应用，对管理的科学认识和操作实践，对沟通的内容准备和方式掌控，决定了我们的每名咨询在获得经验和能力充分提升的同时，可以有机会专注于解决客户的不同需求、专注自己擅长的发展轨道。</p>
              </div>
            </div>
          </div>
          <div className="row-div">
            <h5 className="row-padding">
              咨询顾问的故事——中国式在云端
            </h5>
            <div className="row row-padding">
              <div className="col-sm-6">
                <img className="image-card" src="../images/joinus/xg.jpg" />
              </div>
              <div className="col-sm-6">
                <p className="portrait-explain">
                  “很多HR、员工在第一次接触赉擘斯的顾问时都会对我们的故事非常好奇，所以我想能够与更多朋友分享我们是如何帮助企业、员工和政府达到共赢，并维护彼此的平衡的。” 
                </p>
                <a href="http://tech.hexun.com/2016-09-26/186195766.html" target="_black">相关链接</a>
              </div>
            </div>
          </div>
          <div className="row-div">
            <h5 className="row-padding">
              赉擘斯青睐的伙伴
            </h5>
            <div className="row row-padding">
              <div className="col-sm-6">
                <h6>挑战自己的意愿</h6>
                <p>在寻求最佳解决方案的道路上，我们有着同样的热忱和追求卓越的精神。在企业、员工、政府之间，通过我们对法律的理解、落地的经验和沟通的艺术，不断挑战自己去达到平衡，以实现多方的共赢。视挑战为乐趣、以解决问题为使命，为此不断挑战自己、迎接变化，是每个赉擘斯顾问的基本素质。</p>
              </div>
              <div className="col-sm-6">
                <h6>严谨的工作态度</h6>
                <p>在赉擘斯的专业领域，客户几乎完全依赖我们的判断和建议，因此对法律的精确熟识和对情况的准确把握是我们伙伴的基本素质。对客户的需求第一时间响应、对企业战略决策和其中的技术细节了如指掌、并诚实的为客户提供全面的建议，是我们能够与很多客户相伴20年，我们的顾问与客户的人力资源管理者共同成长的原因。</p>
              </div>
              <div className="col-sm-6">
                <h6>沟通的技巧</h6>
                <p>与客户快速建立信任，成为客户可以依赖的伙伴；协调客户内部的不同管理者得到共识，并帮助客户与政府和员工达成多赢的局面，需要我们的咨询顾问可以应对挑战并快速做出反馈。我们期待咨询顾问可以具有开放的沟通心态、成熟的沟通技巧和同理心，并享受在沟通中提升自己影响力的机会。</p>
              </div>
              <div className="col-sm-6">
                <h6>领导能力</h6>
                <p>我们以项目组的形式为客户提供咨询或操作实施，这包括与客户的人力资源管理团队或业务管理团队对接和合作，也也可能包括与政府各部门或工作组、地方工会等达成共识。我们希望工作小组可以以最高效率运行，每个项目成员可以发挥自己的优势，并享受在自己的工作中。因此我们期待我们的咨询顾问可以领导内外部力量，注入更多的活力和润滑剂，使整个项目高效平顺的完成。</p>
              </div>
            </div>
          </div>
          <div className="row-div">
            <p>有关赉擘斯职业机会的信息，请与我们联络，发邮件至: hr@laibei.com.</p>
          </div>
          <Footer currentUrl='joinus'/>
        </NavFrame>
      </div>
    );
  }
}
