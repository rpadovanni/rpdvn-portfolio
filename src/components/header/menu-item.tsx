type TMenuItemProps = {
	children: React.ReactNode;
};

const MenuItem = ({ children }: TMenuItemProps) => {
	return <li className="my-4 flex w-full justify-center text-pretty p-2 text-xl">{children}</li>;
};

export default MenuItem;
