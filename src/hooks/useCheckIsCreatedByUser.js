import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"


export default function useCheckIsCreatedByUser() {
  const {id} = useParams(); 
  const { currentUser } = useSelector((state) => state.auth);
  const jobOffer = useSelector((state) =>
    state.jobOffers.jobOffers.find((el) => el.id === id)
  );

  const isJobOfferCreatedByUser =
    currentUser && jobOffer ? jobOffer.createdBy === currentUser.uid : false;

  return isJobOfferCreatedByUser;
}
