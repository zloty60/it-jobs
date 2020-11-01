import firebase from "../config/firebase";

const db = firebase.firestore();

export function dataFromSnapshot(snapshot) {
  if (!snapshot.exists) return undefined;
  const data = snapshot.data();

  return {
    ...data,
    id: snapshot.id,
  };
}

export function listenToJobOffersFromFirestore(category, sort,experience="all" ) {
  let jobOffersRef = db
    .collection("jobOffers")
    .orderBy(sort.sortType, sort.direction);

  if(experience === "all") {
    if (category === "all") {
      return jobOffersRef;
    } else {
      return jobOffersRef.where("category", "==", category);
    }
  } else {
    if (category === "all") {
      return jobOffersRef.where("experienceLevel", "==", experience);
    } else {
      return jobOffersRef.where("category", "==", category).where("experienceLevel", "==", experience );
    }
  }
}


export function listenToJobOfferFromFirestore(jobOfferId) {
  return db.collection("jobOffers").doc(jobOfferId);
}

export function updateJobOfferInFirestore(jobOffer) {
  return db.collection("jobOffers").doc(jobOffer.id).update(jobOffer);
}

export function addJobOfferToFirestore(jobOffer) {
  const user = firebase.auth().currentUser;
  return db.collection("jobOffers").add({
    ...jobOffer,
    createdBy: user.uid,
  });
}

export function deleteEventInFirestore(jobOfferId) {
  return db.collection("jobOffers").doc(jobOfferId).delete();
}

export function setUserProfileData(user) {
  return db.collection("users").doc(user.uid).set({
    displayName: user.displayName,
    email: user.email,
  });
}

export async function updateUserProfile(profile) {
  const user = firebase.auth().currentUser;

  try {
    if (user.displayName !== profile.displayName) {
      await user.updateProfile({
        displayName: profile.displayName,
      });
    }
    return await db.collection("users").doc(user.uid).update(profile);
  } catch (error) {
    throw error;
  }
}

export function getUserProfileFromFirestore(userId) {
  return db.collection("users").doc(userId);
}

export function listenToCreatedByUserJobOffersFromFirestore() {
  const user = firebase.auth().currentUser;
  let jobOffersRef = db.collection("jobOffers").orderBy("date");
  return jobOffersRef.where("createdBy", "==", user.uid);
}