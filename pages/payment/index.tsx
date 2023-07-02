import { Payment } from "@/components/templates";
import { HFLayout } from "@/layouts/index";
import { Permission } from "middleware";
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
  return (
    <Permission>
      <HFLayout>{page}</HFLayout>
    </Permission>
  );
};

export default PaymentPage;
