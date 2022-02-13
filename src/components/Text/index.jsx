
import { BiLoaderCircle } from 'react-icons/bi'


const Text = () => {
  return (
	<div>
		<div className="maintext font-black ">
			<div>
				<h3>Coming Soon</h3>
			</div>
		<div className="pr-8"></div>
		<div className="flex flex-col spinner-border animate-spin spinner">
			<BiLoaderCircle size="96"/>
		</div>
		</div>
	</div>
  );
};

export default Text;