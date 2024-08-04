// // import { useNavigate } from "react-router-dom";
// // import { createContext, useContext, useEffect, useState } from "react";

// // import { IUser } from "@/types";
// // import { getCurrentUser } from "@/lib/appwrite/api";

// // export const INITIAL_USER = {
// //   id: "",
// //   name: "",
// //   username: "",
// //   email: "",
// //   imageUrl: "",
// //   bio: "",
// // };

// // const INITIAL_STATE = {
// //   user: INITIAL_USER,
// //   isLoading: false,
// //   isAuthenticated: false,
// //   setUser: () => {},
// //   setIsAuthenticated: () => {},
// //   checkAuthUser: async () => false as boolean,
// // };

// // type IContextType = {
// //   user: IUser;
// //   isLoading: boolean;
// //   setUser: React.Dispatch<React.SetStateAction<IUser>>;
// //   isAuthenticated: boolean;
// //   setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
// //   checkAuthUser: () => Promise<boolean>;
// // };

// // const AuthContext = createContext<IContextType>(INITIAL_STATE);

// // const AuthProvider = ({ children }: { children: React.ReactNode }) => {
// //   const navigate = useNavigate();
// //   const [user, setUser] = useState<IUser>(INITIAL_USER);
// //   const [isAuthenticated, setIsAuthenticated] = useState(false);
// //   const [isLoading, setIsLoading] = useState(false);

// //   const checkAuthUser = async () => {
// //     setIsLoading(true);
// //     try {
// //       const currentAccount = await getCurrentUser();
// //       if (currentAccount) {
// //         setUser({
// //           id: currentAccount.$id,
// //           name: currentAccount.name,
// //           username: currentAccount.username,
// //           email: currentAccount.email,
// //           imageUrl: currentAccount.imageUrl,
// //           bio: currentAccount.bio,
// //         });
// //         setIsAuthenticated(true);

// //         return true;
// //       }

// //       return false;
// //     } catch (error) {
// //       console.error(error);
// //       return false;
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     const cookieFallback = localStorage.getItem("cookieFallback");
// //     if (
// //       cookieFallback === "[]" ||
// //       cookieFallback === null ||
// //       cookieFallback === undefined
// //     ) {
// //       navigate("/sign-in");
// //     }

// //     checkAuthUser();
// //   }, []);

// //   const value = {
// //     user,
// //     setUser,
// //     isLoading,
// //     isAuthenticated,
// //     setIsAuthenticated,
// //     checkAuthUser,
// //   };

// //   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// // }

// // export const useUserContext = () => useContext(AuthContext);

// import { useNavigate } from "react-router-dom";
// import { createContext, useContext, useEffect, useState } from "react";

// import { IContextType, IUser } from "@/types";
// import { getCurrentUser } from "@/lib/appwrite/api";

// export const INITIAL_USER = {
//   id: "",
//   name: "",
//   username: "",
//   email: "",
//   imageUrl: "",
//   bio: "",
// };

// const INITIAL_STATE = {
//   user: INITIAL_USER,
//   isLoading: false,
//   isAuthenticated: false,
//   setUser: () => {},
//   setIsAuthenticated: () => {},
//   checkAuthUser: async () => false as boolean,
// };

// const AuthContext = createContext<IContextType>(INITIAL_STATE);

// const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState<IUser>(INITIAL_USER);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const checkAuthUser = async () => {
//     setIsLoading(true);
//     try {
//       const currentAccount = await getCurrentUser();
//       if (currentAccount) {
//         setUser({
//           id: currentAccount.$id,
//           name: currentAccount.name,
//           username: currentAccount.username,
//           email: currentAccount.email,
//           imageUrl: currentAccount.imageUrl,
//           bio: currentAccount.bio,
//         });
//         setIsAuthenticated(true);

//         return true;
//       }

//       return false;
//     } catch (error) {
//       console.error(error);
//       return false;
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     const cookieFallback = localStorage.getItem("cookieFallback");

//       // ||cookieFallback === null ||
//       // cookieFallback === undefined
//     if (
//       cookieFallback === "[]"
//     ) {
//       navigate("/sign-in");
//     }

//     checkAuthUser();
//   }, []);

