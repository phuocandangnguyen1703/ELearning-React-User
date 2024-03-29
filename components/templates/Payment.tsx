import { courseImage, payment } from "@/assets/payment";
import { ICourse } from "@/types/course";
import {
  checkPayment,
  getCoursePrice,
  getCoursesSimilar,
  makePayment,
} from "apis/payment";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, useLoading } from "../atoms";
import { Course, PaymentTimer } from "../moleculers";
import { useToast } from "@iscv/toast";
import { EPaymentStatus } from "@/types/payment";

type Props = {
  onPayment?: (...args: any) => void;
};

const Payment = (props: Props) => {
  const { query, push } = useRouter();
  const courseId = query.course_id;
  const [similarCourses, setSimilarCourses] = useState<{ _id: string }[]>([]);
  const [course, setCourse] = useState<ICourse | undefined>(undefined);
  const loading = useLoading();
  const [paymentStatus, setPaymentStatus] = useState<
    undefined | EPaymentStatus
  >(undefined);
  const toast = useToast();
  useEffect(() => {
    if (!courseId) return;

    getCoursesSimilar(courseId as string)
      .then((success) => setSimilarCourses(success.data))
      .catch((error) => console.log(error));
  }, [courseId]);
  useEffect(() => {
    if (!courseId) return;
    getCoursePrice(courseId as string)
      .then((success) => setCourse(success.data))
      .catch((error) => console.log(error));
  }, [courseId]);
  useEffect(() => {
    if (!courseId) return;
    (async () => {
      loading.open();
      checkPayment(courseId as string)
        .then((success) => setPaymentStatus(success.data.payment_status))
        .catch((error) => console.log(error));
      loading.close();
    })();
  }, [courseId]);
  const handlePayment = async () => {
    if (paymentStatus) return;
    loading.open();
    await makePayment(courseId as string)
      .then(() => {
        toast.success("Thanh toán thành công");
        push(`/course/${courseId}`);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Thanh toán thất bại");
      });
    loading.close();
  };
  return (
    <div className="px-12 py-8 w-full flex flex-col gap-10">
      <div className="flex w-full h-[80vh] gap-12">
        <div className="flex-1 aspect-square shadow-xl bg-white flex flex-col justify-between  items-center p-5 gap-4">
          <Image
            alt="payment"
            src={payment.src}
            width={500}
            height={500}
            className="rounded-2xl h-3/4 object-contain"
          ></Image>
          <div className="flex flex-col gap-2">
            <p className=" font-extralight text-gray-400 text-sm">
              <i className=" text-gray-500 text-sm font-semibold">Lưu ý:</i> Nếu
              bạn không nhận được phản hồi trong vòng 5 phút sau khi bấm “Đã
              thanh toán", vui lòng liên hệ hotline{" "}
              <a href="tel:+84877771703" className="text-blue-secondary">
                0877771703
              </a>{" "}
              để được hỗ trợ
            </p>
            <Button
              className={clsx(
                "text-white h-[40px] !rounded-lg w-full text-center flex justify-center items-center",
                { "!bg-blue-secondary": !paymentStatus },
                { "btn-disabled": paymentStatus }
              )}
              onClick={handlePayment}
            >
              <span className="text-lg font-light">Đã thanh toán</span>
            </Button>
          </div>
        </div>

        <div className="flex-1 h-fit flex">
          <div className="w-4/5 mr-auto bg-[#EBF5FF] rounded-2xl flex flex-col p-6">
            <h3 className="w-full font-normal text-xl">Đang chờ thanh toán</h3>
            <h2 className="w-full text-center  text-2xl font-semibold py-5">
              {!paymentStatus && <PaymentTimer></PaymentTimer>}
            </h2>
            <i className="text-sm text-gray-500 font-extralight border-b-[1.5px] border-gray-400 py-3">
              *Sau khi hết thời gian đếm ngược, đơn hàng của bạn sẽ hết hiệu lực
            </i>
            <div className="w-full flex items-center py-5 gap-7 border-b-[1.5px] border-gray-400">
              <Image
                alt="course"
                src={courseImage.src}
                className="w-[180px] h-[120px] rounded-[30px]"
                width={200}
                height={100}
              ></Image>
              <div className="flex flex-col gap-5 flex-1">
                <div className="py-5">
                  <h4 className="font-light">{course?.course_name}</h4>
                  <span className="text-sm font-light text-[#5B5B5B]">
                    {course?.lesson_quantity} bài học
                  </span>
                  <p className="font-normal text-xl">
                    {course?.course_fee?.toLocaleString()}đ
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full border-b-[1.5px] border-gray-400 justify-between py-5">
              <h6 className="text-gray-400">Tạm tính</h6>
              <span className="text-gray-400">
                {course?.course_fee?.toLocaleString()} đ
              </span>
            </div>
            <div className="flex w-full border-b-[1.5px] border-gray-400 justify-between py-5">
              <h6 className="text-gray-400">Khuyến mãi</h6>
              <i className="text-gray-400 font-extralight">không</i>
            </div>
            <div className="flex w-full justify-between py-5">
              <h6 className="text-black">Tổng tiền</h6>
              <span className="text-black">
                {course?.course_fee?.toLocaleString()} đ
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-full flex justify-between">
          <h3 className="text-xl font-light">Gợi ý cho bạn</h3>
          <Link
            href="/course"
            className="border-[1.5px] border-blue-secondary bg-white text-blue-secondary py-3 px-7 rounded-xl"
          >
            Xem tất cả
          </Link>
        </div>
        <div className="my-4 overflow-x-auto">
          <AnimatePresence mode="wait">
            <motion.div
              className="flex-1 h-full py-8 px-12 border-2 border-t-transparent rounded-b-lg"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex justify-between overflow-x-auto w-full gap-4 py-5">
                {similarCourses.map((item, index) => (
                  <motion.div
                    key={item._id}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.1 * index,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    <Course key={item._id} fitWidth courseId={item._id} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Payment;
