import React, { useContext } from "react";
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css';
import StyleContext from "../../contexts/StyleContext";
import './Footer.css'

export default function Footers() {

    const { isDark } = useContext(StyleContext);


    return (
        <Footer
            style={{ marginTop: '100px' }}
            theme={isDark ? "dark" : "light"}
            columnLayout="space-around"
            backgroundColor="#171c28"
            columns={[
                {
                    title: 'General',
                    openExternal: true,
                    items: [
                        { title: 'About' }, { title: 'FAQ' }, { title: 'Support' }, { title: 'Build' }, { title: 'Grants and Bounties' }, { title: 'Careers' },
                    ]
                },
                {
                    title: 'Technology',
                    openExternal: true,
                    items: [
                        { title: 'Technology' }, { title: 'Roadmap' }, { title: 'Token' }, { title: 'Telemetry' }, { title: 'Technology' }, { title: 'Substrate' }, { title: 'Lightpaper' }, { title: 'Whitepaper' },
                    ]
                },
                {
                    title: 'Community',
                    openExternal: true,
                    items: [
                        { title: 'Community' }, { title: 'Documentation' }, { title: 'Brand Assets' }, { title: 'Blog' },
                    ]
                },
                {
                    title: 'Social Links',
                    openExternal: true,
                    items: [
                        { 
                            title: 'Facebook',
                            icon: (
                                <img style={{width: '30px'}}src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" />
                              ), 
                        }, { title: 'Twitter' }, { title: 'Instagram' }, { title: 'Gmanil' },
                    ]
                }
            ]}
            bottom="Made with ❤️ by AZILCHAIN"
        />
    );
}
