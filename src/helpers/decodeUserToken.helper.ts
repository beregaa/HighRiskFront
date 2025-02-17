// 'use client'

// import Authorisation from "@/components/Authorisation/Authorisation";
// import ProfileIcon from "@/components/ProfileIcon/Profielcon";
// import { UserProfileInterface } from "@/interfaces/userProfile.interface";
// import { jwtDecode } from "jwt-decode";


// const DecodeUserToken: React.FC = () => {
//   console.log("stage 1", typeof window);

//   if (typeof window === "undefined") {
//     return null; // Don't run the logic if not in the browser
//   }

//   let token = localStorage.getItem("user");

//   console.log(token, " stage 2 ?");

//   if (token && token !== '') {
//     try {
//       const decodedToken = jwtDecode<UserProfileInterface>(token);

//       if (decodedToken) {
//         return <ProfileIcon />; 
//       }
//     } catch (error) {
//       console.error("Error decoding token", error);
//     }
//   }

//   return <Authorisation />; 
// };

// export default DecodeUserToken;
