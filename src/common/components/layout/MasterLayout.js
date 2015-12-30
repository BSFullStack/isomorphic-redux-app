/**
 * 布局类型：
 *   header
 *   main right
 *   footer
 */
import React , { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
class MasterLayout extends Component{
    render(){
        const {
            user ,
            HeaderClass ,
            CenterClass ,
            RightClass
        } = this.props;

        let headerComponent = HeaderClass ? <HeaderClass user={user} /> : <Header user={user}/> ;

        return (
            <div className="layout masterlayout">
                { HeaderClass && <HeaderClass user={user} />}
                <div className="wp cl">
                    { CenterClass &&  <CenterClass user={user} /> }
                    { RightClass  &&  <RightClass user={user} /> }
                </div>
                <Footer />
            </div>

        );
    }
}
export default MasterLayout;
