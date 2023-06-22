import { Payment } from "@/components/templates";
import { HFLayout } from "@/layouts/index";
import React from "react";

type Props = {};

const PaymentPage = (props: Props) => {
  return (
    <div className="w-full">
      <Payment></Payment>
    </div>
  );
};

PaymentPage.getLayout = function getLayout(page: React.ReactElement) {
  return <HFLayout>{page}</HFLayout>;
};

export default PaymentPage;
