import React from "react";
import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";
import TestImage from "../../public/assets/bathroom.webp";

export function FeatureSection16() {
  return (
    <>
      <section className="lg:py-28 py-10 px-8">
        <div className="container mx-auto mb-10 text-center lg:mb-20">
          <Typography
            color="blue-gray"
            className="mb-4 !text-2xl font-bold lg:!text-4xl"
          >
            ჩვენ ვასუფთავებთ უმაღლესი სტანდარტების მიხედვით.
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto max-w-lg !text-gray-500"
          >
            საუკეთესო გზა თქვენი ბინის სისუფთავის შესანარჩუნებლად.
          </Typography>
        </div>
        <div className="mb-8 container mx-auto grid lg:gap-x-8 gap-y-8 grid-cols-1 lg:grid-cols-3">
          <Card
            className="col-span-1 bg-gray-100/50 overflow-hidden"
            shadow={false}
          >
            <CardBody className="text-center">
              <Typography
                variant="h4"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Mix and Match
              </Typography>
              <Typography className="text-center mb-0 max-w-xs mx-auto text-base font-normal leading-7 !text-gray-500">
                We get insulted by others, lose trust for those We get back.
              </Typography>
              <img
                src={TestImage}
                alt="iphone"
                className="w-full xl:h-[370px] lg:h-[360px] lg:translate-y-8 translate-y-7 object-cover object-center"
              />
            </CardBody>
          </Card>
          <Card
            className="col-span-2 bg-gray-100/50 overflow-hidden"
            shadow={false}
          >
            <CardBody className="text-center">
              <Typography
                variant="h4"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                სტანდარტული დასუფთავება 80 ლარიდან
              </Typography>

              <img
                src={TestImage}
                alt="laptop"
                className="w-full lg:h-[380px] md:h-[300px] h-[220px] lg:translate-y-16 translate-y-10 object-cover object-center"
              />
            </CardBody>
          </Card>
        </div>

        <div className="mb-8 container mx-auto grid lg:gap-x-8 gap-y-8 grid-cols-1 lg:grid-cols-3">
          <Card
            className="col-span-2 bg-gray-100/50 overflow-hidden"
            shadow={false}
          >
            <CardBody className="text-center">
              <Typography
                variant="h4"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                სტანდარტული დასუფთავება 80 ლარიდან
              </Typography>

              <img
                src={TestImage}
                alt="laptop"
                className="w-full lg:h-[380px] md:h-[300px] h-[220px] lg:translate-y-16 translate-y-10 object-cover object-center"
              />
            </CardBody>
          </Card>
          <Card
            className="col-span-1 bg-gray-100/50 overflow-hidden"
            shadow={false}
          >
            <CardBody className="text-center">
              <Typography
                variant="h4"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Mix and Match
              </Typography>
              <Typography className="text-center mb-0 max-w-xs mx-auto text-base font-normal leading-7 !text-gray-500">
                We get insulted by others, lose trust for those We get back.
              </Typography>
              <img
                src={TestImage}
                alt="iphone"
                className="w-full xl:h-[370px] lg:h-[360px] lg:translate-y-8 translate-y-7 object-cover object-center"
              />
            </CardBody>
          </Card>
        </div>
        <button className="text-center mb-0  mx-auto text-base font-normal leading-7 bg-black text-white rounded-md p-2 w-full">
          შეუკვეთე
        </button>
      </section>
    </>
  );
}
export default FeatureSection16;
