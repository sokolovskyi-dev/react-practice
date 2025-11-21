import { useParams } from "react-router-dom";

const DogDetails = () => {
  const { dogId } = useParams();
  //   console.log(params);
  return <>DogDetails: {dogId}</>;
};

export default DogDetails;
