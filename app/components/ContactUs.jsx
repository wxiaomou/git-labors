import React from 'react';
import { Link } from 'react-router';
import HeaderMenu from './subComponents/headerMenu.jsx';
import ImageHeader from './subComponents/imageHeader.jsx';
import InfoCard from './subComponents/infoCard.jsx';
import NavFrame from './NavFrame';
import WhiteIcon from './subComponents/whiteIcon.jsx';
import Footer from './subComponents/Footer.jsx';
import './contactus.less';
const briefData = {
  title: "联络我们",
  headerImage: "../images/contactus/header.jpg",
  introTextArr: [
    "我们是中国战略劳动关系管理的开拓者和实践家，在研究合法用工、灵活用工、和谐用工的解决方案上，始终保持领先，以创新和落地性帮助全球顶级客户应对在中国的挑战。",
    "赉擘斯从事的工作以及服务的客户决定我们的工作非常具有挑战性，而我们提供的职业成长和专业技术的学习机会实用而独特。赉擘斯是中国第一家专门从事劳动法律事务咨询的机构和整体解决方案的提供者，自1995年起为包括150余家500强企业在内的众多在华企业、央企、国企、上市民企提供服务；并以我们的专业性陪伴新一代的独角兽公司们快速成长。"
  ]
}
export default class ContactUs extends React.Component {

  render() {
    const {
      title,
      headerImage,
      currentIndex,
    } = briefData;
    return (
      <div className="contactus">
        <NavFrame
          currentIndex={5}
        >
          <ImageHeader
            imageUrl={headerImage}
            withTitleNavOnIt = {true}
          />
          <HeaderMenu
            title = {title}
          />
          <WhiteIcon />
          <div className="row-div">
            <h4 className="row-padding">
              感谢您与我们联系！
            </h4>
          </div>
          <div className="row-div">
            <div className="row row-padding">
              <div className="col-sm-6 why-div">
                <h6>如您希望垂询我们的业务情况，请您联系</h6>
                <h6>wangruifeng@laibei.com</h6>
              </div>
              <div className="col-sm-6 why-div">
                <h6>如您希望寻求合作，请您联系</h6>
                <h6>liutong@laibei.com</h6>
              </div>
            </div>
          </div>
          <div className="row-div">
            <div className="row row-padding">
              <div className="col-sm-12 why-div">
                <h6>公司地址：北京市海淀区北太平庄路18号城建大厦A座630室</h6>
                <h6>联系电话：010-82255618</h6>
              </div>
            </div>
          </div>
          <Footer currentUrl='contactus'/>
        </NavFrame>
      </div>
    );
  }
}
