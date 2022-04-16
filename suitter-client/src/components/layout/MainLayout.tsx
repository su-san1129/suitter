import { SideNav } from './SideNav';
import { Feed } from '../../features/posts/components/PostList';

export const Main = () => {
  return (
    <>
      <div className="2xl:flex 2xl:justify-center ">
        <SideNav />
        <div className="2xl:w-5/12 m-2">
          ホーム
          <Feed />
        </div>
      </div>
    </>
  );
};
