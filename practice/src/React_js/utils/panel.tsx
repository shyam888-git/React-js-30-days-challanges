interface IPanelProps {
  title: string;
  children: any;
  onShow: () => void;
  isActive: boolean;
}

export const Panel = ({ title, children, onShow, isActive }: IPanelProps) => {
  return (
    <>
      <h2>{title}</h2>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </>
  );
};
