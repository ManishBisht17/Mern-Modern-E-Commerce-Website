import AdminDashBoard from "../AdminDashBoard";
import { BellIcon, Search, TrendingDown, TrendingUp, User } from "lucide-react";
import { BiMaleFemale } from "react-icons/bi";
import DounutChart from "../../../utils/Admin/chart/DonutChart";

const DashBoard = () => {
  return (
    <div className="admin_dashboard grid grid-cols-12 gap-4 h-screen bg-zinc-100">
      <AdminDashBoard />

      <main className="overflow-y-auto w-full col-span-10">
        <nav className="h-12 border-b flex justify-between px-4">
          <div className="flex items-center gap-4">
            <Search />
            <input
              type="text"
              placeholder="search for data"
              className="outline-none w-3xl "
            />
          </div>
          <div className="flex items-center gap-4">
            <BellIcon />
            <User />
          </div>
        </nav>
        <section className="widgetContainer mt-12 flex justify-between px-4">
          <WidgitContainer
            heading="Revenue"
            value={4000000}
            percent={100}
            amount={true}
            color={"blue"}
          />
          <WidgitContainer
            heading="User"
            value={890000}
            percent={50}
            amount={false}
            color={"green"}
          />
          <WidgitContainer
            heading="Transaction"
            value={20000}
            percent={10}
            amount={false}
            color={"gold"}
          />
          <WidgitContainer
            heading="Products"
            value={100}
            percent={13}
            amount={false}
            color={"purple"}
          />
        </section>
        <section className="transationContainer ">
            <div className="genderChart relative flex flex-col  items-center mt-12 px-12 h-96 w-xl p-10 shadow-xl">
                <h1 className="text-center font-bold text-xl">Gender-chart</h1>
                <DounutChart labels={["male","femail"]} data={[20,60]} backgroundColor={["skyblue","pink"]} cutout={120} />
                <p className="absolute top-[50%] left-[50%]"><BiMaleFemale /></p>
            </div>

        </section>
      </main>
    </div>
  );
};

interface widgitType {
  heading: string;
  value: number;
  percent: number;
  amount: boolean;
  color: string;
}
const WidgitContainer = ({
  value,
  percent,
  heading,
  amount,
  color,
}: widgitType) => {
  return (
    <div className="h-40 w-60 bg-white shadow-md rounded flex justify-between px-2 py-2">
      <div>
        <p>{heading}</p>
        <h4 className="text-lg">{amount ? `$ ${value}` : `${value}`}</h4>
        {percent > 0 ? (
          <span className="text-green-700">
            <TrendingUp /> + {percent}%
          </span>
        ) : (
          <span className="text-red-700">
            <TrendingDown /> {percent}%
          </span>
        )}
      </div>
      <div
        style={{
          background: `conic-gradient(
        ${color} ${(Math.abs(percent) / 100) * 360}deg,
        rgb(255, 255, 255) 0
      )`,
        }}
        className="h-12 w-12 rounded-full flex justify-center items-center "
      >
        <span className="h-10 w-10 flex justify-center items-center rounded-full bg-white">
          {percent}%
        </span>
      </div>
    </div>
  );
};

export default DashBoard;
