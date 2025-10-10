import ResetPassword from '@/components/auth/forgetpass/ResetPassword';
import SendRequest from '@/components/auth/forgetpass/SendRequest';
import VerifyTheRequest from '@/components/auth/forgetpass/VerifyTheRequest';

const ForgetPassPage= async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const step = (await params).id
  const stepNumber = Number(step)

  switch (stepNumber) {
    case 1:
      return <SendRequest  />;
    case 2:
      return <VerifyTheRequest   />;
    case 3:
      return <ResetPassword   />;
    default:
      return <p>مرحله نامعتبر است.</p>;
  }
}
export default ForgetPassPage
