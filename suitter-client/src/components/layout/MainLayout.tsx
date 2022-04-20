import { SideNav } from './SideNav';
import { Feed } from '../../features/posts/components/Feed';

export const Main = () => {
  return (
    <>
      <div className="2xl:flex 2xl:justify-center ">
        <SideNav />
        <div className="2xl:w-4/12">
          <title className="2xl:block hidden">ホーム</title>
          <Feed />
        </div>
      </div>
    </>
  );
};
