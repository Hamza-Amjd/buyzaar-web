import { getCollections } from "@/lib/actions/actions";
import Carousel from "./Carousel";

const Collections = async () => {
  const collections = await getCollections();

  return (
    <div className="w-[95%] md:w-[80%] h-fit mx-auto my-8">
        <Carousel items={collections} autoplayInterval={5000}/>
    </div>
  );
};

export default Collections;