import { FaDiscord, FaTwitter } from 'react-icons/fa';
import { SiRoblox } from 'react-icons/si';

const Buttons = () => {
  return (
    <div classname="bgcolor">
      <div className="flex justify-center flex-row">
          <div><LinkIcon icon={<FaTwitter size="48"/>} link="https://twitter.com/LoadingL0n3ly" style="twitter-icon links-icon"/></div>
          <div><LinkIcon icon={<FaDiscord size="48"/>} link="https://discord.com/users/353316954716504068/" style="discord-icon links-icon"/></div>
          <div className="roblox-icon links-icon"><a href="https://devforum.roblox.com/t/open-loadingl0n3ly-ui-designer-3d-modeler-graphic-designer/1207958"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/ROBLOX_Studio_icon.png"/></a></div>
          <div><LinkIcon icon={<SiRoblox size="48" />} link="https://www.roblox.com/users/1045324707/profile/" style="roblos-icon links-icon"/></div>
      </div>
    </div>
  );
};

const LinkIcon = ({ icon, link, style }) => (
  <div className={style}>
    <a href={link}>
    {icon}
    </a>
  </div>
);
export default Buttons;
