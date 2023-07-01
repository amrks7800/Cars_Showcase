"use client";
import { ShowMorePros } from "@/types";
import { useRouter } from "next/navigation";
import Button from "./Button";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext }: ShowMorePros) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = ((pageNumber + 1) * 10).toString();
    const newPathname = updateSearchParams(
      "limit",
      newLimit
    );

    router.push(newPathname);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <Button
          title="Show more"
          type="button"
          containerStyle="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};
export default ShowMore;
