export default function Layout({ children }) {
  return (
    <>
      <div className="navbar bg-base-100">
        <span className="text-primary font-bold">Eigen</span>
      </div>
      <div className="grow px-[40px] py-[20px]">{children}</div>
    </>
  );
}
