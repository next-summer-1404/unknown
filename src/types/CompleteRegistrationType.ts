export type CompleteRegistrationType = {
  message: string;
  user:IUser
};

export type IUser ={
    user: {
    id: string;
    role: string;
    membershipDate: null;
    email: string;
    phoneNumber: string;
    emailVerified: boolean;
    verificationCode: string;
    verificationCodeExpires: string;
    resetCode: null;
    resetCodeExpires: null;
    fullName: string;
    firstName: string;
    lastName: string;
    profilePicture: null;
    createdAt: string;
    updatedAt: string;
  };
}