interface Props {
  alignment?: 'start' | 'center' | 'end';
  children?: React.ReactNode;
}

const ContentBlock = ({ alignment, children }: Props) => {
  return (
    <div className="light:border-zinc-200 flex h-full w-full items-center">
      <div className={`container flex flex-col items-${alignment || 'start'}`}>{children}</div>
    </div>
  );
};

export default ContentBlock;
