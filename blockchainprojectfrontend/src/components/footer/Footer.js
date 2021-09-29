import React, { useContext } from "react";
import Footer from "rc-footer";
import "rc-footer/assets/index.css";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

export default function Footers() {
  return (
    <Footer
      style={{ marginTop: "100px", borderTop: "1px solid #000", opacity: 0.9 }}
      columnLayout="space-around"
      backgroundColor="#171c28"
      columns={[
        {
          title: "General",
          openExternal: true,
          items: [
            { title: "About" },
            { title: "FAQ" },
            { title: "Support" },
            { title: "Build" },
            { title: "Grants and Bounties" },
            { title: "Careers" },
          ],
        },
        {
          title: "Technology",
          openExternal: true,
          items: [
            { title: "Technology" },
            { title: "Roadmap" },
            { title: "Token" },
            { title: "Telemetry" },
            { title: "Technology" },
            { title: "Substrate" },
            { title: "Lightpaper" },
            { title: "Whitepaper" },
          ],
        },
        {
          title: "Community",
          openExternal: true,
          items: [
            { title: "Community" },
            { title: "Documentation" },
            { title: "Brand Assets" },
            { title: "Blog" },
          ],
        },
        {
          title: "Social Links",
          openExternal: true,
          items: [
            {
              title: "Facebook",
              icon: <FacebookIcon />,
            },
            {
              title: "Twitter",
              icon: <TwitterIcon />,
            },
            {
              title: "Instagram",
              icon: <InstagramIcon />,
            },
            {
              title: "Gmanil",
              icon: <EmailIcon />,
            },
          ],
        },
      ]}
      bottom="Made with ❤️ by AZILCHAIN"
    />
  );
}
