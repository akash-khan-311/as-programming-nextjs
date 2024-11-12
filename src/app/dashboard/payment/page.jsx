import PaymentDetailed from "@/components/Dashboard/Admin/PaymentDetailed";
import PaymentSummary from "@/components/Dashboard/Admin/PaymentSummary";

const PaymentPage = () => {
  return (
    <>
      <PaymentSummary />
      <PaymentDetailed />
    </>
  );
};
export default PaymentPage;
