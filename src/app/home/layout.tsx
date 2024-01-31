import { Metadata } from "next";
import ProfileBar from "./components/ProfileBar";
import TopBar from "./components/TopBar";

export const metadata: Metadata = {
  title: "Home",
  description: "Track your todos",
};

type Props = Readonly<{
  children: React.ReactNode;
}>;

const HomeLayout = ({ children }: Props) => {
  return (
    <div className="flex row full-width full-height">
      <ProfileBar />
      <div className="flex column full-width full-height">
        <TopBar />
        {children}
      </div>
    </div>
  );
};

export default HomeLayout;
