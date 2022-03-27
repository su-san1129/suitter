import { SideNav } from './SideNav';
import { Feed } from '../../features/posts/components/PostList';

export const Main = () => {
  return (
    <div className="Main">
      <div className="flex justify-center ">
        <SideNav />
        <div className="w-3/5">
          ホーム
          <Feed />
        </div>
      </div>
    </div>
  );
};
