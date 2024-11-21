type SectionHeadingProps = {
  content: string;
  content2: string;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({
  content,
  content2,
}) => {
  return (
    <h2 className="text-[48px] font-bold text-center">
      {content} <span className="text-accent">{content2}</span>
    </h2>
  );
};

export default SectionHeading;
