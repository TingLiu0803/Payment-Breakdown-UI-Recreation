import DetailRow from "./DetailRow";
import { DollarCircle } from "./DollarCircle";
import { InformationCircle } from "./InformationCircle";

export const RentDetails: React.FC = () => {
  return (
    <div className="w-full max-w-xl xl:mx-4 md:mx-2 mt-10 bg-gray-100 rounded-3xl shadow-sm border border-gray-250 p-6 flex flex-col items-center z-20">
      <DollarCircle className="-mt-10"/>
      <div className="flex items-center w-full text-gray-500 font-medium mt-4">
        <DetailRow label="Asked Rent" labelTwo="$ 39,000" />
        <InformationCircle className="mb-4 ml-2"/>
      </div>
      <div className="w-full bg-gray-50 rounded-xl shadow-sm border-2 border-gray-200 p-6 mt-4">
        <div className="text-gray-500 font-medium">
          <div className="text-gray-500 font-medium">
            <div className="flex justify-between mb-4">
              <div className="flex">
                <span className="md:block hidden">Your Proposed Rent</span>
                <span className="md:hidden block">Proposed Rent</span>
                <InformationCircle className="mt-1 ml-2"/>
              </div>
              <span>
                <span className="text-green-800">
                    <span className="text-green-600">
                      $
                    </span>
                    {` --`}
                </span>
              </span>
            </div>
            <DetailRow label="Utility Bill" labelTwo="$ 9,000" isInfoIcon={true} />
            <DetailRow label="Taxes" labelTwo="$ 3,000" />
            <div className="border-t border-dashed border-gray-300 w-full mt-8"></div>
            <div className="flex justify-between mt-8">
              <span className="md:block hidden">Expected monthly expense</span>
              <span className="md:hidden block">Expected expense</span>
                <span className="text-gray-800 font-bold">
                  <span className="text-gray-500 text-xl">
                    $
                  </span>
                    {` --`}
                </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
