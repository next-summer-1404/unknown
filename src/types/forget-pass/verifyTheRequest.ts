export type VerifyTheRequestFormT = {
  resetCode: string;
};

export type VerifyTheResultFormT = {
  message: string;
  userId: string;
};

export type VerifyTheRequestApiT = {
  email: string;
  resetCode: string;
};
