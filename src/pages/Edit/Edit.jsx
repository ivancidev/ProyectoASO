import Button from "../../components/Button/Button";
import HeaderLine from "../../components/SectionHeaderline/HeaderLine";

const Edit = () => {
  return (
    <section className="flex-col pt-28 px-10 h-screen text-customBlack">
      <HeaderLine text="Share print$" />
      <div className="flex flex-col items-center justify-center mt-20">
        <div className="border-2 border-black overflow-hidden w-1/2 h-1/2">
          <div className="flex bg-black text-white">
            <div className="w-1/2 p-2">Options</div>
            <div className="w-1/2 p-2">Values</div>
          </div>
          <div className="bg-white text-black">
            <div className="flex p-2 border-b border-gray-300">
              <div className="w-1/2">Comment</div>
              <div className="w-1/2"></div>
            </div>
            <div className="flex p-2 border-b border-gray-300">
              <div className="w-1/2">Path</div>
              <div className="w-1/2"></div>
            </div>
            <div className="flex p-2 border-b border-gray-300">
              <div className="w-1/2">Write list</div>
              <div className="w-1/2"></div>
            </div>
            <div className="flex p-2 border-b border-gray-300">
              <div className="w-1/2">Directory mask</div>
              <div className="w-1/2"></div>
            </div>
            <div className="flex p-2 border-b border-gray-300">
              <div className="w-1/2">Create mask</div>
              <div className="w-1/2"></div>
            </div>
            <div className="flex p-2">
              <div className="w-1/2">Force group</div>
              <div className="w-1/2"></div>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 mt-4">
          <Button text={ "Edit" } />
          <Button text={ "Add" } />
          <Button text={ "Delete" } />
        </div>
      </div>
    </section>
  );
};

export default Edit;
