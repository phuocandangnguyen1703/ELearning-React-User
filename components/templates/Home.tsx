import React from "react";
import { Button } from "../atoms";

const Home = () => {
	return (
		<div>
			<div className="h-[90vh] bg-[url('/banner_home.png')] bg-no-repeat bg-cover flex p-32 items-center">
				<div className="flex-1 flex pr-10">
					<div className="w-4/5 flex flex-col gap-2">
						<h1 className="uppercase text-4xl font-semibold">
							EDUPATH TIÊN PHONG LỘ TRÌNH HỌC IT
						</h1>
						<p className="text-sm text-[#4F4F4F]">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
							illo iusto asperiores voluptate sit, laboriosam corporis? Corrupti
							quos repellat totam molestiae eum reiciendis, aspernatur
							repudiandae laborum velit ipsa voluptates deserunt?
						</p>
					</div>
				</div>
				<div className="flex-1 w-full flex items-center justify-end">
					<div className="bg-white shadow-lg rounded-lg p-8 w-[400px] min-h-[230px] flex gap-2 flex-col justify-between relative">
						<span className="absolute bg-[url('/notice.png')] top-0 h-28 w-44 -translate-y-1/2 right-0 bg-no-repeat z-40" />
						<h2 className="uppercase text-[#1238CB] text-2xl font-medium">
							trở thành giảng viên
						</h2>
						<p className="text-[#1238CB] text-lg">Tại sao không?</p>

						<p className="text-sm text-[#3C4043]">
							Nếu bạn đã tự tin vào kiến thức của bản thân, đừng ngần ngại trở
							thành người hướng dẫn. Cùng chia sẻ kiến thức của bạn với những
							học viên khác nhé!
						</p>
						<Button className="!bg-blue-500 uppercase h-12 !text-base">
							đăng ký ngay
						</Button>
					</div>
				</div>
			</div>
			<div className="px-[10%] ">
				<div className="py-4">
					<div className="flex justify-between items-center">
						<h2 className="text-xl font-medium">DÀNH CHO BẠN</h2>
						<Button
							className="h-10 uppercase px-8 !border-[#0066FF] !text-[#0066FF]"
							outline
						>
							Xem tất cả
						</Button>
					</div>
				</div>
				<div className="grid grid-cols-3 grid-rows-2 gap-4 h-[90vh]">
					<div className="col-span-2 rounded-xl overflow-hidden p-6 bg-[url('/home_a.png')] bg-cover bg-no-repeat">
						<div>
							<h2 className="uppercase font-medium">lộ trình của bạn</h2>
							<p className="text-sm text-[#4F4F4F]">Tiến độ 15%</p>
						</div>
					</div>
					<div className="row-span-2 col-start-3 rounded-xl overflow-hidden p-6 bg-[url('/home_b.png')] bg-cover bg-no-repeat">
						<div>
							<h2 className="uppercase font-medium">lộ trình của bạn</h2>
							<p className="text-sm text-[#4F4F4F]">Tiến độ 15%</p>
						</div>
					</div>
					<div className="row-start-2  rounded-xl overflow-hidden p-6 bg-[url('/home_c.png')] bg-cover bg-no-repeat">
						<div>
							<h2 className="uppercase font-medium">lộ trình của bạn</h2>
							<p className="text-sm text-[#4F4F4F]">Tiến độ 15%</p>
						</div>
					</div>
					<div className="row-start-2  rounded-xl overflow-hidden p-6 bg-[url('/home_d.png')] bg-cover bg-no-repeat">
						<div>
							<h2 className="uppercase font-medium">lộ trình của bạn</h2>
							<p className="text-sm text-[#4F4F4F]">Tiến độ 15%</p>
						</div>
					</div>
				</div>
			</div>
			<div className="px-[10%] ">
				<div className="py-4">
					<div className="flex justify-between items-center">
						<h2 className="uppercase text-xl font-medium">KHóa học phổ biến</h2>
						<Button
							className="h-10 uppercase px-8 !border-[#0066FF] !text-[#0066FF]"
							outline
						>
							Xem tất cả
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
