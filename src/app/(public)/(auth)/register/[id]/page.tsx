import CompleteRegistration from "@/components/auth/register/CompleteRegistration";
import StartUserRegistration from "@/components/auth/register/StartUserRegistration";
import VerifyEmail from "@/components/auth/register/VerifyEmail";
import { Button } from "@heroui/react";


const RegisterAuthPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const step = (await params).id
  const stepNumber = Number(step)

  switch (stepNumber) {
    case 1:
      return <StartUserRegistration/>;
    case 2:
      return <VerifyEmail />;
    case 3:
      return <CompleteRegistration />;
    default:
      return <p>مرحله نامعتبر است.</p>;
  }
};

export default RegisterAuthPage;