//   const value = {
//     user,
//     setUser,
//     isLoading,
//     isAuthenticated,
//     setIsAuthenticated,
//     checkAuthUser,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export default AuthProvider;

// export const useUserContext = () => useContext(AuthContext);

// import { useNavigate } from "react-router-dom";
// import { createContext, useContext, useEffect, useState } from "react";

// import { IContextType, IUser } from "@/types";
// import { getCurrentUser } from "@/lib/appwrite/api";

// export const INITIAL_USER = {
//   id: "",
//   name: "",
//   username: "",
//   email: "",
//   imageUrl: "",
//   bio: "",
// };

// const INITIAL_STATE = {
//   user: INITIAL_USER,
//   isLoading: false,
//   isAuthenticated: false,
//   setUser: () => {},
//   setIsAuthenticated: () => {},
//   checkAuthUser: async () => false as boolean,
// };

// const AuthContext = createContext<IContextType>(INITIAL_STATE);

// const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState<IUser>(INITIAL_USER);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const checkAuthUser = async () => {
//     setIsLoading(true);
//     try {
//       const currentAccount = await getCurrentUser();
//       if (currentAccount) {
//         setUser({
//           id: currentAccount.$id,
//           name: currentAccount.name,
//           username: currentAccount.username,
//           email: currentAccount.email,
//           imageUrl: currentAccount.imageUrl,
//           bio: currentAccount.bio,
//         });
//         setIsAuthenticated(true);

//         return true;
//       }

//       return false;
//     } catch (error) {
//       console.error(error);
//       return false;
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     const cookieFallback = localStorage.getItem("cookieFallback");
//     if (
//       cookieFallback === "[]" ||
//       cookieFallback === null ||
//       cookieFallback === undefined
//     ) {
//       navigate("/sign-in");
//     } else {
//       checkAuthUser();
//     }
//   }, [navigate]);

//   const value = {
//     user,
//     setUser,
//     isLoading,
//     isAuthenticated,
//     setIsAuthenticated,
//     checkAuthUser,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export default AuthProvider;

// export const useUserContext = () => useContext(AuthContext);

import { useNavigate } from "react-router-dom";
import { createContext, useContext, useEffect, useState } from "react";

import { IContextType, IUser } from "@/types";
import { getCurrentUser } from "@/lib/appwrite/api";

export const INITIAL_USER = {
  id: "",
  name: "",
  username: "",
  email: "",
  imageUrl: "",
  bio: "",
};

const INITIAL_STATE = {
  user: INITIAL_USER,
  isLoading: true, // Initial loading state
  isAuthenticated: false,
  setUser: () => {},
  setIsAuthenticated: () => {},
  checkAuthUser: async () => false as boolean,
};

const AuthContext = createContext<IContextType>(INITIAL_STATE);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser>(INITIAL_USER);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const checkAuthUser = async () => {
    try {
      const currentAccount = await getCurrentUser();
      if (currentAccount) {
        setUser({
          id: currentAccount.$id,
          name: currentAccount.name,
          username: currentAccount.username,
          email: currentAccount.email,
          imageUrl: currentAccount.imageUrl,
          bio: currentAccount.bio,
        });
        setIsAuthenticated(true);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error fetching user:", error);
      return false;
    }
  };

  useEffect(() => {
    const cookieFallback = localStorage.getItem("cookieFallback");

    // Skip redirect if cookieFallback is empty or null but user is not navigating to sign-up page
    if (cookieFallback === "[]" || cookieFallback === null) {
      if (window.location.pathname !== "/sign-up") {
        console.log(
          "Redirecting to sign-in due to cookieFallback being empty or null"
        );
        setIsLoading(false);
        navigate("/sign-in");
      } else {
        setIsLoading(false);
      }
    } else {
      checkAuthUser().then((isLoggedIn) => {
        setIsLoading(false);
        if (!isLoggedIn && window.location.pathname !== "/sign-up") {
          console.log("User not authenticated, redirecting to sign-in");
          navigate("/sign-in");
        }
      });
    }
  }, [navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const value = {
    user,
    setUser,
    isLoading,
    isAuthenticated,
    setIsAuthenticated,
    checkAuthUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useUserContext = () => useContext(AuthContext);
