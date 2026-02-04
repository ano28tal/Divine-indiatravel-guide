interface TabInfoBoxProps {
  title: string;
  description: string;
  bgClass: string;
  titleClass: string;
  descClass: string;
}

export const TabInfoBox = ({
  title,
  description,
  bgClass,
  titleClass,
  descClass,
}: TabInfoBoxProps) => {
  return (
    <div className={`${bgClass} rounded-xl p-6 mb-8`}>
      <h3 className={`text-lg font-bold ${titleClass} mb-2`}>{title}</h3>
      <p className={`${descClass} text-sm`}>{description}</p>
    </div>
  );
};
