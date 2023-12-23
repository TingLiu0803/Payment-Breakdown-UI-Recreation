import { InformationCircle } from "./InformationCircle";

type DetailRowProps = {
    label: React.ReactNode;
    labelTwo: React.ReactNode;
    isInfoIcon?: boolean;
  };
  
  export const DetailRow: React.FC<DetailRowProps> = ({ label, labelTwo, isInfoIcon=false }) => {
    return (
      <div className="flex justify-between mb-4">
        <div className="flex">
          <span>{label}</span>
          {isInfoIcon ? <InformationCircle className="mt-1 ml-2"/> : <></>}
        </div>
        <span>{labelTwo}</span>
      </div>
    );
  };
  
  export default DetailRow;
  